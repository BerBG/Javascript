function anoBissexto(ano) {
    const quatro = ano % 4 == 0
    const cem = ano % 100 == 0
    const quatrocentos = ano % 400 == 0

    return (quatro && !cem) || quatrocentos
}

console.log(anoBissexto(2020))
console.log(anoBissexto(2100))