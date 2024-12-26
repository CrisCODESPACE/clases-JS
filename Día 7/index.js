// EJERCICIOS CON FOR

// 1- SUMA DE NUMEROS - Escribir un programa que calcule la suma de los números del 1 al 100.

// let resultadoSuma = 0;

// for (let i = 0; i <= 100; i++) {
//   console.log(i);

//   resultadoSuma += i;

//   console.log(`Iteración de bucle número: ${i}.`);
//   console.log(
//     `Valor de la variable resultadoSuma en esta iteración: ${resultadoSuma}.`
//   );
// }

// 2 - TABLAS DE MULTIPLICAR - Escribe un programa que te devuelva, según el número elegido, la tabla de multiplicar correspondiente.

// let numeroElegido = 3;

// for (let i = 0; i <= 10; i++) {
//   console.log(`${numeroElegido} x ${i} = ${numeroElegido * i}`);
// }

// 3 - LISTA INVERSA - Dada una lista de números, recórrela y deveulve esa lista a la inversa.

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numeros);

// for (let i = numeros.length - 1; i >= 0; i--) {
//   console.log(numeros[i]);
// }

// let numerosReverse = numeros.reverse();
// console.log(numerosReverse);

// for (let i = 0; i < numerosReverse.length; i++) {
//   console.log(numerosReverse[i]);
// }

// 4 - Escribe un bucle que cuente el numero de vocales en un string

// let str = "Hola mundo";
// let suma = 0;

// for (let i = 0; i < str.length; i++) {
//   let caracter = str[i];

//   switch (caracter) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//       console.log(`${caracter} es una vocal`);
//       suma++;
//       break;
//     default:
//       console.log(`${caracter} no es vocal`);
//   }
// }

// console.log(`En este string existen ${suma} vocales.`);

// 5 - NUMEROS PARES E IMPARES - Crea un programa que imprima los números del 1 al 50 y los clasifique como pares o impares.
// let numPar = [];
// let numImpar = [];

// for (let i = 1; i <= 50; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} es un número par.`);
//     numPar.push(i);
//   } else {
//     console.log(`${i} es impar.`);
//     numImpar.push(i);
//   }
// }

// console.log(numPar);
// console.log(numImpar);

// EJERCICIOS CON WHILE

// 1 - CUENTA ATRÁS - escribir un programa que realice una cuenta regresiva desde un número dado hasta 0.

// let numero = 20;

// while (numero >= 0) {
//   console.log(numero);
//   numero--;
// }

// 2 - ADIVINA EL NUMERO - Crear un programa donde la computadora genere un número aleatorio entre 1 y 100. El usuario tiene que adivinarlo introduciendo un número hasta acertar.

// const numeroSecreto = Math.floor(Math.random() * 100 + 1);
// console.log(numeroSecreto);

// let acierto = false;
// // let numeroUser = 0;

// while (!acierto) {
//   numeroUser = parseInt(prompt("Adivina el número (entre 1 y 100): "));

//   if (numeroSecreto === numeroUser) {
//     acierto = true;
//     console.log("HAS GANADO!");
//   } else if (isNaN(numeroUser)) {
//     acierto = true;
//     console.log("HAS PARADO EL JUEGO");
//   } else {
//     console.log("INTENTALO DE NUEVO.");
//   }
// }

// 3 - VALIDACION DE ENTRADA - Pide al user que introduzca una contraseña y verifica que cumple con ciertos requisitos (por ejemplo, que tenga al menos 8 caracteres). Si no los cumple, vuelve a pedir otra contraseña.

// let password = "";
// let validPassword = false;

// while (!validPassword) {
//   password = prompt("Comprueba si tu contraseña es válida: ");

//   if (password.length >= 8) {
//     console.log("Tu contraseña cumple con los requisitos");
//     validPassword = true;
//   } else {
//     console.log("Tu contraseña debe tener mínimo 8 caracteres");
//   }
// }

// while (true) {
//   password = prompt("Comprueba si tu contraseña es válida: ");

//   if (password.length >= 8) {
//     console.log("Tu contraseña cumple con los requisitos");
//     // validPassword = true;
//     break;
//   } else {
//     console.log("Tu contraseña debe tener mínimo 8 caracteres");
//   }
// }

