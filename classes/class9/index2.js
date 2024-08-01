// String, number, undefined, null, boolean, symbol (não tratado nesta aula)

const nome1 = 'Caio'; // string
const nome2 = "Caio"; // string
const nome3 = `Caio`; // string
const num1 = 10; // number
const num2 = 10.52; // number
let nomeAluno; // undefined = não aponta para local nenhum na memória
const sobrenomeAluno = null; // Nulo = não aponta para local nenhum na memória
const boolean1 = true;
const boolean2 = false; // Boolean = true, false (valor lógico)

console.log(typeof nome1, nome1);
console.log(typeof num1, num1);
console.log(typeof nomeAluno, nomeAluno);
console.log(typeof sobrenomeAluno, sobrenomeAluno); // object null
console.log(typeof boolean1, boolean1); // boolean true

console.log();

// Não faz parte da aula
// Diferença entre tipo de dado primitivo e tipo de dado passado por referência
const a = [1, 2];
const b = a; // = operador de atribuição

console.log(a, b);

b.push(3);

console.log(a, b); // [ 1, 2, 3 ] [ 1, 2, 3 ]

let c = 2;
let d = a; // copia de 2
console.log(c, d); // 2, 2

c = 3;
console.log(c, d); // 3, 2

/*
Tipos de dados primitivos


São os tipos de dados primitivos: string, number, undefined, null, boolean, e symbol.

string: dados que são conjuntos de caracteres colocados entre '', "", ou ``.
Ex.:
'Um texto qualquer'
"10"
`Caio`
--
Strings criadas com crase são um tipo especial de strings chamadas de template strings, mas seu tipo permanece string.

number: dados que são apenas números.
Ex.:
20
39.99
--
Números com casas decimais também são do tipo number.

undefined: quando criamos uma variável utilizando var ou let e não a inicializamos, essa variável não apontará para nenhum local da memória e receberá o valor undefined.
Ex.:
let fotoPerfil;
console.log(typeof fotoPerfil, fotoPerfil); // Retorna: undefined undefined
--
Tanto o valor quanto o tipo de dado do dado "undefined" se chama "undefined".
O "typeof" serve para descobrir o tipo de um dado. As variáveis retornam um dado e o typeof consegue especificar o tipo desse dado.

null: quando precisamos que uma variável não aponte para nenhum local da memória, utilizamos o valor null.
Ex.:
const aprovado = null;
--

Não atribuimos o valor undefined para uma variável, isto é uma má prática. O undefined deixamos apenas para variáveis que não queremos inicializa-la na mesma linha da sua declaração. Se queremos que uma variável não aponte para nenhum local do sistema, na sua incialização ou na alteração do seu valor, utilizamos o "null".

O null é um valor que é especificado pelo motor do JS como "object", porém isto é um bug da linguagem.
let a = null;
console.log(typeof a, a); // Retorna: object null
--

boolean: só possui dois valores que são "true" e "false". Esses são valores lógicos que são utilizados para direcionar o fluxo do script.
Ex.:
const aprovado = true;
--
*/

/*
Diferença entre dados primitivos e dados passados por referência


Quando atribuimos uma variável à outra podem existir dois comportamentos dependendo do tipo de dado que a variável que está sendo "inserida" possui.

Variável de tipo de dado primitivo:
let a = 24;
let b = a; // Neste momento, uma cópia do valor de a está sendo passada para b

// a e b são 24 neste momento
// Se o valor de a for alterado, b não recebe influência dessa alteração como mostra abaixo

a = 42;
console.log(a, b); // 42, 24
--

Variável de tipo de dado passado por referência:
const a = [1, 2];
const b = a;

// a e b apontam neste momento para o mesmo local da memória
// Se o valor de a for modificado, o valor de b também será

a.push(3);
console.log(a, b); [ 1, 2, 3 ] [ 1, 2, 3 ]
--
*/