// Require path folder so file can read file path;
var path = require("path");
var express = require("express");

//Get Requests for each specific page.
module.exports = function(app){
    // Get the path to the public file.
    app.use(express.static(path.join(__dirname, '../public')));

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
      });
    
    app.get("/survey", function(req,res){
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    });
}