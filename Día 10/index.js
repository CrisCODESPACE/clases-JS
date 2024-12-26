import { data } from "./data.js";

// creación de un nuevo objeto con el constructor new.
const persona = new Object();
// console.log(persona);

// creación de un nuevo objeto con literal
let nombre = {};
// console.log(nombre);

//¿Qué es un objeto?
// colección de propiedades, donde cada propiedad tiene un nombre clave y un valor

persona.altura = "180cm";
persona.nombre = "Juan";
persona.profesion = "Carpintero";
persona.edad = 0;

// console.log(persona);

persona.saludo = function () {
  console.log(`Hola, soy ${this.nombre}`);
};

// persona.saludo();

// metodos para trabajar con objetos

// Object.keys = Nos devuelve un array con las claves del objeto

// const arrClaves = Object.keys(persona);

// console.log(arrClaves);

const coches = [
  {
    marca: "BMW",
    puertas: 3,
    color: "negro",
    combustible: "Diesel",
  },
  {
    marca: "Volkswagen",
    puertas: 5,
    color: "verde",
    combustible: "Gasolina",
  },
  {
    marca: "Tesla",
    puertas: 4,
    color: "blanco",
    combustible: "Electrico",
  },
  {
    // marca: null,
    puertas: 5,
    color: "rojo",
    combustible: "Gasolina",
  },
];

// console.log(persona.nombre);
// console.log(coches);

let prueba = Object.values(coches);
let prueba2 = Object.keys(coches);
// console.log(prueba);
// console.log(prueba2);

coches.forEach((elemento) => {
  //   console.log(Object.keys(elemento));
  //   console.log(Object.values(elemento));
  //   console.log(Object.entries(elemento));
});

let datosPersona = Object.entries(persona);
// console.log(datosPersona);

// console.log(persona.hasOwnProperty("edad"));

// coches.forEach((elemento) => {
//   console.log(elemento.hasOwnProperty("marca"));
// });

console.log(data);

// 1 - Listar los nombres de todos los videojuegos.
let nombresVideojuegos = [];

data.forEach((elemento) => {
  //   console.log(elemento.nombre);
  nombresVideojuegos.push(elemento.nombre);
});

// console.log(nombresVideojuegos);

// 2 - Filtrar por género. Crea una función que reciba un género por parámetro y devuelva un array con los videojuegos de ese género.

function filtrarPorGenero(generoABuscar) {
  return data.filter((game) => game.genero.includes(generoABuscar));
}

const resultado = filtrarPorGenero("Aventura");
// console.log(resultado);

// function filtrarPorGenero(generoABuscar) {
//   console.log(
//     data.filter((elemento) => elemento.genero.includes(generoABuscar))
//   );
// }

// const resultado = filtrarPorGenero("Acción");

// 3- Obtener videojuegos económicos. Filtra los videojuegos cuyo precio sea menor de 50.

function filtrarPrecios() {
  return data.filter((game) => game.precio < 50);
}

const filtro = filtrarPrecios();
// console.log(filtro);

// 4 - Buscar videojuegos por nombre. Crea una función que reciba un nombre parcial y devuelva todos los videojuegos cuyos nombres contengan ese texto.

function filtrarNombre(nombreABuscar) {
  return data.filter((elemento) => elemento.nombre.includes(nombreABuscar));
}

const result = filtrarNombre("The");
// console.log(result);

// Filtrar por fecha

function ordenarFecha(anio) {
  return data.filter((videojuego) => {
    const fechaLanzamiento = new Date(videojuego.fecha_lanzamiento);
    console.log(fechaLanzamiento);

    return fechaLanzamiento.getFullYear() === anio;
  });
}

const juegofiltrado = ordenarFecha(2020);
console.log(juegofiltrado);

// Date()
let ahora = new Date();
let milisegundos = ahora.getTime();
let minute = Math.floor(milisegundos / 1000);
console.log(minute);
let horas = ahora.getHours();
console.log(horas);

let hour = Math.floor(minute / 60);
console.log(hour);
