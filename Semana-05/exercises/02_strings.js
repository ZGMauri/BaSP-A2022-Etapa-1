console.log('----EXERCISE 2 : STRINGS----')

//Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
console.log('--EXERCISE 2.a--');
var texto = 'diez caracteres';
var mayuscula = texto.toUpperCase();
console.log(mayuscula); 

//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
console.log('--EXERCISE 2.b--');
var textoDos = 'diezz caracteres';
var nuevoTexto = textoDos.substring(0,5);
console.log(nuevoTexto);

//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
console.log('--EXERCISE 2.c--');
var textoTres = 'diez caracteres';
var nuevoTextoDos = textoTres.substring(textoTres.length - 3);
console.log(nuevoTextoDos);

//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. 
//Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
console.log('--EXERCISE 2.d--');
var textoCuatro = 'mas de diez caracteres';
var nuevoTextoCuatro = textoCuatro.toUpperCase();
console.log(nuevoTextoCuatro.substring(0,1) + nuevoTextoCuatro.toLowerCase().substring(1,21));

//Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
console.log('--EXERCISE 2.e--');
var textoCinco = 'mas de diez caracteres';
var textoEnBlanco = textoCinco.indexOf(' ');
console.log(textoEnBlanco);

//Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
//Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula
//(utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
console.log('--EXERCISE 2.f--');
var textoSeis = 'palabralarga palabramaslarga';
var encontrarSegundaMayuscula = textoSeis.indexOf(' ');
console.log(encontrarSegundaMayuscula);
var palabraResultado = textoSeis.toUpperCase().substring(0,1) +
    textoSeis.substring( 1, textoSeis.indexOf(' ') + 1) + 
    textoSeis.toLocaleUpperCase().substring(textoSeis.indexOf(' ') + 1,textoSeis.indexOf(' ') + 2) +
    textoSeis.substring(textoSeis.indexOf(' ') + 2, textoSeis.length);
console.log(palabraResultado);


