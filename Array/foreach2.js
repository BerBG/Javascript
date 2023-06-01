Array.prototype.forEach2 = function(callback) { // criou uma função no prototype de Array chamado forEach2, essa função recebe um callback, e pra cada iteração chama se o callback passando 3 parametros(valor, indice, array completo) 
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados =['Agatha', 'Aldo','Daniel','Raquel']

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})