📌 Seeding & Migrations in TypeORM


1. What is the purpose of database migrations in TypeORM?
Migrations in TypeORM are used to manage and version-control changes to the database schema, such as creating tables, adding columns, or modifying constraints. They ensure that the database structure stays in sync with the application code.

2. How do migrations differ from seeding?
Migrations modify the database schema (structure), while seeding populates the database with initial or sample data (content). For example, a migration might create a table, and a seed script might insert rows into that table.

3. Why is it important to version-control database schema changes?
Version-controlling schema changes ensures consistency across environments (development, staging, production) and allows teams to track, review, and revert changes if needed. It prevents unexpected issues caused by mismatched database structures.

4. How can you roll back a migration if an issue occurs?
You can roll back a migration in TypeORM using the command:
npx typeorm migration:revert -d dist/data-source.js