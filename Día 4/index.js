// 1 - Calculadora de descuentos. Pide al usuario el precio de un producto y aplica un descuento dependiendo del monto:
// Si el precio es mayor o igual a $100, aplica un 20% de descuento.
// Si no, aplica un 10% de descuento

// let precio = prompt("Introduce el precio del artículo: ");
// let precioFormateado = parseFloat(precio);

// const masQueCien = 0.2;
// const menosQueCien = 0.1;

// let precioFinal20 = precioFormateado - masQueCien * precioFormateado;
// let precioFinal10 = precioFormateado - menosQueCien * precioFormateado;

// console.log(`Tu precio es de: ${precioFormateado}`);

// if (precioFormateado >= 100) {
//   alert("Enhorabuena tienes un 20% de descuento");
//   //   let descuento = precioFormateado * masQueCien;
//   //   let precioFinal = precioFormateado - descuento;
//   //   let precioDecimales = precioFinal.toFixed(2);

//   console.log(
//     `El precio final de tu producto con el descuento incluido es de ${precioFinal20.toFixed(
//       2
//     )}€`
//   );
// } else if (precioFormateado < 100) {
//   alert("Tienes un 10% de descuento");
//   //   let descuento = precioFormateado * menosQueCien;
//   //   let precioFinal = precioFormateado - descuento;
//   //   let precioDecimales = precioFinal.toFixed(2);

//   console.log(
//     `El precio final de tu producto con el descuento incluido es de ${precioFinal10.toFixed(
//       2
//     )}€`
//   );
// } else {
//   console.log("No tienes descuento");
// }
//------------------------------------------------------------------
// 2 - Piedra, papel o tijeras. Escribe un programa que simule el juego de piedra, papel o tijeras.
// Pide al usuario que elija piedra, papel o tijeras.
// Genera una elección aleatoria para la computadora.
// Usa condicionales para determinar quién gana.
// Pista: Usa Math.random() para generar un número entre 0 y 2.

// SOLUCION ELI
// let eleccionUsuario = prompt(
//   "Elige una opción: piedra, papel, tijeras "
// ).toLowerCase();
// console.log(eleccionUsuario);

// let eleccionAleatoria = Math.floor(Math.random() * 3) + 1;
// console.log(eleccionAleatoria);

// // let respuestaAleatoria = eleccionAleatoria;

// if (eleccionAleatoria === 1) {
//   eleccionAleatoria = "piedra";
// } else if (eleccionAleatoria === 2) {
//   eleccionAleatoria = "papel";
// } else {
//   eleccionAleatoria = "tijeras";
// }

// if (
//   eleccionUsuario === "piedra" ||
//   eleccionUsuario === "papel" ||
//   eleccionUsuario === "tijeras"
// ) {
//   console.log(
//     "Ha elegido: " +
//       eleccionUsuario +
//       " El sistema ha elegido: " +
//       eleccionAleatoria
//   );

//   if (eleccionUsuario === eleccionAleatoria) {
//     console.log("Empate");
//   } else if (eleccionUsuario === "papel" && eleccionAleatoria === "piedra") {
//     console.log("Has ganado");
//   } else if (eleccionUsuario === "tijeras" && eleccionAleatoria === "piedra") {
//     console.log("Lo siento, has perdido");
//   } else if (eleccionUsuario === "papel" && eleccionAleatoria === "tijeras") {
//     console.log("Lo siento, has perdido");
//   } else if (eleccionUsuario === "piedra" && eleccionAleatoria === "tijeras") {
//     console.log("Has ganado");
//   } else if (eleccionUsuario === "tijeras" && eleccionAleatoria === "papel") {
//     console.log("Has ganado");
//   } else if (eleccionUsuario === "piedra" && eleccionAleatoria === "papel") {
//     console.log("Lo siento, has perdido");
//   } else {
//     console.log("Hay un error");
//   }
// } else {
//   console.log("No es el formato correcto");
// }

// SOLUCION RESUMIDA

// let eleccionUser = prompt(
//   "Elige una opción: piedra, papel o tijeras: "
// ).toLowerCase();
// let opciones = ["tijeras", "papel", "piedra"];
// let eleccionUser =
//   opciones[prompt("Elige una opción: tijeras(1), papel(2) o piedra(3)") - 1];
// let eleccionSistema = opciones[Math.floor(Math.random() * 3)];

// if (
//   eleccionUser != "piedra" &&
//   eleccionUser != "tijeras" &&
//   eleccionUser != "papel"
// ) {
//   console.log("Elige una opción válida");
// } else {
//   console.log(`Has elegido ${eleccionUser}`);
//   console.log(`El sistema ha elegido ${eleccionSistema}`);

//   if (eleccionUser === eleccionSistema) {
//     console.log("Empate");
//   } else if (
//     (eleccionUser === "piedra" && eleccionSistema === "tijeras") ||
//     (eleccionUser === "papel" && eleccionSistema === "piedra") ||
//     (eleccionUser === "tijeras" && eleccionSistema === "papel")
//   ) {
//     console.log("Has ganado");
//   } else {
//     console.log("Has perdido");
//   }
// }
//-----------------------------------------------------------------------------------
// 3 - Calculadora básica. Crea un programa que pida dos números y una operación (+, -, *, /) al usuario, y realice el cálculo correspondiente.

