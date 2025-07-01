# Use official Node.js image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json if available
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files from current folder (your app)
COPY . .

# Expose the port your app uses (assumed 3000)
EXPOSE 3000

# Command to run the app
CMD ["node", "app.js"]