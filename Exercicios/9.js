function arredondaNota(nota) {
    if (nota < 38) {
        return nota
    }

    const proximoMultiplo = Math.ceil(nota / 5) * 5

    if (proximoMultiplo - nota < 3) {
        return proximoMultiplo
    } else {
        return nota
    }
}

console.log(arredondaNota(84))
console.log(arredondaNota(29))
console.log(arredondaNota(38))