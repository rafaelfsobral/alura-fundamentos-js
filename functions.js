/* let x = "";
console.log(x);
x = "oi"; */

// 1) Declara a função

                      //string
function imprimeTexto(texto){
    console.log(texto);
}

// 2) Executa a função
imprimeTexto(soma());
imprimeTexto("outro texto");

// Três formas de escrever funções
function soma(){
    // outros códigos
    // vários console.log()
    return 2 + 2;
}

// console.log(soma())