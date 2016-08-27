var mapeamentos = [
    {_id: 1, lat: -22.789755, lng: -43.304798, tipo: "MORADOR_RUA"},
    {_id: 2, lat: -22.790027, lng: -43.304946, tipo: "PONTO_DOACAO"}
];

module.exports = function() {
    var controller = {};
    
    controller.listaMapeamentos = function(req, res) {
      res.json(mapeamentos);  
    };
    
    return controller;
};