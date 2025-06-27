// Agrupacion en la consola para datos iniciales
console.groupCollapsed("Tipos de Datos - Iniciales");

// Variables con tipos primitivos
let texto = "Holaaaaaa";         // string
let numero = 47;                  // number
let booleano = true;              // boolean
let indefinido;                   // undefined
let nulo = null;                  // null
let simbolo = Symbol("simbolo"); // symbol
let bigint = 1234567890123456789012345678901234567890n; // bigint

// Mostrar en consola usando distintos tipos de console
console.log("String:", texto);
console.error("Number:", numero);
console.debug("Boolean:", booleano);
console.log("Undefined:", indefinido);
console.error("Null:", nulo);
console.debug("Symbol:", simbolo);
console.log("BigInt:", bigint);

console.groupEnd(); // fin del grupo de datos inciales

// Cambiar los valores y volver a mostrarlos con otros métodos de console
console.groupCollapsed("Tipos de Datos - Modificados");

// Variables con tipos primitivos modificadas
texto = "Chaooooo";
numero = 3.1416;
booleano = false;
indefinido = "ahora definido";
nulo = "ya no es null";
simbolo = Symbol("nuevo");
bigint = 99999999999999999999999n;

// Mostrar en consola usando otros tipos de console para los datos modificados
console.debug("String modificado:", texto);
console.log("Number modificado:", numero);
console.error("Boolean modificado:", booleano);
console.log("Undefined modificado:", indefinido);
console.debug("Null modificado:", nulo);
console.error("Symbol modificado:", simbolo);
console.debug("BigInt modificado:", bigint);

console.groupEnd();

