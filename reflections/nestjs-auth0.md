
📌 Authentication in NestJS with Auth0 & JWT


1. Auth0 handles authentication by doing everything on its own servers. The app does not store passwords or manage login logic. Traditional auth keeps all passwords and login flows inside the app which means the app must handle hashing validation and security updates.

2. JWT acts as proof that the user is authenticated. After login the client sends the JWT with every request and the API checks the token instead of checking a session or database.

3. jwks rsa works by downloading Auth0’s public keys. Auth0 signs tokens with a private key and the API verifies them with the public key. If the signature is valid the token is real and untampered.

4. An API route can be protected by adding middleware that checks for a JWT. The middleware reads the token from the header verifies it and only allows the request if the token is valid.