FROM node:20.10.0-slim

USER node

WORKDIR /home/node/app

COPY --chown=node:node package*.json ./
RUN npm ci

COPY --chown=node:node . .
RUN npm run build:clean

#CMD ["tail", "-f", "/dev/null"]
#CMD ["npm", "run", "start"]
