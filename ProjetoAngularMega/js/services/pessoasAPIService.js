angular.module("exe2").factory("pessoasAPI", function ($http, config) {
    var _getPessoas = function () {
        return $http.get(config.baseUrl + "/pessoas");
    };

    var _getPessoa = function (id) {
        return $http.get(config.baseUrl + "/pessoas/" + id);
    };

    var _savePessoa = function (pessoa) {
        return $http.post(config.baseUrl + "/pessoas", pessoa);
    };

    var _deletePessoa = function (pessoa) {
        return $http.delete(config.baseUrl + "/pessoas/" + pessoa.id);
    };

    var _editPessoa = function (pessoa) {
        return $http.put(config.baseUrl + "/pessoas/" + pessoa.id, pessoa);
    };

    return {
        getPessoas: _getPessoas,
        getPessoa: _getPessoa,
        savePessoa: _savePessoa,
        deletePessoa: _deletePessoa,
        editPessoa: _editPessoa
        
    }
});

