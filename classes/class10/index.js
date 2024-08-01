/*
Aritméticos
+ -> Adição e concatenação (- * /)
** -> Potenciação
% -> Resto da divisão
*/

const num1 = 5;
const num2 = 10;

console.log(num1 + num2); // Soma

console.log(-2);

const num3 = 5;
const num4 = '10';

console.log(num3 + num4); // Concatenação

console.log(-3);

const num5 = 5;
const num6 = 10;

console.log(num5 - num6);
console.log(num5 * num6);
console.log(num5 / num6);

console.log(-4);

console.log(num1 ** num2); // Potenciação

console.log(-5);

const num7 = 10;
const num8 = 3;
console.log(num1 % num2); // Resto da divisão inteira

console.log(-6);

// Operadores tem precedência
console.log(5 + 2 * 10); // 25

// Utilizamos parenteses para alterar a precedência
console.log((5 + 2) * 10); // 70

/*
Precedência: o que vai ser executado primeiro nas operações
()
**
* / % -> executado da esquerda para a direita
+ -
*/

/*
Operadores de incremento
*/
let contador = 1;
contador++; // Valor dela + 1
contador++;
console.log(contador); // 3

// Não podemos usar const porque não da pra atribuir um novo valor para const

++contador; // Pode ser antes também
console.log(contador); // Que faz a mesma coisa

// O pós e o pré incremento tem diferença
console.log(contador++); // Primeiro ele retorna o valor do contador atual para o console.log, e este é executado, e na próxima linha o contador terá seu valor alterado
console.log(contador); // Novo valor

console.log(++contador); // Ele já retorna para o console.log o valor da variável incrementado. Desse jeito pré não é comum

// Operador de decremento
console.log(contador--);
console.log(contador--);

//

contador = 1;
contador++;
console.log(contador);

//

contador = 1;
console.log(contador++); // Não é uma boa prática, o console e o pós decremento na mesma linha

//

// Operadores de atribuição

// Quando precisa somar mais de 1 a um mesmo valor
contador = 1;
contador = contador + 2; // 3
contador = contador + 2; // 5
contador = contador + 2; // 7
// Maneira melhor:
contador += 2; // 9 => contador = contador + 2

// Pode fazer o mesmo com outros operadores aritmeticos
contador **= 2; // Mesmo que contador = contador ** 2

/*
*/














/*
Operadores aritméticos, incremento, decremento, atribuição


1. Operadores aritméticos
Os operadores aritméticos são:
+  -> Adição
-  -> Subtração
*  -> Multiplicação
/  -> Divisão
** -> Potenciação
%  -> Resto da divisão inteira
Com eles é possível fazer operações matemáticas.
Ex.:
console.log(10 + 5); // 15
console.log(10 - 2 - 8); // 0
console.log(10 * 5); // 50
console.log(10 / 5); // 2
console.log(10 ** 5); // 100000
console.log(10 % 5); // 0
console.log(10 % 3); // 1

O operador de adição também realiza concatenação além da operação aritmética se um dos dados da operação for uma string.
Ex.:
console.log(10 + '5');

Os operadores tem precedência assim como na matemática, isto é, em uma operação complexa, cada pequena operação que compõe ela tem seu nível de prioridade para ser executada.
Ex.:
console.log(10 + 5 * 2); // Primeiro será executado a multiplicação e após isso a soma

A ordem de precedência dos operadores é a seguinte:
1º () -> Tudo que estiver entre parênteses é executado primeiro
2º **
3º * / %
4º + -
Quando dois operadores tem o mesmo nível de precedência, o que vem primeiro da esquerda para a direita é executado primeiro


2. Operadores de incremento e decremento
Realizam a soma ou subtração respectivamente de uma variável.
Ex.:
let a = 5;
a++; // 6
// É o mesmo que: a = a + 1
a--; // 5
a--; // 4
--

Não se pode usar esses operadores com variáveis do tipo const pois elas não podem ter seus valores alterados.

Os operadores de incremento e decremento podem ser do tipo pós ou pré.
Quando uma variável é pós-incrementada, seu valor só será alterado na linha seguinte. Isto também vale para o pós-decremento.
Ex.:
let contador = 4;
console.log(contador++); // 4
console.log(contador); // 5
--
Quando uma variável é pré-incrementada, seu valor é alterado na mesma linha. Isto também vale para o pré-decremento.
Ex.:
let contador = 4;
console.log(++contador); // 5
console.log(contador); // 5
--
Não é uma boa prática realizar um console.log com um incremento ou decremento dentro pois pode deixar seu código confuso.

É mais comum utilizar o pós-incremento e o pós-decremento.


3. Operadores de atribuição
É comum atribuir a variável o valor dela mesma com outro número
Ex.:
let contador = 0;
contador = contador + 2; // 2
contador = contador + 2; // 4
contador = contador + 2; // 6
--
Uma forma melhor seria utilizar os operadores de atribuição.
Ex.:
let contador = 0;
contador += 2; // 2
contador += 2; // 4
contador += 2; // 6
--

Os operadores de atribuição realizam todas as operações aritméticas.
Ex.:
let num1 = 4;
num1 *= 2; // 8
// Igual a: num1 = num1 * 2
num1 /= 4; // 2
// Igual a: num1 = num1 / 4
--

*/