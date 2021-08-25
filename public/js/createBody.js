const fetch = require('node-fetch');
var handleUnit = require('./handleUnit.js');

var BodyCreate = function BodyCreate(wbody,w_units){
 /*   function doFetch(url){
        fetch(url)
        .then(res => res.json())
        .then(body => createBody(body, w_units)) //precisa de alguma funcao que recebe o body para assim tratar externamente ao fetch
        .catch(err => console.log("erro:"+err));
    }
    doFetch(url);
   */ 
    //function createBody(wbody, w_units){
        //console.log(wbody);

        let weather = wbody;
        let weatherUnit = w_units;
        let weatherCity = `${weather.name}`;
        let weatherText = `It's ${weather.main.temp}° ${handleUnit(w_units)}`;
        let weatherFeel = `Feels like ${weather.main.feels_like}°`;
        let weatherPressure = `${weather.main.pressure} hPa of pressure`;
        let weatherWind = `Wind is ${weather.wind.speed} km/h`;
        let weatherClouds = `With ${weather.clouds.all}% of Clouds`;
        let weatherHumidity = `And ${weather.main.humidity}% of Humidity`;
        let page = ('index', {weather: weatherText,weatherUnit,weatherFeel,weatherPressure,weatherWind,weatherClouds,weatherCity,weatherHumidity, error: null});
        //console.log("body created");
        //console.log(page);
        //res.render(page);
        return page;
    }


module.exports = BodyCreate;