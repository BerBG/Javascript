function calcularBhaskara(a,b,c) {
    var delta = b**2 - 4*a*c
    var resultados = []

    if (delta < 0) {
        return "delta é negativo"
    } else {
        var x1 = (-b + Math.sqrt(delta)) / (2*a)
        var x2 = (-b - Math.sqrt(delta)) / (2*a)
        resultados.push(x1,x2)
        return resultados
    }
}

var solucoes = calcularBhaskara(3,-5,12)
console.log(solucoes)
