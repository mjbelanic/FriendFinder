var path = require("path");
var express = require("express");

module.exports = function(app){
    // Get the path to the public file.
    app.use(express.static(path.join(__dirname, '../public')));

    app.get("/api/friends", function(req, res) {
        res.sendFile(path.join(__dirname, "../data/friends.js"));
      });
    
    app.post("/api/friends", function(req,res){
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    });
}