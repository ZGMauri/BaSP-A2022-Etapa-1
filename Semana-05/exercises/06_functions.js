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
        return NaN;
    }
    return a + b;
}
sumaValidar('string',4);

//Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
console.log('--EXERCISE 6.c--');
function validateInteger (a){
    if (a % 1 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(validateInteger(4));

/*A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c.
Y que valide que los números sean enteros. En caso que haya decimales mostrar un alerta
con el error y retornar el número convertido a entero (redondeado).*/
console.log('--EXERCISE 6.d--');
function sumaValidarD(a,b){
    if (typeof(a) != 'number' || typeof(b) != 'number'){
        alert ('Uno de los parametros no es un numero');
        return NaN;
    } else {
        if (!validateInteger(a)){
            alert('El primer numero no es entero');
            return Math.round(a);
        }else if (!validateInteger(b)){
            alert('El segundo numero no es entero');
            return Math.round(b);
        }else {
            return a + b;
        }
    }
}
console.log(sumaValidarD(4.3,5));

//Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.
console.log('--EXERCISE 6.e--');
function validate (a,b){
    if (!validateInteger(a)){
        alert('El primer numero no es entero, el enero seria ' + Math.round(a));
        return false;
    }else if(!validateInteger(b)){
        alert('El segundo numero no es entero, el entero seria ' + Math.round(b));
        return false;
    }
    return true;
}

function sumaValidarE(a,b){
    if (typeof(a) != 'number' || typeof(b) != 'number'){
        alert ('Uno de los parametros no es un numero');
        return NaN;
    }else {
        if (!validate(a,b)){
            return console.log('Uno de los numeros no es entero');
        }
        else{
            return a + b;
        }
    }
}

console.log(sumaValidarE(4,5));
