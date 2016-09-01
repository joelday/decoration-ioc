/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
"use strict";

import { create } from "./base/types";
import { Graph } from "./base/graph";
import { Descriptor } from "./descriptors";
import { ServiceIdentifier, IInstantiationService, ServicesAccessor, _util, optional, IService } from "./instantiation";
import { ServiceCollection } from "./serviceCollection";

declare const require: any;

export class InstantiationService implements IInstantiationService {

    _serviceBrand: any;

    private _services: ServiceCollection;
    private _strict: boolean;

    constructor(services: ServiceCollection = new ServiceCollection(), strict: boolean = false) {
        this._services = services;
        this._strict = strict;

        this._services.set(IInstantiationService, this);
    }

    createChild(services: ServiceCollection): IInstantiationService {
        this._services.forEach((id, thing) => {
            if (services.has(id)) {
                return;
            }
            // If we copy descriptors we might end up with
            // multiple instances of the same service
            if (thing instanceof Descriptor) {
                thing = this._createAndCacheServiceInstance(id, thing);
            }
            services.set(id, thing);
        });
        return new InstantiationService(services, this._strict);
    }

    invokeFunction<R>(signature: (accessor: ServicesAccessor, ...more: any[]) => R, ...args: any[]): R {
        let accessor: ServicesAccessor;
        try {
            accessor = {
                get: <T extends IService>(id: ServiceIdentifier<T>, isOptional?: typeof optional) => {
                    const result = this._getOrCreateServiceInstance(id);
                    if (!result && isOptional !== optional) {
                        throw new Error(`[invokeFunction] unkown service "${id}"`);
                    }
                    return result;
                }
            };
            return signature.apply(undefined, [accessor].concat(args));
        } finally {
            accessor.get = function () {
                throw new Error("service accessor is only valid during the invocation of its target method");
            };
        }
    }

    createInstance<T>(param: any, ...rest:any[]): any {
        if (param instanceof Descriptor) {
            // sync
            return this._createInstance(param, rest);

        } else {
            // sync, just ctor
            return this._createInstance(new Descriptor(param), rest);
        }
    }

    private _verifyDependency(desc: Descriptor<any>, service: any, dependency: { id: ServiceIdentifier<any>, optional: boolean; }) {
        if (!service && this._strict && !dependency.optional) {
            throw new Error(`[createInstance] ${desc.ctor.name} depends on UNKNOWN service ${dependency.id}.`);
        }
    }

    private _createInstance<T extends IService>(desc: Descriptor<T>, args: any[]): T {

        // arguments given by createInstance-call and/or the descriptor
        let staticArgs = desc.staticArguments().concat(args);

        // arguments defined by service decorators
        let serviceCtorDependencies = _util.getConstructorServiceDependencies(desc.ctor).sort((a, b) => a.index - b.index);
        let serviceCtorArgs = serviceCtorDependencies.map(dependency => {
            let service = this._getOrCreateServiceInstance(dependency.id);
            this._verifyDependency(desc, service, dependency);
            return service;
        });

        let firstServiceArgPos = serviceCtorDependencies.length > 0 ? serviceCtorDependencies[0].index : staticArgs.length;

        // check for argument mismatches, adjust static args if needed
        if (staticArgs.length !== firstServiceArgPos) {
            console.warn(`[createInstance] First service dependency of ${desc.ctor.name} at position ${
                firstServiceArgPos + 1} conflicts with ${staticArgs.length} static arguments`);

            let delta = firstServiceArgPos - staticArgs.length;

            if (delta > 0) {
                staticArgs = staticArgs.concat(new Array(delta));
            } else {
                staticArgs = staticArgs.slice(0, firstServiceArgPos);
            }
        }

        // now create the instance
        const argArray = [desc.ctor];
        argArray.push(...staticArgs);
        argArray.push(...serviceCtorArgs);

        const instance = create.apply(null, argArray);
        desc._validate(instance);

        const servicePropertyDependencies = _util.getPropertyServiceDependencies(desc.ctor);
        for (const dependency of servicePropertyDependencies) {
            let service = this._getOrCreateServiceInstance(dependency.id);
            this._verifyDependency(desc, service, dependency);

            instance[dependency.key] = service;
        }

        return <T>instance;
    }

    private _getOrCreateServiceInstance<T extends IService>(id: ServiceIdentifier<T>): T {
        let thing = this._services.get(id);
        if (thing instanceof Descriptor) {
            return <T>this._createAndCacheServiceInstance(id, thing);
        } else {
            return <T>thing;
        }
    }

    private _createAndCacheServiceInstance<T extends IService>(id: ServiceIdentifier<T>, desc: Descriptor<T>): T {
        if (!(this._services.get(id) instanceof Descriptor)) {
            throw new Error("service is not a SyncDescriptor");
        }

        const graph = new Graph<{ id: ServiceIdentifier<any>, desc: Descriptor<any> }>(data => data.id.toString());

        function throwCycleError() {
            const err = new Error("[createInstance] cyclic dependency between services");
            err.message = graph.toString();
            throw err;
        }

        let count = 0;
        const stack = [{ id, desc }];
        while (stack.length) {
            const item = stack.pop();
            graph.lookupOrInsertNode(item);

            // TODO@joh use the graph to find a cycle
            // a weak heuristic for cycle checks
            if (count++ > 100) {
                throwCycleError();
            }

            // check all dependencies for existence and if the need to be created first
            let dependencies = _util.getConstructorServiceDependencies(item.desc.ctor);
            for (let dependency of dependencies) {

                let instanceOrDesc = this._services.get(dependency.id);
                if (!instanceOrDesc) {
                    console.warn(`[createInstance] ${id} depends on ${dependency.id} which is NOT registered.`);
                }

                if (instanceOrDesc instanceof Descriptor) {
                    const d = { id: dependency.id, desc: instanceOrDesc };
                    graph.insertEdge(item, d);
                    stack.push(d);
                }
            }
        }

        while (true) {
            let roots = graph.roots();

            // if there is no more roots but still
            // nodes in the graph we have a cycle
            if (roots.length === 0) {
                if (graph.length !== 0) {
                    throwCycleError();
                }
                break;
            }

            for (let root of roots) {
                // create instance and overwrite the service collections
                const instance = this._createInstance(root.data.desc, []);
                this._services.set(root.data.id, instance);
                graph.removeNode(root.data);
            }
        }

        return <T> this._services.get(id);
    }
}
