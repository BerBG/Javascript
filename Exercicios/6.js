function calculaJurosSimples(capInicial, taxaJuros, tempoAplic) {
    var jurosSimples = capInicial * taxaJuros * tempoAplic
    console.log(jurosSimples)
}

function calculaJurosComposto(capInicial, taxaJuros, tempoAplic) {
    var montante = capInicial * Math.pow(1 + taxaJuros, tempoAplic)
    var jurosComposto = montante - capInicial
    console.log(jurosComposto)
}

calculaJurosSimples(2000, 0.04, 4)
calculaJurosComposto(2000, 0.04, 4)