// EJERCICIOS DO/WHILE

// 1 MENU INTERACTIVO - Crea un menú que ofrezca varias opciones (por ejemplo,  sumar dos numeros, restar dos numeros, salir, etc...). El bucle debe ejecutarse hasta que el usuario escriba elija la opción salir.

// let options = "";

// do {
//   options = prompt(
//     "¿Qué quieres hacer? '1' para sumar dos números, '2' para restar dos números, '3' para salir: "
//   );
//   let num1 = 0;
//   let num2 = 0;
//   switch (options) {
//     case "1":
//       console.log("Has elegido: suma de números");

//       num1 = parseFloat(prompt("Introduce el primer número: "));
//       num2 = parseFloat(prompt("Introduce el segundo número: "));
//       console.log(`La suma de los dos números es: ${num1 + num2}`);
//       break;
//     case "2":
//       console.log("Has elegido: resta de números");

//       num1 = parseFloat(prompt("Introduce el primer número: "));
//       num2 = parseFloat(prompt("Introduce el segundo número: "));
//       console.log(`La resta de los dos números es: ${num3 - num4}`);
//       break;
//     case "3":
//       console.log("Hasta luego!");
//       break;
//     default:
//       console.log("No es una opción disponible");
//   }
// } while (options !== "3");

// 2 - VERIFICA SI UNA PALABRA ES UN PALINDROMO - Pide al usuario que ingrese una palabra y que el programa verifique si es un palíndromo o no. Dale al user una opcion de salir para parar la ejecución del bucle.

// let str = "";

// do {
//   str = prompt(
//     "Verificador de palíndromo. Introduce una palabra y verificaremos si es un palíndromo: "
//   );

//   if (str === "salir") {
//     console.log("ADIOS!");
//     break;
//   }

//   // aquí le haremos un normalize al str
//   str = str.toLowerCase();
//   console.log(str);
//   str = str.replaceAll(" ", "");
//   console.log(str);

//   // aqui convertimos el str en array, lo invertimos y volvemos a convertirlo en un array con los caracteres invertidos.
//   let strToArr = str.split("");
//   console.log(strToArr);
//   let invertedArr = strToArr.reverse();
//   console.log(invertedArr);
//   let arrToStr = invertedArr.join("");
//   console.log(arrToStr);

//   // comprobación mediante condicionales
//   if (str === arrToStr) {
//     console.log(`${str} es un palíndromo`);
//   } else {
//     console.log(`${str} no es un palíndromo`);
//   }
// } while (true);

// MANIPULACION DE ARRAYS - MÉTODOS AVANZADOS

// forEach

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((number) => console.log(number));

// let numeros = [10, 20, 9, 65, 32];

// let suma = 0;

// numeros.forEach((elemento) => {
//   suma += elemento;
//   console.log(suma);
// });

// let frutas = ["manzana", "kiwi", "pera"];

// frutas.forEach((fruta) => {
//   console.log(fruta.toUpperCase());
// });

// let arrColores = ["rojo", "negro", "indigo", "amarillo"];

// arrColores.forEach((color, pos) => console.log(pos, color));

// let numeros = [1, 2, 3, 4, 5];
// let newArr = [];

// numeros.forEach((numero) => {
//   numero *= 2;
//   newArr.push(numero);
//   console.log(newArr);
// });

// map

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

// const arrDoble = numbers.map((number) => number * 2);
// console.log(arrDoble);

// const toStr = numbers.map((number) => number.toString());
// const copy = numbers.map((number) => number);
// console.log(copy);

// console.log(toStr);

// let arrAnimales = ["oso", "perro", "gato", "canguro"];

// let copy = arrAnimales.map((animal) => animal.toUpperCase());

// console.log(copy);

// let numeros = [10, 20, 30, 40];

// let nuevoArrayNumeros = numeros.map((numero, index) => numero + index);

// console.log(nuevoArrayNumeros);

// let arrPalabras = ["Mesa", "Trinidad", "Tranvia", "Paseito", "Parada"];

// let nuevo = arrPalabras.map((palabra) => palabra.length);

// console.log(nuevo);
