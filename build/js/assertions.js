"use strict";
function assertions() {
    // convert to more or less specific type
    let a = "hey";
    let b = a; // less specific type
    b = 3;
    // b = false; // CTE
    let c = a; // more specific type
    // c = true; // CTE
    let d = "world"; // angle brackets instead of as keyword. using type alias
    let e = "geo"; // using union types directly
    const addOrConcat = (a, b, c) => {
        if (c === 'add') {
            return a + b;
        }
        return '' + a + b;
    };
    // let myValue: string = addOrConcat(2, 3, 'concat'); // CTE since TS cannot resolve return type
    let myValue = addOrConcat(2, 3, 'concat'); // we can assert what return type will be
    console.log("myValue", myValue);
    let nextVal = addOrConcat(2, 3, "concat"); // incorrect assertion by developer. TS cannot identify this
    console.log("nextVal", nextVal);
    // console.log(10 as string); // CTE TS identifies type assertion error
    console.log(10); // double casting or forced casting is two assertions in a row 
}
assertions();
