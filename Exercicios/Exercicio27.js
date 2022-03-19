/*
Enunciado: Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de 
           uma unidade para outra.

           #fórmulas de transformação:
            Celsius     ->  (F - 32) * 5/9 
            Fahrenheit  ->  C * 9/5 + 32
*/

function transformationDegree(unit){
    // Checking the unit:
    let isCelsius = unit.toUpperCase().includes('C');
    let isFahren = unit.toUpperCase().includes('F');

    // If the unit is unknown:
    if (!isCelsius && !isFahren){
        throw new Error('Unknown unit!');
    };

    // If the unit is Celsius:
    let onlyNumber = unit.toUpperCase().replace('C', '');
    let NewSign = 'F';
    function formula(Celsius){
        return Celsius * 9/5 + 32;
    };

    // If the unit is Fahrenheit:
    if (isFahren){
        onlyNumber = unit.toUpperCase().replace('F', '');
        NewSign = 'C';
        function formula(Fahrenheit){
            return (Fahrenheit - 32) * 5/9;
        };
    };

    return unit + ' é igual a ' + formula(onlyNumber) + NewSign;
};

// Testing the code:
try {
    console.log(transformationDegree('100C'));
    console.log(transformationDegree('212F'));
    console.log(transformationDegree('50A'));
} catch (error) {
    console.log(error.message);
};