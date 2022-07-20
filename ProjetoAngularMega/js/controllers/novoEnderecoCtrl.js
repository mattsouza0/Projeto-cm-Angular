angular.module("exe2").controller("novoEnderecoCtrl", function ($scope, enderecosAPI, $location, bairros) {
    $scope.bairros = bairros.data;
            
    $scope.adicionarEndereco = function (endereco) {
        enderecosAPI.saveEndereco(endereco).then(function (response) {
            delete $scope.endereco;
            $scope.enderecoForm.$setPristine();
            $location.path("/enderecos");
        });
    };
    
});