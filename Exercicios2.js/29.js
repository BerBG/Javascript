function acharSegundoMaior(numeros) {
    const maior = Math.max(...numeros)
    numeros = numeros.filter(num => num < maior)
    const segundoMaior = Math.max(...numeros)
    return segundoMaior
}

console.log(acharSegundoMaior([12, 6, 1, 15]))