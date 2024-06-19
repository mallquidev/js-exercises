/*Al pulsar el botón del ejercicio anterior, 
hacer que cambie el contenido HTML del 
documento y muestre, en negrita y cursiva, el texto 
botón pulsado*/

let button = document.getElementById('button')

button.addEventListener('click', changeText)

function changeText(){
    button.textContent = 'pene'
    button.style.fontWeight = 'bold',
    button.style.fontFamily = 'cursive'

}
