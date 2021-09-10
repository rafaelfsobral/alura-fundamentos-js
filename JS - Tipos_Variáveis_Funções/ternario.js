const idadeMinima = 18;
const idadeCliente = 19;

// Para fazer comentário em várias linhas de uma vez, basta digitar atalho Shift + Alt + A

/* if (idadeCliente >= idadeMinima){ // O if tem 1 operador de comparação
    console.log("cerveja");
} else {
    console.log("suco");
} */

// operador ternário => antes do ponto de interrogação tem-se a condição. Depois disso, vamos ter as saídas. A primeira saída se for true
// e a segunda saída se for false.

             // condição                  // true    // false
console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco");

// É chamado de operador ternário pois possui 3 operadores em uma unica linha (operador de comparação, ? separa as duas partes da comparação
// e : que separam as duas partes do resultado)