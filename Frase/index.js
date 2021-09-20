'use strict'

var frase = prompt("Por favor, introduce una frase.");

if (frase != null) {

    console.log('Frase: \"' + frase + '\"');
    console.log(letras(frase) + " letras y " + palabras(frase) + " palabras");
    console.log(maysc(frase));
    console.log(titulo(frase));
    console.log(letrasReves(frase));
    console.log(palabrasReves(frase));
    if (palindromo(frase) === true) {
        console.log("Sí es un palíndromo");
    } else {
        console.log("No es un palíndromo");
    }
}