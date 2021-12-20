/*
Enunciado: Escreva um programa que pergunte a quantidade de Km percorridos por um carro alugado e a quantidade de dias pelos quais ele foi alugado. Calcule o preço a pagar, sabendo que o carro custa R$60 por dia e R$0,15 por Km rodado.
*/

let diasAlugados = 8;
let kmRodados = 720;

let CustoTotal = (diasAlugados * 60) + (0.15 * kmRodados);

console.log(`Dias alugados: ${diasAlugados} dias`);
console.log(`Km percorridos: ${kmRodados} Km`);
console.log(`Custo total: R$${CustoTotal.toFixed(2)}`);