function palavraIgual(palavraSemelhante, arrayPalavras) {
    return arrayPalavras.filter(palavra => palavra.includes(palavraSemelhante))
}

console.log(palavraIgual("java", ["javascript", "java", "c++"]))