/*Al pulsar el botón del ejercicio anterior, 
hacer que se muestre por consola un mensaje de 
log, otro de información y otro de error.*/

let button = document.getElementById("button");

button.addEventListener('click', info)

function info() {
    console.log('log')
    console.info('info')
    console.error('error')
}
