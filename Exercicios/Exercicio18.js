/*
Enunciado: Faça um programa que leia um ângulo qualquer e mostre na tela o valor do seno, cosseno e tangente desse ângulo.
*/

let angulo = 30;

function anguloRad() {
    return angulo * (Math.PI/180);
};

let seno = Math.sin(anguloRad(angulo));

let cosseno = Math.cos(anguloRad(angulo));

let tangente = Math.tan(anguloRad(angulo));

console.log(`Ângulo: ${angulo} graus(${anguloRad(angulo).toFixed(2)} Rad)`);
console.log(`SENO de ${angulo}: ${seno.toFixed(2)}`);
console.log(`COSSENO de ${angulo}: ${cosseno.toFixed(2)}`);
console.log(`TANGENTE de ${angulo}: ${tangente.toFixed(2)}`);