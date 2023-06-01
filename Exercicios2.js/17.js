function somarNumeros(numeros) {
    let soma = 0
    numeros.forEach(numero => soma += numero)

    return soma
}

console.log(somarNumeros([10,10,10]))
console.log(somarNumeros([15,15,15,15]))