'use strict'

function letras(frase) {

    return frase.length;
}//Devuelve la cantidad de carácteres que tiene la frase

function palabras(frase) {
    return frase.split(' ').length;
}//Devuelve la cantidad de palabras al separarlo los espacios con split

function maysc(frase) {
    return frase.toUpperCase();
}//Devuelve la frase pero transformada a mayusculas

function titulo(frase) {
    var separarFrase = frase.toLowerCase().split(' ');
    for (var i = 0; i < separarFrase.length; i++) {

        separarFrase[i] = separarFrase[i].charAt(0).toUpperCase() + separarFrase[i].substring(1);
    }

    return separarFrase.join(' ');
}//separo la frase en palabras, convierto la primera letra de cada palabra en mayuscula y luego uno las palabras

function letrasReves(frase) {
    return frase.split("").reverse().join("");
}//separo la frase, invierto las palabras y lo vuelvo a unir

function palabrasReves(frase) {
    var palabras = frase.split(" ").reverse();
    var string = "";
    var palabra = "";
    for (palabra in palabras)
        string += (palabra > 0 ? " " : "") + palabras[palabra];
    return string;
}//separo la frase, la invierto, y creo un bucle para crear otra frase con las palabras al reves

function palindromo(frase) {
    var re = /[\W_]/g;
    var fraseFiltrada = frase.toLowerCase().replace(re, '');
    var fraseReves = fraseFiltrada.split('').reverse().join('');
    return fraseFiltrada === fraseReves;
}//quito los carácteres sobrantes , convierto la frase a minuscula.
//separo cada caracter de la frase, lo invierto y junto los caracteres para formar la frase invertida
//guardo dos variables con las frases correcta y invertida y las comparo

module.exports = {
	letras,
	palabras,
	maysc,
	titulo,
	letrasReves,
	palabrasReves,
	palindromo
}