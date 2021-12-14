/*
Enunciado: Faça um programa que leia um número Inteiro qualquer e mostre na tela a sua tabuada.
*/

// Mudar "numero" para alterar o resultado do programa!
var numero = 5;

console.log("TABUADA DE " + numero + ":");

for (var i = 1; i <= 10; i++) {
    var tabuada = numero * i;
    if (i == 10){
        console.log(numero + " X " + i + " = " + tabuada);
    }
    else{
        console.log(numero + " X " + i + "  = " + tabuada);
    }
};