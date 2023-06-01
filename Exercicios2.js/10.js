function repetir(multiplicador) {
    let resultado = ''
    for(let i = 0; i < multiplicador; i++) {
        resultado += '+'
    }
    return resultado
}

console.log(repetir(2))
console.log(repetir(4))