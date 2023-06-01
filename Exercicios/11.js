function verificaAnoBissexto(ano) {
    if((ano % 4 == 0 && ano % 100 !== 0) || ano % 400 == 0) {
        console.log(ano + " é um ano bissexto")
        return true
    } else {
        console.log(ano + " não é um ano bissexto")
        return false
    }
}

console.log(verificaAnoBissexto(2020))
console.log(verificaAnoBissexto(1900))
console.log(verificaAnoBissexto(2000))
console.log(verificaAnoBissexto(2023))