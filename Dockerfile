# Build Stage
FROM node:20-alpine AS builder

WORKDIR /opt/app

RUN apk update && apk add --no-cache \
    build-base gcc autoconf automake zlib-dev \
    libpng-dev vips-dev git

COPY package*.json ./
RUN npm ci

COPY . .

# Production Stage
FROM node:20-alpine

WORKDIR /opt/app

RUN apk add --no-cache vips-dev

COPY --from=builder /opt/app/node_modules ./node_modules
COPY --from=builder /opt/app/package*.json ./
COPY --from=builder /opt/app/.env.example ./.env.example
COPY . .

ENV NODE_ENV=production

RUN npm run build

EXPOSE 1337

CMD ["npm", "run", "start"]