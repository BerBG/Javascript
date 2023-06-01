function removerVogais(frase) {
    return frase.replace(/[aeiou]/ig, '')  // qualquer caractere dentro dos colchetes será considerado uma correspondência
                                           // i após a barra / indica que a busca deve ser case-insensitive
}                                          // g após o modificador i indica que a busca deve ser global

console.log(removerVogais("Olá mundo"))