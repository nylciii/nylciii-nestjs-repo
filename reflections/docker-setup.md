📌 Setting Up Docker and Docker Compose

What is the difference between docker run and docker-compose up?

The docker run command is used to start a single container from a specific image manually. You need to configure ports, environment variables, and volumes each time you run it.
Example:

docker run -d -p 8080:80 nginx


On the other hand, docker-compose up runs multiple containers defined in a docker-compose.yml file. It automatically manages networking, dependencies, and configurations between services (like a backend API and a database).
Example:

docker compose up


This starts all services described in the YAML file with one command.

How does Docker Compose help when working with multiple services?

Docker Compose simplifies running and managing multi-container applications.
Instead of starting each container manually, you can define all services (e.g., API, database, cache) in one configuration file. Compose automatically links them, handles networking, and ensures they start in the correct order.

What commands can you use to check logs from a running container?

You can use the following commands to view container logs:

For a single container:

docker logs <container_id>


To follow logs in real time:

docker logs -f <container_id>


For all services in a Compose setup:

docker compose logs


To follow live logs from all Compose services:

docker compose logs -f

What happens when you restart a container? Does data persist?

When you restart a container using:

docker restart <container_id>


the container stops and starts again — keeping the same configuration and files inside the container.

However, data persistence depends on volumes:

If the container uses volumes or bind mounts, the data persists even after restarts or container deletion.

If there are no volumes, the data stored inside the container will be lost when it’s removed or recreated.