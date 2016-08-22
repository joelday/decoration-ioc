'use strict';

export * from './descriptors';
export * from './extensions';
export * from './instantiation';
export * from './instantiationService';
export * from './serviceCollection';

import {Descriptor} from "./descriptors";
import {createDecorator, IInstantiationService} from './instantiation';
import {InstantiationService} from './instantiationService';
import {ServiceCollection} from './serviceCollection';