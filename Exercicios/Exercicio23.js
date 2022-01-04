/*
Enunciado: Crie um programa que leia o nome de uma cidade e diga se ela começa ou não com o nome "SANTO".
*/

// 1º Resolução:

/*
while (true){
    var cidade = prompt('Nome de uma cidade: ');
    if (cidade.trim().length >= 3){
        break;
    };
    alerta = alert('Nome da cidade deve ter número de letras acima ou igual a 3!');
    console.log(alerta);
};

console.clear();

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

    if (primeiro_nome.length == nome_exigido.length){
        for (var indice in primeiro_nome){
            if (nome_exigido[indice] == null){
                teste = false;
                break
            }
            if (primeiro_nome[indice] == nome_exigido[indice]){
                teste = true;
            }
            else{
                teste = false;
                break
            }
        };
    }
    else{
        teste = false;
    };

    console.log(`Nome digitado: ${cidade}`);
    console.log(`Nome exigido: ${nome}`);
    console.log(`O primeiro nome da cidade é "Santo"? : ${teste}`);
};

Verificacao();
*/

// 2º Resolução:

while (true){
    var cidade = prompt('Nome de uma cidade: ');
    if (cidade.trim().length >= 3){
        break
    };
    alerta = alert('Nome da cidade deve ter número de letras acima ou igual a 3!');
    console.log(alerta);
};

console.clear();

var resposta = 'Não';

if (cidade.trim().toUpperCase().indexOf('SANTO ') != -1){
    resposta = 'Sim';
};

console.log(`Nome da cidade: ${cidade}`);
console.log(`O primeiro nome da cidade é "Santo"? ${resposta}`);