/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
"use strict";

import { ServiceCollection } from "./serviceCollection";
import * as descriptors from "./descriptors";
import { isUndefined, isObject } from "./base/types";

// ------ internal util

export namespace _util {
    export const DI_TARGET = "$di$target";
    export const DI_CONSTRUCTOR_DEPENDENCIES = "$di$constructorDependencies";
    export const DI_PROPERTY_DEPENDENCIES = "$di$propertyDependencies";

    export function getConstructorServiceDependencies(ctor: any): { id: ServiceIdentifier<any>, index: number, optional: boolean }[] {
        return ctor[DI_CONSTRUCTOR_DEPENDENCIES] || [];
    }

    export function getPropertyServiceDependencies(ctor: any): { id: ServiceIdentifier<any>, key: string, optional: boolean }[] {
        return ctor[DI_PROPERTY_DEPENDENCIES] || [];
    }
}

// --- interfaces ------

export interface IService {
    _serviceBrand: any;
}

export interface IConstructorSignature0<T> {
    new (...services: IService[]): T;
}

export interface IConstructorSignature1<A1, T> {
    new (first: A1, ...services: IService[]): T;
}

export interface IConstructorSignature2<A1, A2, T> {
    new (first: A1, second: A2, ...services: IService[]): T;
}

export interface IConstructorSignature3<A1, A2, A3, T> {
    new (first: A1, second: A2, third: A3, ...services: IService[]): T;
}

export interface IConstructorSignature4<A1, A2, A3, A4, T> {
    new (first: A1, second: A2, third: A3, forth: A4, ...services: IService[]): T;
}

export interface IConstructorSignature5<A1, A2, A3, A4, A5, T> {
    new (first: A1, second: A2, third: A3, forth: A4, fifth: A5, ...services: IService[]): T;
}

export interface IConstructorSignature6<A1, A2, A3, A4, A5, A6, T> {
    new (first: A1, second: A2, third: A3, forth: A4, fifth: A5, sixth: A6, ...services: IService[]): T;
}

export interface IConstructorSignature7<A1, A2, A3, A4, A5, A6, A7, T> {
    new (first: A1, second: A2, third: A3, forth: A4, fifth: A5, sixth: A6, seventh: A7, ...services: IService[]): T;
}

export interface IConstructorSignature8<A1, A2, A3, A4, A5, A6, A7, A8, T> {
    new (first: A1, second: A2, third: A3, forth: A4, fifth: A5, sixth: A6, seventh: A7, eigth: A8, ...services: IService[]): T;
}

export interface ServicesAccessor {
    get<T extends IService>(id: ServiceIdentifier<T>, isOptional?: typeof optional): T;
}

export interface IFunctionSignature0<R> {
    (accessor: ServicesAccessor): R;
}

export interface IFunctionSignature1<A1, R> {
    (accessor: ServicesAccessor, first: A1): R;
}

export interface IFunctionSignature2<A1, A2, R> {
    (accessor: ServicesAccessor, first: A1, second: A2): R;
}

export interface IFunctionSignature3<A1, A2, A3, R> {
    (accessor: ServicesAccessor, first: A1, second: A2, third: A3): R;
}

export interface IFunctionSignature4<A1, A2, A3, A4, R> {
    (accessor: ServicesAccessor, first: A1, second: A2, third: A3, forth: A4): R;
}

export interface IFunctionSignature5<A1, A2, A3, A4, A5, R> {
    (accessor: ServicesAccessor, first: A1, second: A2, third: A3, forth: A4, fifth: A5): R;
}

export interface IFunctionSignature6<A1, A2, A3, A4, A5, A6, R> {
    (accessor: ServicesAccessor, first: A1, second: A2, third: A3, forth: A4, fifth: A5, sixth: A6): R;
}

export interface IFunctionSignature7<A1, A2, A3, A4, A5, A6, A7, R> {
    (accessor: ServicesAccessor, first: A1, second: A2, third: A3, forth: A4, fifth: A5, sixth: A6, seventh: A7): R;
}

