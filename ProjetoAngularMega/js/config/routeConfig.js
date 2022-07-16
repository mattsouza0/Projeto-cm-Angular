angular.module("exe2").config(function ($routeProvider) {
    $routeProvider.when("/bairros", {
        templateUrl: "view/bairros.html",
        controller: "exe2Ctrl",
        resolve: {
            bairros: function (bairrosAPI) {
                return bairrosAPI.getBairros();
            }
        }
    });

    $routeProvider.when("/novoBairro", {
        templateUrl: "view/novoBairro.html",
        controller: "novoBairroCtrl" 
    });

    $routeProvider.when("/boasVindas", {
        templateUrl: "view/boasVindas.html"
    });

    $routeProvider.when("/error", {
        templateUrl: "view/error.html"
    });

    $routeProvider.otherwise({redirectTo: "/boasVindas"});
});
