/**
 * Module dependencies.
 */
var express = require('express')
  , routes = require('./routes')
  , cache = require('./routes/cache')
  // , http = require('http')
  , path = require('path');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// http -> https redirect via http://stackoverflow.com/a/10715802
// REMOVING until we can figure out the infinite loop issue
// app.use(function(req, res, next) {
//   if(!req.secure) {
//     return res.redirect(['https://', req.get('Host'), req.url].join(''));
//   }
//   next();
// });

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}



app.get('/', routes.index);
app.get('/test', routes.test);
app.get("/cache/:key", cache.getCache);
app.put("/cache", cache.putCache);
app.delete("/cache/:key", cache.removeCache);

app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
