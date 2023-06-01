function menorNumero(numeros) {
    const menor = Math.min(...numeros)
    return menor
}

console.log(menorNumero([10,5,35,65]))
console.log(menorNumero([10,-15,50,3]))
