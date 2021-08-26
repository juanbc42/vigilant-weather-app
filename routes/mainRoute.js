const apiKey = '5f1cd91e71808a2d7fa5cdb02ce4f2a9';
var doFetch = require('../public/js/doFetch.js');
var ExpressServer = require('../public/js/ExpressServer.js');

var mainRoute = function mainRoute(){
    ExpressServer();
    // GETs
    /*ExpressServer().get('/', function (req, res) {
        res.render('index', {weather: null, error: null});
    });*/
    //POSTs
    ExpressServer().post('/', function (req, res) {
        let w_city = req.body.city; //necessário para buscar do html o conteudo de city
        let w_units = req.body.units;
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${w_city}&units=${w_units}&appid=${apiKey}`;
        doFetch(url); //contacta a API com a URL necessaria, descrita acima
        
        //console.log(req.body);
        //console.log(req.url);
    });
}

module.exports = mainRoute;
