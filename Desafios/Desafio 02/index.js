let productValue = Number(prompt('Entre com o valor do produto: '))
console.log(productValue)

if (productValue >= 20){
    document.getElementById('result').innerHTML = 'Aprovado'
} else {
    document.getElementById('result').innerHTML = 'Negado'
}