[![Build Status](https://travis-ci.org/joelday/decoration-ioc.svg?branch=master)](https://travis-ci.org/joelday/decoration-ioc)
[![npm version](https://badge.fury.io/js/decoration-ioc.svg)](https://badge.fury.io/js/decoration-ioc)

# Visual Studio Code's "instantiation" system
decoration-ioc is a *very simple* inversion of control and dependency injection framework. [Taken directly from Visual Studio Code](https://github.com/microsoft/vscode/tree/master/src/vs/platform/instantiation/common), decoration-ioc provides robust service location and constructor injection with automatic dependency resolution.

# Quickstart
First, make sure that the `experimentalDecorators` TypeScript compiler option is set to `true`.

## Define a service interface

```typescript
// Define the service.
export interface IMyService {
    _serviceBrand: undefined;

    sayHello(): string;
}

// Create a decorator used to reference the interface type.
export const IMyService = createDecorator<IMyService>('myService');
```
Note that the decorator has the same name as the interface. You'll only need to import `IMyService`!

## Create a concrete implementation
```typescript
export class MyService implements IMyService {
    _serviceBrand: undefined;

    sayHello() {
        return 'Hello!';
    }
}
```

## Register the concrete type for the service
```typescript
// Create a service collection where concrete implementation types are registered.
const serviceCollection = new ServiceCollection();

// Declare that the MyService class is the type that is instantiated when an IMyService is needed.
serviceCollection.set(IMyService, new Descriptor(MyService));
```

## Creating instances
```typescript
// Create an instantiation service that performs constructor injection.
// It uses the service collection to resolve dependencies and create instances.
const instantiationService = new InstantiationService(serviceCollection);

// This is a class that requires an instance of IMyService when created.
export class MyDependentClass {
    private _myService: IMyService;

    // The myService parameter is annotated with the IMyService decorator.
    constructor(@IMyService myService: IMyService) {
        this._myService = myService;
    }

    makeMyServiceSayHello() {
        console.log(this._myService.sayHello());
    }
}

// Create an instance of myDependentClass.
const myDependentClass = instantiationService.createInstance(MyDependentClass);
myDependentClass.makeMyServiceSayHello();
```