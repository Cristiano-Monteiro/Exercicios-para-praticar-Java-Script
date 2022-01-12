/*
Enunciado: Faça um programa que leia o nome completo de uma pessoa, mostrando em seguida o primeiro e o último 
nome separadamente. Ex: Ana Maria de Souza (primeiro = Ana; último = Souza).
*/

while (true){
    var nome = prompt('Digite um nome completo: ');
    if (isNaN(nome.trim())){
        break;
    };
    console.log(alert('ERRO! Digite apenas letras.'));
};

console.clear();

let nome_por_partes = nome.trim().split(' ');

console.log(`Nome digitado: ${nome.trim()}`);
console.log(`Primeiro nome: ${nome_por_partes[0]}`);
console.log(`Último nome: ${nome_por_partes[nome_por_partes.length - 1]}`);