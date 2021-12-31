/*
Enunciado: Faça um programa que leia um número de 0 a 9999 e mostre na tela cada um dos dígitos separados.
*/

let numero = 2468;

let digitos_separados = [];

function analise_numero(){
    for (var digito of JSON.stringify(numero)){
        digitos_separados.push(digito);
    };
    
    if (digitos_separados.length > 4){
        console.log(`ERRO! O número ${numero} não é aceito! Só é permitido número entre 0 e 9999.`);
    }
    else{
        console.log(`Número digitado: ${numero}`);
        for (var indice in digitos_separados.reverse(1)){
            if (indice == 0){
                console.log(`Unidade: ${digitos_separados[indice]}`);
            };
            if (indice == 1){
                console.log(`Dezena: ${digitos_separados[indice]}`);
            };
            if (indice == 2){
                console.log(`Centena: ${digitos_separados[indice]}`);
            };
            if (indice == 3){
                console.log(`Milhar: ${digitos_separados[indice]}`);
            };
        };
    };
};

analise_numero();