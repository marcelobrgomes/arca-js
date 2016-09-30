angular.module("arca", ["ngRoute"]).config(function($routeProvider){
    $routeProvider.when("/mapeamentosExemplo", {
        templateUrl: "partials/mapeamentosExemplo.html",
        controller: "MapeamentoExemploController"
    });
    
    $routeProvider.when("/mapa", {
        templateUrl: "partials/mapa.html",
        controller: "ArcaController"
    });
    
    $routeProvider.otherwise({redirectTo: "/mapeamentosExemplo"});
});