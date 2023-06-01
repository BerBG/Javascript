function multiplicar(n1,n2) {
    let soma = 0
    for(let i = 1; i<= n2; i++) {
         soma += n1
    }
    return soma
}

console.log(multiplicar(5,5))
console.log(multiplicar(0,7))