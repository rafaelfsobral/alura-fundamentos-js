                // 0
const alunos = ['João', 'Juliana', 'Caio', 'Ana']
                      //0
const mediaDosAlunos = [10, 7, 9, 6]

// let listaDeNotasEAlunos = [['João', 'Juliana', 'Caio', 'Ana'], [10, 7, 9, 6]]
                            // 0        // 1
let listaDeNotasEAlunos = [alunos, mediaDosAlunos] // os elementos da lista de duas dimensões são listas. É uma lista que contém outras 
// listas dentro dela.

// listaDeNotasEAlunos[0][0] -> nome dos alunos -> na primeira lista e depois na primeira posição, indice 0 (João)
// listaDeNotasEAlunos[1][0] -> média dos alunos -> na lista de notas e alunos do índice 1 (media) e dentro dessa lista de media dos alunos,
// queremos o indice 0 (Nota 10)
console.log(`${listaDeNotasEAlunos[0][0]} tem média igual a ${listaDeNotasEAlunos[1][0]}`)
