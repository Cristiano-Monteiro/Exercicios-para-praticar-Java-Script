/*
Enunciado: Escreva um programa que leia um valor em metros e o exiba convertido em outras medidas.
*/

// 1ª resolução: 
/*
var valor = 5;

var Converterkm = valor / 1000;
var Converterhm = valor / 100;
var Converterdam = valor / 10;
var Converterdm = valor * 10;
var Convertercm = valor * 100;
var Convertermm = valor * 1000;

console.log("Valor digitado: " + valor + "m");
console.log("Convertido para km:  ", + Converterkm + "km");
console.log("Convertido para hm:  ", + Converterhm + "hm");
console.log("Convertido para dam: ", + Converterdam + "dam");
console.log("Convertido para dm:  ", + Converterdm + "dm");
console.log("Convertido para cm:  ", + Convertercm + "cm");
console.log("Convertido para mm:  ", + Convertermm + "mm");
*/

// 2ª resolução: 

var valor = 5;

var medidas = ["km", 
                "hm", 
                "dam", 
                "dm", 
                "cm", 
                "mm"];

var conversão = [valor / 1000, 
                valor / 100, 
                valor / 10,
                valor * 10,
                valor * 100,
                valor * 1000];

console.log("Valor digitado: " + valor + "m");

for (var index in medidas){
    if (index == 2){
        console.log("Convertido para " + medidas[index] + ":  " + conversão[index] + medidas[index]);
    }
    else{
        console.log("Convertido para " + medidas[index] + ":   " + conversão[index] + medidas[index]);
    }
};