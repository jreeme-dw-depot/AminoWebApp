var express = require('express');
var app = module.exports = express();

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
//boot(app, __dirname);

app.listen(8080, function () {
  app.emit('started');
  console.log('Web server listening at: %s', app.get('url'));
});

