function parIndicePar(numeros) {
    const resultado = []

    for(let i = 0; i < numeros.length; i += 2) {
        const numeroPar = numeros[i] % 2 == 0

        if(numeroPar)
            resultado.push(numeros[i])
    }
    return resultado
}

console.log(parIndicePar([1,2,3,4]))
console.log(parIndicePar([10,70,22,43]))