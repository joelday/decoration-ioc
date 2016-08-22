# The instantiation system used in Visual Studio Code
vscode-instantiation is a TypeScript IoC framework that provides service location and constructor injection with automatic dependency resolution.

This package is based on source from [Microsoft/vscode](https://github.com/Microsoft/vscode) with minor modifications.

# Quickstart
The "experimentalDecorators" compiler option must be set to true.

## Define a service interface

```typescript
// Define the service
export interface IMyService {
    _serviceBrand: any; // This field is required

    sayHello(): string;
}

// Create a decorator used to reference the interface type
// Note that the decorator actually has the same name as the interface
export const IMyService = createDecorator<IMyService>('myService');
```

## Create a concrete implementation
```typescript
export class MyService implements IMyService {
    public _serviceBrand: any;

    sayHello() {
        return 'Hello!';
    }
}
```

## Register a concrete type for the service
```typescript
// Create a service collection where concrete implementation types are registered
const serviceCollection = new ServiceCollection();

// Declare that the MyService class is the type that is instantiated when an IMyService is needed
serviceCollection.set(IMyService, new Descriptor(MyService));
```

## Creating instances
```typescript
// Create an instantiation service that performs constructor injection
// It uses the service collection to resolve dependencies and create instances
const instantiationService: IInstantiationService = new InstantiationService(serviceCollection);

// This is a class that requires an instance of IMyService when created
export class MyDepdendentClass {
    private _myService: IMyService;

    // The myService parameter is annotated with the IMyService decorator
    constructor(@IMyService myService: IMyService) {
        this._myService = myService;
    }

    makeMyServiceSayHello() {
        console.log(this._myService.sayHello());
    }
}

// Create an instance of myDependentClass
const myDependentClass = instantiationService.createInstance(MyDepdendentClass);
myDependentClass.makeMyServiceSayHello();
```

## Notes
- vscode-instantiation does not currently support asynchronous instantiation.