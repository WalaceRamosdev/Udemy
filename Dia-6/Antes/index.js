/*Iremos aqui criar as variaveis*/

const colors = ['Red', 'Blue', 'Yellow', 'Purple', 'Green']
const btn = document.getElementById('btn')

/* Aqui será criado as funções*/

btn.addEventListener('click', function(){
    document.body.style.background = colors[3]
    const randomColor = getRandomColor()
    //console.log(randomColor)
})

/* Criando uma função para numero randomico*/

function getRandomColor () {
    return Math.floor(Math.random() * colors.lenght)
}