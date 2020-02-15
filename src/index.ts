"use strict";

export * from './instantiationService';
export * from './descriptors';
export * from './instantiation';
export * from './serviceCollection';
export * from './extensions';

import { InstantiationService as InstantiationServiceCtor } from './instantiationService';
import { IInstantiationService } from './instantiation';
import { ServiceCollection } from './serviceCollection';

export const InstantiationService = InstantiationServiceCtor as { new(services?: ServiceCollection, strict?: boolean): IInstantiationService; };