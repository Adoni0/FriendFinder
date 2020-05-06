
var Friends = require('../data/friends.js');

module.exports = function(app){



app.get('/api/friends', function(req, res){
    res.json(Friends);
});

app.post("/api/friends", function(req, res) {
    
    var newFriendScores = req.body.scores;
    var compatable = {
      name: '',
      difference: 500
    };
    var totalDifference;

    for(var i = 0; i < Friends.length; i++){
        var currentFriendInDatabase = Friends[i];
        totalDifference = 0;

        for(var j = 0; j < currentFriendInDatabase.scores.length; j++){
          var dataBaseFriendScore = currentFriendInDatabase.scores[j];
          var newUserScore = newFriendScores[j];

          totalDifference += Math.abs(parseInt(dataBaseFriendScore) - parseInt(newUserScore));
        }
        
        if(totalDifference <= compatable.difference){
          compatable.name = currentFriendInDatabase.name;
          compatable.difference = totalDifference;
        }
    }
  
    newFriendScores.routeName = newFriendScores.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newFriend);
  
    Friends.push(req.body);
  
    res.json(compatable);
  });

}