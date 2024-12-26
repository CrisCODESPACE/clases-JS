// let edad = "HOLA";

// if (edad >= 18) {
//   console.log("Eres mayor de edad");
// } else if (edad < 18) {
//   console.log("Aún no eres mayor de edad");
// } else {
//   console.log("La edad dada no tiene un formato correcto");
// }

// let nota = 10;

// if (nota >= 9 && nota <= 10) {
//   console.log(`Tu nota en el examen ha sido ${nota}, tienes un sobresaliente`);
// } else if (nota >= 7 && nota < 9) {
//   console.log(`Tu nota en el examen ha sido ${nota}, tienes un notable`);
// } else if (nota >= 5 && nota < 7) {
//   console.log(`Tu nota en el examen ha sido ${nota}, tienes un aprobado`);
// } else if (nota < 5 && nota >= 0) {
//   console.log(`Tu nota en el examen ha sido ${nota}, tienes un suspenso`);
// } else {
//   console.log("No calificable");
// }

//1- Escribe un programa que compruebe si el usuario es mayor de edad. Usaremos un prompt para preguntarle al user su edad.

// let edad = prompt("Introduce tu edad: ");

// if (edad >= 18 && edad <= 140) {
//   console.log(`Tienes ${edad}. Eres mayor de edad`);
// } else if (edad < 18 && edad >= 0) {
//   console.log(`Tienes ${edad}. Eres menor de edad`);
// } else {
//   console.log("Formato incorrecto");
// }
//-------------------------------------------------
//2- Clasificador de números. Le pedimos al usuario que ingrese un número. Comprobamos si este numero es negativo, positivo o 0.

// let clasificaNumero = prompt("Por favor, ingrese un número: ");

// console.log(typeof clasificaNumero);

// if (clasificaNumero > 0) {
//   alert(`${clasificaNumero} es un número positivo`);
// } else if (clasificaNumero === 0) {
//   alert(`${clasificaNumero} es un 0`);
// } else if (clasificaNumero < 0) {
//   alert(`${clasificaNumero} es un número negativo`);
// } else {
//   alert(`${clasificaNumero} no es un número`);
// }
//--------------------------------------------------
//3- Comprobación de números pares e impares. Pide al usuario que introduzca un número y clasifica este número según si es par o impar.

// let numero = parseInt(prompt("Introduce un número: "));

// POSIBLE SOLUCION 1
// if (isNaN(numero)) {
//   console.log("El dato introducido no es un número");
// } else {
//   if (numero % 2 === 0) {
//     console.log("El número es par");
//   } else {
//     console.log("El número es impar");
//   }
// }

//POSIBLE SOLUCION 2 (SIN TENER EN CUENTA LA POSIBILIDAD DE QUE EL USER INTRODUZCA EN EL PROMPT UN STRING)
// if (numero % 2 === 0) {
//   alert(`El número introducido es par`);
// } else {
//   alert("El número introducido es impar");
// }

// let num2 = 3;
// let num = parseInt(prompt("Introduce un número: "));
// console.log(typeof num);

// POSIBLE SOLUCION 3

// let numero = prompt("Introduce el número a comprobar: ");

// console.log("Valor en variable: ", numero, "Tipo de dato: ", typeof numero);

// let numFormated = parseInt(numero);

// console.log(
//   "Valor en variable: ",
//   numFormated,
//   "Tipo de dato: ",
//   typeof numFormated
// );

// if (isNaN(numFormated)) {
//   console.log(`${numFormated} no es un número`);
// } else if (numFormated % 2 === 0) {
//   console.log(`${numFormated} es un número par`);
// } else {
//   console.log(`${numFormated} es un número impar`);
// }
//--------------------------------------------------
//4- Calculadora de descuentos. Pide al usuario el precio de un producto y aplica un descuento dependiendo del monto. Si el precio es mayor 0 igual a 100, aplica un 20% de descuento. Si no, un 10%.

// let arr = ["lunes", "martes", "miercoles"];
// console.log(arr);

// arr[1] = "jueves";
// console.log(arr);

// arr[1] = "martes";
// console.log(arr);
// arr.push("jueves", "viernes");
// console.log(arr);

// arr.unshift("sábado", "domingo");
// console.log(arr);

// arr.shift();
// arr.push("sábado");
// console.log(arr);

// arr.pop();
// arr.unshift("sabado");
// console.log(arr);

// let arr2 = [];
// let arr3 = new Array();

// if(condicion){
//     codigo a ejecutar;
// } else if(condicion) {
//     codigo a ejecutar
// } else {
//     codigo a ejecutar;
// }

// FIZZBUZZ

let num = prompt("Ingresa un número: ");

let numFormateado = parseInt(num);

if (numFormateado % 3 === 0 && numFormateado % 5 === 0) {
  console.log("FizzBuzz");
} else if (numFormateado % 5 === 0) {
  console.log("Buzz");
} else if (numFormateado % 3 === 0) {
  console.log("Fizz");
} else {
  console.log("No es divisible por 3 ni por 5");
}
