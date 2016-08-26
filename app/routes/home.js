module.exports = function(app) {
    var controller = require("../controllers/home")();
    
    app.get("/", controller.index);  
    app.get("/index", controller.index);  
};