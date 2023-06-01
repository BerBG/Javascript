function filtrarNumeros(elementos) {
    return elementos.filter((elemento) => typeof elemento === 'number')
}

console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20]))
console.log(filtrarNumeros(["a", "c"]))