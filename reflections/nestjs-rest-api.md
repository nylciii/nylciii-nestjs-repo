📌 Creating REST APIs with NestJS

1. In NestJS, a controller handles HTTP requests and sends back responses. It’s basically the part that connects your routes (like /expenses) to specific functions. In my expense tracker app, for example, the ExpensesController is decorated with @Controller('expenses'), and it has methods like @Post() for creating and @Get() for retrieving expenses. These methods usually just take in the request data (using things like @Body() or @Param()) and then pass it to the service.

2. The actual logic doesn’t belong in the controller, as it should be inside the service. So instead of doing all the work in the controller, I just call something like this.expensesService.create(createExpenseDto) and let the service handle everything (like saving data, finding, updating, or deleting).

3. Keeping the business logic in the service makes the code cleaner and easier to test or reuse. For example, I can test the service without worrying about HTTP stuff, or I can reuse the same logic somewhere else later. It’s also easier to maintain and change, like if I switch from an in-memory array to a database, I only need to update the service, not the controller.

4. NestJS uses decorators to connect routes to functions. @Controller('expenses') sets the route prefix, while things like @Get(), @Post(), or @Delete(':id') tell Nest which HTTP method and path to handle. Parameter decorators such as @Body() or @Param('id') automatically inject the request data into the function arguments. So for example, when I send a POST request to /expenses, it calls the create() method, and when I do a GET to /expenses/1, it calls findOne() with the right id.

'I USED POSTMAN DESKTOP FOR TESTING ENDPOINTS'