/*Definí una función burlarse que reciba como argumento un string str 
y devuelva el mismo string con todas las vocales reemplazadas
 por la letra i */

const burlarse = (str) =>{
    burla = str.replace(/[aeiou]/g, "i");
    return burla
}

const burla1 = burlarse('programar es dificil');
console.log(burla1);
