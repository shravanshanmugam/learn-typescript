"use strict";
// using arrow function. set parameter types and return type
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
}; // return type is void since there is no return statement
logMsg("Hello!");
logMsg(add(2, 3));
// logMsg(add(1, "a")) // CTE
// using function keyword
let subtract = function (a, b) {
    return a - b;
};
let multiply = (a, b) => a * b;
let divide = (a, b) => b === 0 ? NaN : a / b;
logMsg(multiply(4, 5));
logMsg(divide(4, 2));
logMsg(divide(1, 0));
// prefix underscore in variable name when declared but not use if you don't want to remove it
let increaseBy5 = (a, _b = 5) => a + 5;
logMsg(increaseBy5(10));
// optional parameter can be of declared type or undefined
// optional parameters have to be at the end of the function
const addAll = (a, b, c) => {
    // add type guard for optional function parameters
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a = 10, b, c = 2) => {
    // no need for type guard when default value is set
    return a + b + c;
};
logMsg(addAll(2, 3, 5));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
// logMsg(sumAll(3)) // CTE since b is second parameter
logMsg(sumAll(undefined, 3));
// Rest parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(10, 1, 2, 3, 4)); // we do not pass as an array since we are using rest parameters
// never type specifically for functions that throw error
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// inferred return type as never type
const infiniteLoop = () => {
    let i = 0;
    while (true) {
        i++;
        if (i > 100)
            break; // comment this out to check the return type
    }
};
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (typeof value === 'number')
        return 'number'; // handled both possible input cases
    return createError('This should never happen'); // handle never case
};
