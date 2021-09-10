const notas = [10, 9, 8, 7, 6]

// const notasAtualizadas = notas.map(nota => nota == 10 ? nota : nota + 1)
const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota)

// OBS: Se precisa retornar um array através de um array, utiliza-se o map
// OBS: forEach é um método que mão retorna nada, apenas executa o que está dentro do bloco, porém o método em si não vai retornar nada.

console.log(notasAtualizadas)