"use strict";
// Type aliases
function typeAliases() {
    // interface PostName = string | number; // CTE - type aliases not with interface
    let myFirstSelfie = {
        postId: "123", // can be string or number
    };
    // Literal types
    let steve; // type Steve
    // steve = '123'; // CTE
    let anotherSteve = "Steve";
    // let oneMoreSteve: 'Steve' = "Rachel"; // CTE
    let userName; // using union type, userName can have only one of these three values. kinda like enums
    userName = "Amy";
    // userName = "Rick"; // CTE
}
typeAliases();
