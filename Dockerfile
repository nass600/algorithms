FROM node:latest
MAINTAINER Ignacio Velazquez <ivelazquez85@gmail.com>

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
RUN npm install --silent
COPY . /usr/src/app

ENV NODE_ENV development

EXPOSE 9876
CMD npm run test
