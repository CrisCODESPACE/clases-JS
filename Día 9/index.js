// saludo();
// funciones nombradas (named functions)
// function saludo(funcAnonima) {
//   const nombre = funcAnonima();
//   console.log(`Hola ${nombre}`);
// }

// saludo(function () {
//   const nombre = prompt("Introduce tu nombre: ");
//   return nombre;
// });

// funciones anonimas (anonymous function)
// const miFuncion = function (nombre) {
//   return `Hola ${nombre}`;
// };

// console.log(miFuncion("Cristina"));

// funciones flecha (arrow functions) =>

// const suma = (a, b) => a + b;

// console.log(suma(5, 6));

// funciones flecha de una sola línea

// const suma = (a, b) => a + b;
// console.log(suma(5, 6));

// funciones flecha con un solo parámetro

// const cuadrado = (x) => x * x;

// console.log(cuadrado(5));

// funcion flecha SIN PARAMETROS

// const saludo2 = () => console.log("HOLA");

// saludo2();

// funcion flecha multilínea

// const resta = (a, b) => {
//   console.log("Ahora haremos una resta: ");
//   return a - b;
// };

// console.log(resta(1, 3));

// THIS

// function persona(nombre) {
//   this.nombre = nombre;
//   this.edad = 0;

//   setInterval(() => {
//     this.edad++;
//     console.log(`Nombre: ${this.nombre}, edad: ${this.edad}`);
//   }, 1000);
// }
// const p = new persona("Juan");

// HOISTING

// console.log(nombre);

// var nombre = "Phillipe";

// console.log(nombre);

// console.log(apellido);

// const apellido = "Jiménez";

// console.log(apellido);

// function saludo() {
//   console.log("Hola");
// }

// OBJETOS
// const nuevoArray = new Array();
// console.log("ESTO ES UN ARRAY:", nuevoArray);

// const nuevoObjeto = new Object();
// console.log("ESTO ES UN OBJETO: ", nuevoObjeto);

// const usuario = {
//   nombre: "Federico",
//   apellido: "Benedetti",
//   edad: 45,
//   vivienda: "Roma",
// };

// console.log(usuario);

// // notación de punto (dot notation)

// console.log(usuario.nombre, usuario.apellido);
// console.log(usuario.apellido);
// console.log(usuario.edad);
// console.log(usuario.vivienda);

// // notación de corchetes (bracket notation)

// console.log(usuario["nombre"]);
// let propiedad = "edad";
// console.log(usuario[propiedad]);

// // modificar propiedades dentro de un objeto

// // notacion de punto

// usuario.nombre = "Manuel";
// console.log(usuario.nombre);
// console.log(usuario);

// // notacion de corchetes
// usuario["edad"] = 55;
// console.log(usuario);

// const coche = {
//   marca: "VolksWagen",
//   modelo: "Polo",
//   numeroPuertas: 5,
//   combustible: "Diesel",
//   año: 2012,
// };

// // agregar nuevas propiedades al objeto coche
// coche.propietario = "Lady Gaga";
// console.log(coche);
// coche["ultima_ITV"] = "12/7/2024";
// console.log(coche);

// // eliminar propiedades ya existentes dentro del objeto coche

// delete coche.propietario;
// console.log(coche);

// // ITERAR SOBRE UN OBJETO
// //FOR...IN

// for (let pepe in coche) {
//   console.log(pepe + ":" + coche[pepe]);
// }

// const libro = {
//   titulo: "Cien años de soledad",
//   autor: "Gabriel García Márquez",
//   año: 1967,
//   editorial: "Salamandra",
//   genero: "ficción",
//   numeroPag: 496,
//   descripcion: function () {
//     console.log(
//       `${this.titulo} es una obra literaria, escrita por ${this.autor}, publicada en ${this.año}`
//     );
//   },
// };

// for (let clave in libro) {
//   console.log(clave + " : " + libro[clave]);
// }

// libro.descripcion();

// anidacion dentro de los objetos

// const persona = {
//   nombre: "Cristina",
//   apellido: "Martín",
//   Edad: 30,
//   direccion: {
//     calle: "Calle de la Piruleta",
//     ciudad: "Málaga",
//     cp: 29014,
//   },
// };

// // notacion punto
// console.log(persona.direccion.calle);

// // notacion corchete
// console.log(persona["direccion"]["ciudad"]);

// // objetos con arrays

// const estudiante = {
//   nombre: "Pepe",
//   edad: 22,
//   materias: ["Matemáticas", "Física", "Química"],
//   calificaciones: [8.5, 5, 2, 9.8, 1, 10],
//   imprimirDetalles: function () {
//     console.log(`Nombre del estudiante: ${this.nombre}, edad: ${this.edad}`);
//     console.log(`Materias que cursa: ${this.materias}`);
//     const aprobados = estudiante.calificaciones.filter(
//       (elemento) => elemento >= 5
//     );
//     console.log(`Calificaciones ${aprobados}`);
//   },
// };

// console.log(estudiante);
// estudiante.imprimirDetalles();

// const aprobados = estudiante.calificaciones.filter((elemento) => elemento >= 5);

// console.log(aprobados);

// const company = {
//   name: "TechCorp",
//   empleados: [
//     {
//       nombre: "Jose Miguel",
//       puesto: "Developer",
//       proyectosAsignados: [
//         { nombre: "WebApp", fechaEntrega: "01/05/2025" },
//         { nombre: "API", fechaEntrega: "24/02/2025" },
//       ],
//     },
//     {
//       nombre: "Laura",
//       puesto: "Developer",
//       proyectosAsignados: [
//         { nombre: "App Mobile", fechaEntrega: "12/01/2025" },
//         { nombre: "App Mobile", fechaEntrega: "12/01/2025" },
//         { nombre: "App Mobile", fechaEntrega: "12/01/2025" },
//       ],
//     },
//   ],
// };

// console.log(company);

// let animales = [
//   {
//     nombre: "Vaca",
//     especie: "vaca marron",
//     color: "marron",
//     altura: "170cm",
//     propietario: "Jesulín de Ubrique",
//   },
//   {
//     nombre: "Cerdo",
//     especie: "vietnamita",
//     color: "rosa",
//     altura: "50cm",
//     propietario: "Jesulín de Ubrique",
//   },
//   {
//     nombre: "pollo",
//     especie: "gallina chulisima",
//     color: "Gris",
//     altura: "30cm",
//     propietario: "Jesulín de Ubrique",
//   },
//   {
//     nombre: "pato",
//     especie: "pato pequinés",
//     color: "Gris",
//     altura: "30cm",
//     propietario: "Jesulín de Ubrique",
//   },
// ];

// // let pollo = {
// //   especie: "gallina chulisima",
// //   color: "gallina chulisima",
// //   altura: "30cm",
// //   propietario: "Jesulín de Ubrique",
// //   edad: 1,
// // };

const coche = {
  marca: "VolksWagen",
  modelo: "Polo",
  numeroPuertas: 5,
  combustible: "Diesel",
  año: 2012,
};

for (let propiedades in coche) {
  console.log(`${propiedades}: ${coche[propiedades]}`);
}

Object.keys(coche).forEach((props) => {
  console.log(`${props}: ${coche[props]}`);
});

Object.values(coche).forEach((value) => {
  console.log(value);
});
