function analisarPontuacao(pontuacoes) {
    var pontuacoesArray = pontuacoes.split(" ")
    var maiorPontuacao = parseInt(pontuacoesArray[0])
    var menorPontuacao = parseInt(pontuacoesArray[0])
    var recorceBatido = 0
    var piorJogo = 0

    for (var i = 1; i < pontuacoesArray.length; i++) {
        var pontuacaoAtual = parseInt(pontuacoesArray[i])

        if (pontuacaoAtual > maiorPontuacao) {
            maiorPontuacao = pontuacaoAtual
            recorceBatido++ 
        } else if (pontuacaoAtual < menorPontuacao) {
            menorPontuacao = pontuacaoAtual
            piorJogo = i
        }
    }

    return [recorceBatido, piorJogo + 1]
}

var pontuacoesString = "10 8 12 15 7 1 16 2 17 0";
var resultado = analisarPontuacao(pontuacoesString);
console.log(resultado);
