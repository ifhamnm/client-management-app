# Simple Client Management App
This is a simple client management application with full CRUD (Create, Read, Update, Delete) operations. The project is built using the following technologies:

- Backend: NestJS
- Frontend: Next.js
- Database: PostgreSQL
- Containerization: Docker

## Features
- Create, read, update, and delete clients.
- Search clients by name.
- Fully containerized using Docker.

## Getting Started
To run the application in your environment, follow these steps:

## Prerequisites
Make sure to Docker is installed on your machine.

## Installation and Setup
1. Build and run the Docker containers:
- Open your terminal and navigate to the root directory of the project.
- Run the following commands:
  - docker compose build
  - docker compose up

  This will build and start the backend, frontend, and database services.

2. Access the application:
- Backend API: http://localhost:4000
- Frontend UI: http://localhost:3000

## Project Structure
- Backend: Located in the `backend/` directory, built with NestJS.
- Frontend: Located in the `frontend/` directory, built with Next.js.
- Database: PostgreSQL is used as the database and is configured via Docker.

## Note
The application is fully containerized, so there's no need to install any packages or dependencies manually.
