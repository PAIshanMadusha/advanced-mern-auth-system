# Stage 1: Build the frontend
FROM node:22 as builder

WORKDIR /app

# Copy only necessary files first
COPY package*.json ./
COPY client/package*.json ./client/

# Install root and client dependencies
RUN npm install
RUN npm install --prefix client

# Copy the rest of the app
COPY . .

# Build frontend
RUN npm run build --prefix client

# Stage 2: Run backend and serve frontend
FROM node:22-alpine

WORKDIR /app

# Copy only what's needed for production
COPY package*.json ./
RUN npm config set fetch-retry-maxtimeout 120000
RUN npm install --omit=dev

# Copy server code and built frontend
COPY server ./server
COPY --from=builder /app/client/dist ./client/dist

# Expose port and run
EXPOSE 5000
CMD ["node", "server/server.js"]