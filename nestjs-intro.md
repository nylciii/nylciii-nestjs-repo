📌  NestJS Framework Overview
What are the key differences between NestJS and Express.js?
TypeScript Support:
NestJS is built with TypeScript by default, offering strong typing, decorators, and interfaces right out of the box.
Express.js, on the other hand, is written in JavaScript and only provides optional TypeScript support if you manually configure it.

Architecture:
NestJS follows an opinionated, modular, and structured architecture inspired by the MVC pattern.
Express.js is minimal and unopinionated, meaning the developer decides how to organize routes, controllers, and logic.

Scalability:
NestJS is highly scalable due to its modular system and built-in dependency injection.
Express.js can become more difficult to maintain as an application grows larger because it lacks a formal structure.

Extensibility:
NestJS is built on top of Express (or optionally Fastify), which means it supports a wide range of powerful features like middlewares, guards, pipes, and interceptors.
Express.js mainly relies on middleware for extending functionality.

Learning Curve:
NestJS has a slightly higher learning curve because it introduces decorators, modules, and dependency injection concepts.
Express.js is easier to start with, but its simplicity can lead to messy or inconsistent structures in large projects.

NestJS provides a well-organized architecture that helps maintain large projects, while Express.js offers simplicity and flexibility but lacks built-in structure.

Why does NestJS use decorators extensively?

Decorators in NestJS are metadata annotations that describe how classes and methods should behave within the framework.
They make the code more readable, declarative, and structured.

Common decorators include:

@Controller() — defines a controller class to handle routes

@Get(), @Post() — define HTTP endpoints

@Injectable() — marks a class as a service that can be injected

@Module() — defines a logical module that groups controllers and services

By using decorators, NestJS automatically handles routing, dependency injection, and module registration behind the scenes — reducing boilerplate code and improving clarity.

How does NestJS handle dependency injection?

NestJS uses a powerful built-in Dependency Injection (DI) system that allows you to manage and reuse services across modules easily.

Example:

@Injectable()
export class UsersService {
  findAll() {
    return ['John', 'Jane'];
  }
}

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.findAll();
  }
}


Here:

The UsersService class is marked with @Injectable() → NestJS can inject it anywhere it’s needed.

The UsersController uses constructor injection to automatically receive an instance of UsersService.

This approach promotes loose coupling, testability, and reusability — essential traits for scalable applications.

What benefits does modular architecture provide in a large-scale app?

NestJS applications are built around modules, each representing a feature or functional area (e.g., UsersModule, AuthModule, DatabaseModule).
Each module can include its own controllers, services, and providers.

Benefits:

- Separation of Concerns: Each module handles one specific responsibility.

- Reusability: Modules can be reused or shared across different parts of the app.

- Maintainability: Easier to locate and modify code without affecting other parts.

- Scalability: Large teams can work on different modules independently.

Example:

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}