function concatenaVetores() {
    const vetorInteiro = [1, 2, 3, 4];
    const vetorString = ['a', 'b', 'c', 'd'];
    const vetorDouble = [0.1, 1.2, 1.3, 2.5];

    const vetorConcatenado = vetorInteiro.concat(vetorString, vetorDouble);
    console.log("Vetor completo: " + vetorConcatenado);
}

concatenaVetores();