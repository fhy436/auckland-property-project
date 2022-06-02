FROM node:18-alpine3.14

WORKDIR /app

COPY package.json .

COPY package-lock.json .

COPY . .

RUN npm install

EXPOSE $PORT

CMD ["npm", "start"]