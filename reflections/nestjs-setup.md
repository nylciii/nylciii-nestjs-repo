📌 Setting Up a NestJS Project


1. What files are included in a default NestJS project?

When I first created my NestJS project, I noticed it comes with a structured setup out-of-the-box:

src/ folder – this is where all the source code lives.

main.ts – the entry point of the app.

app.module.ts – the root module that ties everything together.

app.controller.ts – a sample controller.

app.service.ts – a sample service.

test/ folder – for unit tests.

node_modules/ – dependencies.

Configuration files – like package.json, tsconfig.json, .eslintrc.js, .prettierrc, etc.

Basically, it gives me a solid starting point so I can focus on building features like expenses, categories, or reports, without worrying about the project setup.

2. How does main.ts bootstrap a NestJS application?

main.ts is basically the launchpad of my app.

Here’s what it does in my app:

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();


NestFactory.create(AppModule) → creates the app instance using the root module.

app.listen(3000) → starts listening on port 3000 so I can hit my APIs.

So every time I run npm run start:dev, NestJS goes through main.ts and gets everything up and running.

3. What is the role of AppModule in the project?

AppModule is like the central hub of my app.

It imports other modules, like ExpensesModule, UsersModule, or CategoriesModule.

It registers controllers and providers so NestJS knows how to handle incoming requests and inject services.

Basically, it organizes the app’s structure. Without AppModule, NestJS wouldn’t know how to connect the pieces together.

In my expense-tracker app, I can keep adding new modules for features, and AppModule makes sure they all work together.

4. How does NestJS structure help with scalability?

This is one of the best parts! The folder and module structure makes my app easy to scale:

Modules → separate features (like Expenses, Users) so teams can work independently.

Controllers → handle HTTP requests without mixing in business logic.

Services → handle the logic, easy to test and reuse.

Providers & Dependency Injection → easy to swap or mock services as the app grows.

So even if my app goes from a simple expense tracker to something bigger (like multi-user, reports, notifications), the structure keeps it clean and maintainable.