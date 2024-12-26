// SWITCH - ESTRUCTURA DE CONTROL

// let numero = 2;

// switch (numero) {
//   case 1:
//     console.log(`El número es ${numero}, ha entrado en el case 1`);
//     break;
//   case 2:
//     console.log(`El número es ${numero}, ha entrado en el case 2`);
//     break;
//   case 3:
//     console.log(`El número es ${numero}, ha entrado en el case 3`);
//     break;
//   case 4:
//     console.log(`El número es ${numero}, ha entrado en el case 4`);
//     break;
//   case 2:
//     console.log(`El número es ${numero}, ha entrado en el case 5`);
//     break;
//   default:
//     console.log("No se ha cumplido ninguno de los case");
// }

// // DIAS DE LA SEMANA

// let dia = "vierne";

// switch (dia) {
//   case "lunes":
//     console.log(`Hoy es ${dia}`);
//     console.log(`Hoy es lunes`);
//     break;
//   case "martes":
//     console.log(`Hoy es ${dia}`);
//     console.log(`Hoy es martes`);
//     break;
//   case "miercoles":
//     console.log(`Hoy es ${dia}`);
//     console.log(`Hoy es miercoles`);
//     break;
//   case "jueves":
//     console.log(`Hoy es ${dia}`);
//     console.log(`Hoy es jueves`);
//     break;
//   case "viernes":
//     console.log(`Hoy es ${dia}`);
//     console.log(`Hoy es viernes`);
//     break;
//   default:
//     console.log("ES FINDE");
// }

// switch (dia) {
//   case "lunes":
//   case "martes":
//   case "miercoles":
//   case "jueves":
//   case "viernes":
//     console.log(`Hoy es ${dia}, es un día entre semana`);
//     break;
//   case "sabado":
//   case "domingo":
//     console.log("ES FINDE");
//     break;
//   default:
//     console.log("Eso no es un dia de la semana");
// }

// let operando = 5;
// let var1 = 1;
// let var2 = 1;

// switch (operando) {
//   case "5":
//     console.log(var1 + var2);
//     break;
//   case "-":
//     console.log(var1 - var2);
//     break;
//   case "*":
//     console.log(var1 * var2);
//     break;
//   default:
//     console.log("No hay operando");
// }

// // piedra papel tijeras

// let opciones = ["piedra", "papel", "tijeras"];

// let pc = opciones[Math.floor(Math.random() * 3)];
// console.log(pc);

// let miEleccion = opciones[Math.floor(Math.random() * 3)];

// switch (pc) {
//   case "piedra":
//     switch (miEleccion) {
//       case "piedra":
//         console.log(
//           `El pc eligió ${pc} y tu elegiste ${miEleccion}, estáis empate.`
//         );
//         break;
//       case "papel":
//         console.log(
//           `El pc eligió ${pc} y tu elegiste ${miEleccion}, has ganado.`
//         );
//         break;
//       case "tijeras":
//         console.log(
//           `El pc eligió ${pc} y tu elegiste ${miEleccion}, ha ganado el pc.`
//         );
//         break;
//     }
//     break;
//   case "papel":
//     switch (miEleccion) {
//       case "piedra":
//         console.log(
//           `El pc eligió ${pc} y tu elegiste ${miEleccion}, ha ganado el pc.`
//         );
//         break;
//       case "papel":
//         console.log(`El pc eligió ${pc} y tu elegiste ${miEleccion}, empate.`);
//         break;
//       case "tijeras":
//         console.log(
//           `El pc eligió ${pc} y tu elegiste ${miEleccion}, has ganado.`
//         );
//         break;
//     }
//     break;
//   case "tijeras":
//     switch (miEleccion) {
//       case "piedra":
//         console.log(
//           `El pc eligió ${pc} y tu elegiste ${miEleccion}, has ganado.`
//         );
//         break;
//       case "papel":
//         console.log(
//           `El pc eligió ${pc} y tu elegiste ${miEleccion}, ha ganado el pc.`
//         );
//         break;
//       case "tijeras":
//         console.log(`El pc eligió ${pc} y tu elegiste ${miEleccion}, empate.`);
//         break;
//     }
//     break;
//   default:
//     console.log("No es una jugada posible");
// }

// let Animal = "Perro";
// switch (Animal) {
//   case "Vaca":
//   case "Jirafa":
//   case "Perro":
//   case "Cerdo":
//     console.log("Este animal subirá al Arca de Noé.");
//     break;
//   case "Dinosaurio":
//   default:
//     console.log("Este animal no lo hará.");
// }

// CONVERSOR DE DIVISAS

// el usuario nos dará la cantidad de euros a cambiar entre dolares, yenes y rupias
// 1 euro = 1.05 dolares
// 1 euro = 160 yenes
// 1 euro = 89 rupias

// let dineroUser = prompt("Introduce la cantidad a cambiar: ");
// let dolares = 1.05;
// let yenes = 160;
// let rupias = 89;

// let resultado = "";

// let moneda = prompt(
//   "¿A qué moneda desea cambiar su dinero? (dólares, yenes, rupias)"
// );

// switch (moneda) {
//   case "dolares":
//     console.log("El usuario eligió dólares");
//     resultado = dineroUser * dolares;
//     console.log(`Tu monto al cambio, en dolares, sería ${resultado}USD`);
//     break;
//   case "yenes":
//     console.log("El usuario eligió yenes");
//     resultado = dineroUser * yenes;
//     console.log(`Tu monto al cambio, en yenes, sería ${resultado}JPY`);

