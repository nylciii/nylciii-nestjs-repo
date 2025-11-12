
📌 Connecting to PostgreSQL with TypeORM in NestJS

1. how does @nestjs/typeorm simplify database interactions
it connects typeorm to nestjs automatically so i don’t have to set up the database by hand i just decorate my entity with @Entity() and inject the repository using @InjectRepository() then i can call methods like find or save right away no need to write sql or handle connections myself

2. what is the difference between an entity and a repository in typeorm
an entity is the model or structure of a table it describes what data looks like a repository is what i use to actually talk to that table it has the methods to find add update or delete data so the entity defines it and the repository works with it

3. how does typeorm handle migrations in a nestjs project
migrations keep track of changes to the database structure they’re like version control for tables typeorm can generate migration files for you and you can run them to update the database in development you can use synchronize true to auto-create tables but in production you’d switch to migrations so you don’t lose data

4. what are the advantages of using postgresql over other databases in a nestjs app
postgresql is reliable fast and works great with typeorm it supports advanced data types like json and arrays it’s open-source and easy to use with docker it also scales well and has strong community support compared to sqlite or mongodb it’s the safer and more flexible choice for most nestjs apps