function contaNumeroDentroIntervalo() {
    const numeros = [1, 10, 12, 14, 16, 20, 22];

    let contNumeroDentro = 0;
    let contNumeroFora = 0;

    for (let numero of numeros) {
        if (numero >= 10 && numero <= 20) {
            contNumeroDentro++;
        } else {
            contNumeroFora++;
        }
    }

    console.log("Numeros dentro: " + contNumeroDentro + ", Numeros fora: " + contNumeroFora);
}

contaNumeroDentroIntervalo();