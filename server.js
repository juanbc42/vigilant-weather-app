const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();
const apiKey = '5f1cd91e71808a2d7fa5cdb02ce4f2a9';

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

/*app.post('/', function (req, res) {
  res.render('index');
  console.log(req.body.city);
})*/
app.get('/', function (req, res) {
  res.render('index', {weather: null, error: null});
})

app.post('/', function (req, res) {
  let city = req.body.city;
  console.log(city);
  
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

  request(url, function (err, response, body) { 
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again #1'});
    } else {
      let weather = JSON.parse(body)
      if(weather.main == undefined){
        res.render('index',  {weather: null, error: 'Error, please try again #2'});
      } else {
        let weatherText = `It's ${weather.main.temp}°C in ${weather.name}`;
        let weatherPressure = `${weather.main.pressure} of pressure`;
        let weatherWind = `Wind is ${weather.wind.speed}km/h at ${weather.wind.deg}°`;
        let weatherClouds = `With ${weather.clouds.all}% of Clouds`;
      
        
        res.render('index', {weather: weatherText,weatherPressure,weatherWind,weatherClouds, error: null});
        console.log(body);
      }
    }
  });
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})

/*//OLD CODE// this one sends just text
app.get('/', function (req, res) {
  res.send('Hello world in node JS using Express <br> This will be a weather app! :D')
})*/
/*//This one sends a html using the sendFile
app.get('/home', function (req, res) {
  res.sendFile('/home/juanbc/nodejs-projects/weather-app/index.html');  
})*/