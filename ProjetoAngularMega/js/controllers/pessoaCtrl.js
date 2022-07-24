angular.module("exe2").controller("pessoaCtrl", function ($scope, $location, pessoasAPI, pessoas, enderecos, profissoes, bairros) {
    $scope.bairros = bairros.data; //talvez n precise testar dps
    $scope.enderecos = enderecos.data;
    $scope.profissoes = profissoes.data;
    $scope.pessoas = pessoas.data;

    $scope.adicionarPessoa = function (pessoa) {
        pessoasAPI.savePessoa(pessoa).then(function (response) {
            delete $scope.pessoa;
            $scope.pessoaForm.$setPristine();
            $location.path("/pessoas");
        });
    };

    $scope.edit = function (pessoa) {
        $scope.pessoa = pessoa;
    };

    $scope.editarPessoa = function (pessoa) {
        pessoasAPI.editPessoa(pessoa);
    };

    $scope.deletarPessoa = function (pessoa) {
        pessoasAPI.deletePessoa(pessoa);
    };

});