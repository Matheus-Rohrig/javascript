//Explicação
//este array contem dois objetos dentro
//Colchetes([]) é utilizado para os array e as chaves({}) para simbolizar que é um objeto
var point = [
    {x:1, y:"Z"},
    {x:3, y:4}
]


//Definição de uma função, para então capturar uma variavel x e somar 1 e caso for uma string irá concatenar
function mais1(x) {
    return x+1;
}

function fatorial(x) {
    var i, produto = 1;
    for(i = 2; i <= x; i++) {
        produto *= i;
    }
    return produto;
}

console.log(fatorial(point[1].y))