"use strict";

var mixedTypedArray = [100, true, 'freeCodeCamp', {}];
var salad = ['π', 'π', 'π₯¦', 'π₯', 'π½', 'π₯', 'π₯'];
var salad2 = new Array('π', 'π', 'π₯¦', 'π₯', 'π½', 'π₯', 'π₯');
var element = array[index];
var salad3 = ['π', 'π', 'π₯¦', 'π₯', 'π½', 'π₯', 'π₯'];
var len = salad3.length;
salad3[len - 1]; // 'π₯'

salad3[len - 3]; // 'π½'
//AΓ±adir un elemento al final del arreglo

var salad4 = ['π', 'π', 'π₯¦', 'π₯', 'π½', 'π₯', 'π₯'];
salad4.push('π₯'); //AΓ±adir un elemeto al princio del arreglo

var salad5 = ['π', 'π', 'π₯¦', 'π₯', 'π½', 'π₯', 'π₯'];
salad5.unshift('π₯'); //Eliminar un elemento del arreglo al final

var salad6 = ['π', 'π', 'π₯¦', 'π₯', 'π½', 'π₯', 'π₯'];
salad6.pop(); // π₯

console.log(salad6); // ['π', 'π', 'π₯¦', 'π₯', 'π½', 'π₯']
//ELiminar un elemento al princio del arreglo

var ensalada = ['π', 'π', 'π₯¦', 'π₯', 'π½', 'π₯', 'π₯'];
salad.shift(); // π

console.log(ensalada); // ['π', 'π₯¦', 'π₯', 'π½', 'π₯', 'π₯'];
//Clonar un arreglo:

var ensalada1 = ['π', 'π', 'π₯¦', 'π₯', 'π½', 'π₯', 'π₯'];
var ensalada1Copy = ensalada1.slice();
console.log(ensalada1Copy); // ['π', 'π', 'π₯¦', 'π₯', 'π½', 'π₯', 'π₯']

ensalada1 === ensalada1Copy; // returns false
//Determinar si el valor es un arreglo

Array.isArray(['π', 'π', 'π₯¦', 'π₯', 'π½', 'π₯', 'π₯']); // returns true

Array.isArray('π'); // returns false

Array.isArray({
  'tomate': 'π'
}); // returns false

Array.isArray([]); // returns true
//DestructuraciΓ³n de arreglos

var tomate = 'π',
    hongo = 'π',
    zanahoria = 'π₯';
console.log(tomate, hongo, zanahoria); // Output, π π π₯
//# sourceMappingURL=arreglos.dev.js.map
