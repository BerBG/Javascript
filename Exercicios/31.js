function numerosNegativos() {
    const vetor = [10, 5, -7, 3, -1, 3, -11, -20, 6, 9];
    let qtdNegativos = 0;
    for (let i of vetor) {
        if (i < 0) {
            qtdNegativos++;
        }
    }
    console.log(qtdNegativos);
}
numerosNegativos();
