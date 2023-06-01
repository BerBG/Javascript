function inverso(numero) {
    if(typeof numero === 'boolean') {
        return !numero
    } else if (typeof numero === 'number') {
        return numero * (-1)
    } else {
        return "Tipo inválido"
    }
}

console.log(inverso(5))
console.log(inverso(-5))
console.log(inverso(true))
console.log(inverso(false))
console.log(inverso("ola"))