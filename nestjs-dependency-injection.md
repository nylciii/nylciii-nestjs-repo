
📌 Dependency Injection in NestJS



1. Dependency injection improves maintainability by separating the creation of a class’s dependencies from the class itself. Instead of a class being responsible for creating the objects it needs, the framework provides them. This makes it easier to change or replace dependencies later, to add new functionality, or to test components in isolation, because classes don’t rely on specific implementations.

2. The @Injectable() decorator marks a class as a provider that can be injected into other classes. It tells NestJS that this class can be created and managed by the dependency injection system, so other classes can receive it automatically without having to instantiate it manually.

3. Providers in NestJS can have different scopes that control how long an instance lives. By default, providers are singletons, meaning the same instance is shared throughout the application. Request-scoped providers create a new instance for each incoming request, which is useful for handling request-specific data. Transient providers create a new instance every time they are injected, which can be helpful when the service has temporary or independent state.

4. NestJS automatically resolves dependencies by reading the constructor of each class and using metadata from decorators like @Injectable(). When the application starts, NestJS builds a dependency graph and provides the required instances wherever they are needed, without requiring manual instantiation or wiring. This ensures that components get the correct dependencies automatically.