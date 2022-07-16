angular.module("exe2").controller("exe2Ctrl", function ($scope, bairros, bairrosAPI) {
    $scope.app = "Exe 2";

    $scope.bairros = bairros.data;

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