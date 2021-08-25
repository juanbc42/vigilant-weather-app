const fetch = require('node-fetch');
var createBody = require('./createBody.js');
var doFetch = function doFetch(url){
    fetch(url)
    .then(res => res.json())
    .then(body => createBody(body)) //precisa de alguma funcao que recebe o body para assim tratar externamente ao fetch
    .catch(err => console.log(err));
};
module.exports = doFetch;