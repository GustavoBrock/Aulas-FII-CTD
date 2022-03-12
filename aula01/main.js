/*  const welcome = 'Hello World :)'

console.log (welcome); */

const numbers = [9, 37, 24, 52, 85];

let soma = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    soma = soma + numbers[i];
    console.log('a soma dos números é ' + soma);
}
