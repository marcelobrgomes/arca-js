module.exports = function(app) {
    var controller = app.controllers.mapeamento;
    
    app.get("/mapeamentos", controller.listaMapeamentos);
};