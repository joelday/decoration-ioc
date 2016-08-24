'use strict';

import * as instantiationService from './instantiationService';

import {Descriptor} from './descriptors';
import {createDecorator, IInstantiationService} from './instantiation';
import {ServiceCollection} from './serviceCollection';

export const InstantiationService: {
    new (services?: ServiceCollection, strict?: boolean): IInstantiationService;
} = instantiationService.InstantiationService;

export {
    Descriptor,
    createDecorator,
    IInstantiationService,
    ServiceCollection
}