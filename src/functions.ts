// using arrow function. set parameter types and return type
const add = (a: number, b: number): number => {
    return a + b;
}

const logMsg = (message: any) => {
    console.log(message);
}// return type is void since there is no return statement

logMsg("Hello!")
logMsg(add(2,3))
// logMsg(add(1, "a")) // CTE

// using function keyword
let subtract = function(a: number, b: number): number {
    return a - b;
}

// we cannot declare default values in type aliases for functions
type mathFunction = (a: number, b: number) => number; // create type alias for function

let multiply: mathFunction = (a, b) => a*b;
let divide: mathFunction = (a, b) => b === 0 ? NaN : a/b;

logMsg(multiply(4, 5))
logMsg(divide(4, 2))
logMsg(divide(1, 0))

interface IncrementFunction {
    (a: number, b?: number): number
}

// prefix underscore in variable name when declared but not use if you don't want to remove it
let increaseBy5: IncrementFunction = (a, _b=5) => a + 5;
logMsg(increaseBy5(10))

// optional parameter can be of declared type or undefined
// optional parameters have to be at the end of the function
const addAll = (a: number, b: number, c?: number):number => {
    // add type guard for optional function parameters
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a+b;
}

const sumAll = (a: number = 10, b: number, c: number = 2):number => {
    // no need for type guard when default value is set
    return a+b + c;
}

logMsg(addAll(2, 3, 5))
logMsg(addAll(2, 3))
logMsg(sumAll(2, 3))
// logMsg(sumAll(3)) // CTE since b is second parameter
logMsg(sumAll(undefined, 3))

// Rest parameters
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr);
}

logMsg(total(10, 1,2,3,4)) // we do not pass as an array since we are using rest parameters

// never type specifically for functions that throw error
const createError = (errMsg: string):never => {
    throw new Error(errMsg)
}

// inferred return type as never type
const infiniteLoop = () => {
    let i = 0;
    while(true) {
        i++;
        if (i > 100) break; // comment this out to check the return type
    }
}

const numberOrString = (value: number | string): string => {
    if (typeof value === 'string') return 'string';
    if (typeof value === 'number') return 'number'; // handled both possible input cases
    return createError('This should never happen'); // handle never case
}