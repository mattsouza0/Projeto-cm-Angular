angular.module("exe2").factory("comprasAPI", function ($http, config) {
    var _getCompras = function () {
        return $http.get(config.baseUrl + "/compras");
    };

    var _getCompra = function (id) {
        return $http.get(config.baseUrl + "/compras/" + id);
    };

    var _saveCompra = function (compra){
        return $http.post(config.baseUrl + "/compras", compra);
    };

    var _deleteCompra = function (compra){
        return $http.delete(config.baseUrl + "/compras/" + compra.id);
    };

    var _editCompra = function (compra) {
        return $http.put(config.baseUrl + "/compras/" + compra.id, compra);
    };

    return {
        getCompras: _getCompras,
        getCompra: _getCompra,
        saveCompra: _saveCompra,
        deleteCompra: _deleteCompra,
        editCompra: _editCompra
    }
});