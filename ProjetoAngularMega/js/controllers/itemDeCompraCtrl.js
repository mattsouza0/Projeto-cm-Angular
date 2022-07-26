angular.module("exe2").controller("itemDeCompraCtrl", function ($scope, $location, itensDeCompraAPI, itensDeCompra, compras) {
    $scope.compras = compras.data;
    $scope.itensDeCompra = itensDeCompra.data;

    $scope.adicionarItem = function (itemDeCompra) {
        itensDeCompraAPI.saveItemDeCompra(itemDeCompra).then(function (response) {
            delete $scope.itemDeCompra;
            $scope.itemForm.$setPristine();
            $location.path("/itemDeCompra");
        });
    };

    $scope.edit = function (itemDeCompra) {
        $scope.itemDeCompra = itemDeCompra;
    }

    $scope.editarItem = function (itemDeCompra) {
        itensDeCompraAPI.editItemDeCompra(itemDeCompra);
    };

    $scope.deletarItem = function (itemDeCompra) {
        itensDeCompraAPI.deleteItemDeCompra(itemDeCompra);
    };

});