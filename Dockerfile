FROM node:14.11.0-slim

RUN mkdir -p /srv/poster-api && chown -R node:node /srv/poster-api

WORKDIR /srv/poster-api

USER node

COPY --chown=node:node package.json ./

RUN yarn install --silent && yarn cache clean

COPY --chown=node:node . .