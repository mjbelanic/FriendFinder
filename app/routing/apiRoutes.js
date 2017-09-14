var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");

module.exports = function(app){
    // Get the path to the public file.
    app.use(express.static(path.join(__dirname, '../public')));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.text());
    app.use(bodyParser.json({ type: "application/vnd.api+json" }));

    app.get("/api/friends", function(req, res) {
        res.sendFile(path.join(__dirname, "../data/friends.js"));
      });
    
    app.post("/api/friends", function(req,res){
        var total = 0;
        for(var i in req.body.scores){
            req.body.scores[i] = parseInt(req.body.scores[i]);
            total += parseInt(req.body.scores[i]);
        }
        var friends = require("../data/friends.js");
        var bestFriend;
        var closestScore = 50;
        for(var j = 0; j < friends.length; j++){
            var currentScore = 0;
            for(var k = 0; k < friends[j].scores.length; k++){
                currentScore += friends[j].scores[k];
            }
            if(currentScore > total){
                currentScore = currentScore - total;
            }else{
                currentScore = total - currentScore;
            }
            if(currentScore < closestScore){
                closestScore = currentScore;
                bestFriend = friends[j];
            }
        }
        friends.push(req.body);
        console.log(friends);
        res.send(bestFriend.name);
    });
}