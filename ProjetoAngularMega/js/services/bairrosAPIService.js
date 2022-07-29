angular.module("exe2").factory("bairrosAPI", function ($http, config) {
    var _getBairros = function () {
        return $http.get(config.baseUrl + "/bairros");
    };

    var _saveBairro = function (bairro) {
        return $http.post(config.baseUrl + "/bairros", bairro);
    };

    var _deleteBairro = function (bairro) {
        return $http.delete(config.baseUrl + "/bairros/" + bairro.id);
    };

    var _editBairro = function (bairro) {  
        return $http.put(config.baseUrl + "/bairros/" + bairro.id, bairro);
    };

    return {
        getBairros: _getBairros,
        saveBairro: _saveBairro,
        deleteBairro: _deleteBairro,
        editBairro: _editBairro
    }
});