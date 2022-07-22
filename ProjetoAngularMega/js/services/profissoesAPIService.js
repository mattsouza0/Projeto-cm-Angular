angular.module("exe2").factory("profissoesAPI", function ($http, config) {
    var _getProfissoes = function (){
        return $http.get(config.baseUrl + "/profissoes");
    };

    var _getProfissao = function (id) {
        return $http.get(config.baseUrl + "/profissoes/" + id);
    };

    var _saveProfissao = function (profissao) {
        return $http.post(config.baseUrl + "/profissoes", profissao);
    };

    var _deleteProfissao = function (profissao) {
        return $http.delete(config.baseUrl + "/profissoes/" + profissao.id);
    };

    var _editProfissao = function (profissao) {
        return $http.put(config.baseUrl + "/profissoes/" + profissao.id, profissao);
    };

    return {
        getProfissao: _getProfissao,
        getProfissoes: _getProfissoes,
        saveProfissao: _saveProfissao,
        deleteProfissao: _deleteProfissao,
        editProfissao: _editProfissao
    }
});