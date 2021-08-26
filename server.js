//requires js files
var ExpressServer = require('./public/js/ExpressServer.js');

ExpressServer().listen(3000, function () {
  console.log('Weather app listening on port 3000!');
})