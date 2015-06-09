var loopback = require('loopback');
var app = module.exports = loopback();

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
//boot(app, __dirname);

app.get('/', function(req,res){
  res.send('hello world');
});

app.listen(3001);

