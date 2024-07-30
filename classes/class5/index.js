// Um comentário
console.log('Olá mundo!');
console.log('Este texto será exibido no console do navegador.');

alert('Olá mundo!');
alert('Meu nome é Caio');
//

/*
Como mesclar o JavaScript com o HTML


Em um arquivo HTML podemos colocar código JavaScript dentro de um elemento de tag script ou atribuir um arquivo JS em um elemento script com o atributo "src" passando como seu valor o caminho do arquivo.
Ex.:
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  -> Código JS dentro de um elemento script
  <script>
    console.log('Alguma coisa')
  </script>

  -> Arquivo JS atribuido ao elemento script
  <script src="js/caminho-do-arquivo.js"></script>
</body>
</html>

É uma boa prática deixar o HTML e o JS separados em arquivos diferentes como mostra no segundo elemento script do exemplo anterior.

Um elemento script pode ser colocado dentro do elemento head como também no body, mas é uma boa prática colocar no final do body antes deste ser fechado pois colocando no head fará com que a página execute primeiro o script e após isso carregue o HTML e o CSS, isso fará com que seu usuário fique vendo uma tela em branco até que o script seja carregado.
Ex.:
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  
  -> Prática não recomendada
  <script src="js/caminho-do-arquivo.js"></script>
</head>
<body>
  -> Melhor prática
  <script src="js/caminho-do-arquivo.js"></script>
</body>
</html>

//////////////////////////////////////

O navegador carrega o HTML, o CSS e o JS que são entregues a ele e exibirá ao usuário que está utilizando, tudo que é exibido se chama front-end. HTML, CSS e JS serão carregados do lado do cliente.

O Node.JS carrega o JS do lado do servidor e tudo que é executado no servidor é o back-end.

Apesar do navegador e o Node.JS terem o mesmo motor que processa o JavaScript, eles possuem coisas diferentes. O navegador por exemplo tem o objeto window, que é a tela do navegador, e dessa forma o JS que é executado no navegador consegue manipular o window, utilizando por exemplo a linha "window.alert()", já do lado do servidor não é possível fazer o mesmo porque não existe o objeto janela, porém, com o Node.JS é possível manipular coisas como o banco de dados.
*/