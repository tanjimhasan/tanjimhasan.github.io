# Use Node.js for both building and running
FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# Ensure BASE_PATH is passed if needed
ARG BASE_PATH=""
ENV NODE_ENV=production
ENV BASE_PATH=${BASE_PATH}

RUN npm run build

# Runner stage using Node.js
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy necessary files from the builder
COPY --from=builder /app/package.json ./
COPY --from=builder /app/package-lock.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Next.js default port is 3000
EXPOSE 3000

CMD ["npm", "start"]