angular.module('alurapic')
    .controller('FotoController', function($scope, $http){
    
        $scope.foto = {};
        $scope.mensagem = '';

        $scope.submeter = function(){
            if ($scope.formulario.$valid){
                $http.post('v1/fotos', $scope.foto)
                .success(                
                    () => {
                        $scope.foto = {};
                        $scope.mensagem = "Foto incluída com Sucesso";
                    })
                .error(                    
                    erro => {
                        console.log(erro);
                        $scope.mensagem = "Não foi possivel incluir a foto.";                    
                    }
                );
            };            
        };
});