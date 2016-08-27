var express = require("express");
var load = require("express-load");
var bodyParser = require("body-parser");

//module.exports é retornado quando executado o require
module.exports = function() {
    var app = express();
    
    //variavel de ambiente
    app.set("port", 3001);
    
    //middlewares
    app.use(express.static("./public"));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(require("method-override")());
    
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