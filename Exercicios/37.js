function progAritmetica(n, a1, r) {
    const ultimoTermo = a1 + (n - 1) * r;
    const soma = ((a1 + ultimoTermo) * n) / 2;
    for (let i = 1; i < n; i++) {
        a1 += r;
    }
    return { a1: a1, soma: soma };
}

function progGeometrica(n, a1, r) {
    const soma = a1 * ((1 - r ** n) / (1 - r));
    a1 *= r ** (n - 1);
    return { a1: a1, soma: soma };
}

console.log(progAritmetica(5, 5, 5));
console.log(progGeometrica(5, 5, 5));
