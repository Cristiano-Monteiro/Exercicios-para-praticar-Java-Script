/*
Enunciado: Um professor quer sortear um dos seus alunos para apagar o quadro. Faça um programa que ajude ele, lendo o nome dos alunos e escrevendo na tela o nome do escolhido.
*/


// 1ª Resolução:
/*
var alunos = ['Aluno0', 
            'Aluno1',
            'Aluno2',
            'Aluno3',
            'Aluno4',
            'Aluno5',
            'Aluno6',
            'Aluno7',
            'Aluno8',
            'Aluno9'];

var sorteio = Math.floor(Math.random() * 10);
console.log(`Número sorteado: ${sorteio}`);

var alunoEscolhido = sorteio;
console.log(`O aluno escolhido foi ${alunos[alunoEscolhido]}!`);
*/

// 2ª Resolução:

let alunos = ['Maria', 
            'Ana',
            'Marcos',
            'Luiz',
            'Daniel'];

// função "sorteio" criada para limitar o intervalo dos números aleatórios. 
function sorteio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

var alunoEscolhido = alunos[sorteio(0, alunos.length)];

console.log(`O aluno escolhido foi ${alunoEscolhido}.`);