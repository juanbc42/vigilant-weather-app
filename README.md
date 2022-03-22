# Vigilant: Weather App

Readme
--

Disclaimer: This application is solely for study and self improvement on development. Based on a step by step by Brandon Morelli (see sources). 
It was customized the way I desire and improved by not using some deprecated libs. 

This is an application so you can see the weather based on the City inserted into the search box. 
It uses OpenWeather API to get data related to the cities that a user search. 

Requirements
--

- Node (mandatory): 12 
- Docker (optional): latest

Steps
--

Steps to make it work: 
1. clone this repo
2. run `npm i` in the terminal
3. run `npm start` inside the vigilant-weather-app folder, via terminal. 
4. access `localhost:3000` and it will be displayed the vigilant weather app first screen
5. to stop running, ctrl + c on the terminal. 

Docker Image
-- 
Build this using the following steps
1. `docker build . -t <your-name>/vigilant-weather-app`
2. Then run it `docker run -p 8080:8080 -d <your-name>/vigilant-weather-app`

Check the file with `docker images` and `docker ps` to see if it's running.
Also you can rename the container by inserting `docker rename <container ID> <NEW_NAME>` on the terminal. 


Sources
--
1. Brandon Morelli's Step by Step https://codeburst.io/build-a-weather-website-in-30-minutes-with-node-js-express-openweather-a317f904897b
