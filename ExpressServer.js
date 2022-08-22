const apiKey = require('./apikey.js');
const BodyCreate = require('./public/js/BodyCreate.js');

var ExpressServer = function ExpressServer(){
    
    const axios = require('axios');
    const { render } = require('ejs');
    const express = require('express');
    const bodyParser = require('body-parser');
    const path = require('path');
    const app = express(); // inicializa o express server como 'app'
    
    app.use('/static', express.static('public'));
    app.set('view engine', 'ejs');
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/', function (req, res) {
        res.render('index', {weather: null, error: null});
    });

    app.get('/my-weather', function (req, res) {
        res.render('my-weather', {weather: null, error: null});
    });

    app.post('/', async function (req, res) {
        let w_city = req.body.city; // necessário para buscar do html o conteudo de city
        let w_units = req.body.units;
        console.log ("antes do try")
        try {
            console.log ("entrou no try")
                const weatherAPI = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${w_city}&units=${w_units}&appid=${apiKey()}`);
                res.render('index', BodyCreate(weatherAPI, w_units));
                const obj = JSON.stringify(weatherAPI.data);
                console.log (obj);
                //console.log (weatherAPI.data);
            } catch (error) {
                if(error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    res.render('index', { weather : null, error });
                } else if(error.requiest) {
                    res.render('index', { weather : null, error });
                    console.log(error.requiest);
                } else {
                    res.render('index', { weather : null, error });
                    console.error('Error', error.message);
                }
            } 
        
    });
    
    return app;
}
module.exports = ExpressServer;
