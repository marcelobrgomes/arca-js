var mapeamentos = [
    {_id: 1, lat: -22.789755, lng: -43.304798, tipo: "MORADOR_RUA"},
    {_id: 2, lat: -22.790027, lng: -43.304946, tipo: "PONTO_DOACAO"}
];

module.exports = function() {
    var controller = {};
    
    controller.listaMarkers = function(req, res) {
      res.json(mapeamentos);  
    };
    
    controller.getMarker = function(req, res) {
        var idMarker = req.params.id;
        
        var marker = mapeamentos.filter(function(marker){
            return idMarker == marker._id;
        })[0];
        
        marker ? res.json(marker) : res.status(404).send("Mapeamento não encontrado.");
    };
    
    return controller;
};