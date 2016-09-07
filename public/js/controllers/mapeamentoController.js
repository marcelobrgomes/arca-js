angular.module("arca").controller("MapeamentoController", function($scope, $timeout){
    $scope.map;
        $scope.markers = [];
        $scope.markerId = 1;
    
    $timeout(function(){
       var latlng = new google.maps.LatLng(35.7042995, 139.7597564);
            var myOptions = {
                zoom: 8,
                center: latlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            $scope.map = new google.maps.Map(document.getElementById("map"), myOptions); 
            $scope.overlay = new google.maps.OverlayView();
            $scope.overlay.draw = function() {}; // empty function required
            $scope.overlay.setMap($scope.map);
            $scope.element = document.getElementById('map');
           /* $scope.hammertime = Hammer($scope.element).on("hold", function(event) {
                $scope.addOnClick(event);
            });*/
    }, 100);
    
});