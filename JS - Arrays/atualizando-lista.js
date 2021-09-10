                        // 0      1      2       3         4         5
const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']

// listaDeChamada.splice(1, 2, 'Rodrigo') 
// parâmetro 1 -> o indice onde vai começar a alterar
// parâmetro 2 -> o número de elementos que vai remover. No caso, vão remover dois elementos: Ana e Caio
// parâmetro 3 -> Vai ser inserido no lugar.

// OBS1: O terceiro parâmetro não é obrigatório para o splice. Se não tiver o terceiro parâmetro, a única diferença é que não seria inserido
// nenhum elemento no lugar dos que foram retirados.

// OBS2: Se colocarmos no segundo parâmetro o valor 0, não vai apagar ninguém. Mas podemos colocar novos elementos dentro do array em
// qualquer posição.
listaDeChamada.splice(2, 0, 'Rodrigo') // Colocar o elemento Rodrigo entre a Ana e o Caio sem apagar ninguém
console.log(`Lista de chamada: ${listaDeChamada}`) 