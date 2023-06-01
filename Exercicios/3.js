function potencia(base, expoente) {
    var resultado = 1

    for(var i = 1; i <= expoente; i++) {
        resultado *= base
    }

    console.log(resultado)
}

potencia(2,4)