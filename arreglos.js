const mixedTypedArray = [100, true, 'freeCodeCamp', {}];

const salad = ['π', 'π', 'π₯¦', 'π₯', 'π½', 'π₯', 'π₯'];
const salad2 = new Array('π', 'π', 'π₯¦', 'π₯', 'π½', 'π₯', 'π₯');

const element = array[index];

const salad3 = ['π', 'π', 'π₯¦', 'π₯', 'π½', 'π₯', 'π₯'];
const len = salad3.length;
salad3[len - 1]; // 'π₯'
salad3[len - 3]; // 'π½'


//AΓ±adir un elemento al final del arreglo
const salad4 = ['π', 'π', 'π₯¦', 'π₯', 'π½', 'π₯', 'π₯'];
salad4.push('π₯');

//AΓ±adir un elemeto al princio del arreglo
const salad5 = ['π', 'π', 'π₯¦', 'π₯', 'π½', 'π₯', 'π₯'];
salad5.unshift('π₯');

//Eliminar un elemento del arreglo al final
const salad6 = ['π', 'π', 'π₯¦', 'π₯', 'π½', 'π₯', 'π₯'];
salad6.pop(); // π₯

console.log(salad6); // ['π', 'π', 'π₯¦', 'π₯', 'π½', 'π₯']

//ELiminar un elemento al princio del arreglo

const ensalada = ['π', 'π', 'π₯¦', 'π₯', 'π½', 'π₯', 'π₯'];
salad.shift(); // π

console.log(ensalada); // ['π', 'π₯¦', 'π₯', 'π½', 'π₯', 'π₯'];

//Clonar un arreglo:
const ensalada1 = ['π', 'π', 'π₯¦', 'π₯', 'π½', 'π₯', 'π₯'];
const ensalada1Copy = ensalada1.slice();

console.log(ensalada1Copy); // ['π', 'π', 'π₯¦', 'π₯', 'π½', 'π₯', 'π₯']

ensalada1 === ensalada1Copy; // returns false


//Determinar si el valor es un arreglo
Array.isArray(['π', 'π', 'π₯¦', 'π₯', 'π½', 'π₯', 'π₯']); // returns true
Array.isArray('π'); // returns false
Array.isArray({ 'tomate': 'π'}); // returns false
Array.isArray([]); // returns true

//DestructuraciΓ³n de arreglos
let [tomate, hongo, zanahoria] = ['π', 'π', 'π₯'];

console.log(tomate, hongo, zanahoria); // Output, π π π₯

let vegetales = ['π', 'π', 'π₯'];
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



