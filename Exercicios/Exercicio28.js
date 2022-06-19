/*
Enunciado: Escreva um programa que faça o computador "pensar" em um número inteiro entre 0 e 5 e peça
           para o usuário tentar descobrir qual foi o número escolhido pelo computador. O programa 
           deverá escrever na tela se o usuário venceu ou perdeu.
*/

let computer_number = Math.floor(Math.random() * 6);

alert('Tente adivinhar qual número o computador escolheu!');

let user_number;

while(true){
    user_number = prompt('Digite um número entre 0 e 5:').trim();
    if(user_number >= 0 && user_number <= 5 && user_number != ''){
        break;
    };
};

if(computer_number == user_number){
    console.log('PARABÉNS! VOCÊ ACERTOU O NÚMERO!');
}
else{
    console.log('INFELIZMENTE VOCÊ ERROU O NÚMERO!');
};

console.log(`Computador escolheu o número ${computer_number}.`);
console.log(`Você escolheu o número ${user_number}.`);