function arrays() {
    let strArr = ['one', 'hey', 'Dave']; // inferred as string


    // strArr[0] = 1; // CTE
    let mixed1 = ['one', 'two', 3]; // inferred as union type of string and number
    mixed1[0] = 1;
    // mixed1.push(false); // CTE
    let mixed2 = ['one', 2, true]; // inferred as union type of string, number and boolean
    mixed2[2] = false;
    // mixed2.push(new Date()); // CTE
    // strArr = mixed1; // CTE
    mixed1 = strArr;
    mixed2 = mixed1;

    let empty = []; // inferred as any type
    let characters: string[] = []; // declare as string array
    characters.push("a");
}

arrays();
