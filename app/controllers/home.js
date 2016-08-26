module.exports = function() {
    var controller = {};
    
    controller.index = function(req,res) {
        res.render("index", {nomeApp: "ARCA"});
    };
    
    return controller;
};