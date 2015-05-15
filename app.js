var express = require('express');
var path = require('path');
var index = require('./routes/index');
var app = express();

// serve static assets from the public directory
app.use(express.static(path.join(__dirname, 'public')));

//look for view html in the views direcory
app.set('views', path.join(__dirname, 'views'));

// use ejs to render
app.set('view engine', 'ejs');

//setup routes
app.use('/', index);


module.exports = app;

var port = process.env.PORT || 80;
app.listen(port, function() {
  console.log('Listening on ' + port);
});