// let num1 = parseFloat(prompt("Elige un número: "));
// let num2 = parseFloat(prompt("Elige otro número: "));
// let operacion = prompt("Elige la operación a ejecutar: +, -, *, /");

// let resultado;

// if (isNaN(num1) || isNaN(num2)) {
//   console.log("Alguno de los operandos no es un número");
// } else {
//   if (operacion === "+") {
//     resultado = num1 + num2;
//     alert(`Es ${num1 + num2}`);
//   } else if (operacion === "-") {
//     resultado = num1 - num2;
//     alert(`Es ${resultado}`);
//   } else if (operacion === "*") {
//     resultado = num1 * num2;
//     alert(`Es ${resultado}`);
//   } else if (operacion === "/") {
//     if (num2 === 0) {
//       alert("No se puede dividir entre 0");
//     } else {
//       resultado = num1 / num2;
//       alert(`Es ${resultado}`);
//     }
//   } else {
//     alert(`Elige un operador válido`);
//   }
// }
//---------------------------------------------------------------------------------
// 4 - Evaluar números en un rango. Pide al usuario un número y verifica:
// Si está entre 10 y 50, muestra "El número está en el rango".
// Si no, muestra "El número está fuera del rango".

// let entrada = prompt("Introduce un número: ");
// let numero = parseFloat(entrada);

// if (isNaN(numero)) {
//   alert(`El texto ${entrada} que ingresaste no es un número válido`);
// } else if (numero >= 10 && numero <= 50) {
//   alert(`El número ${numero} está dentro del rango`);
// } else {
//   alert(`El número ${numero} está fuera del rango.`);
// }
//-------------------------------------------------------------------------------
// 5 - Día de la semana. Pide al usuario un número del 1 al 7 y muestra el día correspondiente (1 = lunes, 2 = martes, ..., 7 = domingo).

// SOLUCION DELCY

// let arrDias = [
//   "Lunes",
//   "Martes",
//   "Miércoles",
//   "Jueves",
//   "Viernes",
//   "Sábado",
//   "Domingo",
// ];
// console.log(arrDias);

// let diaEscogido = prompt(
//   "Elige un día: Lunes(1), Martes(2), Miércoles(3), Jueves(4), Viernes(5), Sábado(6), Domingo(7)"
// );

// let dia = arrDias[diaEscogido - 1];

// if (dia === "Lunes") {
//   alert(`Has elegido ${dia}`);
// } else if (dia === "Martes") {
//   alert(`Has elegido ${dia}`);
// } else if (dia === "Miércoles") {
//   alert(`Has elegido ${dia}`);
// } else if (dia === "Jueves") {
//   alert(`Has elegido ${dia}`);
// } else if (dia === "Viernes") {
//   alert(`Has elegido ${dia}`);
// } else if (dia === "Sábado") {
//   alert(`Has elegido ${dia}`);
// } else if (dia === "Domingo") {
//   alert(`Has elegido ${dia}`);
// } else {
//   console.log("No existe ningún día de la semana con este número");
// }

// SOLUCION 2

// let diaUser = parseInt(
//   prompt("Elige un día de la de la semana con número (1-7): ")
// );
// let arrSemana = [
//   "Lunes",
//   "Martes",
//   "Miércoles",
//   "Jueves",
//   "Viernes",
//   "Sábado",
//   "Domingo",
// ];

// if (diaUser >= 1 && diaUser <= 7) {
//   console.log(`Has elegido: ${arrSemana[diaUser - 1]}`);
// } else {
//   console.log("Elige un número del 1 al 7");
// }
//-------------------------------------------------------------------------------
// 6 - Identificar vocales. Pide al usuario una letra y verifica si es una vocal o no.

// const vocales = ["a", "e", "i", "o", "u"];
// let comprobarVocales = prompt("Dime una letra: ").toLowerCase();

// console.log(comprobarVocales.length);

// if (comprobarVocales.length > 1 || comprobarVocales === "") {
//   alert(`${comprobarVocales} solo puedes introducir un caracter`);
// } else if (/^[A-Za-z]*$/.test(comprobarVocales) == false) {
//   alert(`${comprobarVocales} no es una vocal`);
// } else if (vocales.includes(comprobarVocales)) {
//   alert(`${comprobarVocales} es una vocal`);
// } else {
//   alert(`${comprobarVocales} es una consonante`);
// }
//-------------------------------------------------------------------------------
// 7 - Validar contraseña
// Pide al usuario que ingrese una contraseña y verifica si coincide con una predefinida, por ejemplo, "javascript".

// let password = prompt("Introduce tu contraseña: ");
// const passwordPredef = "javascript";

// if (password === passwordPredef) {
//   console.log("La contraseña es correcta");
// } else {
//   console.log("Las contraseñas no coinciden");
// }

// let email = prompt("Introduce tu email: ");

// if (/[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(email)) {
//   console.log("El email tiene un formato correcto");
// } else {
//   console.log("El email no tiene un formato correcto");
// }
// let suma = 1 + 2;

// {
//   let suma = "pepe";
//   // console.log(suma);
// }

// console.log(suma);

// let count = 1;
// count++;

// let result = 3;
// result *= 4;

// console.log(typeof result);
