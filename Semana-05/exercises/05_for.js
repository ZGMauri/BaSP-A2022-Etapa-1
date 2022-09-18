console.log('----EXERCISE 5 : FOR----')

//Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
console.log('--EXERCISE 5.a--');
var array = ['palabra1', 'palabra2', 'palabra3', 'palabra4', 'palabra5'];
for (var i=0; i<array.length; i++){
    alert(array[i]);
};

//Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
console.log('--EXERCISE 5.b--');
var arrayDos = ['palabra1', 'palabra2', 'palabra3', 'palabra4', 'palabra5'];
for (var i=0; i<arrayDos.length; i++){
    arrayDos[i] = arrayDos[i].toUpperCase();
    alert(arrayDos[i].substring(0,1) + arrayDos[i].toLowerCase().substring(1,21));
};

/* Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto 
a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. 
Al final mostrar una única alerta con la cadena completa. */
console.log('--EXERCISE 5.c--');
var sentence = [''];
for (var i=0; i<array.length; i++){
    sentence[i] = array[i];
};
alert(sentence);

/* Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número 
de la repetición, es decir que al final de la ejecución del bucle for debería haber 10 
elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola
del navegador el array final (utilizar console.log). */
console.log('--EXERCISE 5.d--');
var arrayVAcio = [];
for (var i=0; i<10; i++){
    arrayVAcio.push (i);
};
console.log(arrayVAcio);