angular.module("exe2").factory("bairrosAPI", function ($http, config) {
    var _getBairros = function () {
        return $http.get(config.baseUrl + "/bairros");
    };

    var _getBairro = function (id) {
        return $http.get(config.baseUrl + "/bairros/" + id);
    };

    var _saveBairro = function (bairro) {
        return $http.post(config.baseUrl + "/bairros", bairro);
    };

    return {
        getBairros: _getBairros,
        getBairro: _getBairro,
        saveBairro: _saveBairro
    }
});