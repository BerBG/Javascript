function calculaAumento(plano, salario) {
    let novoSalario;

    switch (plano) {
        case 'A':
            novoSalario = salario + (salario * 0.1);
            break;
        case 'B':
            novoSalario = salario + (salario * 0.15);
            break;
        case 'C':
            novoSalario = salario + (salario * 0.2);
            break;
        default:
            console.log("Plano Inválido");
            return;
    }

    console.log('Novo salário: ', novoSalario.toFixed(2));
}

calculaAumento('A', 1200);
calculaAumento('B', 1200);
calculaAumento('C', 1200);
calculaAumento('D', 1200);