/*
Enunciado: Crie um programa que leia o nome de uma cidade e diga se ela começa ou não com o nome "SANTO".
*/

let cidade = prompt('Nome de uma cidade: ');

let primeiro_nome = [];

let teste = true;

function Verificacao(){
    let nome = 'Santo';

    let nome_exigido = [];

    for (var letra of nome.toUpperCase()){
        nome_exigido.push(letra);
    };
    
    for (var letra of cidade.toUpperCase().trim()){
        if (letra == ' '){
            break
        };
        primeiro_nome.push(letra);
    };
    
    for (var indice in primeiro_nome){
        if (primeiro_nome[indice] == nome_exigido[indice]){
            teste = true;
        }
        else{
            teste = false;
        }
        if (nome_exigido[indice] == null){
            teste = false;
        }
    };
    
    console.log(`Nome digitado: ${cidade}`);
    console.log(`Nome exigido: ${nome}`);
    console.log(`O primeiro nome da cidade é "Santo"? : ${teste}`);
};

Verificacao();