//     break;
//   case "rupias":
//     console.log("El usuario eligió rupias");
//     resultado = dineroUser * rupias;
//     console.log(`Tu monto al cambio, en rupias, sería ${resultado}INR`);

//     break;
//   default:
//     console.log("Moneda no válida");
// }

// 1 - Eleccion de estacion del año - Solicita al usuario un numero del 1 al 4 para mostrar la estacion del año correspondiente, donde 1 es invierno, 2 primavera, 3 verano y 4 otoño.

// 2- Clasificación de vehiculos -  Pide al usuario que ingrese un tipo de vehiculo (coche, moto, camion) y muestra su info a través de un switch (numero de puertas, combustible y velocidad promedio).

// 3 - Calculadora básica - solicita a un usuario dos numeros y la operacion que quiera hacer con estos y que el resultado venga dado a través de un switch.

// 1 - ELECCION DE ESTACIÓN

// let mes = prompt("Elige un número del 1 al 4:");

// switch (mes) {
//   case "1":
//     console.log("Es invierno");
//     break;
//   case "2":
//     console.log("Es primavera");
//     break;
//   case "3":
//     console.log("Es verano");
//     break;
//   case "4":
//     console.log("Es otoño");
//     break;
//   default:
//     console.log("Algo ha ido mal");
// }

// 2 - CLASIFICACIÓN DE VEHICULOS

// let vehiculo = prompt("Dime un tipo de coche (coche, camion, moto):");

// switch (vehiculo) {
//   case "coche":
//     alert(
//       `${vehiculo}: Tiene 4 puertas, combustible: gasolina, velocidad promedio: 120km/h`
//     );
//     break;
//   case "camion":
//     alert(
//       `${vehiculo}: Tiene 2 puertas, combustible: gasolina, velocidad promedio: 80km/h`
//     );
//     break;
//   case "moto":
//     alert(
//       `${vehiculo}: Tiene 0 puertas, combustible: gasolina, velocidad promedio: 120km/h`
//     );
//     break;
//   default:
//     alert("No es una opción válida");
// }

// 3 -  CALCULADORA BÁSICA

// let num1 = parseFloat(prompt("Introduce el primer número: "));
// let num2 = parseFloat(prompt("Introduce el segundo número: "));
// let operacion = prompt(
//   "Elige la operación que quieres realizar (+, -, *, /): "
// );

// let resultado = "";

// switch (operacion) {
//   case "+":
//     resultado = num1 + num2;
//     console.log(`El resultado de la suma es: ${resultado}`);
//     break;
//   case "-":
//     resultado = num1 - num2;
//     console.log(`El resultado de la resta es: ${resultado}`);
//     break;
//   case "*":
//     resultado = num1 * num2;
//     console.log(`El resultado de la multiplicación es: ${resultado}`);
//     break;
//   case "/":
//     switch (num2) {
//       case 0:
//         console.log("No se puede dividir entre 0");
//         break;
//       default:
//         resultado = num1 / num2;
//         console.log(`El resultado de la división es: ${resultado}`);
//     }
//     break;
//   default:
//     console.log("No se puede hacer la operación");
// }

// BUCLE FOR

// let contador = 5;

// // variable del control, normalmente llamada i o index: let i = 0
// // condicion a cumplir para que el bucle siga iterando (o repitiendose): i < contador
// // incremento de la variable de control: i++

// for (let i = 0; i <= 20; i++) {
//   console.log(i);
// }

// for (inicializacion, condicion, incremento o decremento)

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// let arrFrutas = ["Manzana", "Pera", "Piña", "Melocotón"];

// // console.log(arrFrutas[3]);

// for (let i = 0; i <= arrFrutas.length - 1; i++) {
//   console.log(i);
//   console.log(arrFrutas[i]);

//   //   console.log(arrFrutas[i]);
// }

// // console.log(i);

// let suma = 0;

// for (let i = 0; i <= 10; i++) {
//   console.log(`valor de i: ${i}`);
//   console.log(`Valor de la variable suma: ${suma}`);
//   suma += i;
//   console.log(`suma total de suma + i: ${suma}`);
// }

// Contar cuantos números pares hay en un array

// let arrNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arrPares = [];

// for (let i = 0; i < arrNumeros.length; i++) {
//   if (arrNumeros[i] % 2 === 0) {
//     console.log(`El número ${arrNumeros[i]} es par`);
//     arrPares.push(arrNumeros[i]);
//     console.log(arrPares);
//   } else {
//     console.log(`El número ${arrNumeros[i]} es impar`);
//   }
// }

// console.log(arrPares);

// let arrFrutas = ["manzana", "kiwi", "platano", "uva", "fresa", "sandia"];

// let busqueda = "pera";
// let busqueda2 = "kiwi";

// let encontrado = false;

// for (let i = 0; i < arrFrutas.length; i++) {
//   //   console.log(arrFrutas[i]);

//   if (arrFrutas[i] === busqueda) {
//     encontrado = true;
//     console.log("El elemento está en el array");
//     break;
//   } else if (arrFrutas[i] === busqueda2) {
//     encontrado = true;
//     console.log("El elemento está en el array");
//     break;
//   } else {
//     console.log("El elemento no esta en el array");
//   }
// }

// if (encontrado) {
//   console.log(`El elemento ${busqueda} está en el array`);
// } else {
//   console.log(`El elemento ${busqueda} NO está en el array`);
// }

// let arrAnimales = ["perro", "gato", "loro"];
// console.log(arrAnimales);

// arrAnimales.unshift("chivo");
// console.log(arrAnimales);

// arrAnimales.pop();
// console.log(arrAnimales);
