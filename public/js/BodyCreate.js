const unitAbbrev = require('./unitAbbrev.js');

var BodyCreate = function BodyCreate(wbody, w_units){
    let weather = wbody;
    let weatherUnit = w_units;
    let weatherCity = `${weather.data.name}`;
    let weatherText = `It's ${weather.data.main.temp}° ${unitAbbrev(w_units)}`;
    let weatherFeel = `Feels like ${weather.data.main.feels_like}°`;
    let weatherPressure = `${weather.data.main.pressure} hPa of pressure`;
    let weatherWind = `Wind is ${weather.data.wind.speed} km/h`;
    let weatherClouds = `With ${weather.data.clouds.all}% of Clouds`;
    let weatherHumidity = `And ${weather.data.main.humidity}% of Humidity`;
  
    return ({weather: weatherText,weatherUnit,weatherFeel,weatherPressure,weatherWind,weatherClouds,weatherCity,weatherHumidity, error: null});
       
}

module.exports = BodyCreate;
