FROM node:16-alpine

WORKDIR /src

COPY ./package.json .

RUN yarn

COPY . .

CMD ["yarn", "dev"]