export interface IFunctionSignature8<A1, A2, A3, A4, A5, A6, A7, A8, R> {
    (accessor: ServicesAccessor, first: A1, second: A2, third: A3, forth: A4, fifth: A5, sixth: A6, seventh: A7, eigth: A8): R;
}

export const IInstantiationService = createDecorator<IInstantiationService>("instantiationService");

export interface IInstantiationService {

    _serviceBrand: any;

    /**
     * Synchronously creates an instance that is denoted by
     * the descriptor
     */
    createInstance<T>(descriptor: descriptors.Descriptor0<T>): T;
    createInstance<A1, T>(descriptor: descriptors.Descriptor1<A1, T>, a1: A1): T;
    createInstance<A1, A2, T>(descriptor: descriptors.Descriptor2<A1, A2, T>, a1: A1, a2: A2): T;
    createInstance<A1, A2, A3, T>(descriptor: descriptors.Descriptor3<A1, A2, A3, T>, a1: A1, a2: A2, a3: A3): T;
    createInstance<A1, A2, A3, A4, T>(descriptor: descriptors.Descriptor4<A1, A2, A3, A4, T>, a1: A1, a2: A2, a3: A3, a4: A4): T;
    createInstance<A1, A2, A3, A4, A5, T>(descriptor: descriptors.Descriptor5<A1, A2, A3, A4, A5, T>, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5): T;
    createInstance<A1, A2, A3, A4, A5, A6, T>(descriptor: descriptors.Descriptor6<A1, A2, A3, A4, A5, A6, T>, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6): T;
    createInstance<A1, A2, A3, A4, A5, A6, A7, T>(descriptor: descriptors.Descriptor7<A1, A2, A3, A4, A5, A6, A7, T>, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7): T;
    createInstance<A1, A2, A3, A4, A5, A6, A7, A8, T>(descriptor: descriptors.Descriptor8<A1, A2, A3, A4, A5, A6, A7, A8, T>, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7, a8: A8): T;

    createInstance<T>(ctor: IConstructorSignature0<T>): T;
    createInstance<A1, T>(ctor: IConstructorSignature1<A1, T>, first: A1): T;
    createInstance<A1, A2, T>(ctor: IConstructorSignature2<A1, A2, T>, first: A1, second: A2): T;
    createInstance<A1, A2, A3, T>(ctor: IConstructorSignature3<A1, A2, A3, T>, first: A1, second: A2, third: A3): T;
    createInstance<A1, A2, A3, A4, T>(ctor: IConstructorSignature4<A1, A2, A3, A4, T>, first: A1, second: A2, third: A3, fourth: A4): T;
    createInstance<A1, A2, A3, A4, A5, T>(ctor: IConstructorSignature5<A1, A2, A3, A4, A5, T>, first: A1, second: A2, third: A3, fourth: A4, fifth: A5): T;
    createInstance<A1, A2, A3, A4, A5, A6, T>(ctor: IConstructorSignature6<A1, A2, A3, A4, A5, A6, T>, first: A1, second: A2, third: A3, fourth: A4, fifth: A5, sixth: A6): T;
    createInstance<A1, A2, A3, A4, A5, A6, A7, T>(ctor: IConstructorSignature7<A1, A2, A3, A4, A5, A6, A7, T>, first: A1, second: A2, third: A3, fourth: A4, fifth: A5, sixth: A6, seventh: A7): T;
    createInstance<A1, A2, A3, A4, A5, A6, A7, A8, T>(ctor: IConstructorSignature8<A1, A2, A3, A4, A5, A6, A7, A8, T>, first: A1, second: A2, third: A3, fourth: A4, fifth: A5, sixth: A6, seventh: A7, eigth: A8): T;

