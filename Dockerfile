# Build Stage
FROM node:20-alpine AS builder

WORKDIR /opt/app

RUN apk update && apk add --no-cache \
    build-base gcc autoconf automake zlib-dev \
    libpng-dev vips-dev git

COPY package*.json ./
RUN npm install

COPY . .
RUN rm -rf .cache dist
RUN npm run build

# Production Stage
FROM node:20-alpine

WORKDIR /opt/app

RUN apk add --no-cache vips-dev

COPY --from=builder /opt/app ./

EXPOSE 1337

CMD ["npm", "run", "start"]