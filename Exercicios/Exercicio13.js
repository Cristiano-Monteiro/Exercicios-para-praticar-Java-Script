/*
Enunciado: Faça um algoritmo que leia o salário de um funcionário e mostre seu novo salário, com 15% de aumento.
*/

let salario = 4319.43;

let novoSalario = salario + (salario * 0.15);

console.log('Salário antigo: R$' + salario.toFixed(2));
console.log('Salário NOVO com 15% de aumento: R$' + novoSalario.toFixed(2));