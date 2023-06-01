function calculadora(x, operacao, y) {
    var resultado = 0;

    switch (operacao) {
        case '+':
            resultado = x + y;
            break;
        case '-':
            resultado = x - y;
            break;
        case '*':
            resultado = x * y;
            break;
        case '/':
            resultado = x / y;
            break;
        default:
            console.log("Operação inválida");
            return
    }

    console.log("Resultado: " + resultado);
}

calculadora(5,'+',5);
calculadora(5,'-',5);
calculadora(5,'*',5);
calculadora(5,'/',5);
calculadora(5,'%',5);