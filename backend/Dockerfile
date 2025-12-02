# Dockerfile
FROM node:20-alpine

# Arbeitsverzeichnis
WORKDIR /opt/app

# System-Dependencies
RUN apk update && apk add --no-cache \
    build-base \
    gcc \
    autoconf \
    automake \
    zlib-dev \
    libpng-dev \
    vips-dev \
    git

# Package files kopieren
COPY package*.json ./

# Dependencies installieren
RUN npm ci

# App-Code kopieren
COPY . .

# Strapi Build
ENV NODE_ENV=production
RUN npm run build

# Port freigeben
EXPOSE 1337

# Start-Command
CMD ["npm", "run", "start"]