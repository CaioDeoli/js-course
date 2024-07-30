

// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Não pode começar o nome de uma constante com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive
// Não podemos modificar o valor de uma constante
// Não utilize var, utilize const

const nome = 'Caio';
console.log(nome);

console.log(-2);

// const sobrenome;

console.log(-3);

const sobrenome = 'Moura';
// sobrenome = 'Oliveira';

let meuNome = 'Caio';
meuNome = 'César';

console.log(-4);

const primeiroNumero = 5;
const segundoNumero = 10;
// + - * /
const resultado = primeiroNumero * segundoNumero;

const resultadoDuplicado = resultado * 2; 

let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;

console.log(-5);

// String = Texto | Number = Número
const dado1 = 40; // Number
const dado2 = '5';
const dado3 = 5;

console.log(typeof dado1); // number
console.log(typeof dado2); // string

console.log(dado1 + dado3); // 45
console.log(typeof (dado1 + dado3)); // number
console.log(dado1 + dado2); // 405
console.log(typeof (dado1 + dado2)); // string



/*
Contantes


Uma variável que não pode ser alterada ou reatribuída.
Ex.:
const idade = 25;
idade = 28; // Resultará em erro
//

O nome de uma constate segue as mesmas regras do nome dos outros tipos de variáveis let e var:
- Não pode ser uma palavra reservada
- Não pode iniciar com um número
- Não pode conter espaços ou hífen (-)

Algumas observações para o const:
- Crie constantes com nomes significativos
- Para criar uma constante com um nome complexo, utilizamos o padrão camelCase
- As constantes sao case-sensitive
- Utilizar const é uma boa prática, var não é

Não é possível apenas declarar uma constante, precisa-se inicia-la também.
Ex.:
const nome; // Resultará em erro
nome = 'Caio';
//

Mas utilizando let é possível fazer isso sem problema
Ex.:
let nome;
nome = 'Caio';
//

É possível utilizar as variáveis para atribuir à outras variáveis e fazer cálculos com ela.
Quando escrevemos uma variável dentro do código que não seja para reatribui-la, estamos utilizando o valor que ela armazena.
Ex.:
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultadoDuplicado * 2;

let resultadoTriplicado = resultadoTriplicado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
--

As constantes são mais seguras porque o seu valor vai permanecer ao longo do código, por isso sempre utilize const e quando for preciso alterar mesmo o valor de uma variável, utilize let.

Utilize as constantes e vá evoluindo o valor dela declarando outras constantes.

É possível descobrir o tipo de um dado com typeof.
Ex.:
console.log(typeof 'Um texto qualquer'); // String

E também é possível descobrir o tipo de dado que uma variável armazena com typeof.
Ex.:
let umaVariavel = 80;
console.log(typeof umaVariavel); // Number
--

É importante saber o tipo de dado que uma variável armazena porque em operações de + ela vai ter comportamentos de soma ou concatenação dependendo dos tipos de dado envolvidos na operação.
Ex.:
const dado1 = 40;
const dado2 = '5';
const dado3 = 5;

console.log(typeof dado1); // number
console.log(typeof dado2); // string
console.log(typeof dadoe); // number

console.log(dado1 + dado3); // Somou e retornou 45 (number)
console.log(dado1 + dado2); // Concatenou e retornou 405 (string)
*/