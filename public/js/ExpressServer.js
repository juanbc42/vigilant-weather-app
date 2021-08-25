var ExpressServer = function ExpressServer(){
    var BodyCreate = require('./createBody.js');
    var doFetch = require('./doFetch.js');

    const apiKey = '5f1cd91e71808a2d7fa5cdb02ce4f2a9';
    const { render } = require('ejs');
    const express = require('express');
    const bodyParser = require('body-parser');
    const app = express();
    
    app.use('/static', express.static('/public'));
    app.set('view engine', 'ejs');
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/', function (req, res) {
        res.render('index', {weather: null, error: null});
    });

    app.post('/', function (req, res) {
        let w_city = req.body.city; //necessário para buscar do html o conteudo de city
        let w_units = req.body.units;
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${w_city}&units=${w_units}&appid=${apiKey}`;
        //doFetch(url); //contacta a API com a URL necessaria, descrita acima
        BodyCreate(doFetch(url),w_units);
    });
    return app;
}
module.exports = ExpressServer;