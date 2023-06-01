function tipoTriangulo(l1,l2,l3) {
    if (l1 == l2 && l2 == l3) {
        console.log("Triângulo Equilátero")
    } else if (l1 != l2 && l2 != l3) {
        console.log("Triângulo Escaleno")
    } else {
        console.log("Triângulo Isósceles")
    }
}

tipoTriangulo(2,1,3)