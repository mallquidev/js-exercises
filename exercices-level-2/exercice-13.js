/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */


function exercici13() {
    let fibonacci = [0, 1]
    
    for(let i = 1; i< 49; i++){
        
        let final = fibonacci.length - 1
        let penult = fibonacci.length - 2
        
        fibonacci.push(fibonacci[final] + fibonacci[penult])
        
        
    }
    console.log(fibonacci)
}


exercici13()