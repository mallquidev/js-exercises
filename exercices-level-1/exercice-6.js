/*Añadir un nuevo botón al ejercicio 
anterior, que al pulsarlo cambie la imagen. */

const button2 = document.getElementById('button2')
const caja = document.getElementById('caja')
let perroxd = './perroxd.jpeg'

button2.addEventListener('click', addImagen)

let estadoNew = true
function addImagen() {
    console.log(estadoNew)
    if(estadoNew){
        const img = document.getElementById('imagen')
        img.src = perroxd
        estadoNew = false    
    } else {
        const img = document.getElementById('imagen')
        if (img) {
            caja.removeChild(img)
            console.log(img)
        }
    }
    
    
}
