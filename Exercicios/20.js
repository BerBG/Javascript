function calcularNotas(valor) {
  const notas = [200, 100, 50, 20, 10, 5, 2, 1]

  let resultado = '';

  for (let nota of notas) {
    if (valor >= nota) {
      const quantidade = Math.floor(valor / nota);
      resultado += quantidade + ' nota(s) de R$ ' + nota + '. ';
      valor %= nota;
    }
  }

  console.log(resultado);
}

calcularNotas(1532);