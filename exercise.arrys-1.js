// ¿Cómo acceder al primer elemento de un array? Dime 4 opciones
let miArray = [1, 2, 4];
miArray[0];
miArray.shift();

const primerElemento = miArray[0];

miArray.slice(0,1)

console.log(primerElemento);

// ¿Cómo acceder al último elemento de un array? Dime 4 opciones


miArray[miArray.length - 1];

miArray.pop();

const ultimoElemento = miArray[-1];

miArray.slice(-1);
