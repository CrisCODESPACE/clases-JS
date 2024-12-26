// OPERADORES

// ARITMÉTICOS (+, -, *, /, %, **, ++, --)

// // operador aritmetico de suma
// let a = 5;
// let b = 10;

// let c = true;
// let d = true;

// let suma = a + b;

// console.log(c + d);

// // operador aritmetico de resta

// let resta = b - a;
// console.log(resta);

// // op. ar. multiplicacion

// console.log(a * b);
// console.log(a * b);

// // op. ar. división

// console.log(a / b);
// console.log(b / 5);

// // op. ar. de resto
// let num1 = 2;
// let num2 = 3;

// console.log(num2 % num1);

// // op. ar. de exponenciación

// console.log(num1 ** num2);

// // op. ar. incremento

// let numIncremento = 2;

// console.log(numIncremento++);
// console.log(numIncremento++);
// console.log(numIncremento++);
// console.log(numIncremento++);
// console.log(numIncremento);

// // op. ar. decremento

// console.log(numIncremento--);
// console.log(numIncremento--);
// console.log(numIncremento--);

// DECLARA DOS VARIABLES NUMÉRICAS Y REALIZA LAS 4 OPERACIONES BÁSICAS (+, -, *, /)

// let num1 = 12;
// let num2 = 20;

// let suma = num1 + num2;
// console.log(`El resultado de la suma es: ${suma}`);

// let resta = num1 - num2;
// console.log(`El resultado de restar 12 menos 20 es: ${resta}`);

// let multiplicacion = num1 * num2;
// console.log(`Resultado de la multiplicación: ${multiplicacion}`);

// let division = num1 / num2;
// console.log(`La división es: ${division}`);

// let saludo = "Hola";

// console.log(`${saludo}, Cris`);

// let nombre = "Cristina";
// let edad = 30;

// console.log(`${saludo}, ${nombre}! Tienes ${edad} años`);

// COMPARACION (==, ===, !=, !==, >, >=, <, <=)

// operador de igualdad ==
// el operador de igualdad también hace conversión de tipos cuando lo necesita

// console.log("five" == 5);
// console.log(true == 1);
// console.log(5 == 10 / 2);

// // operador de igualdad ESTRICTA ===
// console.log("hola" === "holaa");
// console.log(5 === "5");

// // operador de desigualdad !=
// console.log(5 != "5"); // false porque no compara tipos
// console.log(5 != 2); // true, porque son el mismo tipo pero diferente valor

// // operador de desigualdad ESTRICTA !==

// console.log(5 !== "5"); // true, son mismo valor diferente tipo
// console.log(5 !== 5); // false, porque son exactamente lo mismo

// operador MAYOR QUE >

// let pepe = 200;

// console.log(pepe > 190);
// console.log(2 > 10);

// // operador MAYOR QUE O IGUAL >=

// console.log(2 >= 2);
// console.log(2 >= 1);
// console.log(2 >= 5);

// // operdor MENOR QUE <
// console.log(2 < 1);
// console.log(2 < 10);

// // operador MENOR QUE O IGUAL <=

// console.log(2 <= 1);
// console.log(2 <= 2);
// console.log(2 <= 3);

// ASIGNACION (=, +=, -=, *=, /=)

// operador asignacion simple =

// let x = 1;

// // operador asignacion suma +=

// let z = 1;
// let y = 2;
// z += y; // z = z + y
// console.log(z);

// console.log(z + 2);
// console.log(z);

// //operador asignacion resta

// let num1 = 20;
// let num2 = 3;

// num1 -= num2; // num1 = num1 - num2;

// console.log(num1);

// //operador asignacion multiplicación *=

// let precio = 2;
// let cantidad = 100;

// precio *= cantidad; // precio = precio * cantidad;

// console.log(precio);

// // operador  asignacion division /=

// let g = 10;

// g /= 2;

// console.log(g);

// LOGICOS (&&, ||, !) = (AND, OR, NOT) = (Y, O, NO)

// OPERADOR LOGICO AND/&&

// let var1 = true;
// let var2 = true;
// console.log(var1 && var2);

// let var3 = true;
// let var4 = false;
// console.log(var3 && var4);

// let edad = 18;

// console.log(18 > 2 && edad >= 18);

// let buenTiempo = false;
// let tiempoLibre = false;

// let salirDePaseo = buenTiempo && tiempoLibre;

// console.log(salirDePaseo);

// let age = 30;
// let dinero = true;

// let carnetDeConducir = age >= 18 && dinero;
// console.log(carnetDeConducir);

// let chica = true;
// let edad = 16;

// let entradaGratis = chica && edad >= 18;
// console.log(entradaGratis);

// operador logico or/||

// let haceSol = false;
// let lluvia = true;
// let paraguas = false;

// let salir = haceSol || (lluvia && paraguas);
// console.log(salir);

// let tiendaAbierta = true;
// let dineroBanco = false;
// let credito = true;

// let irAComprar = tiendaAbierta && (dineroBanco || credito);

// console.log(irAComprar);

// operador lógico NOT/!

// let haceSol = true;

// console.log(!haceSol);

// let edad = 18;

// console.log(!(edad >= 18));
