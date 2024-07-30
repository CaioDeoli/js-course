/*
Exercício com variáveis

Escreva o texto "Caio de Oliveira tem 25 anos, nasceu em 1999, pesa 80kg, tem 1.71 de altura e seu IMC é de 27.358845456721728." com as variáveis a seguir:

const nome = 'Caio';
const sobrenome = 'de Oliveira';
const idade = 25;
const pesoEmKg = 80;
const altura = 1.71;
const anoAtual = 2024;
let anoNascimento;
let imc;

Solução:

const nome = 'Caio';
const sobrenome = 'de Oliveira';
const idade = 25;
const pesoEmKg = 80; // Quando observar variáveis que guardam dados que podem ter vários tipos de medida, como peso e altura, coloque no nome da variável ou em um comentário qual é essa medida
const altura = 1.71; // Metros
const anoAtual = 2024;
let anoNascimento;
let imc;

anoNascimento = anoAtual - idade;
imc = pesoEmKg / (altura * altura); // Ter ou não parênteses tem diferença nessa operação

// Primeiro jeito
console.log(nome, sobrenome, 'tem', idade); // ...

// Segundo jeito
console.log(nome + ' ' + sobrenome + ' tem ' + idade); // ...

// Terceiro e melhor jeito com template strings
console.log(`${nome} ${sobrenome} tem ${idade} anos, nasceu em ${anoNascimento}, pesa ${pesoEmKg}kg, tem ${altura} de altura e seu IMC é de ${imc}.`);

// As templates strings permitem que utilize expressões de JS dentro de uma string com "${}"
*/


