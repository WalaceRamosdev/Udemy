/* Esta parte será destinada para definir quais numeros o computador irá selecionar*/

let computerNumber
let userNumbers = []

function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1)
}

/* Aqui será aonde o numero selecionado pelo usuario sera tratado */

function compareNumbers() {
    const userNumber = Number(document.getElementById('inputBox').value)
    userNumbers.push(' ' + userNumber)
    document.getElementById('guesses').innerHTML = userNumbers

    /* Adicionando a parte lógica para a página */

    if (userNumber > computerNumber) {
        document.getElementById ('textOutput').innerHTML = 'Seu número é muito alto'

    } else if (userNumber < compareNumbers) {
        document.getElementById ('textOutput').innerHTML = 'Seu número é muito baixo'

    } else {
        document.getElementById ('textOutput').innerHTML = 'Parabéns, você acertou !'
        
    }

}


