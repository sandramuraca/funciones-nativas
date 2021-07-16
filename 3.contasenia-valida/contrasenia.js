/*Definí una función esValida que tome por parámetro una contrasenia
 (string) y nos indique si tiene 8 caracteres o más*/

const esValida = (contrasenia) => {
    if(contrasenia.length >= 8){
        return true;
    } else{
        return false;
    }
}

const pass1 = esValida('contraseniaMuySegura');
console.log(pass1);

const pass2 = esValida('abc123');
console.log(pass2);