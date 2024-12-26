import { data } from "./data.js";
// // - Escribe un programa que calcule el área de un triángulo dadas su base y altura.

// function areaTriangulo(a, b) {
//   return (a * b) / 2;
// }

// // console.log(areaTriangulo(2, 4));

// // - Crea una función que convierta grados Celsius a Fahrenheit.
// // f: (celsius * (9/5)) + 32;

// function celsiusToFarenheit(celsius) {
//   return celsius * (9 / 5) + 32;
// }

// // console.log(celsiusToFarenheit(0));

// // - Haz un programa que determine si un número es divisible entre 3 y 5.

// function esDivisible(numero) {
//   return numero % 3 === 0 && numero % 5 === 0;
// }

// // console.log(esDivisible(60));

// // - Crea un programa que determine si una palabra es un palíndromo (se lee igual al derecho y al revés).

// function esPalindromo(string) {
//   let stringFormateado = string.toLowerCase();
//   console.log(stringFormateado);

//   //   let stringToArr = string.split("");
//   //   console.log(stringToArr);

//   //   let myArr = [...stringToArr].reverse();
//   //   console.log(myArr);

//   //   if (myArr === stringToArr) {
//   //     return "es un palindromo";
//   //   } else {
//   //     return "no es un palindromo";
//   //   }

//   let stringToArr = stringFormateado.split("").reverse().join("");
//   console.log(stringToArr);

//   if (stringFormateado === stringToArr) {
//     return "es un palindromo";
//   } else {
//     return "no es un palindromo";
//   }
// }

// // console.log(esPalindromo("aRRá"));

// // - Escribe una función que reciba un número y devuelva un string que diga si el número es positivo, negativo o cero.

// function calcularPositividad(numero) {
//   if (numero > 0) {
//     return `este número ${numero} es positivo`;
//   } else if (numero < 0) {
//     return `este número ${numero} es negativo`;
//   } else if (numero === 0) {
//     return `este número ${numero} es 0`;
//   } else {
//     return `esto no es un número ${numero}`;
//   }
// }

// // console.log(calcularPositividad("hola"));

// // - Haz un programa que use un switch para mostrar el nombre del día de la semana basado en un número del 1 al 7.

// function diaDeLaSemana(numero) {
//   switch (numero) {
//     case 1:
//       return "lunes";
//     case 2:
//       return "martes";
//     case 3:
//       return "miercoles";
//     case 4:
//       return "jueves";
//     case 5:
//       return "viernes";
//     case 6:
//       return "sabado";
//     case 7:
//       return "domingo";
//     default:
//       return "no es un día de la semana";
//   }
// }

// // console.log(diaDeLaSemana(123));

// // break y return funcionan igual

// // - Escribe un programa que calcule la suma de los primeros 100 números naturales.

// let numero = 0;

// function numNaturales() {
//   for (let i = 0; i <= 100; i++) {
//     numero += i;
//     console.log(numero);
//   }

//   return numero;
// }

// // console.log(numNaturales());

// // - Haz un programa que imprima los primeros números de la secuencia de Fibonacci, donde n es un número ingresado por el usuario. ¿Qué es fibonacci? --> https://es.wikipedia.org/wiki/Sucesi%C3%B3n_de_Fibonacci

// function fibonacci(n) {
//   let secuencia = [];

//   for (let i = 0; i <= n; i++) {
//     if (secuencia.length === 0) {
//       secuencia.push(0);
//     } else if (secuencia.length === 1) {
//       secuencia.push(1);
//     } else {
//       let siguiente = secuencia[i - 1] + secuencia[i - 2];
//       secuencia.push(siguiente);
//     }
//   }

//   return secuencia;
// }

// console.log(fibonacci(10));

// // - Crea un programa que use un bucle do...while para pedir al usuario un número entre 1 y 10. Si el número no está en el rango, repite la solicitud.

// function solicitarNumero() {
//   let numero;

//   do {
//     numero = parseInt(prompt("Introduce un número: "));
//   } while (numero < 1 || numero > 10);
//   return numero;
// }

// // console.log(solicitarNumero());

