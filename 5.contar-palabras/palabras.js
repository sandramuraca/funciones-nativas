/*Definí una función contarPalabras que reciba como argumento un string str y devuelva la cantidad de palabras que posee*/

const texto1 = "ada lovelace";
const palabras = texto1.split(" ");
const cantidadPalabras = palabras.length;

console.log(cantidadPalabras);
//Para poder hacer esto utilizaremos la función split la cual TROCEA una cadena en subcadenas tomando como carácter de corte el que le pasemos como parámetro, y dejándonos el resultado en un array de palabras.

const contarPalabras = (str) =>{
    let palabras = str.split(" ");
    let cantidadPalabras = palabras.length;
    return cantidadPalabras
}

const frase1 = contarPalabras('javascript');
console.log(frase1);

const frase2 = contarPalabras('ada lovelace');
console.log(frase2);

const frase3 = contarPalabras('si debuggear es el proceso de remover bugs, programar es el proceso de agregarlos');
console.log(frase3);