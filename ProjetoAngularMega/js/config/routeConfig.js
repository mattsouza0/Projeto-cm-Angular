angular.module("exe2").config(function ($routeProvider) {
    //View bairros
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

    
    //View endereços
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


    //View profissões
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


    //View pessoas
    $routeProvider.when("/pessoas", {
        templateUrl: "view/pessoa/pessoas.html",
        controller: "pessoaCtrl",
        resolve: {
            pessoas: function (pessoasAPI){
                return pessoasAPI.getPessoas();
            },
            profissoes: function (profissoesAPI) {
                return profissoesAPI.getProfissoes();
            },
            enderecos: function (enderecosAPI) { 
                return enderecosAPI.getEnderecos(); 
            },
            bairros: function (bairrosAPI) {
                return bairrosAPI.getBairros();
            }
        }
    });

    $routeProvider.when("/novaPessoa", {
        templateUrl: "view/pessoa/novaPessoa.html",
        controller: "pessoaCtrl",
        resolve: {
            pessoas: function (pessoasAPI){
                return pessoasAPI.getPessoas();
            },
            profissoes: function (profissoesAPI) {
                return profissoesAPI.getProfissoes();
            },
            enderecos: function (enderecosAPI) { 
                return enderecosAPI.getEnderecos(); 
            },
            bairros: function (bairrosAPI) {
                return bairrosAPI.getBairros();
            }
        }
    });


    //View compras             
    $routeProvider.when("/compras", {
        templateUrl: "view/compra/compras.html",
        controller: "compraCtrl",
        resolve: {
            compras: function (comprasAPI){
                return comprasAPI.getCompras();
            },
            pessoas: function (pessoasAPI){
                return pessoasAPI.getPessoas();
            }
        }
    });

    $routeProvider.when("/novaCompra", {
        templateUrl: "view/compra/novaCompra.html",
        controller: "compraCtrl",
        resolve: {
            compras: function (comprasAPI){
                return comprasAPI.getCompras();
            },
            pessoas: function (pessoasAPI){
                return pessoasAPI.getPessoas();
            }
        }
    });


    //View error e boas vindas
    $routeProvider.when("/boasVindas", {
        templateUrl: "view/boasVindas.html"
    });

    $routeProvider.when("/error", {
        templateUrl: "view/error.html"
    });

    $routeProvider.otherwise({redirectTo: "/boasVindas"});
});