// // - Dado un array de números, crea una función que imprima el doble de cada número.

// function doble(array) {
//   array.forEach((numero) => console.log(numero * 2));
// }

// let arrNumeros = [2, 3, 6, 12, 87, 90];
// doble(arrNumeros);

// // - Escribe una función que reciba un array de palabras e imprima en consola todas las palabras con más de 5 letras.

// let arrPalabras = [
//   "gato",
//   "elefante",
//   "sol",
//   "mariposa",
//   "luna",
//   "bicicleta",
//   "agua",
//   "computadora",
//   "flor",
//   "zapato",
// ];

// function palabrasLargas(array) {
//   let comprobacion;
//   array.forEach((palabra) => {
//     comprobacion = palabra.length > 5 ? console.log(palabra) : null;
//   });

//   return comprobacion;
// }

// palabrasLargas(arrPalabras);

// // - Crea una función que tome un array de números y devuelva un nuevo array con cada número elevado al cuadrado.

// function alCuadrado(array) {
//   let newArr = array.map((numero) => numero ** 2);

//   return newArr;
// }

// console.log(alCuadrado(arrNumeros));

// - Escribe un programa que reciba un array de strings y devuelva un array con los strings en mayúsculas.
// - Crea una función que reciba un array de números y devuelva otro array con solo los números pares.
// - Escribe una función que tome un array de palabras y devuelva un array con palabras que empiezan con la letra "a".
// - Dado un array de números, escribe una función que devuelva el primer número mayor que 10.
// - Haz un programa que tome un array de palabras y devuelva la primera palabra que termine con la letra "s"
// - Escribe una función que reciba un array de números y calcule la suma de todos sus elementos.
// - Dado un array de números, escribe una función que devuelva el producto de todos sus elementos.
// - Crea una función que tome un array de números y devuelva true si al menos uno es impar, y false en caso contrario.
// - Escribe un programa que determine si al menos una palabra en un array tiene más de 8 letras.

// OBJETOS

// console.log(data);

// 1 - Crea una función que calcule y retorne el precio promedio de todos los videojuegos.

function averagePrice(videojuegos) {
  const totalPrecios = videojuegos.reduce(
    (suma, precioVideojuegoActual) => suma + precioVideojuegoActual.precio,
    0
  );

  console.log(totalPrecios.toFixed(2));

  const media = totalPrecios / videojuegos.length;
  console.log(media);

  console.log(
    `El precio medio de esta colección de videojuegos es de ${media.toFixed(
      2
    )}€`
  );
}

// averagePrice(data);

// 2 - Crea una función que reciba el nombre de un protagonista (por ejemplo, "Link") y devuelva un array con los videojuegos en los que aparece.

function protagonistas(videojuegos, prota) {
  return videojuegos.filter((juego) => juego.protagonistas.includes(prota));
}

// console.log(protagonistas(data, "Arthur Morgan"));

// 3 - Escribe una función que ordene el array de videojuegos por fecha de lanzamiento, ya sea de manera ascendente o descendente.

console.log(data);

function ordenarPorfechas(videojuegos, orden = "ascendente") {
  return videojuegos.sort((a, b) => {
    const fechaA = new Date(a.fecha_lanzamiento);
    const fechaB = new Date(b.fecha_lanzamiento);

    return orden === "ascendente" ? fechaA - fechaB : fechaB - fechaA;
  });
}

console.log(ordenarPorfechas(data, "descendente"));

// 4 - Crea una función que agrupe los videojuegos por género en un objeto donde las claves sean los géneros y los valores sean arrays con los videojuegos correspondientes.

function agruparGeneros(videojuegos) {
  return videojuegos.reduce((grupo, juego) => {
    const generos = juego.genero.split(", ");
    generos.forEach((genero) => {
      if (!grupo[genero]) {
        grupo[genero] = [];
      } else {
        grupo[genero].push(juego);
      }
    });
    return grupo;
  }, {});
}

console.log(agruparGeneros(data));

// 5 - Escribe una función que reciba un término de búsqueda (puede ser parte del nombre o género) y retorne todos los videojuegos que coincidan parcial o totalmente con el término.
