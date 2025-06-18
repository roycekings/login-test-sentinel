FROM node:18-alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm i && npm i -g nodemon

COPY . .

CMD ["npm","run","dev"]