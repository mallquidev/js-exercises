/*crear un documento HTML con dos 
contenedores div.
❖ Cada contenedor tendrá un título y un botón. 
❖ Por defecto, el primer div estará visible y el 
segundo oculto. 
❖ Al pulsar el botón del primer div, se ocultará este 
contenedor y mostrará el segundo. 
❖ Al pulsar el botón del segundo div, se realizará el 
proceso inverso. */

const buttonOne = document.querySelector('#button1')
const buttonTwo = document.querySelector('#button2')


const divs = document.querySelectorAll('div')
/* const divTwo = divs[1] */
const divOne = divs[0]
const divTwo = divs[1]


buttonTwo.addEventListener('click', enviar)
console.log('funka mrda')
function enviar() {
    divOne.style.display = 'block'
    divTwo.style.display = 'none'
}

buttonOne.addEventListener('click', enviarTwo)

function enviarTwo() {
    divTwo.style.display = 'block'
    divOne.style.display = 'none'
}