# Use Node.js version 14 as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Build the React app for production
RUN npm run build

# Expose the port your app runs on
EXPOSE 3000

# Command to run your React app
CMD ["npm", "start"]
