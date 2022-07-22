angular.module("exe2").config(function ($routeProvider) {
    $routeProvider.when("/bairros", {
        templateUrl: "view/bairro/bairros.html",
        controller: "bairroCtrl",
        resolve: {
            bairros: function (bairrosAPI) {
                return bairrosAPI.getBairros();
            }
        }
    });

    $routeProvider.when("/novoBairro", {
        templateUrl: "view/bairro/novoBairro.html",
        controller: "bairroCtrl",         
        resolve: {
            bairros: function (bairrosAPI) {
                return bairrosAPI.getBairros();
            }
        }
    });                                      
    

    $routeProvider.when("/enderecos", {
        templateUrl: "view/endereco/enderecos.html",
        controller: "enderecoCtrl",
        resolve: {                                
            enderecos: function (enderecosAPI) { // esse enderecos q vai nos parametros do controller 
                return enderecosAPI.getEnderecos(); 
            },                                       
            bairros: function (bairrosAPI) {    //quantro troca de tela eu tenho qq carregar a api dos bancos q eu quero usar nessa tela
                return bairrosAPI.getBairros(); 
            }
        }                                             
    });

    $routeProvider.when("/novoEndereco", {
        templateUrl: "view/endereco/novoEndereco.html",
        controller: "enderecoCtrl",
        resolve: {
            bairros: function (bairrosAPI) {
                return bairrosAPI.getBairros();
            },
            enderecos: function (enderecosAPI) { 
                return enderecosAPI.getEnderecos(); 
            }
        }
    });

    $routeProvider.when("/profissoes", {
        templateUrl: "view/profissao/profissoes.html",
        controller: "profissaoCtrl",
        resolve: {
            profissoes: function (profissoesAPI) {
                return profissoesAPI.getProfissoes();
            }
        }
    });

    $routeProvider.when("/novaProfissao", {
        templateUrl: "view/profissao/novaProfissao.html",
        controller: "profissaoCtrl",
        resolve: { // TALVEZ N PRECISE CARREGAR ESTA API (TESTAR DPS QUNDO TD TIVER PRONTO)
            profissoes: function (profissoesAPI) {
                return profissoesAPI.getProfissoes();
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
