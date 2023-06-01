function filtrarPorQuantidade(numeros, quantidade) {
    let numerosFiltrados = numeros.filter(numero => numero.toString().length == quantidade)
    return numerosFiltrados
}

console.log(filtrarPorQuantidade([38,2,365,10,125,11], 2))