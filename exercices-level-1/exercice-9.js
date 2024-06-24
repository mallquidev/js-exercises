/*modificar el ejercicio anterior para que 
al pulsar el botón, el nombre introducido se 
muestre como título h1 en un contenedor div que 
se hará visible, ocultando el div donde está el 
formulario. 
El contenedor donde se muestra el nombre, tendrá 
además un botón para regresar al formulario.*/

const divs = document.querySelectorAll('div')
const div = divs[0]
const buttons = document.querySelectorAll('button')
const button = buttons[0]

button.addEventListener('click', ponerTitulo)
function ponerTitulo(e) {
    const inputs = document.querySelectorAll('input')
    const input = inputs[0]
    console.log(input.value)
    e.preventDefault()
}

alert('xd')
console.log('xd')