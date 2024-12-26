// let arrNumeros = [1, 2, 3, 4, 5];

// usar un forEach para imprimir el doble de cada elemento del array

// arrNumeros.forEach((elemento) => {
//   console.log(elemento * 2);
// });

// usando do/while vamos a crear un bucle que sume los numeros que ingrese un usuario hasta que se introduzca el número 0.

// let suma = 0;
// let eleccionUsuario = 0;

// do {
//   eleccionUsuario = parseInt(prompt("Elige un número: "));

//   suma += eleccionUsuario;

//   console.log(suma);
// } while (eleccionUsuario !== 0);

// programa pregunta una contraseña al user, hasta que esta no sea correcta, el bucle while no parará

// let password = "1234";
// let userPassword = "";

// while (password !== userPassword) {
//   userPassword = prompt("Introduce la contraseña: ");

//   if (userPassword === password) {
//     console.log("Contraseña correcta");
//   } else {
//     console.log("Contraseña incorrecta");
//   }
// }

// let varControl = 1;
// let var1 = 0;

// do {
//   let var2 = 10;
//   console.log(`variable 1: ${var1} y variable 2: ${var2}`);
//   var1 += var2;
//   var2 = 1;
//   varControl++;
// } while (varControl <= 10);

// console.log(var1);
// console.log(var2);

// let arrNumeros = [1, 2, 3, 4, 5];

// arrNumeros.map((numero) => {
//   numero /= 2;
//   console.log(numero);
// });

// filter()

// const arrNumeros = [1, 2, 12, 98, -1, 43, 70];

// // arrNumeros.filter((elemento) => condicion);

// let nuevoArr = arrNumeros.filter((numero) => numero % 2 === 0);

// console.log(nuevoArr);

// let arrNombres = [
//   "Cristina",
//   "Guadalupe",
//   "Ifara",
//   "Juvili",
//   "Saras",
//   "Elena",
//   "Angie",
//   "Delcy",
//   "Eli",
//   "Silvia",
//   "Leidy",
//   "Rebeca",
// ];

// let nombresFiltrados = arrNombres.filter((nombre) => nombre.length < 4);

// console.log(nombresFiltrados);

// let numbers = [3, 7, 0, 11, 32, 16, 83, 0, 954, 0];

// let numerosFiltrados = numbers.filter((numero) => numero !== 0);

// console.log(numerosFiltrados);

// let datos = ["nombre", "apellidos", "edad", null, "ciudad"];

// let nuevoArr = datos.filter((elemento) => elemento !== null);

// console.log(nuevoArr);

// reduce()

// array.reduce(callback(accumulator, valorActual) => condicion, valorInicial, 0);

// let numeros = [1, 2, 3, 4, 5];

// let reduceAplicado = numeros.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );

// console.log(reduceAplicado);

// let arr = ["hola", "mundo", "desde", "reduce"];

// console.log(arr);

// const frase = arr.reduce(
//   (accumulator, currentValue) => accumulator + " " + currentValue,
//   ""
// );

// console.log(frase);

// find()

// array.find((elemento, indice, array) condicion);

// let arrNumeros = [1, 2, 65, 100, 10, 45, 76, 31];

// const result = arrNumeros.find((numero) => {
//   return numero > 10;
// });

// console.log(result);

// const palabras = [
//   "Hola",
//   "perro",
//   "alambre",
//   "truco",
//   "manual",
//   "choza",
//   "paleontologo",
//   "aluminio",
// ];

// const empiezanPorA = palabras.find((palabra) => palabra.includes("a"));

// console.log(empiezanPorA);

// let arrNumeros = [1, 2, 65, 100, 10, 45, 76, 31];

// const par = arrNumeros.find((numero) => numero % 2 === 0);

// console.log(par);

// some()

// let arrNumeros = [1, 2, 65, 100, 10, 45, 76, 31];

// let par = (numero) => {
//   return numero % 2 === 0;
// };
// console.log(arrNumeros.some(par));

// funciones JS

// function saludar() {
//     //ejecutamos codigo de lo que sea
//     return devolvemosValorFuera
// }

// funciones nombradas
// let name = prompt("Introduce tu nombre: ");

// function saludo(nombre) {
//   console.log(`Hola ${nombre}`);
// }

// saludo(name);

// // funciones anonimas

// let par = function (number) {
//   return number % 2 === 0;
// };

// // arrow functions

// const saludar = (nombre) => {
//   console.log(`Hola ${nombre}`);
// };

// saludar("pepe");

// funcion que sirve para sumar dos números
// function suma(a, b = 5) {
//   return a + b;
// }

// console.log(suma(100, 15));

// EJERCICIOS

//1 -  crea una función que salude dinámicamente a un usuario.
// let nombre = prompt("Tu nombre: ");

// function saludoDinamico(str) {
//   console.log(`Hola, ${str}!`);
// }

// saludoDinamico(nombre);

//2 - Funcion que sume, reste, multiplique y divida dos numeros.

// function calculos(a, b) {
//   console.log(`Suma: ${a + b}`);
//   console.log(`Resta: ${a - b}`);
//   console.log(`Multiplicación: ${a * b}`);
//   console.log(`División: ${a / b}`);
// }

// calculos(2, 7);

//3 - Escribe una funcion llamada introducirDatos que reciba un nombre y una edad. Si no se proporciona una edad, debe asumir que por defecto la persona tiene 18 años.

// function introducirDatos(nombre, edad = 18) {
//   console.log(`Nombre: ${nombre}, Edad ${edad}`);
// }

// introducirDatos("Cristina", 30);

//4 - Escribe una funcion que verifique si un numero es par o impar, devolviendo true o false.

// function parImpar(numero) {
//   if (isNaN(numero)) {
//     console.log(`${numero} no es número`);
//   } else if (numero % 2 === 0) {
//     console.log(`${numero} es par`);
//   } else {
//     console.log(`${numero} es impar`);
//   }
// }

// parImpar(2);
//5 - Escribe una funcion que te devuelva el area de un rectángulo pasandole por parámetros su alto y su ancho. (F= alto * ancho);

// function areaRectangulo(altura, anchura) {
//   console.log(`El área de este rectángulo es de ${altura * anchura}`);
// }

// areaRectangulo(200, 100);

// crea un programa que sume todos los elementos de un array
// let arrNumeros = [1, 2, 3, 4, 5];

// function sumarElementos(arr) {
//   let arrSumado = arr.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     0
//   );

//   console.log(arrSumado);
// }

// sumarElementos(arrNumeros);

// crea un programa que sume los numeros pares de un array

let arrPrincipal = [1, 34, 12, 6, 87, 100, 42, 66, 59];

function filtrarSumarPares(arr) {
  let numerosFiltrados = arr.filter((elementos) => elementos % 2 === 0);
  let sumaPares = numerosFiltrados.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  console.log(sumaPares);
}

filtrarSumarPares(arrPrincipal);
