angular.module("arca", ["ngRoute"]).config(function($routeProvider){
    $routeProvider.when("/mapeamentos", {
        templateUrl: "partials/mapeamentos.html",
        controller: "MapeamentoController"
    });
    
    $routeProvider.otherwise({redirectTo: "/mapeamentos"});
});