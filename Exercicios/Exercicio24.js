/*
Enunciado: Crie um programa que leia o nome de uma pessoa e diga se ela tem "SILVA" no nome.
*/
while (true){
    var nome = prompt('Digite o nome de uma pessoa:');
    if (nome.trim() != ''){
        break;
    };
    console.log(alert('ERRO! Nome em branco! Digite novamente!'));
};
console.clear();

let resposta = 'Não';

if (nome.toLowerCase().indexOf('silva ') != -1){
    resposta = 'Sim';
};

console.log(`Nome digitado: ${nome}`);
console.log(`O nome possui "Silva"? ${resposta}`);