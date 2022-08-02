//requires js files
var ExpressServer = require('./ExpressServer.js');

ExpressServer().listen(8888, function () {
  console.log('Weather app listening on port 8888!');
})
