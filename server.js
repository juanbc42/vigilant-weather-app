//requires js files
var ExpressServer = require('./ExpressServer.js');

ExpressServer().listen(80, function () {
  console.log('Weather app listening on port 80!');
})