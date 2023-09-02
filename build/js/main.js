"use strict";
let username = "shravan"; // implicit type 
console.log(username);
let lastname = "shan"; // explicit type
// lastname = 42; // CTE due to type
lastname = "shanmugam"; // reassignment to let is fine
let a = 12;
let b = '2';
// console.log(a / b); // CTE
let c = 2;
console.log(a / c);
let isLoading; // declare
isLoading = true; // assign
let album; // any type is same as dynamic type
album = true;
album = "Vikram";
album = 42;
// const sumErr = (a, b) => a + b; // CTE implicitly any type
const sum = (a, b) => a + b; // infers the return type as number
const sumStr = (a, b) => a + b; // infers the return type as string
let song; // union type
song = "Ghost";
song = 21;
// song = true; // CTE
let postId;
let isActive;
let re = /\w+/g; // infers as RegExp so we assign type as RegExp
let re2 = /\w+/g;
