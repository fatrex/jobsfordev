FROM node:14
WORKDIR /app
COPY . /app

ENV NODE_ENV=production

RUN yarn install --production=false
RUN yarn build

EXPOSE 3000

CMD ["node", "build"]