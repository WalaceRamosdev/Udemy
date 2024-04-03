/*Iremos aqui criar as variaveis*/

const colors = ['Red', 'Blue', 'Yellow', 'Purple', 'Green']
const btn = document.getElementById('btn')

/* Aqui será criado as funções*/

btn.addEventListener('click', function(){
    document.body.style.background = colors[1]
})