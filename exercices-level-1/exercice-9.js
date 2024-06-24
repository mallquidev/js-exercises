/*modificar el ejercicio anterior para que 
al pulsar el botón, el nombre introducido se 
muestre como título h1 en un contenedor div que 
se hará visible, ocultando el div donde está el 
formulario. 
El contenedor donde se muestra el nombre, tendrá 
además un botón para regresar al formulario.*/

const textDiv = document.getElementById('saludo')
const divForm = document.getElementById('divForm')
const buttons = document.querySelectorAll('button')
const button = buttons[0]

button.addEventListener('click', mostrarTitulo)

function mostrarTitulo(e){
    const input = document.getElementById('nombre')
    const texto = input.value
    console.log(texto)
    const h1 = document.createElement('h1')
    h1.innerText = input.value
    textDiv.appendChild(h1)
    divForm.style.display = 'none'
    
    const buttonOn = document.createElement('button')
    buttonOn.id = 'btnOn'
    buttonOn.textContent = 'Volver'
    textDiv.appendChild(buttonOn);
    
    buttonOn.addEventListener('click', function() {
        divForm.style.display = 'block'
    })

    e.preventDefault()
    
}

