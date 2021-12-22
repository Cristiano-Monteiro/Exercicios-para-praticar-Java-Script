/*
Enunciado: Faça um programa que leia o comprimento do cateto oposto e do cateto adjacente de um triângulo retângulo. Calcule e mostre o comprimento da hipotenusa.
*/

let catetoOposto = 3.5;
let catetoAdjacente = 4.75;

let hipotenusa = Math.sqrt(Math.pow(catetoOposto, 2) + Math.pow(catetoAdjacente, 2));

console.log(`Cateto oposto: ${catetoOposto}`);
console.log(`Cateto adjacente: ${catetoAdjacente}`);
console.log(`Hipotenusa: ${hipotenusa.toFixed(2)}`);