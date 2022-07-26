angular.module("exe2").factory("itensDeCompraAPI", function ($http, config) {
    var _getItensDeCompra = function () {
        return $http.get(config.baseUrl + "/itensDeCompra");
    };

    var _getItemDeCompra = function (id) {
        return $http.get(config.baseUrl + "/itensDeCompra/" + id);
    };

    var _saveItemDeCompra = function (item) {
        return $http.post(config.baseUrl + "/itensDeCompra", item);
    };

    var _deleteItemDeCompra = function (item) {
        return $http.delete(config.baseUrl + "/itensDeCompra/" + item.id);
    };

    var _editItemDeCompra = function (item) {
        return $http.put(config.baseUrl + "/itensDeCompra/" + item.id, item);
    };


    return {
        getItensDeCompra: _getItensDeCompra,
        getItemDeCompra: _getItemDeCompra,
        saveItemDeCompra: _saveItemDeCompra,
        deleteItemDeCompra: _deleteItemDeCompra,
        editItemDeCompra: _editItemDeCompra
    }
});