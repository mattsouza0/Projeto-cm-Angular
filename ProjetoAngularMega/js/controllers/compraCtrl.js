angular.module("exe2").controller("compraCtrl", function ($scope, $location, comprasAPI, compras, pessoas) {
    $scope.pessoas = pessoas.data;
    $scope.compras = compras.data;

    $scope.adicionarCompra = function (compra) {
        comprasAPI.saveCompra(compra).then(function (response) {
            delete $scope.compra;
            $scope.compraForm.$setPristine();
            $location.path("/compras");
        });
    };

    $scope.edit = function (compra){
        $scope.compra = compra;
    };

    $scope.editarCompra = function (compra){
        comprasAPI.editCompra(compra);
    };

    $scope.deletarCompra = function (compra){
        comprasAPI.deleteCompra(compra);
    };
});