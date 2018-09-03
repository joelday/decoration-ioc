"use strict";

import { createDecorator, IInstantiationService, optional, ServicesAccessor } from "./instantiation";
import { Descriptor } from "./descriptors";
import { InstantiationService } from "./instantiationService";
import { registerSingleton, getServices } from "./extensions";
import { ServiceCollection } from "./serviceCollection";

export {
    createDecorator,
    Descriptor,
    getServices,
    IInstantiationService,
    InstantiationService,
    optional,
    registerSingleton,
    ServiceCollection,
    ServicesAccessor,
};