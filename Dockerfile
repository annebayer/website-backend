FROM node:18-alpine AS build

WORKDIR /opt/app

COPY package*.json ./

RUN npm ci

COPY . .

ENV NODE_ENV=production
RUN npm run build

FROM node:18-alpine

WORKDIR /opt/app

COPY package*.json ./

RUN npm ci --only=production

COPY --from=build /opt/app/dist ./dist
COPY --from=build /opt/app/build ./build
COPY --from=build /opt/app/public ./public
COPY --from=build /opt/app/.strapi ./.strapi

COPY . .

ENV NODE_ENV=production

EXPOSE 1337

CMD ["npm", "run", "start"]