function calcularMediaVetor() {
    const numeros = [10, 10, 10, 10, 10];
    const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    const media = soma / numeros.length;
    console.log("Media: " + media);
}

calcularMediaVetor();