const app = document.getElementById("app");

// automatizacion de cajitas

// const botonCaja = document.createElement("button");
// botonCaja.setAttribute("id", "botonCaja");
// botonCaja.textContent = "Crear Caja";

// app.appendChild(botonCaja);

// function crearCajita() {
//   const caja = document.createElement("div");
//   caja.setAttribute("class", "cajita");

//   app.appendChild(caja);
// }

// botonCaja.addEventListener("click", crearCajita);

// let bombilla1 = document.createElement("div");
// let bombilla2 = document.createElement("div");
// let bombilla3 = document.createElement("div");
// bombilla1.setAttribute("class", "bombilla");
// bombilla2.setAttribute("class", "bombilla");
// bombilla3.setAttribute("class", "bombilla");

// app.appendChild(bombilla1);
// app.appendChild(bombilla2);
// app.appendChild(bombilla3);

// cajita1.addEventListener("click", () => {
//   cajita1.classList.toggle("color1");

//   cajita2.className === "color2"
//     ? cajita2.classList.toggle("cajita")
//     : (cajita2.classList = "cajita");

//   cajita3.className === "color3"
//     ? cajita3.classList.toggle("cajita")
//     : (cajita3.classList = "cajita");
// });

// cajita2.addEventListener("click", () => {
//   cajita2.classList.toggle("color2");

//    cajita1.className === "color1"
//      ? cajita1.classList.toggle("cajita")
//      : (cajita1.classList = "cajita");

//    cajita3.className === "color3"
//      ? cajita3.classList.toggle("cajita")
//      : (cajita3.classList = "cajita");
// });

// cajita3.addEventListener("click", () => {
//   cajita3.classList.toggle("color3");

//    cajita2.className === "color2"
//      ? cajita2.classList.toggle("cajita")
//      : (cajita2.classList = "cajita");

//    cajita1.className === "color1"
//      ? cajita1.classList.toggle("cajita")
//      : (cajita1.classList = "cajita");
// });

// function autoColor() {
//   if (cajita1.className === "color1") {
//     cajita1.classList.remove = "color1";
//     cajita1.classList.add = "cajita";
//   } else if (cajita2.className === "color2") {
//     cajita2.classList.remove = "color2";
//     cajita2.classList.add = "cajita";
//   } else if (cajita3.className === "color3") {
//     cajita3.classList.remove = "color3";
//     cajita3.classList.add = "cajita";
//   }
// }

// let estado = 0;

// function cambiarLuz() {
//   bombilla1.classList.remove("rojo");
//   bombilla2.classList.remove("naranja");
//   bombilla3.classList.remove("verde");

//   if (estado === 0) {
//     bombilla1.classList.add("rojo");
//     estado = 1;
//   } else if (estado === 1) {
//     bombilla2.classList.add("naranja");
//     estado = 2;
//   } else if (estado === 2) {
//     bombilla3.classList.add("verde");
//     estado = 0;
//   }
// }

// setInterval(cambiarLuz, 1000);

// setTimeOut --> función que se ejecuta una vez después de un retraso especificado (en ms)
// setTimeout(() => {
//   console.log("Hola despues de 2 segundos");
// }, 2000);

// const body = document.body;

// setTimeout(() => {
//   body.style.backgroundColor = "coral";
// }, 3000);

// setInterval --> funcion que se ejecuta repetidamente con un intervalo de tiempo fijo (en ms)

// setInterval(() => {
//   const ahora = new Date().toLocaleTimeString();
//   console.log(ahora);

//   console.log(`Hora actual ${ahora}`);
// }, 2000);

// let contador = 0;

// let contadorAutomatico = setInterval(() => {
//   console.log(`Contador: ${contador}`);
//   contador++;

//   if (contador > 10) {
//     clearInterval(contadorAutomatico);
//   }
// }, 2000);

// let posicion = 0;

// const movimiento = setInterval(() => {
//   posicion += 10;

//   app.style.transform = `translateX(${posicion}px)`;

//   if (posicion > 200) {
//     clearInterval(movimiento);
//   }
// }, 200);

// app.addEventListener("mousemove", () => {
//   console.log("HOLA");
//   console.log("1234");
// });

// EVENTOS DE FORMULARIO

// const input = document.getElementById("input");

// input.addEventListener("input", (evento) => {
//   console.log(`CONTENIDO: ${evento.target.value}`);
// });

// FORMULARIO BÁSICO

// const formulario = document.getElementById("formulario1");
// const nombre = document.getElementById("nombre");
// const email = document.getElementById("email");

// nombre.addEventListener("input", (evento) => {
//   const contenidoInput = evento.target.value;

//   if (contenidoInput.length < 2) {
//     console.log("El nombre no puede tener menos de 2 letras.");
//     nombre.style.backgroundColor = "red";
//   } else {
//     console.log("Nombre de user aceptado");
//     nombre.style.backgroundColor = "white";
//   }
// });

// email.addEventListener("input", (evento) => {
//   const contenidoEmail = evento.target.value;

//   if (!contenidoEmail.includes("@")) {
//     console.log("Esto no es un email válido");
//     email.style.backgroundColor = "red";
//   } else {
//     console.log("Email válido");
//     email.style.backgroundColor = "white";
//   }
// });

// formulario.addEventListener("submit", (evento) => {
//   evento.preventDefault();
//   //   const nombreEnviar = nombre.value;
//   //   const emailEnviar = email.value;

//   // aqui podríamos hacer más verificaciones

//   console.log(
//     `Formulario enviado: Nombre: ${nombre.value}, Email: ${email.value}`
//   );
// });

const div = document.getElementById("contenedor");
const boton = document.getElementById("boton");

div.addEventListener("click", () => {
  console.log("Has hecho click en el contenedor");
});

boton.addEventListener("click", (evento) => {
  evento.stopPropagation();
  console.log("Has hecho click en el boton");
});
