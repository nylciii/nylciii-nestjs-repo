📌 Handling Environment Variables & Configuration in NestJS

1. The @nestjs/config package helps me load and manage environment variables in a clean way. It reads values from a .env file and makes them available through ConfigService so I can use them anywhere in my app without hardcoding anything.

2. Secrets like API keys and database passwords should never be stored in source code because anyone who gets access to the repo can see them. Once they leak it is almost impossible to take them back. Keeping them in env files or secret managers keeps the app safe.

3. I can validate environment variables before the app starts by using a validation schema. Usually Joi is used. I define what variables are required and what type they should be. If anything is missing NestJS will stop the app before it runs which prevents wrong configurations.

4. I can separate configuration for different environments by creating multiple env files like .env.development and .env.production. I can also create separate config modules for each environment and load the correct one based on NODE_ENV. This helps me keep local settings separate from production so I do not accidentally use the wrong values.