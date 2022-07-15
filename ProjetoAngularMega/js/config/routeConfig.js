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
        controller: "bairrosCtrl"
    });
    
    /*
    $routeProvider.when("/editarBairro", {
        templateUrl: "view/editarBairro.html",
        controller: "exe2Ctrl",
        resolve: {
            bairros: function (bairrosAPI) {
                return bairrosAPI.getBairros();
            }
        }
    });
    */

    $routeProvider.when("/boasVindas", {
        templateUrl: "view/boasVindas.html",
        controller: "exe2Ctrl"
    });

    $routeProvider.when("/error", {
        templateUrl: "view/error.html"
    });

    $routeProvider.otherwise({redirectTo: "/boasVindas"});
});
