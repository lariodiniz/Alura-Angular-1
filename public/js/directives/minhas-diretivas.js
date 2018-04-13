angular.module('MinhasDiretivas', [])
.directive('meuPainel', function(){
    var ddo = {};
    ddo.restric = "AE";

    ddo.scope = {
        titulo: '@'
    };

    ddo.transclude = true;

    ddo.templateUrl = 'js/directives/meu-painel.html'


    return ddo;

}).directive('minhaFoto', function(){
    var ddo = {};
    ddo.restric = "AE";

    ddo.scope = {
        titulo: '@',
        url: '@'
    };

    ddo.transclude = true;

    ddo.templateUrl = 'js/directives/minha-foto.html'


    return ddo;

})