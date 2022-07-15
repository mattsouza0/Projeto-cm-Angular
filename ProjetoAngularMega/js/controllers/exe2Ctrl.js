angular.module("exe2").controller("exe2Ctrl", function ($scope, bairros, bairrosAPI) {
    $scope.app = "exe 2";

    $scope.bairros = bairros.data;

    $scope.deletarBairro = function (bairro) {
        bairrosAPI.deleteBairro(bairro);
    };

    $scope.editarBairro = function (bairro){
        bairrosAPI.editBairro(bairro).then(function (response) {
            delete $scope.bairro;
            $scope.bairroForm.$setPristine();
            $location.path("/bairros");
        });
    }; 

    $scope.edit = function (bairro) {
        $scope.bairro = bairro;
    }

});