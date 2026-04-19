FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

ARG BASE_PATH=""
ENV NODE_ENV=production
ENV BASE_PATH=${BASE_PATH}

RUN npm run build

FROM nginx:1.27-alpine AS runner

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
