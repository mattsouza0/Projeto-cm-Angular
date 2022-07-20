angular.module("exe2").config(function ($routeProvider) {
    
    $routeProvider.when("/bairros", {
        templateUrl: "view/bairros.html",
        controller: "exe2Ctrl",
        resolve: {
            bairros: function (bairrosAPI) {
                return bairrosAPI.getBairros();
            },
            enderecos: function (enderecosAPI) { 
                return enderecosAPI.getEnderecos(); 
            }, 
        }
    });

    $routeProvider.when("/novoBairro", {
        templateUrl: "view/novoBairro.html",
        controller: "novoBairroCtrl"         //PARA USAR AS FUNCOES DE DELTE E EDIT DE BAIRROS CREIO Q TENH Q CARREGA-LAS AQ
    });                                      //TESTAR DPS

    $routeProvider.when("/enderecos", {
        templateUrl: "view/enderecos.html",
        controller: "exe2Ctrl",
        resolve: {                                // 1º CRIAR A API ARA FUNFAR
            enderecos: function (enderecosAPI) { // esse enderecos q vai nos parametros do controller 
                return enderecosAPI.getEnderecos(); //criar a API de endereços e criar essa funçao no ederecosAPI
            },                                       // capaz q eu vou ter q caregar o outro back dos bairos q nem na listatelefonica
            bairros: function (bairrosAPI) {         //quantro troca de tela eu tenho qq carregar a api dos bancos q eu quero usar nessa tela
                return bairrosAPI.getBairros(); //se der erro usar o bairro: function(bairrosAPI){getBairro();}; no lugar
            }
        }                                             
    });

    $routeProvider.when("/novoEndereco", {
        templateUrl: "view/novoEndereco.html",
        controller: "novoEnderecoCtrl",
        resolve: {
            bairros: function (bairrosAPI) {
                return bairrosAPI.getBairros();
            }
        }
    });

    $routeProvider.when("/boasVindas", {
        templateUrl: "view/boasVindas.html"
    });

    $routeProvider.when("/error", {
        templateUrl: "view/error.html"
    });

    $routeProvider.otherwise({redirectTo: "/boasVindas"});
});
