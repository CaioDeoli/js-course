console.log('Caio de "Oliveira"'); // String = Texto
console.log("Caio de 'Oliveveira'");
console.log(`"Caio" de 'Oliveira'`);

console.log(123456, 15.8584, 'Caio de Oliveira de Novo');
console.log(42); // Number = Número

/*
Arquivos JavaScript


Para criar um arquivo JavaScript, basta que sua terminação seja ".js".
*/

/****************************************/

/*
console.log();


Esta linha de código exibe coisas na tela podendo ser valores literais como números, textos, arrays ou objetos, e também podem exibir os valores que estão em variáveis.

Essa "função" vai servir muito para debugar o código.

log() é um método do objeto console.

Tudo que estiver dentro de '', "" ou `` são dados to tipo STRING.
Ex.:
console.log('Um texto qualquer');
console.log("Um texto qualquer");
console.log(`Um texto qualquer`); // Esse aqui é um tipo especial de string chamada de TEMPLATE STRING

O console.log() realiza automaticamente a quebra de linha.

';' no JavaScript não é obrigatório mas é recomendado se utilizar.

Para escrever um texto com aspas duplas nele, inicie e termine ele com aspas simples.
Para escrever um texto com aspas simples nele, inicie e termine ele com aspas duplas.
Para escrever um texto tanto com aspas simples como com aspas duplas nele, inicie e termine ele com crase.
Ex.:
console.log('Caio de "Oliveira"');
console.log("Caio de 'Oliveveira'");
console.log(`"Caio" de 'Oliveira'`);

Quando for escrever um dado do tipo número, não use aspas ou crase.

JavaScript é uma linguagem de tipagem dinâmica, isto é, a engine (motor do JS) já entende o tipo de dado quando escrevemos.

Tanto números inteiros como números com ponto flutuante são do mesmo tipo, chamado NUMBER.
Ex.:
console.log(4); // Number
console.log(8.85); // Number

Números dentro de áspas são strings.
Ex.:
console.log("4"); // String

O console.log() só é exibido no "console" não afetando na visualização do usuário final.
Para ver o console do navegador basta clicar botão direito, ir em inspecionar e clicar em "console".
Conseguimos ter um console no terminal do computador utilizando o Node.JS.
O Code Runner, extensão do VS Code, facilita a execução do JS no Node.JS sem precisarmos digitar no terminal o código.

////////////////////////////////////////////////////

Exercício console.log()


Exiba no console a linha de texto abaixo. Substitutua o NOME pelo seu nome real e o horário precisa ser um tipo número e não um texto.

Meu nome é "NOME". Estou aprendendo JavaScript às 10 da manhã.

Solução:
console.log('Meu nome é "Caio". Estou aprendendo JavaScript às', 10, 'da manhã.');
*/
