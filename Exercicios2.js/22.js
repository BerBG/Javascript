function funcaoDaSorte(numero) {
    const numeroAleatorio = Math.floor(Math.random() * (10 - 1 + 1)) + 1
    if (numero == numeroAleatorio) { 
        return `Parabéns! O número sorteado foi o ${numeroAleatorio}`
    } else {
        return `Que pena! O número sorteado foi o ${numeroAleatorio}`
    }
}

console.log(funcaoDaSorte(10))
console.log(funcaoDaSorte(9))
console.log(funcaoDaSorte(8))
console.log(funcaoDaSorte(7))
console.log(funcaoDaSorte(6))
console.log(funcaoDaSorte(5))
console.log(funcaoDaSorte(4))
console.log(funcaoDaSorte(3))
console.log(funcaoDaSorte(2))
console.log(funcaoDaSorte(1))