/*
Enunciado: Crie um programa que leia quanto dinheiro uma pessoa tem na carteira e mostre quantos dólares ela pode comprar.
*/

var dinheiroAtual = 1;

// Mudar o valor de "realHoje" para o valor atual do Real brasileiro. 
var realHoje = 5.68;

var conversor = dinheiroAtual / realHoje;

console.log("Dinheiro digitado:    R$" + dinheiroAtual.toFixed(2));
console.log("Valor do Real atual:  R$" + realHoje.toFixed(2) + " = US$1.00");
console.log("Quantidade de dolares que pode comprar:  R$" + dinheiroAtual.toFixed(2) + " = US$" + conversor.toFixed(2));