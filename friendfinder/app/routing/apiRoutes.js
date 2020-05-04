var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/friends', function(req, res){
    return res.json(friends);
});

app.post('/api/friends', function(req, res){
    //This will be used to handle incoming survey results. This route will also 
    //be used to handle the compatibility logic.
})
