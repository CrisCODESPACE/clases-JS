// creacion de una promesa

// const promesa = new Promise((resolve, reject) => {
//   let exito = true;

//   if (exito) {
//     resolve("La promesa está resuelta");
//   } else {
//     reject("Hubo un error en la promesa");
//   }
// });

// promesa
//   .then((mensaje) => {
//     console.log(mensaje);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const promesaSimulada = () => {
//   return new Promise((resolve, reject) => {
//     const exito = Math.random() > 0.5;
//     console.log(exito);

//     setTimeout(() => {
//       if (exito) {
//         resolve("La promesa se ha cumplido");
//       } else {
//         reject("Hubo un error");
//       }
//     }, 2000);
//   });
// };

// promesaSimulada()
//   .then((resultado) => console.log(resultado))
//   .catch((error) => console.log(error));

// encadenamiento de promesas

// const primeraTarea = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("primera tarea resuelta"), 1000);
//   });
// };

// const segundaTarea = (tareaPrevia) => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("segunda tarea resuelta"), 1000);
//   });
// };

// primeraTarea()
//   .then(segundaTarea)
//   .then((resultado) => console.log(resultado))
//   .catch((error) => console.log(error));

// const tarea1 = new Promise(
//   (resolve) => setTimeout(() => resolve("Tarea 1 lista")),
//   1000
// );
// const tarea2 = new Promise(
//   (resolve) => setTimeout(() => resolve("Tarea 2 lista")),
//   1000
// );
// const tarea3 = new Promise(
//   (resolve) => setTimeout(() => resolve("Tarea 3 lista")),
//   1000
// );

// Promise.all([tarea1, tarea2, tarea3])
//   .then((resultados) => console.log(resultados))
//   .catch((errores) => console.log(errores));

// async/await

// async function asyncTask() {
//   try {
//     const resultado = await new Promise((rsolve) =>
//       resolve("promesa resuelta")
//     );
//     console.log(resultado);
//   } catch (error) {
//     console.log(`error: ${error}`);
//   }
// }

// asyncTask();

// PETICION A UNA API CON FETCH

const url = "https://pokeapi.co/api/v2/berry";

async function obtenerDatos() {
  try {
    console.log("Obteniendo datos...");
    const respuesta = await fetch(url);

    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }

    const datos = respuesta.json();
    console.log(datos);
  } catch (error) {
    console.log(`Error`, error);
    console.error("Hubo un problema", error);
  }
}

obtenerDatos();
