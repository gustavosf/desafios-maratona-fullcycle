FROM node:14-alpine
EXPOSE 8080

RUN mkdir /home/node/app/ && chown -R node:node /home/node/app
WORKDIR /home/node/app

COPY --chown=node:node package.json ./
COPY --chown=node:node yarn.lock ./
USER node
RUN yarn install
COPY --chown=node:node . .

CMD ["node", "index.js"]
