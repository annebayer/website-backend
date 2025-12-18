FROM node:20-alpine

WORKDIR /opt/app

RUN apk add --no-cache \
    build-base gcc autoconf automake zlib-dev \
    libpng-dev vips-dev git

COPY package*.json ./
RUN npm ci

COPY . .

RUN rm -rf .cache dist build

ENV NODE_ENV=production

EXPOSE 1337

RUN echo '#!/bin/sh' > /opt/app/start.sh && \
    echo 'npm run build' >> /opt/app/start.sh && \
    echo 'npm run start' >> /opt/app/start.sh && \
    chmod +x /opt/app/start.sh

CMD ["/opt/app/start.sh"]