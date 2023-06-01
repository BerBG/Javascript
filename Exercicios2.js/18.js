function despesasTotais(produtos) {
    let soma = 0
    const apenasPreco = produto => soma += produto.preco
    produtos.forEach(apenasPreco)
    return soma
}

console.log(despesasTotais([
    { nome: "Jornal online", categoria: "Informação", preco: 80.50 },
    { nome: "Cinema", categoria: "Entretenimento", preco: 150.50 }
]))