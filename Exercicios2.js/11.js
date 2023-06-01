function primeiroultimo(elementos) {
    const primeiro = elementos.shift()
    const ultimo = elementos.pop()
    return [primeiro, ultimo]
}

console.log(primeiroultimo([2,"a",3]))