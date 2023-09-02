type One = string;
type Two = string | number; // union type
type Three = "hello"; // literal type


function assertions() {
    // convert to more or less specific type
    let a: One = "hey";
    let b = a as Two; // less specific type
    b = 3;
    // b = false; // CTE
    let c = a as Three; // more specific type
    // c = true; // CTE

    let d = <One>"world"; // angle brackets instead of as keyword. using type alias
    let e = <string | number>"geo"; // using union types directly

    const addOrConcat = (a: number, b: number, c:'add' | 'concat'):number | string => {
        if (c === 'add') {
            return a + b;
        }
        return '' + a + b;
    }

    // let myValue: string = addOrConcat(2, 3, 'concat'); // CTE since TS cannot resolve return type
    let myValue: string = addOrConcat(2, 3, 'concat') as string; // we can assert what return type will be
    console.log("myValue", myValue);

    let nextVal: number = addOrConcat(2, 3, "concat") as number; // incorrect assertion by developer. TS cannot identify this
    console.log("nextVal", nextVal)

    // console.log(10 as string); // CTE TS identifies type assertion error
    console.log((10 as unknown) as string); // double casting or forced casting is two assertions in a row 
    
}

assertions();
