console.log("Estou no console vindo de outro arquivo?");

const numbers = [9, 15, 24, 32, 70];

// Solução 1
let soma = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    soma = soma + numbers[i];
    console.log(soma);
}

// Solução 2
const somaInicial = numbers.reduce(
    (primeiroValor, proximoValor) => {
        console.log(primeiroValor + proximoValor);
        return primeiroValor + proximoValor;
    }
);

