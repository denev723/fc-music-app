FROM node:20-slim

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json .
RUN npm install

# Bundle app source
COPY tsconfig.json .
COPY src ./src
COPY prisma ./prisma
COPY .env ./
COPY esbuild.js ./
COPY public ./public

# prisma generate
RUN npx prisma generate

# Build
RUN npm run build

# Start
CMD ["npm", "start"]

# expose port
EXPOSE 4000