// Parâmetros de função

function soma(numero1, numero2){
    return numero1 + numero2; 
}

// console.log(soma(2,2));
// console.log(soma(245,20));
// console.log(soma(-500,60));

// parametros x argumentos

// ordem dos parâmetros

// function nomeIdade(nome, idade){
//     return `Meu nome é ${nome} e minha idade é ${idade}`;
// }

//console.log(nomeIdade(35,"Rafael"));

function multiplica(numero1, numero2){
    return numero1 * numero2;    
}

console.log(multiplica(soma(4,5),soma(3,3)));

console.log(multiplica(soma(4,5))); // NaN pq não passou um parâmetro. 1 número * undefined é igual a Nan (Not a Number). A solução é 
// definir um valor padrão para os parâmetros, conforme exemplo abaixo:

function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;    
}
