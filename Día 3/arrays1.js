// sintaxis contructor array

// let frutas = new Array();
// console.log(frutas);

// let numeros = [1, 2, 3, 4, -1, 0.5];
// console.log(numeros);

let frutas2 = ["Manzana", "Kiwi", "Pátano", "Naranja"];
// console.log(frutas2[0]);
// console.log(frutas2[1]);
// console.log(frutas2[2]);
// console.log(frutas2[3]);
// console.log(frutas2[4]);

//como reemplazar un elemento de un array dentro de una posición específica
frutas2[2] = "Granada";
// console.log(frutas2);

const cajon = ["lápices", "borradores", "libretas", "tijeras"];
// console.log(cajon);

cajon[3] = "goma de borrar";
// console.log(cajon[3]);
// console.log(cajon);

// añadir un elemento más al array al final de este
cajon.push("caja de clips");

// eliminar el ultimo elemento de mi array
cajon.pop();

// añadir nuevo elemento al array desde el principio
cajon.unshift("caja de clips");
// console.log(cajon);

// eliminar el primer elemento del array
cajon.shift();
// console.log(cajon);

// Tenemos un array de frutas con los elementos "Manzana" y "pera". Añade dos elementos más al final de este array.

let frutas = ["Manzana", "Pera"];
console.log(frutas);
frutas.push("Granada");
console.log(frutas);
frutas.push("Fresa");
console.log(frutas);
console.log(frutas[1], frutas[3]);

// Crear un array que se llame animales, con los elementos "Oso", "Pato", "Gato". Elimina el último elemento de este array.

let animales = ["Oso", "Pato", "Gato"];
console.log(animales);
animales.pop();
console.log(animales);

// Crear un array llamado colores con los elementos "Rojo" y "verde". Agrega "azul" al principio del array.

let colores = ["Rojo", "Verde"];
console.log(colores);
colores.unshift("Azul");
console.log(colores);

// Crear un array llamado números con los elementos 10, 20 y 30. Eliminar el elemento en el índice 0.

let numeros = [10, 20, 30];
console.log(numeros);
numeros.shift();
console.log(numeros);
