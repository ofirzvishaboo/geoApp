# Use the official Node.js image as the base image
FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install && npm install dotenv

COPY . .

# Expose the application port
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production

# Start the application
CMD ["node", "app.js"]
