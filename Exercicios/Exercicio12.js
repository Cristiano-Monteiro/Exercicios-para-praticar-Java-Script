/*
Enunciado: Faça um algoritmo que leia o preço de um produto e mostre seu novo preço, com 5% de desconto. 
*/

var preco = 123.95;

var novoPreco = preco - (preco * 0.05);

console.log('Preço do produto SEM desconto:       R$' + preco.toFixed(2));
console.log('Preço do produto COM 5% de desconto: R$' + novoPreco.toFixed(2));