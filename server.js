//requires js files
var ExpressServer = require('./ExpressServer.js');

ExpressServer().listen(8080, function () {
  console.log('Weather app listening on port 8080!');
})