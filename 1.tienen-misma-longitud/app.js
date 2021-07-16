/* Definí una función tienenMismaLongitud que reciba como argumentos dos strings a y b y devuelva si tienen la misma longitud.*/

const tienenMismaLongitud = (a, b) =>{
    if (a.length === b.length){
        return true;
    } else{
        return false;
    }
}

const prueba1 = tienenMismaLongitud('javascript', 'java');
console.log(prueba1);

const prueba2 = tienenMismaLongitud('manzana', 'cerveza');
console.log(prueba2);