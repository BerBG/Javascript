const pilotos = ['Vettel','Alonso','Raikkonen','Massa']
pilotos.pop() // massa quebrou o carro!
console.log(pilotos)

pilotos.push('Verstappen') // Verstappen entrou na corrida
console.log(pilotos)

pilotos.shift() // remove a primeira posição (sai fora Vettel)
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona a primeira posição
console.log(pilotos)

// splice pode adicionar e remover elementos
pilotos.splice(2, 0, 'Botas','Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // do indice 1 até 3
console.log(algunsPilotos2)