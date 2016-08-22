# Visual Studio Code instantiation system
Extracted from [Microsoft/vscode](https://github.com/Microsoft/vscode), vscode-instantiation is a TypeScript IoC (inversion of control) framework that offers both service location and constructor injection with automatic dependency resolution.

# Quickstart
The "experimentalDecorators" TypeScript compiler option must be set to true.

## Define a service interface

```
import {createDecorator} from 'vscode-instantiation';

// Define the service
export interface IMyService {
    _serviceBrand: any; // This is required

    sayHello(): string;
}

// Create a decorator used to reference the interface type
export const IMyService = createDecorator<IMyService>('myService');
```

## Create a concrete implementation
```
export class MyService implements IMyService {
    public _serviceBrand: any;

    sayHello() {
        return 'Hello!';
    }
}
```

## Register a concrete type for the service
```
// Create a service collection where concrete implementation types are registered
const serviceCollection = new ServiceCollection();

// Declare that the MyService class is the type that is instantiated when an IMyService is needed
serviceCollection.set(IMyService, new Descriptor(MyService));
```

## Using the instantiation service
```
// Create an instantiation service that performs constructor injection
// It uses the service collection to resolve dependencies
const instantiationService: IInstantiationService = new InstantiationService(serviceCollection);

// This is a class that needs an instance of IMyService
export class MyDepdendentClass {
    private _myService: IMyService;

    constructor(@IMyService myService: IMyService) {
        this._myService = myService;
    }

    makeMyServiceSayHello() {
        console.log(this._myService.sayHello());
    }
}

// Create an instance of MyDependentClass that is given a new or existing IMyService implementation.
const myDependentClass = instantiationService.createInstance(MyDepdendentClass);
myDependentClass.makeMyServiceSayHello();

```