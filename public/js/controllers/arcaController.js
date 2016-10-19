var app = angular.module("arca");

app.controller("ArcaController", function($scope, $timeout, $http){
    $scope.map;
    $scope.markers = [];
    $scope.markerId = 1;
    
    
    $timeout(function(){
        
        $http.get('/markers').success(function(mapeamentos) {
            
            // Variável que indica as coordenadas do centro do mapa
            var center = new google.maps.LatLng(mapeamentos[0].lat, mapeamentos[0].lng);

            var myOptions = {
                zoom: 17,
                center: center,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            $scope.map = new google.maps.Map(document.getElementById("map"), myOptions); 
            $scope.overlay = new google.maps.OverlayView();
            $scope.overlay.draw = function() {}; // empty function required
            $scope.overlay.setMap($scope.map);
            $scope.element = document.getElementById('map');

            
            for (i = 0; i < mapeamentos.length; i++){
                createMarker(mapeamentos[i]);
            }

            $scope.openInfoWindow = function(e, selectedMarker){
                e.preventDefault();
                google.maps.event.trigger(selectedMarker, 'click');
            }
        }).error(function(statusText) {
            alert("Falha ao tentar obter os mapeamentos.");
            console.log(statusText);
        });

        var createMarker = function (info){
            var marker = new google.maps.Marker({
                map: $scope.map,
                position: new google.maps.LatLng(info.lat, info.lng),
                title: info.tipo
            });

            // Variável que define o conteúdo da Info Window
            var conteudo = '<div id="iw-container">' +
                    '<div class="iw-title">'  + info.tipo + '</div>' +
                    '<div class="iw-content">' +
                      '<div class="iw-subTitle">Informações</div>' +
                      '<p>' + info.complemento + '</p>' +
                    
                      '<img src="images/vistalegre.jpg" alt="Fabrica de Porcelana da Vista Alegre" height="115" width="83">' +
                      '<ul>' +
                        '<li>Homens: ' + info.qtdHomens + '</li>' +
                        '<li>Mulheres: ' + info.qtdMulheres + '</li>' +
                        '<li>Menores: ' + info.qtdMenores + '</li>' +
                      '</ul>' +
                      '<p>' + info.obs + '</p>' +
                    '</div>' +
                    '<div class="iw-bottom-gradient"></div>' +
                  '</div>';
          
            marker.content = conteudo;
            
            var infoWindow = new google.maps.InfoWindow();

            google.maps.event.addListener(marker, 'click', function(){
                infoWindow.setContent(marker.content);
                infoWindow.open($scope.map, marker);
            });

            $scope.markers.push(marker);
        }  
    }, 100);
});