let username = "shravan"; // implicit type 
console.log(username);
let lastname: string = "shan"; // explicit type
// lastname = 42; // compile time error due to type - UNCOMMENT TO CHECK
lastname = "shanmugam"; // reassignment to let is fine

let a: number = 12;
let b = '2';
// console.log(a / b); // compile time error due to type - UNCOMMENT TO CHECK
let c: number = 2;
console.log(a / c);

let isLoading: boolean; // declare
isLoading = true; // assign

let album: any; // any type is same as dynamic type
album = true;
album = "Vikram";
album = 42;

// const sumErr = (a, b) => a + b; // implicitly any type - UNCOMMENT TO CHECK
const sum = (a: number, b:number) => a + b; // infers the return type as number
const sumStr = (a: number, b:string) => a + b; // infers the return type as string

let song: string | number; // union type
song = "Ghost";
song = 21;
// song = true; // compile time error due to type - UNCOMMENT TO CHECK

let postId: string | number;
let isActive: number | boolean;

let re= /\w+/g; // infers as RegExp so we assign type as RegExp
let re2: RegExp = /\w+/g;

