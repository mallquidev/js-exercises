/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function verifyAnagrama(val1, val2) {
    let prompt1 = val1.toLowerCase(); //odin
    let prompt2 = val2.toLowerCase(); //nido
    
    let valor1 = prompt1.split('').sort().join('')
    let valor2 = prompt2.split('').sort().join('')

    if(valor1 === valor2) {
        return true
    } else {
        return false
    }
    

}
let palabra1 = prompt('Ingrese una palabra')
let palabra2 = prompt('ingrese el anagrama')
console.log(verifyAnagrama(palabra1, palabra2))