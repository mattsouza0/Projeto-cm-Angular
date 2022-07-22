angular.module("exe2").controller("profissaoCtrl", function ($scope, $location, profissoes, profissoesAPI) {
    $scope.profissoes = profissoes.data;

    $scope.adicionarProfissao = function (profissao) {
        profissoesAPI.saveProfissao(profissao).then(function (response) {
            delete $scope.profissao;
            $scope.profissaoForm.$setPristine();
            $location.path("/profissoes");
        });
    };

    $scope.edit = function (profissao) {
        $scope.profissao = profissao;
    };

    $scope.editarProfissao = function (profissao) {
        profissoesAPI.editProfissao(profissao);
    };

    $scope.deletarProfissao = function (profissao) {
        profissoesAPI.deleteProfissao(profissao);
    };

});

/**
 * angular.module("exe2").controller("bairroCtrl", function ($scope,bairros, bairrosAPI, $location) {
    $scope.edit = function (bairro) {
        $scope.bairro = bairro;
    };

    $scope.deletarBairro = function (bairro) {
        bairrosAPI.deleteBairro(bairro);
    }; 
     
    $scope.editarBairro = function (bairro){
        bairrosAPI.editBairro(bairro);
    }; 
    
});
 */