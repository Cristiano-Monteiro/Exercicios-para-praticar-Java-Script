/*
Enunciado: Faça um programa que leia o nome completo de uma pessoa, mostrando em seguida o primeiro e o último 
nome separadamente. Ex: Ana Maria de Souza (primeiro = Ana; último = Souza).
*/

let nome = prompt('Digite um nome completo: ');

let nome_por_partes = nome.trim().split(' ');

console.log(`Nome digitado: ${nome.trim()}`);
console.log(`Primeiro nome: ${nome_por_partes[0]}`);
console.log(`Último nome: ${nome_por_partes[nome_por_partes.length - 1]}`);