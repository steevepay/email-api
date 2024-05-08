FROM node:20-slim

ENV APP_ROOT /src
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

RUN npm install
