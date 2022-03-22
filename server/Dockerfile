FROM node:12-alpine

WORKDIR /usr/app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

RUN yarn global add pm2

COPY . .

RUN yarn build

CMD ["pm2-runtime", "dist/main.js"]