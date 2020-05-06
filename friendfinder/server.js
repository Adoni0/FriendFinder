var express = require('express');
var path = require('path');


var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });