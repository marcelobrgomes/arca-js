var express = require("express");

//module.exports é retornado quando executado o require
module.exports = function() {
    var app = express();
    
    //variavel de ambiente
    app.set("port", 3001);
    
    //middleware
    app.use(express.static("./public"));
    
    //Template engine EJS
    app.set("view engine", "ejs");
    app.set("views", "./app/views");
    
    //Routes
    var home = require("../app/routes/home");
    home(app);
    
    return app;
};