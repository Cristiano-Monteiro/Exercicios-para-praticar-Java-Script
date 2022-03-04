/*
Enunciado: Crie um programa que leia o nome de uma pessoa e diga se ela tem "SILVA" no nome.
*/

// 1º Resolução:

/*
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
*/

// 2º Resolução:

/*
while (true){
    var nome = prompt('Nome de uma pessoa:');
    if (nome.trim() != ''){
        break;
    };
    console.log(alert('ERRO! Nome em branco! Digite novamente!!'));
};

console.clear();

var nome_array = nome.trim().toUpperCase().split(' ');

var resposta = 'Não';

function Verificacao(indice){
    if (indice == 'SILVA'){
        resposta = 'Sim';
    };  
};

nome_array.forEach(Verificacao);

console.log(`Nome digitado: ${nome.trim()}`);
console.log(`Tem "Silva" no nome? ${resposta}`);
*/

// 3º Resolução:

while (true){
    var nome = prompt('Nome de uma pessoa:');
    if (nome.trim() != ''){
        break;
    };
    console.log(alert('ERRO! Nome em branco! Digite novamente!!'));
};

console.clear();

var is_true_or_false = false;


// método includes(): verifica se um texto possui uma palavra específica.
if (nome.toUpperCase().includes('SILVA')){
    is_true_or_false = true;
};

console.log(`Nome digitado: ${nome.trim()}`);
console.log(`Tem "Silva" no nome? ${is_true_or_false}`);