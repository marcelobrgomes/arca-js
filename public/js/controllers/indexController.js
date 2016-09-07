angular.module("arca").controller("IndexController", function($scope){
    $scope.scripts = [];
    
    //Buscar do lado servidor
    $scope.scripts.push({src:"js/teste.js"});
});