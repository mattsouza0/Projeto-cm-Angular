angular.module("exe2").controller("exe2Ctrl", function ($scope, bairros, bairrosAPI, enderecos, enderecosAPI) {
    $scope.app = "Exe 2";

    $scope.bairros = bairros.data;
    $scope.enderecos = enderecos.data;

    $scope.editE = function (endereco) {
        $scope.endereco = endereco;
    };

    $scope.editarEndereco = function (endereco) {
        enderecosAPI.editEndereco(endereco);
    };

    $scope.deletarEndereco = function (endereco) {
        enderecosAPI.deleteEndereco(endereco);
    };
    
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