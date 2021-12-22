/*
Enunciado: Crie um programa que leia um número Real qualquer pelo teclado e mostre na tela a sua porção Inteira.
Ex: Digite um número: 6.127
O número 6.127 tem a parte Inteira 6.
*/

let numero = 6.127;

let parteInteira = parseInt(numero);

console.log(`Número digitado: ${numero}`);
console.log(`Porção inteira: ${parteInteira}`);