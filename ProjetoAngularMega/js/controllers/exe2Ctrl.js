angular.module("exe2").controller("exe2Ctrl", function ($scope, bairros, bairrosAPI, $http, config) {
    $scope.app = "exe 2";

    $scope.bairros = bairros.data;

    $scope.deletarBairro = function (bairro) {
        bairrosAPI.deleteBairro(bairro);
    };

    $scope.editarBairro = function (bairro){
        //bairrosAPI.editBairro(bairro);
        const nomeDoBairro = document.querySelector("#nomeDoBairro");
        const valorDoIptu = document.querySelector("#valorDoIptu");

        bairro.nome = nomeDoBairro.value;
        bairro.iptu = valorDoIptu.value;
        
        console.log(nomeDoBairro + " " + valorDoIptu);
        $http.put(config.baseUrl + "/bairros/" + bairro.id, bairro);
    }; 

    $scope.edit = function (bairro) {
        $scope.bairro = bairro;
    }

});