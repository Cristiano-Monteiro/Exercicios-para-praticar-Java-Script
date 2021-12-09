/*
Enunciado: Faça um programa que leia um número Inteiro e mostre na tela o seu sucessor e seu antecessor.
*/

var numero = prompt("Digite um número inteiro: ");

var antecessor = parseInt(numero) - 1;

var sucessor = parseInt(numero) + 1;

console.log("Número digitado: " + numero);
console.log("Antecessor de " + numero + " é " + antecessor);
console.log("Sucessor de " + numero + " é " + sucessor);