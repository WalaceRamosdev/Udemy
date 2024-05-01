/* Vamos ver agora as variaves de tipo de referencia.

Object - é um grupo de informações referente a apenas um item

Em JavaScript, podemos definir objetos a partir de suas propriedades.
No exemplo anterior, utilizamos um item com nome de Pen e demos a ela algumas caracteristicas como preço, cor, disponibilidade e afins. Para facilitar a escrita e manuseio do código, ao invés de se escrever e reescrever as propriedades do item, podemos definir um variavel com o nome do objeto desejado e em seguida definirmos suas propriedades dentro de { }

Ex.:

let itemName = 'Pen'
let itemPrice = 3
let itemAvailable = true
let itemColor = 'Red'

Acima estamos usando um código com uma estrutura divida para o item.

let pen = {
    itemName: 'Pen',
    itemPrice: 3,
    itemAvailable: true,
    itemColor: 'Red'
}

Aqui no segundo exemplo, foi montado um objeto semelhante ao primeiro exemplo, porém com uma escrita mais definida e com mais facilidade de manutenção.

*/
