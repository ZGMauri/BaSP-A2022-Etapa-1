console.log('----EXERCISE 6 : FOR----')

/*Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar 
la función y guardar el resultado en una variable, mostrando el valor de dicha variable
en la consola del navegador.*/
console.log('--EXERCISE 6.a--');
function suma(a,b) {
    return a + b;
}
var resultado = suma(7,8);
console.log(resultado);

/*A la función suma anterior, agregarle una validación para controlar si alguno de los 
parámetros no es un número; de no ser un número, mostrar una alerta aclarando que 
uno de los parámetros tiene error y retornar el valor NaN como resultado*/
console.log('--EXERCISE 6.b--');
function sumaValidar(a,b){
    if (typeof(a) != 'number' || typeof(b) != 'number'){
        alert ('Uno de los parametros no es un numero');
        console.log(NaN);
    }
    return a + b;
}
sumaValidar('string',4);

//Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
console.log('--EXERCISE 6.c--');
function validate (a){
    if (Number.isInteger (a)){
        return true;
    }
    return false;
}
console.log(validate(4));

/*A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c.
Y que valide que los números sean enteros. En caso que haya decimales mostrar un alerta
con el error y retornar el número convertido a entero (redondeado).*/
console.log('--EXERCISE 6.d--');
function sumaValidarEnteros (a,b){
    if (!validate(a)){
        alert('El primer numero no es entero');
        return Math.round(a);
    }else if (!validate(b)){
        alert('El segundo numero no es entero');
        return Math.round(b);
    }else {
        return a + b;
    }
}
console.log(sumaValidarEnteros(4,5));

//Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.
console.log('--EXERCISE 6.e--');
function validateDos (a,b){
    if (Number.isInteger(a) && Number.isInteger(b)){
        return a + b
    }else if (!Number.isInteger(a)){
        alert('El primer numero no es entero');
        return Math.round(a);
    }
    alert('el segundo numero no es entero');
    return Math.round(b);
}

function sumaE(a,b) {
    return validateDos(a,b);
}
console.log(sumaE(4.3,5));