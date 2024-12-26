// // Comparar si dos valores en dos variables son iguales

// let temperatura = 30;
// let altaTemperatura = 32;

// console.log(temperatura == altaTemperatura); // false

// let gato1 = "siamés";
// let gato2 = "siamés";

// console.log(gato1 == gato2); // true

// // comparar si dos valores en dos variables son diferentes

// let primero = "hola";
// let segundo = "chao";

// console.log(primero != segundo); // true

// // verificar si un número es mayor que otro

// console.log(8 > 3); // true

// console.log(8 < 3);

// console.log(80 <= 120);

// let cris = 70;
// let aprobado = 80;

// console.log(cris >= aprobado);

// let max = 120;
// let min = 60;
// let velocidad = 70;

// console.log(velocidad <= max && velocidad >= min);

// comprobar si un string tiene más de 5 caracteres
// let palabra = "Hola Mundo";
// console.log(palabra.length >= 5);

// verificación de dos condiciones: si hoy está soleado y si es fin de semana.

let diaSemana = "sábado";
let tiempo = "lluvia";

console.log(
  (diaSemana == "sábado" || diaSemana == "domingo") && tiempo == "soleado"
);

// si una persona es mayor de edad y tiene permiso de conducir

// let edad = 60;
// let permisoConducir = true;
// let mayorEdad = edad >= 18;
// let multa = !mayorEdad || !permisoConducir;
// console.log(mayorEdad && permisoConducir);
// console.log("Multa: " + multa);

// si alguien es mayor de edad y tiene palabra secreta para entrar en una fiesta privada

// let age = 25;
// let palabraSecreta = true;

// console.log(age >= 18 && palabraSecreta);

// si alguien tiene un ticket para ir al cine o tiene invitación

// let invitacion = false;
// let ticket = true;

// console.log(invitacion || ticket);

// verificar si un numero es negativo o es mayor que 100

// let numero = -1;
// console.log(numero < 0 || numero > 100);

// alert("Bienvenido a mi página");
// prompt("Introduce aquí tu edad:");

// let edad = prompt("Introduce tu edad: ");
// console.log(edad);

// let x = 5;

// x /= 3;
// console.log(x);

// alert("Bienvenido a mi página");

// let userName = prompt("Hola, bienvenido. Dime tu nombre: ");

// alert(`Hola ${userName}!`);

let texto = "Hoy es miércoles";

console.log(texto.length);
