FROM docker.arvancloud.ir/node:22-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 4173
CMD ["npm","run","prod"]
