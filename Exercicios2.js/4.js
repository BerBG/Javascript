function mostraMes(numero) {
    const mapeamento = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro']
    return mapeamento[--numero]
}

console.log(mostraMes(12))