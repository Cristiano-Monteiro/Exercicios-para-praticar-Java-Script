/*
Enunciado: Faça um programa que leia uma frase pelo teclado e mostre quantas vezes aparece a letra "A", em que 
           posição ela aparece a primeira vez e em que posição ela aparece a última vez.
*/

// 1º Resolução:

/*
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
*/

// 2º Resolução:

while (true){
    var frase = prompt('Digite uma frase:');
    if (frase.trim() != ''){
        break;
    };
    console.log(alert('ERRO! Espaço em branco não é permitido.'));
};

console.clear();

// objeto Array com o método from(): transforma uma string em um array.
let frase_array = Array.from(frase.trim().toUpperCase());

// método indexof(): retorna o índice da primeira ocorrência do valor fornecido.
let primeira_posicao = frase_array.indexOf('A');

// método lastIndexOf(): retorna o índice da última ocorrência do valor especificado.
let ultima_posicao = frase_array.lastIndexOf('A');

let quantidade_a = 0;

for (var palavra in frase_array){
    if (frase_array[palavra] == 'A'){
        quantidade_a+= 1;
    };
};

console.log(`Frase digitada: ${frase.trim()}`);
console.log(`Quantas vezes apareceu a letra "A": ${quantidade_a}`);
if (quantidade_a != 0){
    console.log(`A primeira letra "A" apareceu na posição ${primeira_posicao}`);
    console.log(`A última letra "A" apareceu na posição ${ultima_posicao}`);
};