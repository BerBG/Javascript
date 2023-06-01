function formatarValor(valor) {
    var valorFormatado = Number(valor).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    console.log(valorFormatado)
}

formatarValor(0.4000000023424200004)
