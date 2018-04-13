angular.module('alurapic').controller('FotosController', function($scope, $http){
    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';

    $http.get('v1/fotos')
        .success(fotos =>
            $scope.fotos = fotos
        )
        .error(erro => 
            console.log(erro)
        );
    
    $scope.remover = function(foto){
        $http.delete('v1/fotos/'+foto._id)
        .success(() => {
            let indiceFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceFoto, 1);
            $scope.mensagem = 'Foto '+foto.titulo+' foi removido com sucesso!'
        })
        .error(erro => {
            console.log(erro)
            $scope.mensagem = 'Erro ao remover a doto '+foto.titulo+'.'
        }
            
        );
    }
    
    /*let promisse = $http.get('v1/fotos');
    
    promisse
        .then(retorno => 
            $scope.fotos = retorno.data)
        .catch(erro =>
        console.log);*/
});