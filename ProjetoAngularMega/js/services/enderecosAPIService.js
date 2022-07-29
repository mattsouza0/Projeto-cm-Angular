angular.module("exe2").factory("enderecosAPI", function ($http, config) {
    var _getEnderecos = function () {
        return $http.get(config.baseUrl + "/enderecos");
    };

    var _saveEndereco = function (endereco) {
        return $http.post(config.baseUrl + "/enderecos", endereco);
    };

    var _deleteEndereco = function (endereco) {
        return $http.delete(config.baseUrl + "/enderecos/" + endereco.id);
    };

    var _editEndereco = function (endereco) {
        return $http.put(config.baseUrl + "/enderecos/" + endereco.id, endereco);
    };

    return {
        getEnderecos: _getEnderecos,
        saveEndereco: _saveEndereco,
        deleteEndereco: _deleteEndereco,
        editEndereco: _editEndereco
        
    }
});