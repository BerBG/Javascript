function mostraConceito(notas) {
const conceitos = [];

    for(let nota of notas) {
        if(nota <= 4.9) {
            conceitos.push("D");
        } else if (nota <= 6.9) {
            conceitos.push("C");
        } else if (nota <= 8.9) {
            conceitos.push("B");
        } else {
            conceitos.push("A");
        }
    }
    return conceitos
}

const notas = [3.5, 8.3, 6.4, 9];
console.log(mostraConceito(notas));