/* Definí una función esElUltimoCaracter que reciba como argumentos una palabra y un caracter y nos indique si la palabra termina con el caracter.*/

const palabraPrueba = "hola";
const ultimaLetra = palabraPrueba.charAt(palabraPrueba.length-1);
console.log(ultimaLetra);


const esElUltimoCaracter = (palabra, caracter) =>{
    ultimoCaracter = palabra.charAt(palabra.length-1);
    
    if(ultimoCaracter === caracter){
        return true;
    } else {
        return false;
    }
}

const palabra1 = esElUltimoCaracter('lovelace','e');
console.log(palabra1);

const palabra2 = esElUltimoCaracter('lovelace', 'f');
console.log(palabra2);