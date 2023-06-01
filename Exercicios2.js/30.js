function recebeMelhorEstudante(alunos) {
        const medias = Object.values(alunos).map(notas => {
        return notas.reduce((acc, nota) => acc + nota, 0) / notas.length
    })
    const maiorMedia = Math.max(...medias)
    return maiorMedia
}

console.log(recebeMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6],
    Carla: [9, 6.6, 7.9, 8],
    Maria: [7, 7, 8, 9]
}))