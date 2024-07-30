console.log('João nasceu em 1984.');
console.log('Em 2000 João conheceu Maria.');
console.log('João casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com João em 2015.');
console.log('O filho de João se chama Eduardo.');

console.log(-2);

let nome = 'Caio';
var nomeComVar = 'João';

console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com', nome, 'em 2015.');
console.log('O filho de', nome, 'se chama Eduardo.');

console.log(-3);

let sobrenome; // Declarou a variável
console.log(sobrenome); // undefined
sobrenome = 'de Oliveira'; // Inicializando a variável
console.log(sobrenome);
sobrenome = 'Moura';
console.log(sobrenome);

// let sobrenome; -> Não pode redeclarar

console.log(-4);

// Não podemos criar variáveis com palavras reservadas
// let let; -> Não pode
// let if; -> Não pode

// Variáveis precisam ter nomes significativos (boa prática)
let n = 'Caio';
console.log(n);
let nomeCliente = 'Caio';

// Não pode começar o nome de uma variável com um número
// let 1nome;

// Não podem conter espaços ou traços
// let nome Cliente;

// Utilizamos camelCase
let nomeCompletoDoCliente = 'Caio Moura de Oliveira';
console.log(nomeCompletoDoCliente);

// Case-sensitive
let nomeCliente1 = 'Caio';
let nomecliente1 = 'Caio';

console.log(nomeCliente1, nomecliente1);

// Não podemos redeclarar variáveis com let
let nomeCliente2 = 'Caio';
nomeCliente2 = 'Moura';

// Não utilize var, utilize let


/*
Variáveis


Salvam algo na memória enquanto está sendo executado o código e podem ser alteradas a qualquer momento. Neste artigo vou tratar das variáveis do JavaScript.
Ex.:
// nome é um rótulo para variável que vai ser identificada pelo motor do JS
// 'Caio' é o valor que a variável vai guardar
let nome = 'Caio';
let idade = 25;

console.log(nome, 'tem', idade, 'anos.');

nome = 'Caio César Moura';

console.log(nome, 'tem', idade, 'anos.');


Variáveis podem ser declaradas utilizando let ou var, porém o var é uma forma de declarar antiga que não é mais recomendada.
Ex.:
let nome = 'Caio';
var sobrenome = 'Moura';


Variáveis são utilizadas por exemplo quando temos um dado que ser repete muitas vezes. Como por exemplo a palavra João abaixo.
console.log('João nasceu em 1984.');
console.log('Em 2000 João conheceu Maria.');
console.log('João casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com João em 2015.');
console.log('O filho de João se chama Eduardo.');

Utilizando a variável, ficaria da seguinte maneira:
let nome = 'João';

console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com', nome, 'em 2015.');
console.log('O filho de', nome, 'se chama Eduardo.');

E se pode alterar o valor dessa variável e todo o texto muda:
nome = 'Caio';

console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com', nome, 'em 2015.');
console.log('O filho de', nome, 'se chama Eduardo.');


Variáveis podem ser declaradas e não inicializadas. Essas variáveis recebem o valor de undefined.
Ex.:
let nome; // Foi declarada
console.log(nome); // undefined


Variáveis podem ser inicializadas após serem declaradas, não precisando ser na mesma linha.
Ex.:
let nome;
nome = 'Caio'; // Inicializada


Variáveis podem ser alteradas quantas vezes quiser por isso se chamam variáveis.
Ex.:
let nome = 'Caio';
nome = 'Moura';
nome = 'de Oliveira';


Não se pode redeclarar uma variável se ela foi declarada com let.
Ex.:
let nome = 'Caio';
let nome = 'César';


Não se pode criar variáveis com palavras reservadas.
Ex.:
let if = 'Alguma coisa';
let let = 'Outra coisa';


É uma boa prática escrever variáveis com nomes significativos.
Ex.:
let idadeCliente = 42;
let n = 42; // Nome da variável não significativo


O nome de uma variável não pode iniciar com um número.
Ex.:
let 1cliente = 'João';


O nome de uma variável não pode conter espaços ou traços.
Ex.:
let cliente-um = 'Caio';
let cliente um = 'Caio';


Em JavaScript é uma convenção criar nome de variáveis no formato camelCase que significa que quando precisarmos criar uma variável com nome composto, basta que a primeira palavra do nome da variável seja minúscula e as demais palavras iniciem com letra maiúscula.
Ex.:
let nomeCompletoDoCliente;


As variáveis do JS são case-sensitive, isso significa que letras minúsculas e maiúsculas fazem diferença.
Ex.:
// As variáveis abaixo são diferentes
let nome = 'Caio';
let Nome = 'Caio';
*/