    /**
     *
     */
    invokeFunction<R>(ctor: IFunctionSignature0<R>): R;
    invokeFunction<A1, R>(ctor: IFunctionSignature1<A1, R>, first: A1): R;
    invokeFunction<A1, A2, R>(ctor: IFunctionSignature2<A1, A2, R>, first: A1, second: A2): R;
    invokeFunction<A1, A2, A3, R>(ctor: IFunctionSignature3<A1, A2, A3, R>, first: A1, second: A2, third: A3): R;
    invokeFunction<A1, A2, A3, A4, R>(ctor: IFunctionSignature4<A1, A2, A3, A4, R>, first: A1, second: A2, third: A3, fourth: A4): R;
    invokeFunction<A1, A2, A3, A4, A5, R>(ctor: IFunctionSignature5<A1, A2, A3, A4, A5, R>, first: A1, second: A2, third: A3, fourth: A4, fifth: A5): R;
    invokeFunction<A1, A2, A3, A4, A5, A6, R>(ctor: IFunctionSignature6<A1, A2, A3, A4, A5, A6, R>, first: A1, second: A2, third: A3, fourth: A4, fifth: A5, sixth: A6): R;
    invokeFunction<A1, A2, A3, A4, A5, A6, A7, R>(ctor: IFunctionSignature7<A1, A2, A3, A4, A5, A6, A7, R>, first: A1, second: A2, third: A3, fourth: A4, fifth: A5, sixth: A6, seventh: A7): R;
    invokeFunction<A1, A2, A3, A4, A5, A6, A7, A8, R>(ctor: IFunctionSignature8<A1, A2, A3, A4, A5, A6, A7, A8, R>, first: A1, second: A2, third: A3, fourth: A4, fifth: A5, sixth: A6, seventh: A7, eigth: A8): R;

    /**
     * Creates a child of this service which inherts all current services
     * and adds/overwrites the given services
     */
    createChild(services: ServiceCollection): IInstantiationService;
}

/**
 * Identifies a service of type T
 */
export interface ServiceIdentifier<T extends IService> {
    (...args: any[]): void;
    type: T;
}

function ensureDependencyMetadata(target: Function) {
    if (target[_util.DI_TARGET] !== target) {
        target[_util.DI_TARGET] = target;
        target[_util.DI_CONSTRUCTOR_DEPENDENCIES] = [];
        target[_util.DI_PROPERTY_DEPENDENCIES] = [];
    }
}

function storePropertyDependency(id: Function, target: Function, key: string, optional: boolean): void {
    ensureDependencyMetadata(target);
    target[_util.DI_PROPERTY_DEPENDENCIES].push({ id, key, optional });
}

function storeConstructorDependency(id: Function, target: Function, index: number, optional: boolean): void {
    ensureDependencyMetadata(target);
    target[_util.DI_CONSTRUCTOR_DEPENDENCIES].push({ id, index, optional });
}

/**
 * A *only* valid way to create a {{ServiceIdentifier}}.
 */
export function createDecorator<T extends IService>(serviceId: string): { (...args: any[]): void; type: T; } {
    let id = function(target: Function, key: string, indexOrPropDescriptor: number & PropertyDescriptor): any {
        if (arguments.length !== 3) {
            throw new Error("@IServiceName-decorator can only be used to decorate a parameter or property");
        }

        if (isUndefined(indexOrPropDescriptor) || isObject(indexOrPropDescriptor)) {
            storePropertyDependency(id, target.constructor, key, false);
        }
        else {
            storeConstructorDependency(id, target, indexOrPropDescriptor, false);
        }
    };

    id.toString = () => serviceId;

    return <any>id;
}

/**
 * Mark a service dependency as optional.
 */
export function optional<T extends IService>(serviceIdentifier: ServiceIdentifier<T>): ParameterDecorator & PropertyDecorator {
    return <any>function (target: Function, key: string, indexOrPropDescriptor: number & PropertyDescriptor) {
        if (arguments.length !== 3) {
            throw new Error("@optional-decorator can only be used to decorate a parameter or property");
        }

        if (isUndefined(indexOrPropDescriptor) || isObject(indexOrPropDescriptor)) {
            storePropertyDependency(serviceIdentifier, target.constructor, key, true);
        }
        else {
            storeConstructorDependency(serviceIdentifier, target, indexOrPropDescriptor, true);
        }
    };
}
