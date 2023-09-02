"use strict";
function tuples() {
    let myTuple;
    myTuple = ["a", 2, false]; // first position string, second position 2, third position false
    myTuple[2] = true;
    // myTuple[2] = 1; // CTE
    myTuple.push("d"); // no type-safety after length 3
    myTuple.push(false);
    let readOnlyTuple;
    readOnlyTuple = [1, false, "three"];
    // readOnlyTuple[0] = 2; // CTE - cannot assign to read-only property
    // readOnlyTuple.push("four"); // CTE - push method does not exist for read-only property
    let mixed = ["b", 3, true]; // array with union type string, number and boolean. order and size do not matter
    mixed.push("c");
    mixed = myTuple;
    // myTuple = mixed; // CTE - tuple is required to have 3 elements which mixed may not have
}
tuples();
