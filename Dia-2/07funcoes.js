/* Terceira variavel de referencia -

Functions = São basicamente um grupo de tarefas ou cálculos de códigos que podem ser reaproveitados dentro do código

*/

function saleStatus(status, total /*Parametro*/) {

    /* Aqui dentro será escrito o que a função irá fazer */

    console.log('Transaction ' + status + '! Total amount $' + total)
}

/* Para exibir a função, ela precisa ser chamada ao final do código */

saleStatus('Approved', 30 /*Argumento*/)

/* Dentro da função pode ser colocado uma infinidade de códigos que podem ser reaproveitos sem que seja necessário escreve-los novamento, apenas chamando a função necessária */

/* Função com calculos */

function percentage10 (price) {
    return price - (price * 10 / 100)
}
console.log (percentage10(20))
