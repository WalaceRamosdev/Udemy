/* As variáveis podem ser let ou const, porém, existe uma pequena diferença para a escolha destas duas variáves.

let = recebe um valor que pode ser alterado no decorrer da escrita do código

Ex.: uma variavel com nome de price, pode ter o seu valor alterado no decorrer do que é pedido no código.

let price = 30
price = 20
console.log(price)

De inicio, a variavel price recebeu o valor de 30, mas logo na linha seguinte o seu valor é alterado para 20, sendo assim, o valor a ser exibido na console do navegador será o segundo valor que é igual à 20.

const = recebe um valor que não pode ser alterado, será um valor constante para toda a vida útil do código.

Ex.: usaremos o mesmo exemplo acima, porém, veremos que a console no navegador irá ter um outro comportamento

const price = 30
price = 20
console.log(price)

Dentro da console podemos ver que foi apresentando um erro, dizendo que a variavel tem um valor imutavel e nao pode ser alterada, como esta sendo feito na linha seguinte. Portanto. para corrigirmos o erro, devemos apagar a linha que sugere a alteração de valor da constante (const) */