/*crear un pequeño formulario HTML con 
los siguientes elementos:
❖ Un título.
❖ Un campo para introducir el nombre.
❖ Un contenedor div sin contenido.
❖ Un botón de enviar.
❖ Al pulsar el botón, aparecerá en el contenedor div
el valor “Hola, ” y el nombre introducido en el 
campo de texto. */

const buttons = document.querySelectorAll('button')
const divs = document.querySelectorAll('div')

const button = buttons[0]
const div = divs[0]

button.addEventListener('click', ponerTexto)

function ponerTexto(e) {
    const inputs = document.querySelectorAll('input')
    const input = inputs[0]
    console.log(input.value)
    const valor = input.value
    div.innerText = valor
    e.preventDefault()
    
}