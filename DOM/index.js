// // // accediendo a un elemento por su id

// // let section = document.getElementById("primera-seccion");

// // console.log(section);

// // // acceder a un elemento con querySelector

// // let divCard = document.querySelectorAll("div");

// // console.log(divCard);

// // // acceder al primer elemento lista

// // let elemento = document.querySelector(".elemento-lista");

// // console.log(elemento);

// // let todosElementos = document.querySelectorAll(".paco");

// // console.log(todosElementos);

// // CREACIÓN de elementos a traves de JS

// // let root = document.createElement("div");
// // root.setAttribute("class", "root");
// // document.body.appendChild(root);

// // let subtitulo = document.createElement("h2");
// // root.appendChild(subtitulo);
// // subtitulo.textContent = "Soy un subtítulo";
// // console.log(root.innerHTML);

// // subtitulo.style.backgroundColor = "red";

// // root.removeChild(subtitulo);
// let root = document.querySelector(".root");

// {
//   let titulo = document.createElement("h1");
//   root.appendChild(titulo);
// }

// {
//   let tituloCreadoEnBloque = document.querySelector("h1");
//   tituloCreadoEnBloque.textContent = "Lista de chuches favoritas";
// }

// // root.innerHTML = "<span>HOLA</span>";
// // root.textContent = "<span>HOLA</span>";
// // console.log(root.innerHTML);
// // console.log(root.textContent);

// let listaDesordenada = document.createElement("ul");
// listaDesordenada.setAttribute("class", "list-container");

// root.appendChild(listaDesordenada);

// let primerLi = document.createElement("li");
// primerLi.textContent = "Gomitas";

// let segundoLi = document.createElement("li");
// segundoLi.textContent = "Ositos";

// let tercerLi = document.createElement("li");
// tercerLi.textContent = "Nubes";

// listaDesordenada.appendChild(primerLi);
// listaDesordenada.appendChild(segundoLi);
// listaDesordenada.appendChild(tercerLi);

// let reemplazoLi = document.createElement("li");
// reemplazoLi.textContent = "Tizas";
// primerLi.parentNode.replaceChild(reemplazoLi, primerLi);

// console.log(root.innerHTML);
// console.log(root.textContent);

// EVENTOS
// let root = document.querySelector(".root");
// let botonPrueba = document.createElement("button");
// botonPrueba.textContent = "Pulsa aquí";

// root.appendChild(botonPrueba);

// botonPrueba.addEventListener("click", () => {
//   console.log("HOLA");
// });

// let parrafo = document.createElement("p");
// parrafo.setAttribute("class", "key-info");

// root.appendChild(parrafo);

// document.addEventListener("keydown", () => {
//   document.querySelector(".key-info").textContent = "Has pulsado una tecla.";
// });

// let cajita = document.querySelector("div");
// cajita.style.backgroundColor = "blue";

// cajita.addEventListener("mouseover", () => {
//   cajita.style.backgroundColor = "red";
// });

// cajita.addEventListener("mouseout", () => {
//   cajita.style.backgroundColor = "blue";
// });

// document.addEventListener("scroll", () => {
//   document.querySelector(
//     ".scroll-info"
//   ).textContent = `Posición de scroll: ${window.scrollY}`;
// });

// Lista de tareas
let root = document.getElementById("root");
console.log(root);

let title = document.createElement("h1");
title.textContent = "To-Do List";

root.appendChild(title);

let input = document.createElement("input");
input.setAttribute("type", "text");
input.placeholder = "Escribe tu tarea...";
input.id = "taskInput";

root.appendChild(input);

let addButton = document.createElement("button");
addButton.textContent = "Añade tu tarea";
addButton.id = "addButton";

root.appendChild(addButton);

let taskList = document.createElement("ul");
taskList.id = "taskList";

root.appendChild(taskList);

addButton.addEventListener("click", () => {
  let taskText = input.value;

  if (taskText !== "") {
    console.log(taskText);

    let listItem = document.createElement("li");
    listItem.textContent = taskText;

    taskList.appendChild(listItem);

    input.value = "";
  } else {
    alert("Añade algo al campo de tareas.");
  }
});
