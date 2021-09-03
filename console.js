// console => É uma ferramenta que tem tanto no node quanto nos navegadores. É usado para colocar dados para fora da aplicação de forma que
// não apareça diretamente para o usuário, mas que ele tenha acesso caso ele precise.
// console.log => esse log é um registro que estamos criando no nosso console. Esse log pode ser qualquer informação.
const minhaVar = true;

console.log(245);
console.log("eu sou um texto");
console.log(minhaVar);

// tratamento de erro

console.error("Deu erro!"); // Mandou exibir essa mensagem de erro. Podemos depois complementar com Stacktrace, com algumas outras opções. 
// No caso do node, como estamos usando terminal para saída dele, então a gente não vai ter diferença de cor, porque nosso terminal não
// tem suporte para isso. 
// É sempre uma boa prática a gente utilizar o console.log e console.error para saída da nossa aplicação para saber o que está acontecendo
// dentro dela, se tem algum erro, se está com algum dado errado, etc. 

console.log("deu erro");
//console.error("deu erro");
console.error(new Error("deu erro"));
