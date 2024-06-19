/*Al pulsar el botón del ejercicio anterior, 
inyectar en un contenedor div (localizado justo 
antes del botón), una imagen pequeña*/

let button = document.getElementById('button')
let div = document.getElementById('caja')
let max = './max.jpg'
button.addEventListener('click', placeImage)
let estado = true
function placeImage() {

    console.log(estado)
    if (estado) {
        const img = document.createElement('img')
        img.className = 'img'
        img.src = max
        img.id = 'imagen'
        div.appendChild(img)
        estado = false;
    } else {
        const img = document.getElementById('imagen')
        if (img) {
            div.removeChild(img)
        }
        estado = true
        console.log(estado)
        console.log('xdd')
    }
}

