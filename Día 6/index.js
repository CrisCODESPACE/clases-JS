// 1 - Escribe un programa que reciba un número del 1 al 7 e imprima el día de la semana correspondiente. Por ejemplo, si el número es 1, debería imprimir "Lunes".

// let userRequest = parseInt(
//   prompt("Usa un número para referirte a un día de la semana: ")
// );

// console.log(userRequest);

// switch (userRequest) {
//   case 1:
//     console.log("Lunes");
//   // break;
//   case 2:
//     console.log("Martes");
//   // break;
//   case 3:
//     console.log("Miércoles");
//   // break;
//   case 4:
//     console.log("Jueves");
//   // break;
//   case 5:
//     console.log("Viernes");
//   // break;
//   case 6:
//     console.log("Sábado");
//   // break;
//   case 7:
//     console.log("Domingo");
//   // break;
//   default:
//     console.log("No representa un día de la semana1");
// }

// 5 - Escribe un programa que reciba una letra ("a", "e", "i", "o", "u", u otra) e indique si es una vocal o no.

// let letra = prompt("Escribe una letra: ");

// switch (letra) {
//   case "a":
//     alert(`${letra} es una vocal`);
//     break;
//   case "e":
//     alert(`${letra} es una vocal`);
//     break;
//   case "i":
//     alert(`${letra} es una vocal`);
//     break;
//   case "o":
//     alert(`${letra} es una vocal`);
//     break;
//   case "u":
//     alert(`${letra} es una vocal`);
//     break;
//   default:
//     alert(`${letra} no es una vocal`);
// }

// switch (letra) {
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//     alert(`${letra} es una vocal`);
//     break;
//   default:
//     alert(`${letra} no es una vocal`);
// }

// 3 - Escribe un programa que imprima todos los números pares entre 1 y 20.

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} es par`);
//   }
// }

// Programa que te crea tablas de multiplicar;

// let numero = 12;

// for (let i = 0; i <= 12; i++) {
//   console.log(`Tabla del ${i}`);

//   for (let j = 0; j <= 10; j++) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
// }

// FIZZBUZZ

// for (let i = 0; i <= 50; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FIZZBUZZ: ", i);
//   } else if (i % 5 === 0) {
//     console.log("BUZZ: ", i);
//   } else if (i % 3 === 0) {
//     console.log("FIZZ: ", i);
//   } else {
//     console.log(`El número ${i} no es divisible entre 3, ni 5`);
//   }
// }

// FIBONACCI

// [0, 1, 1, 2, 3, 5, 8, 13]

// let a = 0;
// let b = 1;

// console.log(a);
// console.log(b);

// for (let i = 0; i <= 20; i++) {
//   let siguiente = a + b;
//   console.log(siguiente);
//   a = b;
//   b = siguiente;
// }

// ARBOL DE NAVIDAD CON ASTERISCOS

// let c = 0;
// let d = 1;

// console.log(c);
// console.log(d);

// for (let i = 0; i <= 60; i++) {
//   let nuevo = c + d;
//   console.log(nuevo);
//   c = d;
//   d = nuevo;

//   if (nuevo === 1) {
//     console.log("*");
//   }
// }

// let lvl = 12;

// for (let i = 0; i < lvl; i++) {
//   if (i === 0) {
//     let espacios = " ".repeat(lvl);
//     let asteriscos = "*".repeat(i + 1);
//     console.log(espacios + asteriscos);
//   } else {
//     let espacios = " ".repeat(lvl - i);
//     let asteriscos = "*".repeat(i * 2 + 1);
//     console.log(espacios + asteriscos);
//   }
// }

// let i = 0;

// while (i < 5) {
//   console.log(i);
//   i++;
// }

// let numeroSecreto = 7;
// let coincidencia;

// while (coincidencia !== numeroSecreto) {
//   coincidencia = parseInt(prompt("Intenta adivinar el número secreto: "));

//   if (coincidencia !== numeroSecreto) {
//     console.log("Inténtalo de nuevo");
//   } else if (coincidencia === numeroSecreto) {
//     console.log("HAS GANADO!");
//   } else {
//     console.log("Eso no es un número");
//   }
// }

// while (coincidencia !== numeroSecreto) {
//   coincidencia = parseInt(prompt("Intenta adivinar el número secreto: "));

//   if (coincidencia !== numeroSecreto) {
//     console.log("Inténtalo de nuevo");

//     if (coincidencia < numeroSecreto) {
//       console.log("El número secreto es mayor");
//     } else if (coincidencia > numeroSecreto) {
//       console.log("El número secreto es menor");
//     }
//   } else if (coincidencia === numeroSecreto) {
//     console.log("HAS GANADO!");
//   } else {
//     console.log("Eso no es un número");
//   }
// }

// let email = "cristina@email.com";
// let password = "1234";
// let emailIntroducido;
// let contraseñaIntroducida;

// while (emailIntroducido !== email || contraseñaIntroducida !== password) {
//   emailIntroducido = prompt("Introduce tu email:");
//   contraseñaIntroducida = prompt("Introduce tu contraseña: ");

//   if (emailIntroducido !== email) {
//     console.log("El email no es correcto");
//   } else if (contraseñaIntroducida !== password) {
//     console.log("La contraseña no es correcta");
//   } else if (contraseñaIntroducida === password && emailIntroducido === email) {
//     console.log("Has iniciado sesión");
//     console.log("¡Bienvenido de nuevo!");
//   } else {
//     console.log("Algo ha ido mal");
//   }
// }

//1- Escribe un programa que siga pidiendo al usuario una palabra hasta que se escriba "salir".

// let palabra = "";

// while (palabra !== "salir") {
//   palabra = prompt("Escribe una palabra: ");

//   if (palabra !== "salir") {
//     console.log(`Has escrito ${palabra}`);
//   } //else if (palabra === "salir") {
//   //       alert("Programa terminado");
//   //   }
// }

// alert("Programa terminado");

// 2- Escribe un programa que pregunte al usuario "¿Quieres continuar?" y siga preguntando hasta que el usuario responda "No".

// let continuar = "no";
// let parar;

// while (continuar !== parar) {
//   parar = prompt("¿Quieres continuar?").toLowerCase();

//   if (parar === continuar) {
//     alert("Hemos terminado");
//   } else {
//     alert("Seguimos");
//   }
// }

// let num = 20;

// do {
//   console.log(num);
//   num++;
// } while (num < 5);

// while (num < 5) {
//   console.log("Hola, soy el while");
// }

let ordenador;

let user;

do {
  ordenador = Math.ceil(Math.random() * 6);
  console.log(ordenador, "Tirada ordenador");
  user = Math.ceil(Math.random() * 6);
  console.log(user, "Tirada usuario");

  if (user > ordenador) {
    console.log("Has ganado");
  } else if (user < ordenador) {
    console.log("Has perdido");
  } else {
    console.log("Empate");
  }
} while (ordenador > user);
