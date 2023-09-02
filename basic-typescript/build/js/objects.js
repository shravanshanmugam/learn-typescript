"use strict";
function objects() {
    var _a;
    let myObj;
    myObj = [];
    myObj = {};
    const obj1 = {
        name: "shravan",
        active: true,
    }; // inferred as object with name of type string and active of type boolean
    let shravan = {
        name: "shravan",
        active: true,
        age: 28,
        relations: ["shan", 98],
    }; // all fields are mandatory by default if not specified as optional
    let dave = {
        name: "Dave",
        active: false,
        age: 41,
        relations: [],
    };
    shravan = dave; // assign to same type
    let john = {
        name: "John",
    };
    // shravan = john; // CTE - missing properties
    let doe = {
        name: "Doe",
        active: false,
        age: 33,
        relations: [],
    };
    shravan = doe; // properties of doe have same name and type
    // shravan.lastName = "shan"; // CTE - cannot add new properties
    let stu = {
        name: "Stu",
        active: true,
    }; // since age and relations are optional
    shravan = stu;
    const greetUser = (user) => {
        console.log(`Hello ${user.name}!`);
    };
    greetUser(shravan);
    let laundry = {
        name: "Laundry",
        done: false,
    };
    console.log(`I have completed ${(_a = laundry.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}`); // name is optional so it can be undefined. TS says to use optional chaining
}
objects();
