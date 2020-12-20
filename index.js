//retorna um objeto cuja função é contar.
//Tem os métodos (funções) para retornar o valor do contador (get),
//alterar o valor do contator (set) e incrementar o valor do contador em uma unidade (incremente)
let new_contador = function() {
    
    //variável privada
    let i = 0;

    //variáveis publicas
    return {
        get: () =>{
            return i;
        },

        set: (valor) => {
            i = valor;
        },

        incremente: () => {
            i++;
        }

    };

}

// expõem a função paar ser usada como um módulo
module.exports = new_contador;