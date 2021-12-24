/*
Enunciado: Um professor quer sortear um dos seus alunos para apagar o quadro. Faça um programa que ajude ele, lendo o nome dos alunos e escrevendo na tela o nome do escolhido.
*/

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