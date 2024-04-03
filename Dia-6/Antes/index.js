/*Iremos aqui criar as variaveis*/

const colors = ['Red', 'Blue', 'Gray', 'Yellow', 'Purple', 'Green']
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

/* Aqui será criado as função de click */

btn.addEventListener('click', function(){
    const randomColor = getRandomColor()
    document.body.style.background = colors[randomColor]
    color.textContent = colors[randomColor]
    //console.log(randomColor)
})

/* Criando uma função para numero randomico */

function getRandomColor () {
    return Math.floor(Math.random() * colors.length)
}