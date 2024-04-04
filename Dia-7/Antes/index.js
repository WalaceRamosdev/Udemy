/* Esta parte será destinada para definir quais numeros o computador irá selecionar*/

let computerNumber
let userNumbers = []
let attempts = 0
let maxGuesses = 10

function newGame () {
    window.location.reload()
}

function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1)
}

/* Aqui será aonde o numero selecionado pelo usuario sera tratado */

function compareNumbers() {
    const userNumber = Number(document.getElementById('inputBox').value)
    userNumbers.push(' ' + userNumber)
    document.getElementById('guesses').innerHTML = userNumbers

    /* Adicionando a parte lógica para a página */

    if ( attempts < maxGuesses) {

        if (userNumber > computerNumber) {
            document.getElementById ('textOutput').innerHTML = 'Seu número é muito alto'
            document.getElementById ('inputBox').value = ''
            attempts++
            document.getElementById('attempts').innerHTML = attempts
    
        } else if (userNumber < compareNumbers) {
            document.getElementById ('textOutput').innerHTML = 'Seu número é muito baixo'
            document.getElementById ('inputBox').value = ''
            attempts++
            document.getElementById('attempts').innerHTML = attempts
        } else {
            document.getElementById ('textOutput').innerHTML = 'Parabéns, você acertou !'
            attempts++
            document.getElementById('attempts').innerHTML = attempts
            document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
        }
    
    } else {
        document.getElementById('textOutput').innerHTML = 'Você Perdeu ! O número do computador é ' + computerNumber
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
    }

}


