angular.module("exe2").controller("novoBairroCtrl", function ($scope, bairrosAPI, $location) {

    $scope.adicionarBairro = function (bairro) {
        bairrosAPI.saveBairro (bairro).then(function (response) {
            delete $scope.bairro;
            $scope.bairroForm.$setPristine();
            $location.path("/bairros");
        });
    };
    
});