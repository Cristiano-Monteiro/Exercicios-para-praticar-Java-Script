/*
Enunciado: Faça um programa que leia a largura e a altura de uma parede em metros, calcule a sua área e a quantidade de tinta necessária para pintá-la, sabendo que cada litro de tinta pinta uma área de 2 metros quadrados.
*/

var largura = 2.5;
var altura = 1.75;

var area = largura * altura;

var quantidadeTinta = area / 2;

console.log("Largura: " + largura + "m  ;  Altura: " + altura + "m");
console.log("Área da parede: " + area.toFixed(2) + "m²");
console.log("Quantidade de tinta necessária: " + quantidadeTinta.toFixed(2) + "L");