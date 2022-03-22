const apiKey = '9a3387712c45666838557f30ce54b225';
const axios = require('axios');
const ejs = require('ejs');
var GetweatherAPI = async function (w_city, w_units){
    const weatherAPI = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${w_city}&units=${w_units}&appid=${apiKey}`);
    return weatherAPI;
}

module.exports = GetweatherAPI;
