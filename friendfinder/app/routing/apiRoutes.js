
var Friends = require('../data/friends.js');

module.exports = function(app){



app.get('/api/friends', function(req, res){
    res.json(Friends);
});

app.post("/api/friends", function(req, res) {
    
    var newFriendScores = req.body.scores; //scores entered from html
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

          //absolute value of difference between scores of current friends and new friend added
          totalDifference += Math.abs(parseInt(dataBaseFriendScore) - parseInt(newUserScore));
        }
        
        //smallest differnece between friends will be a compatable match
        if(totalDifference <= compatable.difference){
          compatable.name = currentFriendInDatabase.name;
          compatable.difference = totalDifference;
        }
    }
  
    // newFriendScores.routeName = newFriendScores.name.replace(/\s+/g, "").toLowerCase();
  
    // console.log(newFriend);
  
    Friends.push(req.body);
  
    res.json(compatable);

    //data-toggle='modal' data-target='#m1'
    var modal = $("#add-btn");
    modal.attr('data-toggle', 'modal');
    modal.attr('data-target', '#m1');
    //add h3 tag to modal body with compatable.name and compatable.difference
    var modalDiv = $('.modal-body');
    modalDiv.prepend($('<h3>You are compatable with: </h3>') + compatable.name);
    modalDiv.prepend($('<h3>You are have a small difference of only: </h3>') + compatable.difference);


  });

}