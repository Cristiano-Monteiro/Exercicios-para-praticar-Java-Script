/*
Enunciado: Crie um algoritmo que leia um número e mostre o seu dobro, triplo e raiz quadrada.
*/

var numero = prompt("Digite um número inteiro: ");

var dobro = parseInt(numero) * 2;
var triplo = parseInt(numero) * 3;
var raiz = Math.sqrt(parseInt(numero));

console.log("Número digitado: " + numero);
console.log("Dobro: " + dobro);
console.log("Triplo: " + triplo);
console.log("Raiz quadrada: " + raiz);