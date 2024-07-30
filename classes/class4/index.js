// E escrever um comentário
console.log('Olá mundo!'); // Aqui tem outro comentário
console.log('Linha 1');
// Comentário
console.log('Linha 2');
console.log('Linha 3');
console.log('Linha 4');
// Vai ser ignorado

/*
Um bloco de código
Linha de comentário
*/

/**
 * Um título
 * 
 * Lorem ipsum
 */

/* */
console.log(-2);
/* */

console.log('Olá mundo!'); 
console.log('Linha 1');
// console.log('Linha 2');
/*
// console.log('Linha 3');
console.log('Linha 4');
console.log('Linha 5');
*/

/*
Comentários


Trexos de códigos que são ignorados pelo motor do JavaScript.
Ex.:
// Aqui esta um comentário

Tanto o motor do navegador do google chrome quanto o motor do Node.JS são o mesmo, o V8.

Existem dois tipos de comentário:
- Em linha
- Em bloco

Os comentários em linha vão ocultar tudo que tiver após o "//" em uma linha
Podendo ser toda uma linha ou só parte dela
Ex.:
// Um comentário -> Está comentando a linha inteira
console.log(123) // Outro comentário -> Está comentando apenas parte da linha

Os comentários em bloco vão ocultar tudo que estiver entre "/* *'/" podendo assim ocultar várias linhas
Ex.:
/*
Aqui está
um comentário
em bloco
*'/

É possível comentar outro comentário
Ex.:
/*
// Aqui está um comentário comentado
*'/

É normal você encontrar principalmente em bibliotecas comentários de bloco enfeitados da seguinte forma:
/**
 * Função que faz tal coisa
 * 
 * Recebe os parâmetros X, Y e Z
 *'/
Eles servem para explicar algo da biblioteca como uma função
*/