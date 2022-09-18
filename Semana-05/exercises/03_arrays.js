console.log('----EXERCISE 2 : ARRAYS----')

//Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
//mostrar por consola los meses 5 y 11 (utilizar console.log).
console.log('--EXERCISE 3.a--');
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(meses[5] + ' ' + meses[11])

//Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log('--EXERCISE 3.b--');
console.log(meses.sort());

//Agregar un elemento al principio y al final del array (utilizar unshift y push).
console.log('--EXERCISE 3.c--');
meses.unshift ('Comienzo del año');
meses.push ('Finale del año');
console.log(meses);

//Quitar un elemento del principio y del final del array (utilizar shift y pop).
console.log('--EXERCISE 3.d--');
meses.shift();
meses.pop();
console.log(meses);

//Invertir el orden del array (utilizar reverse).
console.log('--EXERCISE 3.e--');
console.log(meses.reverse());

//Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
console.log('--EXERCISE 3.f--');
console.log(meses.join('-'));

//Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
console.log('--EXERCISE 3.g--');
var mesesDos = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var mesesCopia = mesesDos.slice(4,11);
console.log(mesesCopia);


