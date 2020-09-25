FROM node:14.11.0-alpine3.10
RUN mkdir -p /usr/src/poster-api
WORKDIR /usr/src/poster-api
COPY package.json .
RUN npm install
COPY . .