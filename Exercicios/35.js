function adicionarVetor(vetorPilha, vetorAdiciona) {
    console.log("Vetor pilha antes da adição: " + vetorPilha);
    console.log("Vetor adicionado: " + vetorAdiciona);

    for (let valor of vetorAdiciona) {
        vetorPilha.push(valor);
    }

    console.log("Vetor pilha após adição: " + vetorPilha);
}

let vetorPilha = [1, 2, 3, 4, 5];
let vetorAdiciona = [6, 7, 8, 9, 10];

adicionarVetor(vetorPilha, vetorAdiciona);