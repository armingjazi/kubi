FROM node:10

WORKDIR /usr/src/nodeserver

COPY package*.json ./
COPY index.js ./
COPY babel.config.js ./

RUN npm install

RUN ls

CMD ["npm", "start"]