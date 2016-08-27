var express = require("express");
var load = require("express-load");

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
    load("models", {cwd: "app"})
        .then("controllers")
        .then("routes")
        .into(app);
    
    return app;
};