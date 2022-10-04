
//Asignación básica de Variabes

const foo = ['one', 'two', 'three'];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"

//Asignación separada por declaración
let a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2


// Valores predeterminados

let a, b;

[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7

//Intercambio de variables.

let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

const arr = [1,2,3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1,3,2]

