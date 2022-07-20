angular.module("exe2").controller("bairroCtrl", function ($scope,bairros, bairrosAPI, $location) {
    $scope.bairros = bairros.data;

    $scope.adicionarBairro = function (bairro) {
        bairrosAPI.saveBairro(bairro).then(function (response) {
            delete $scope.bairro;
            $scope.bairroForm.$setPristine();
            $location.path("/bairros");
        });
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