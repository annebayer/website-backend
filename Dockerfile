# Build Stage
FROM node:20-alpine AS builder

WORKDIR /opt/app

RUN apk update && apk add --no-cache \
    build-base gcc autoconf automake zlib-dev \
    libpng-dev vips-dev git

COPY package*.json ./
RUN npm ci

COPY . .
RUN rm -rf .cache dist build

ENV RAILWAY_PUBLIC_DOMAIN=website-backend-production-d0f9.up.railway.app
ENV PUBLIC_URL=https://website-backend-production-d0f9.up.railway.app
ENV ADMIN_URL=https://website-backend-production-d0f9.up.railway.app/admin

RUN npm run build

# Production Stage
FROM node:20-alpine

WORKDIR /opt/app

RUN apk add --no-cache vips-dev

COPY --from=builder /opt/app ./

ENV NODE_ENV=production

EXPOSE 1337

CMD ["npm", "run", "start"]