var mapeamentos = [
              {
                  _id: 1,
                  tipo : 'Morador de Rua',
                  complemento: 'Conheça um pouco do perfil do(s) morador(es) de rua e veja como pode ajudar:',
                  qtdHomens: 2,
                  qtdMulheres: 0,
                  qtdMenores: 4,
                  obs : 'As crianças ficam no sinal pedindo dinheiro e os homens dormem na área externa do Gelo e Cevada.',
                  lat : -22.790759,
                  lng : -43.3052412
              }
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