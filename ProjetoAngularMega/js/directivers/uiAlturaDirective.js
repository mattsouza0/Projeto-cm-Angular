angular.module("exe2").directive("uiAltura", function (){
    return {
        require: "ngModel",
        link: function (scope, element, attrs, ctrl) {
            var _formatAltura = function (altura) {
                altura = altura.replace(/[^0-9]+/g, "");
                if(altura > 1) {
                    altura = altura.substring(0,1) + "," + altura.substring(1,3);
                }
                return altura;
            };
            element.bind("keyup", function () {
                ctrl.$setViewValue(_formatAltura(ctrl.$viewValue));
                ctrl.$render();
            });
        }
    };
});