function contParImpar() {
    const numeros = [1,2,3,4,5,6,7,8,9,10,0]

    let resPar = 0;
    let resImpar = 0;

    for(let numero of numeros) {
        if ( numero % 2 == 0) {
            resPar++;
        } else {
            resImpar++;
        }
    }

    console.log("Pares: " + resPar + ", Impares: " + resImpar);
}

contParImpar();