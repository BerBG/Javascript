function removerPropriedade(objeto, propriedade) {
    const resultado = Object.assign({}, objeto)
    delete resultado[propriedade]
    return resultado
}

console.log(removerPropriedade({a: 1, b: 2, c: "a"}, "a"))