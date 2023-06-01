function multiplicaPorParametro(numericos, numero) {
    const resultado1 = [];

    for (let elemento of numericos) {
        resultado1.push(elemento * numero);
    }

    return resultado1;
}

function multiplicaSeMaior5(numericos, numero) {
    const resultado2 = [];

    for (let elemento of numericos) {
        if (elemento > 5) {
            resultado2.push(elemento * numero);
        } else {
            resultado2.push(elemento);
        }
    }

    return resultado2;
}

let numericos = [1,6];

console.log(multiplicaPorParametro(numericos, 2));
console.log(multiplicaSeMaior5(numericos, 2));