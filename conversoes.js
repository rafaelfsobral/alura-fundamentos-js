// tipo de dado
// booleanos

// conversão implícita

const numero = 456;
const numeroString = "456";

console.log(numero === numeroString); // false, Javascript está comparando os tipos de dados (estamos comparando um número e um texto)
console.log(numero == numeroString); // true, Javascript pegou o número 456, converteu em String e comparou os dois valores
console.log(numero + numeroString); // 456456. Javascript pegou o número e converteu em uma String. O sinal de + com duas Strings, ele concatena

// conversão explícita

// Number() => converte uma String em um número
// String() => converte um número em uma String

console.log(numero + Number(numeroString));