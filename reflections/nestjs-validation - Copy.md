📌 Validating Requests with Pipes in NestJS

1. What is the purpose of pipes in NestJS?
Pipes in NestJS run right after the app gets a request but before the controller method executes. I usually use them to clean up or validate incoming data. For example, they can turn a string like "123" into a real number 123, or reject requests that don’t match the right shape. Basically, they act as a middle step between the request and my controller to make sure the data is correct.

2. Why ValidationPipe is important
I use ValidationPipe because it automatically checks if the data coming in is valid and safe. It helps a lot with both security and data integrity. For example, if a request is missing required fields or has invalid types, the pipe blocks it before it even reaches my service. When I enable options like whitelist, it can also remove unwanted properties from the request, which helps prevent attacks or accidental data leaks. Another nice thing is that it can automatically transform the data into my DTO types, so the service logic becomes cleaner and more reliable.

3. Built-in vs custom pipes
NestJS already gives some built-in pipes like ValidationPipe and ParseIntPipe that handle common things I need. But sometimes I have to create custom pipes when I need special logic, like parsing a CSV, formatting dates, or doing a specific validation that the built-ins don’t cover. Writing a custom pipe is simple: I just implement PipeTransform and use it wherever I need it.

4. How decorators like @IsString() and @IsNumber() work
Decorators such as @IsString() and @IsNumber() come from the class-validator package. I add them inside my DTOs to describe what kind of data I expect. When ValidationPipe runs, it checks all those decorators and validates the incoming data. If something doesn’t match, Nest automatically throws a 400 Bad Request error before it reaches my controller. If everything is valid, it transforms the plain JSON into a proper instance of my DTO, which means my service gets clean, typed data every time.