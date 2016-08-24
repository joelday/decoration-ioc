'use strict';

import * as extensions from './extensions';
import * as instantiation from './instantiation';
import * as instantiationService from './instantiationService';
import * as serviceCollection from './serviceCollection';

import {Descriptor} from './descriptors';
import {createDecorator, IInstantiationService} from './instantiation';
import {ServiceCollection} from './serviceCollection';

export const InstantiationService: {
    new (services?: ServiceCollection, strict?: boolean): IInstantiationService;
} = instantiationService.InstantiationService;

export {
    instantiation,
    Descriptor,
    createDecorator,
    IInstantiationService,
    ServiceCollection
}