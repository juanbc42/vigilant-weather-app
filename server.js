//requires js files
var ExpressServer = require('./ExpressServer.js');

ExpressServer().listen(3000, function () {
  console.log('Weather app listening on port 3000!');
})