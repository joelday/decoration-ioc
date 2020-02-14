/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Descriptor } from './descriptors';
import { ServiceIdentifier, BrandedService } from './instantiation';

const _registry: [ServiceIdentifier<any>, Descriptor<any>][] = [];

export function registerSingleton<T, Services extends BrandedService[]>(id: ServiceIdentifier<T>, ctor: new (...services: Services) => T, supportsDelayedInstantiation?: boolean): void {
	_registry.push([id, new Descriptor<T>(ctor as new (...args: any[]) => T, [], supportsDelayedInstantiation)]);
}

export function getSingletonServiceDescriptors(): [ServiceIdentifier<any>, Descriptor<any>][] {
	return _registry;
}
