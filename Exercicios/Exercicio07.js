/*
Enunciado: Crie um programa que mostre o nome de vários alunos com as 2 notas do lado e a media logo em seguida, e mostre se ele foi aprovado ou reprovado. 
*/

var nomes = ["Alex", "João", "Maria", "Igor"];
var nota1 = [7.0, 5.5, 8.0, 9.5];
var nota2 = [4.5, 7.0, 7.5, 8.5];

function CalcMedia(n1, n2) {
    return (n1 + n2) / 2;
}

function conceito(CalcMedia) {
    var resultado = "Reprovado";

    if (CalcMedia > 7.0) {
        resultado = "Aprovado";
    }

    return resultado;
}

for (var index in nomes){
    var notaA = nota1[index];
    var notaB = nota2[index];
    var media = CalcMedia(notaA, notaB);

    console.log(nomes[index] + 
        " - " + 
        notaA + 
        " - " + 
        notaB + 
        " - " + 
        media +
        " - " +
        conceito(media));
}