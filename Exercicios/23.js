function calcularNotaFinal(codigo, nota1, nota2, nota3) {
    let notas = [];
    notas.push(nota1);
    notas.push(nota2);
    notas.push(nota3);
    notas.sort((a,b) =>  a < b ? 1 : -1);

    let mediaFinal = (notas[0] * 4 + notas[1]+notas[2] * 3) / 10;
    console.log(`Código: ${codigo}. Notas: ${nota1}, ${nota2}, ${nota3}. Média: ${mediaFinal}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`);

}

calcularNotaFinal(001, 3.5, 9.1, 4);
calcularNotaFinal(002, 3.5, 2.2, 10.0);
  