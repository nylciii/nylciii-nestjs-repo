
📌 Using Interceptors & Middleware in NestJS


1. What is the difference between an interceptor and middleware in nestjs
middleware runs before the request reaches your controller it works more on the express or fastify layer you usually use it for things like logging requests checking tokens or parsing json interceptors on the other hand work inside nest itself they wrap around your controller methods so they can control what happens before or after a method runs they’re great for transforming responses adding metadata or handling exceptions.

2. When would you use an interceptor instead of middleware
you’d go for an interceptor when you need something that ties directly into nestjs logic for example if you want to automatically modify or log responses measure how long your controller methods take or catch errors in a standardized way, so basically interceptors are for when you need to interact with the nestjs flow and not just raw http requests.

3. How does LoggerErrorInterceptor help
LoggerErrorInterceptor automatically catches and logs any errors that happen during request handling instead of letting those errors pass quietly or crash your app it logs them clearly so you can trace what went wrong it’s super helpful for debugging and for keeping your logs consistent and readable across the whole project.