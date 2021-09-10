                // 0        1         2      3
const alunos = ['João', 'Juliana', 'Caio', 'Ana']
                      //0   1  2  3
const mediaDosAlunos = [10, 7, 9, 6]

// includes -> retorna booleano
// indexOf -> retorna um número referente ao número do índice onde o aluno encontra-se na lista

let listaDeNotasEAlunos = [alunos, mediaDosAlunos]

const exibeNomeNota = (nomeDoAluno) => {
    if(listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno) // vai buscar o indice pelo nome do aluno dentro da lista listaDeNotasEAlunos[0]
        return listaDeNotasEAlunos[0][indice] + ', sua média é ' + listaDeNotasEAlunos[1][indice]
    }else{
        return "Aluno " + nomeDoAluno + " não encontrado na lista!"
    }
}

console.log(exibeNomeNota("Ana"))
console.log(exibeNomeNota("Juliana"))
console.log(exibeNomeNota("Alfredo"))