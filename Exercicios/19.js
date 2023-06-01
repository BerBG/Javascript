function calculaValor(codigo, quantidade) {
    let total = 0;

    switch (codigo) {
        case 100:
            total = 3 * quantidade;
            break;
        case 200:
            total = 4 * quantidade;
            break;
        case 300:
            total = 5.50 * quantidade;
            break;
        case 400:
            total = 7.50 * quantidade;
            break;
        case 500:
            total = 3.50 * quantidade;
            break;
        case 600:
            total = 2.80 * quantidade;
            break;
        default:
            console.log("Produto não existente.");
            return;
    }

    console.log("Valor total: " + total.toFixed(2));
}

calculaValor(100, 2);
calculaValor(300, 3);
calculaValor(700, 2);