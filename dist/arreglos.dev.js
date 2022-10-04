"use strict";

var mixedTypedArray = [100, true, 'freeCodeCamp', {}];
var salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
var salad2 = new Array('🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑');
var element = array[index];
var salad3 = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
var len = salad3.length;
salad3[len - 1]; // '🥑'

salad3[len - 3]; // '🌽'
//Añadir un elemento al final del arreglo

var salad4 = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
salad4.push('🥜'); //Añadir un elemeto al princio del arreglo

var salad5 = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
salad5.unshift('🥜'); //Eliminar un elemento del arreglo al final

var salad6 = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
salad6.pop(); // 🥑

console.log(salad6); // ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕']
//ELiminar un elemento al princio del arreglo

var ensalada = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
salad.shift(); // 🍅

console.log(ensalada); // ['🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
//Clonar un arreglo:

var ensalada1 = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
var ensalada1Copy = ensalada1.slice();
console.log(ensalada1Copy); // ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']

ensalada1 === ensalada1Copy; // returns false
//Determinar si el valor es un arreglo

Array.isArray(['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']); // returns true

Array.isArray('🍅'); // returns false

Array.isArray({
  'tomate': '🍅'
}); // returns false

Array.isArray([]); // returns true
//Destructuración de arreglos

var tomate = '🍅',
    hongo = '🍄',
    zanahoria = '🥕';
console.log(tomate, hongo, zanahoria); // Output, 🍅 🍄 🥕
//# sourceMappingURL=arreglos.dev.js.map
