FROM node:16-alpine AS BUILD_IMAGE
WORKDIR ./vigilant-weather/
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["node", "server.js"]