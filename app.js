
/**
 * Module dependencies.
 */

var express = require('express'), 
     db = require('./model/mongo'),
     blob = require('./model/blobs'),
     User = require('./model/contacts'),
     engine  = require( 'ejs-locals' ),
    routes = require('./routes');

var app = module.exports = express.createServer();

// including db
// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
app.get('/contact', routes.contact);
// app.post('/quotes', (req, res) => {
//   console.log('Hellooooooooooooooooo!')
// });

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
