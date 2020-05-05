var express = require("express");
var path = require("path");
var Friends = require('/friends.js');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/friends', function(req, res){
    return res.json(friends);
});

app.post('/api/friends', function(req, res){
    //This will be used to handle incoming survey results. This route will also 
    //be used to handle the compatibility logic.
});

app.post("/api/friends", function(req, res) {
    
    var newFriend = req.body;
  
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newFriend);
  
    Friends.push(newFriend);
  
    res.json(newFriend);
  });


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });