// OBS: 3 formas de criar função: Declaração de função, expressão de função e Arrow function.

// Declaração de função

// function minhaFuncao(param){
//     // bloco de código
// }

// minhaFuncao("param")

// Expressão de função
// const soma = function(num1, num2) {return num1 + num2}; // importante ressaltar que não tem nome da função realmente, ser const e atribuiu
// a função a essa variável.  É importante ser const para não acabar colocando um valor dentro dela e apagando a função no meio do código.
// Faz tudo numa linha sóm fica mais curto.
// console.log(soma(1,1))

// diferença principal : HOISTING
// funções e var são "listadas" no topo do arquivo

console.log(apresentar()); // Funciona!
function apresentar(){
    return "olá!";
}

// console.log(soma(1,1)); // Não funciona! Deu um erro de referência. Não consegue acessar antes da inicialização.
const soma = function(num1, num2) {return num1 + num2};
console.log(soma(1,1)); // Funciona!