import { personas } from "./personas.js";
import { productos } from "./productos.js";

// console.log(personas);
// console.log(productos);

// 1. Imprimir en consola
// Escribe un programa que imprima "Hola, mundo" en la consola.

// console.log("Hola, mundo!");

// 2. Suma de dos números
// Declara dos variables con valores numéricos y muestra su suma en la consola.

let numPrimero = 30;
let numSegundo = 15;

let sumaNumero = numPrimero + numSegundo;

// console.log(sumaNumero);

// 3. Calcular el área de un rectángulo
// Escribe un programa que calcule el área de un rectángulo dados su base y altura.

let base1 = 2;
let altura1 = 5;

let area = base1 * altura1;

// console.log(area);

function areaRectangulo(base, altura) {
  return base * altura;
}

// console.log(areaRectangulo(7, 80));

// 4. Verificar número par o impar
// Crea un programa que reciba un número y determine si es par o impar.

function verificarNumero(numero) {
  if (numero % 2 === 0) {
    return "Es un número par";
  } else {
    return "No es un número par";
  }
}

// console.log(verificarNumero(15));

function parImpar(numero) {
  return numero % 2 === 0 ? "Es un numero par" : "Es impar";
}

// console.log(parImpar(1));

// 5. Reemplazar texto simple
// Escribe un programa que tome una cadena y reemplace "mundo" con "JavaScript".

let frase = "Hola mundo!";

// console.log(frase);

let fraseNueva = frase.replace("mundo", "JavaScript");

// console.log(fraseNueva);

function reemplazoTexto(frase) {
  return frase.replace("mundo", "JavaScript");
}

// console.log(reemplazoTexto("hola mundo, adios mundo"));

// 6. Imprimir números del 1 al 10
// Usa un bucle para imprimir números del 1 al 10 en la consola.

for (let i = 1; i <= 10; i++) {
  //   console.log(i);
}

// 7. Array inverso
// Escribe un programa que tome un array y lo imprima en orden inverso.

let inicialArray = [1, "casa", "linda"];

let arrInvertido = [];

for (let i = inicialArray.length - 1; i >= 0; i--) {
  arrInvertido.push(inicialArray[i]);
}

// console.log(arrInvertido);

function reverseArray(arr) {
  return arr.reverse();
}

// console.log(reverseArray(inicialArray));

// 8. Convertir grados Celsius a Fahrenheit
// Escribe una función que convierta una temperatura de Celsius a Fahrenheit.

//°F = °C × (9/5) + 32

function celToFar(grados) {
  return `${grados * (9 / 5) + 32}º`;
}

// console.log(celToFar(0));

// 9. Verificar mayor de edad
// Crea un programa que verifique si una persona es mayor de edad.

function verificarEdad(edad) {
  return edad >= 18 ? "Es mayor de edad" : "Es menor de edad";
}

// console.log(verificarEdad(0));

// -------------------------------------------
// let nacimiento = prompt("Dime tu año de nacimiento:");

// let year = new Date().getUTCFullYear(); //=año actual

// let edad = year - nacimiento;

// if (isNaN(nacimiento)) {
//   alert(`${nacimiento} no es un dato válido`);
// } else if (nacimiento > year) {
//   alert(`Año ${nacimiento}: no es un año válido (aún no has nacido)`);
// } else if (nacimiento < year - 110) {
//   alert(
//     `Año ${nacimiento} no es un año válido. Con una edad de ${edad} ¿Seguro estás vivo? O eres un vampiro o un inmortal`
//   );
// } else if (edad >= 18) {
//   alert(`Eres mayor de edad (${edad})`);
// } else {
//   alert(`Eres menor de edad (${edad})`);
// }

// 10. Suma de números en un array
// Escribe un programa que sume todos los números en un array.

// function sumaNumeros(arr) {
//   return arr.reduce((acc, curr) => acc + curr, 0);
// }

// console.log(sumaNumeros([1, 2, 3, 4, 5]));

//------------------------------------------

let numeros = [1, 2, 3, 4, 5];
let sumaNumeros = 0;

for (let i = 0; i < numeros.length; i++) {
  sumaNumeros += numeros[i];
}

// console.log(`Y esta es mi suma: ${sumaNumeros}`);

// 11. Palíndromo
// Escribe una función que determine si una palabra es un palíndromo.

function verificarPalabra(palabra) {
  let palabraArray = palabra.split("").reverse().join("");

  console.log(palabraArray);

  if (palabraArray === palabra) {
    return "Es un palindromo";
  } else {
    return "No es un palindromo";
  }
}

// console.log(verificarPalabra("ana"));

// 12. Números primos
// Escribe una función que determine si un número es primo.

function primos(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return "No es primo";
  }
  return num > 1;
}

// console.log(primos(4));

// 13. Fibonacci
// Crea un programa qué genere la secuencia de Fibonacci.

// let fibonacci = [0, 1];
// for (let i = 0; i <= 10; i++) {
//   let suma = fibonacci[i] + fibonacci[i + 1];
//   fibonacci.push(suma);
// }
// console.log(fibonacci);

function fibonacci(n) {
  let secuencia = [0, 1];
  for (let i = 2; i < n; i++) {
    let siguienteNum = secuencia[i - 1] + secuencia[i - 2];
    secuencia.push(siguienteNum);
  }
  return secuencia;
}

// console.log(fibonacci(10));

// 14. Ordenar array
// Escribe un programa que ordene un array de números en orden ascendente.

function ordenarArr(arr) {
  return arr.sort((a, b) => a - b);
}

// console.log(ordenarArr([1, 34, 654, 2, 0, -1]));

// 1. Filtrar personas mayores de 30 años.

function filtrarPorEdad(personas) {
  return personas.filter((objeto) => objeto.edad > 30);
}

console.log(filtrarPorEdad(personas));

// 2. Obtener un array con los nombres de todas las personas.

function obtenerNombres(personas) {
  return personas.map((persona) => persona.nombre);
}
console.log(obtenerNombres(personas));

let resultado = personas.map(({ nombre, edad }) => ({ nombre, edad }));
console.log(resultado);

// 3. Encontrar la primera persona que sea estudiante.

function encontrarEstudiante(personas) {
  return personas.find((persona) => persona.ocupacion === "Estudiante");
}

console.log(encontrarEstudiante(personas));

// 4. Sumar las edades de todas las personas.

function todasEdades(personas) {
  return personas.reduce(
    (accumulator, currentValue) => accumulator + currentValue.edad,
    0
  );
}

console.log(todasEdades(personas));

// 5. Crear un array con los nombres de personas cuyo país sea "España".

let espanoles = personas.filter((objeto) => {
  return objeto.pais.toLowerCase() === "españa";
});

console.log(espanoles);

function nombresEspana(personas) {
  return personas
    .filter((persona) => persona.pais === "España")
    .map((persona) => persona.nombre);
}

console.log(nombresEspana(personas));

// 6. Agregar un nuevo interés a todas las personas.

personas.forEach((objeto) => {
  objeto.intereses.push("dormir");
});

personas.forEach((objeto) => {
  console.log(objeto.intereses);
});
