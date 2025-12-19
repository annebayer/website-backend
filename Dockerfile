FROM node:20-alpine

WORKDIR /opt/app

RUN apk add --no-cache \
    build-base \
    gcc \
    autoconf \
    automake \
    zlib-dev \
    libpng-dev \
    vips-dev \
    git

COPY package*.json ./

RUN npm ci

COPY . .

RUN rm -rf .cache dist build

ENV NODE_ENV=production

EXPOSE 1337

CMD ["sh", "-c", "npm run build && npm run start"]