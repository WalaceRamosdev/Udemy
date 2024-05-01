/* Segundo tipo de variável - 

Arrays = são como listas para serem introduzidas em uma variável. Elas são escritas dentro de [ ] e sempre separadas por , dentro das cerquilhas a lista é divida por itens e podem ser desde boolean até string e numbers. Cada item dentro das cerquilhas também são conhecidos por index e são numerados a partir do 0. No exemplo abaixo, temos 3 nomes, e ao invés de iniciarmos a contagem de itens pelo número 1, começamos pelo 0, ou seja, Marco = 0, Silvia = 1 e Elisa = 2 dando assim, segmento aos demais itens adicionados dentro da lista.
Na console.log abaixo, podemos exibir todos os itens da lista, ou definir qual item será exibido, para isso, precisamos adicionar cerquilhas [] ao lado da variavel e o número correspondente ao item que será exibido.

Ex.:

console.log(friends[0]) = Apenas Marcos
console.log(friends[1]) = Apenas Silvia
console.log(friends[2]) = Apenas Elisa

Também é possivel substituir os itens da lista definindo uma nova propriedade, por exemplo.

friends[2] = 'Junior' - Aqui alteramos a propriedade Elisa para a propriedade Junior

 */

let friends = ['Marcos', 'Silvia', 'Elisa']
console.log(friends)