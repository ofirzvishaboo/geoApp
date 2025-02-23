# YelpCamp

YelpCamp is a fullstack web application built with MongoDB, Express, Node.js, and EJS. It includes Cypress-based automated testing and uses Docker Compose for container orchestration.
This project demonstrates a modern approach to fullstack development, testing, and deployment.

## Overview

YelpCamp is a campground review and listing site where users can view, add, and review campgrounds. The application is built using:
- **MongoDB** for data persistence
- **Express & Node.js** for the server-side
- **EJS** for templating
- **Cypress** for end-to-end testing

The project is containerized with Docker Compose to simplify development, testing, and deployment.

## Features

- **Fullstack Web Application:** Provides CRUD operations for campgrounds, user authentication, and review submission.
- **Responsive UI:** Built with EJS templates and styled assets.
- **Automated Testing:** Cypress is integrated for end-to-end testing of key user flows.
- **Dockerized Environment:** Uses Docker Compose to manage and orchestrate application services (app, MongoDB, testing).

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- (Optional) Node.js and npm for local development

## Getting Started

### Running the Project

To build and start all services in detached mode, run:
```run
docker compose up -d --build

### Running Tests

To run Cypress tests using a dedicated testing profile, ensure your application is running and execute:
```run-tests
docker compose --profile testing run --rm cypress

### Environment Variables

Create a .env file in your project root (or configure your environment accordingly). An example .env file might look like this:

```env
DB_USERNAME=<username>
DB_PASSWORD=<password>
DB_HOST=mongo
DB_PORT=27017
DB_NAME=<database-name>
ADMIN_PASS=<password>
ADMIN_USER=<username>
ADMIN_MAIL=<mail>
CLOUDINARY_CLOUD_NAME=<username>
CLOUDINARY_KEY=<key>
CLOUDINARY_SECRET=<secret>
MAPTILER_TOKEN=<api-token>
