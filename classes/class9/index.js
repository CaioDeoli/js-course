var nome = 'Caio';
var nome = 'João';
console.log(nome);

// ECMAScript 2015 (ES6) = JavaScript
let sobrenome = 'de Oliveira';
// let sobrenome = 'Moura'; // Erro

outroNome = 'César'; // Não faça isso
console.log(outroNome);

/*
Diferença entre var e let (primeira diferença)

Declarando uma variável com "var" é possível redeclarar ela novamente e isso não é um comportante desejado.
Ex.:
var nome = 'Caio';
var nome = 'César';
--

Declarando uma variável com "let" não é possível redeclarar.
Ex.:
let sobrenome = 'de Oliveira';
let sobrenome = 'Moura'; // Retorna um erro
--

Let e const foram recursos adicionado no ECMAScript 2015 (ES6) que é uma versão da documentação do JavaScript. ECMAScript é a padronização feita do JavaScript.

É possível também declarar uma variável apenas escrevendo da seguinte forma:
nome = Caio;
Porém é uma forma de declarar altamente não recomendada.
*/