function calculaAnuidade(mes, valor) {
    if (mes == 1) {
        console.log(valor);
    } else {
        let valorPago = valor;
        for (let i = 2; i <= mes; i++) {
            valorPago += valorPago * 0.05;
        }
        console.log(valorPago);
    }
}

calculaAnuidade(4, 100);

