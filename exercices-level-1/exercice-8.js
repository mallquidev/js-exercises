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
const button = buttons[0]

button.addEventListener('click', ponerTexto)

function ponerTexto(e) {
    const input = document.getElementById('nombre')
    const textoDiv = document.getElementById('saludo')
    console.log(input.value)
    const valor = input.value
    textoDiv.innerText = valor
    e.preventDefault()
    
}