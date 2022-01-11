/*
Enunciado: Faça um programa que leia uma frase pelo teclado e mostre quantas vezes aparece a letra "A", em que posição ela aparece a primeira vez e em que posição ela aparece a última vez.
*/

let frase1 = prompt('Digite uma frase qualquer: ');

let frase2 = frase1.toUpperCase().trim();

let total_de_a = 0;

let posicao = [];

for (var letra in frase2){
    if (frase2[letra] == 'A'){
        total_de_a += 1;
        posicao.push(letra);
    };
};

console.log(`Frase digitada: ${frase1.trim()}`);
console.log(`Quantas vezes apareceu a letra "A": ${total_de_a}`);
if (total_de_a != 0){
    console.log(`A primeira letra "A" apareceu na posição ${posicao[0]}`);
    console.log(`A última letra "A" apareceu na posição ${posicao[posicao.length - 1]}`);
};