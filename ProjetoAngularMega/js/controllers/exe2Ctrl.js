angular.module("exe2").controller("exe2Ctrl", function ($scope, bairros, bairrosAPI) {
    $scope.app = "exe 2";

    $scope.bairros = bairros.data;

    $scope.deletarBairro = function (bairro) {
        bairrosAPI.deleteBairro(bairro);
    };

    $scope.editarBairro = function (bairro){
        bairrosAPI.editBairro(bairro);
    }; 

    $scope.edit = function (bairro) {
        $scope.bairro = bairro;
    }

});