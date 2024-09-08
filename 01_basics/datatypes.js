/*
 string , Number, boolean , null , undefined  , Symbol, BigInt
 These are all primative data types
 objects, array, functions is a non-primative data type
*/

/*
console.log(typeof 2); // number
console.log(typeof "s");// string
console.log(typeof true);// boolean
console.log(typeof null);// object
console.log(typeof undefined);// undefined
console.log(typeof Symbol);// function
console.log(typeof BigInt);// function
*/

// js is dynamically typed language

// symbol
const id = Symbol("222");

const second_id = Symbol("222");

console.log(id === second_id);

