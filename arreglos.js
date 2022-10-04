const mixedTypedArray = [100, true, 'freeCodeCamp', {}];

const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
const salad2 = new Array('🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑');

const element = array[index];

const salad3 = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
const len = salad3.length;
salad3[len - 1]; // '🥑'
salad3[len - 3]; // '🌽'


//Añadir un elemento al final del arreglo
const salad4 = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
salad4.push('🥜');

//Añadir un elemeto al princio del arreglo
const salad5 = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
salad5.unshift('🥜');

//Eliminar un elemento del arreglo al final
const salad6 = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
salad6.pop(); // 🥑

console.log(salad6); // ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕']

//ELiminar un elemento al princio del arreglo

const ensalada = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
salad.shift(); // 🍅

console.log(ensalada); // ['🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];

//Clonar un arreglo:
const ensalada1 = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
const ensalada1Copy = ensalada1.slice();

console.log(ensalada1Copy); // ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']

ensalada1 === ensalada1Copy; // returns false


//Determinar si el valor es un arreglo
Array.isArray(['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']); // returns true
Array.isArray('🍅'); // returns false
Array.isArray({ 'tomate': '🍅'}); // returns false
Array.isArray([]); // returns true

//Destructuración de arreglos
let [tomate, hongo, zanahoria] = ['🍅', '🍄', '🥕'];

console.log(tomate, hongo, zanahoria); // Output, 🍅 🍄 🥕

let vegetales = ['🍅', '🍄', '🥕'];
let tomate = vegetales[0];
let hongo= vegetales[1];
let zanahoria= vegetales[2];

//Ejemplo uso de map 1

let prefijos = ["super", "spider", "ant", "iron"]
let sufijo = "man";

let nombresCompletos = prefijos.map(prefijo => prefijo + sufijo);

console.log(nombresCompletos);

// ["superman", "spiderman", "antman", "ironman"]

//Ejemplo uso de map 2

let prefijos = ["wonder", "spider", "ant", "iron"]
let hombre = "man";
let mujer = "woman";

let nombresCompletos = prefijos.map(function(prefijo, indice) {
    return (indice == 0) ? prefijo + mujer : prefijo + hombre;
 });

console.log(nombresCompletos);

["wonderwoman", "spiderman", "antman", "ironman"]



