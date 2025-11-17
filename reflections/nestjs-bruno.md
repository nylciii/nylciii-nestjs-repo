
📌 API Debugging with Bruno


1. Bruno helps with API testing by giving a simple and fast interface compared to Postman or cURL. It stores requests in plain text files which makes version control easy. It also loads faster than Postman and does not require a heavy UI. Bruno is more organized than cURL because everything can be grouped and saved without writing long terminal commands.

2. To send an authenticated request in Bruno the request needs an Authorization header. The header usually looks like this:
Authorization: Bearer <token>
The token can be placed in an environment variable so that every request can use it without editing each one manually.

3. Organizing API requests in collections keeps everything clean and easy to navigate. It prevents confusion during development and makes it simple to test specific modules. Collections also make teamwork easier because everyone can see the same requests, headers, and bodies.

A Bruno collection for a NestJS backend project can be structured by following the module layout. Each folder can match a module in the backend. For example:

Bruno Collection
  Auth
    Login
    Register
    Refresh Token
  Users
    Create User
    Get User
    Update User
    Delete User
  Products
    Create Product
    List Products
    Update Product
    Delete Product
  Orders
    Create Order
    Get Orders