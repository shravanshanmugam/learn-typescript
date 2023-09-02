"use strict";
class Coder {
    // constructor(active: boolean, age: number) {
    //   this.active = active;
    //   this.age = age;
    // }
    constructor(name, active, age) {
        this.name = ""; // initialized here so no need to add in constructor
        this.name = name;
        this.active = active;
        this.age = age;
    }
}
class CoderVisibility {
    constructor(name, // immutable
    active, age, // private - accessed only inside the class
    lang = "Typescript" // protected - accessed inside derived classes
    ) {
        this.name = name;
        this.active = active;
        this.age = age;
        this.lang = lang;
        // assignment in constructor is not required
    }
    getAge() {
        return `Hello, I'm ${this.age} years old`;
    }
}
const dave = new CoderVisibility("Dave", true, 42);
console.log(dave.getAge());
console.log(dave.name);
// console.log(dave.age); // not accessible outside the class
// console.log(dave.lang); // not accessible outside the class
class WebDev extends CoderVisibility {
    constructor(computer, name, active, age) {
        super(name, active, age);
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const john = new WebDev("Apple", "John", true, 21);
console.log(john.getLang());
console.log(john.getAge());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const slash = new Guitarist("Slash", "Les Paul");
console.log(slash.name, slash.instrument, slash.play("plays"));
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const amy = new Peeps("Amy");
console.log(amy.name, amy.id);
const steve = new Peeps("Steve");
console.log(steve.name, steve.id);
const sarah = new Peeps("Sarah");
console.log(sarah.name, sarah.id);
console.log("count", Peeps.count);
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) &&
            value.every((element) => typeof element === "string")) {
            this.dataState = value;
            return;
        }
        else {
            throw new Error("Param is not an array of strings");
        }
    }
}
const myBands = new Bands();
myBands.data = ["Niel Young", "Led Zep"];
console.log(myBands.data);
myBands.data = [...myBands.data, "ZZ Top"];
console.log(myBands.data);
// myBands.data = ["Van Halen", 5050]; // CTE since JS doesn't care we have to handle error inside the set data function
