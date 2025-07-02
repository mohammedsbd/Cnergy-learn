# Install dependencies only when needed
FROM node:18-alpine AS deps

# Set working directory
WORKDIR /app

# Copy only the package.json and lock files
COPY package*.json ./

# ✅ Fix dependency tree error with --legacy-peer-deps
RUN npm install --legacy-peer-deps


# Build the application
FROM node:18-alpine AS builder

WORKDIR /app

# Copy node_modules from previous stage
COPY --from=deps /app/node_modules ./node_modules

# Copy the rest of the project files
COPY . .

# Build the Next.js application
RUN npm run build


# Create the production image
FROM node:18-alpine AS runner

WORKDIR /app

# Set environment to production
ENV NODE_ENV=production

# Copy necessary files for production run
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose Next.js default port
EXPOSE 3000

# ✅ Start Next.js app
CMD ["npm", "start"]
