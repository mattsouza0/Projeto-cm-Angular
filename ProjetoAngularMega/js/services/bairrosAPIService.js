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

    var _deleteBairro = function (bairro) {
        return $http.delete(config.baseUrl + "/bairros/" + bairro.id);
    };

    var _editBairro = function (bairro) {
        const nomeDoBairro = document.querySelector("#nomeDoBairro");
        const valorDoIptu = document.querySelector("#valorDoIptu");

        bairro.nome = nomeDoBairro.value;
        bairro.iptu = valorDoIptu.value;
        
        return $http.put(config.baseUrl + "/bairros/" + bairro.id, bairro);
    };

/*

NO EDIT USAR A MSM LOGICA DO Q TA NO EXE2CTRL 

    app.put('/vouchers/:id' , function(req,res){
        const id = req.params.id;
        res.status(200).send({
            id: id
        });
*/
    return {
        getBairros: _getBairros,
        getBairro: _getBairro,
        saveBairro: _saveBairro,
        deleteBairro: _deleteBairro,
        editBairro: _editBairro
    }
});