function trocaVetor(vetorA,vetorB){
    [vetorA, vetorB] = [vetorB, vetorA];
    return [vetorA,vetorB];
}
const vetorA = [5,5,5,5,5];
const vetorB = [1,1,1,1,1,1];
console.log(trocaVetor(vetorA, vetorB));