/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

function primo(num){
    if(num <= 1) return false;
    for(let i = 2; i < num; i++){
        if(num % i === 0) return false;
    }
    return true
}

function imprimirPrimos(){
    for(let i = 1; i <= 100; i++){
        if(primo(i)){
            console.log(i)
        }
    }
}

imprimirPrimos()
