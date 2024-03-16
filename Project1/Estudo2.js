//Explicação
//este objeto contem dois objetos, em que cada objeto há dois arrays um dentro do outro, sendo necessário utilizar [numéro do primeiro array][número do array dentro do primeiro array]
//Colchetes([]) é utilizado para os array e as chaves({}) para simbolizar que é um objeto
var data = {
    trial1:[[1, 2], [3, 4]],
    trial2:[[5, 6], [7, 8]]
}

function fatorial(x) {
    var i, produto = 1
    for(i = 2; i <= x; i++) {
        produto *= i;
    }

    return produto;
}

console.log(fatorial(data.trial2[1][1]))
