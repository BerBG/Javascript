function calcularFatorial(numero) {
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}


console.log(calcularFatorial(5))
console.log(calcularFatorial(3))
console.log(calcularFatorial(1))
console.log(calcularFatorial(10))
