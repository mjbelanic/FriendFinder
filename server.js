var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();

app.set('port', process.env.PORT || 3000);

require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

app.listen(app.get('port') , function(){
    console.log("App is listening on PORT: " + app.get('port'));
});