const persona = {
  nombre: "Pepe",
  apellido: "Viyuela",
  edad: 61,
};

Object.freeze(persona);

persona.nombre = "Tom Cruise";
// console.log(persona.nombre);

persona.nombre = "Concha Velasco";
// console.log(persona.nombre);

// FOR...IN
for (let clave in persona) {
  //   console.log(`${clave}`);
}

// OBJECT.KEYS

const claves = Object.keys(persona);
// console.log(claves);

// OBJECT.VALUES

const valores = Object.values(persona);
// console.log(valores);

//OBJECT.ENTRIES

const entries = Object.entries(persona);
// console.log(entries);

const perro = {
  raza: "Caniche",
  pelaje: "blanco",
  nombre: "Carlo Magno",
  edad: 2,
};
console.log(perro);

Object.seal(perro);

delete perro.raza;

console.log(perro);

perro.vacunas = true;

console.log(perro);

perro.nombre = "Firulais";
console.log(perro);

// DOM - CAMBIO DE TEMA (CLARO Y OSCURO)

const interruptor = document.getElementById("interruptor");

const body = document.body;

interruptor.addEventListener("click", () => {
  body.classList.toggle("tema-oscuro");
  body.classList.toggle("tema-claro");

  const modoOscuro = body.classList.contains("tema-oscuro");

  interruptor.textContent = modoOscuro
    ? "Cambiar a tema claro"
    : "Cambiar a tema oscuro";
});
