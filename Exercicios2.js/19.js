function calcularMedia(numeros) {
    let soma = 0
    numeros.forEach(numero => soma += numero)
    const media = soma / numeros.length
    return media
}

console.log(calcularMedia([0, 10]))
console.log(calcularMedia([1,2,3,4,5]))