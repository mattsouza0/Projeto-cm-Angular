angular.module("exe2").controller("exe2Ctrl", function ($scope, bairros) {
    $scope.app = "exe 2";

    $scope.bairros = bairros.data;
});