/*
Enunciado: Crie um programa que leia o nome completo de uma pessoa e mostre: 
- O nome com todas as letras maiúsculas e minúsculas.
- Quantas letras ao todo (sem considerar espaços).
- Quantas letras tem o primeiro nome.
*/

let nome = 'Paulo de Souza Monteiro';

let letrasMaiusculas = nome.toUpperCase();
let letrasMinusculas = nome.toLowerCase();

var quantidade_de_letras = 0;

for (var letra of nome){
    if (letra == ' '){
        break
    };
    quantidade_de_letras += 1;
};

console.log(`Nome completo: ${nome}`);
console.log(`Nome em Maiúsculo: ${letrasMaiusculas}`);
console.log(`Nome em Minúsculo: ${letrasMinusculas}`);
console.log(`Quantidade de letras do primeiro nome: ${quantidade_de_letras}`);