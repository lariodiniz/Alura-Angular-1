angular.module('meusServicos', ['ngResource'])
.factory('recursoFoto', function($resource) {
    return $resource('v1/fotos/:fotoId', null, {
        update : {
            method: 'PUT'
        }
    });
}).factory('cadastroDeFotos', function(recursoFoto, $q) {
    var servico = {};
    servico.cadastrar = (foto) =>{
        return $q(function (resolve, reject){
            if (foto._id){
                recursoFoto.update(
                    {fotoId:foto._id},
                    foto,
                    () => resolve({
                        mensagem: "A Foto "+foto.titulo +" foi alterada com Sucesso",
                        inclusao: false
                        }),
                    erro => {
                        console.log(erro);
                        reject( {
                            mensagem: "Não foi possivel alterar a foto."+foto.titulo
                        });                    
                    }
                );                    
            }else{
                recursoFoto.save(
                    foto,
                    () => resolve({
                        mensagem: "Foto "+foto.titulo+" incluída com Sucesso",
                        inclusao: true
                        }),
                    erro => {
                        console.log(erro);
                        reject({
                            mensagem: "Não foi possivel incluir a foto "+ foto.titulo
                        });
                    }
                );                    
            }
        });
    };

    return servico;
});