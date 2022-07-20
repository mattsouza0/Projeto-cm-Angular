angular.module("exe2").controller("enderecoCtrl", function ($scope, $location, enderecosAPI, enderecos, bairros) {
    $scope.bairros = bairros.data;
    $scope.enderecos = enderecos.data;
            
    $scope.adicionarEndereco = function (endereco) {
        enderecosAPI.saveEndereco(endereco).then(function (response) {
            delete $scope.endereco;
            $scope.enderecoForm.$setPristine();
            $location.path("/enderecos");
        });
    };

    $scope.editE = function (endereco) {
        $scope.endereco = endereco;
    };

    $scope.editarEndereco = function (endereco) {
        enderecosAPI.editEndereco(endereco);
    };

    $scope.deletarEndereco = function (endereco) {
        enderecosAPI.deleteEndereco(endereco);
    };
    
});