function calculaValorPlano(idade) {
    let valor = 100;

    if (idade < 10) {
        valor += 80;
    } else if (idade < 30) {
        valor += 50;
    } else if (idade < 60) {
        valor += 95;
    } else {
        valor += 130;
    }

    console.log(valor);
}

calculaValorPlano(2)
calculaValorPlano(15)
calculaValorPlano(40)
calculaValorPlano(50)
calculaValorPlano(70)