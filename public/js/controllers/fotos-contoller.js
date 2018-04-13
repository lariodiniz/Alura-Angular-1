angular.module('alurapic').controller('FotosController', function($scope, $http){
    $scope.fotos = [];
    $scope.filtro = '';

    $http.get('v1/fotos')
        .success(fotos =>
            $scope.fotos = fotos
        )
        .error(erro => 
            console.log(erro)
        );
    
    
    /*let promisse = $http.get('v1/fotos');
    
    promisse
        .then(retorno => 
            $scope.fotos = retorno.data)
        .catch(erro =>
        console.log);*/
});