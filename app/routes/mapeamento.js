module.exports = function(app) {
    var controller = app.controllers.mapeamento;
    
    app.get("/markers", controller.listaMarkers);
    app.get("/markers/:id", controller.getMarker);
};