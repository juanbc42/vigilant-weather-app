FROM node:12.16-alpine
RUN mkdir vigilant-weather
COPY . ./vigilant-weather
WORKDIR ./vigilant-weather/
RUN npm install
EXPOSE 3000
CMD npm start