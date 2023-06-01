const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Carlos', nota: 9.2 }
]

// Imperativo
let total1 = 0;
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativo (melhor)
const getNota = aluno => aluno.nota // Função para epgar nota aluno
const soma = (total, atual) => total + atual // Função que agrega valores a partir da soma

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)