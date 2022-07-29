angular.module("exe2").factory("loadingInterceptor", function ($q, $rootScope, $timeout) {
    return {
        request: function (config) {
            $rootScope.loading = true;
            return config;
        },
        requestError: function (rejection) {
            $rootScope.loading = false;
            return $q.reject(rejection);
        },
        response: function (response) {
            /*
            //teste da tela de carregamento
            $timeout(function () { 
                $rootScope.loading = false;
            }, 500);
            */
            $rootScope.loading = false;
            return response;
        },
        responseError: function (rejection) {
            $rootScope.loading = false;
            return $q.reject(rejection);
        }
    };
});