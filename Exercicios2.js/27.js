function inverter(objeto) {
    const paresChaveValorInvertido = Object.entries(objeto).map( parChaveValor => parChaveValor.reverse() )

return Object.fromEntries(paresChaveValorInvertido)
}

console.log(inverter({ a: 1, b: 2, c: 3 }))