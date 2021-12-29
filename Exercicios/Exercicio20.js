/*
Enunciado: O mesmo professor do desafio 019 quer sortear a ordem de apresentação de trabalhos dos alunos. Faça um programa que leia o nome dos quatro alunos e mostre a ordem sorteada.
*/

var alunos = ['Luiz', 'Marcos', 'Maria', 'Anna', 'Antonio'];

var numerosSorteados = [];

// Função que gera um número aleatório e guarda em "numerosSorteados".
function sorteio(){
    while (numerosSorteados.length < alunos.length){
        var numero = Math.floor(Math.random() * (alunos.length));

        if (numerosSorteados.indexOf(numero) == -1){
            numerosSorteados.push(numero);
        }
    }
};

sorteio();

console.log(`Alunos presentes: ${alunos}.`);
console.log(`Total de alunos: ${alunos.length}`);
console.log(`Ordem de apresentação dos alunos:`);
for (i in alunos){
    console.log(`   => ${parseInt(i) + 1}º - ${alunos[numerosSorteados[i]]}`);
};