"use strict";

import * as instantiationService from "./instantiationService";

import { Descriptor } from "./descriptors";
import { createDecorator, IInstantiationService, optional, ServicesAccessor } from "./instantiation";
import { ServiceCollection } from "./serviceCollection";
import { registerSingleton, getServices } from "./extensions";

export const InstantiationService: {
    new (services?: ServiceCollection, strict?: boolean): IInstantiationService;
} = instantiationService.InstantiationService;

export {
    createDecorator,
    Descriptor,
    IInstantiationService,
    optional,
    ServiceCollection,
    ServicesAccessor,
    registerSingleton,
    getServices
}