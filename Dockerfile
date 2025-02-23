# Use the official Node.js image as the base image
FROM node:18-bullseye-slim

WORKDIR /usr/src/app

COPY package*.json ./

ENV PYTHON=/usr/bin/python3

# Update apt-get and install required build tools, then install dependencies
RUN apt-get update && \
    apt-get install -y python3 python3-dev build-essential && \
    npm install

COPY . .

# Expose the application port
EXPOSE 3000

# Set environment variables
# ENV NODE_ENV=production

# Start the application
CMD ["npm", "start"]
