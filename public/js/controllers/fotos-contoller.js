angular.module('alurapic').controller('FotosController', function($scope, recursoFoto){
    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';
    
    recursoFoto.query(
        fotos => $scope.fotos = fotos,
        erro => console.log(erro)
    );
    
    $scope.remover = function(foto){

        recursoFoto.delete(
            {fotoId: foto._id},
            () => {
                let indiceFoto = $scope.fotos.indexOf(foto);
                $scope.fotos.splice(indiceFoto, 1);
                $scope.mensagem = 'Foto '+foto.titulo+' foi removido com sucesso!'
            },
            erro => {
                console.log(erro)
                $scope.mensagem = 'Erro ao remover a doto '+foto.titulo+'.'
            }
        );
    };
});