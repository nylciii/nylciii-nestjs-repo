📌 Running PostgreSQL in Docker

What are the benefits of running PostgreSQL in a Docker container?

Running PostgreSQL in Docker provides an isolated, portable, and consistent environment.
It removes the need to install PostgreSQL directly on your host machine and ensures that your setup works the same across different computers.
Other benefits include:

Easy to start, stop, and reset with one command

Avoids version conflicts with local installations

Makes development and deployment faster and cleaner

Easy to share configurations using docker-compose.yml

How do Docker volumes help persist PostgreSQL data?

Docker volumes store PostgreSQL’s database files outside the container, ensuring that data remains safe when containers are restarted or rebuilt.
Even if the PostgreSQL container is deleted, the data in the volume persists and can be reused by a new container.
This persistence is crucial for databases because it prevents data loss between deployments or crashes.

How can you connect to a running PostgreSQL container using a client tool?

You can connect to PostgreSQL using:

psql (CLI):

docker exec -it postgres_db psql -U admin -d mydb


pgAdmin (GUI):

Open pgAdmin

Create a new connection using:

Host: localhost

Port: 5432

Username: admin

Password: admin123

Access and manage your mydb database visually.