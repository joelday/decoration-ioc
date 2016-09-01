/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
"use strict";

import { Descriptor } from "./descriptors";
import { ServiceIdentifier, IConstructorSignature0, IService } from "./instantiation";

export const Services = "di.services";

export interface IServiceContribution<T extends IService> {
    id: ServiceIdentifier<T>;
    descriptor: Descriptor<T>;
}

const _registry: IServiceContribution<any>[] = [];

export function registerSingleton<T extends IService>(id: ServiceIdentifier<T>, ctor: IConstructorSignature0<T>): void {
    _registry.push({ id, descriptor: new Descriptor<T>(ctor) });
}

export function getServices(): IServiceContribution<any>[] {
    return _registry;
}