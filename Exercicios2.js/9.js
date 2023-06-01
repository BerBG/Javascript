function repetir(elemento, multiplicador) {
    let resultado = ''
    for(let i = 0; i < multiplicador; i++) {
        resultado += elemento
    }
    return resultado
}

console.log(repetir(3,2))
console.log(repetir('a',2))