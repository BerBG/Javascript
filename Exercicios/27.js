function calculaMaiorMenorAltura(altura1, altura2, taxaCresc1, taxaCresc2) {
    let anos = 0;
    if (altura1 > altura2) {
        while (altura1 > altura2) {
            altura2 += taxaCresc2;
            anos++;
        }
        console.log("Irá demorar " + anos + " anos para a criança 2 ter " + altura2 + "cm e ser mais alta que a criança 1");
    } else if (altura2 > altura1) {
        while (altura2 > altura1) {
            altura1 += taxaCresc1;
            anos++;
        }
        console.log("Irá demorar " + anos + " anos para a criança 1 ter " + altura1 + "cm e ser mais alta que a criança 2");
    }
}

calculaMaiorMenorAltura(165, 170, 1, 0.5);