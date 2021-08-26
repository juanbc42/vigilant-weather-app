//const fetch = require('node-fetch');
var BodyCreate = require('./BodyCreate.js');
var unitAbbrev = require('./unitAbbrev.js');
var doFetch = function doFetch(url){
    return fetch(url)
    .then(res => res.json())
    .then(body => body.json()) //precisa de alguma funcao que recebe o body para assim tratar externamente ao fetch
    .catch(err => console.log(err));
  
};

module.exports = doFetch;
