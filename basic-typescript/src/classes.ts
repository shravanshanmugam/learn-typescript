class Coder {
  name: string = ""; // initialized here so no need to add in constructor
  active: boolean;
  age: number;
  lang?: string; // optional so it doesn't require initializer
  // constructor(active: boolean, age: number) {
  //   this.active = active;
  //   this.age = age;
  // }
  constructor(name: string, active: boolean, age: number) {
    this.name = name;
    this.active = active;
    this.age = age;

  }
}

class CoderVisibility {
  constructor(
    public readonly name: string, // immutable
    public active: boolean,
    private age: number, // private - accessed only inside the class
    protected lang: string = "Typescript" // protected - accessed inside derived classes
  ) {
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
  constructor(
    public computer: string,
    name: string,
    active: boolean,
    age: number
  ) {
    super(name, active, age);
  }

  getLang() {
    return `I write ${this.lang}`;
  }
}

const john = new WebDev("Apple", "John", true, 21);
console.log(john.getLang());
console.log(john.getAge());
// console.log(john.lang); // CTE protected property
// console.log(john.age); // CTE private property

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;
  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}
const slash = new Guitarist("Slash", "Les Paul");
console.log(slash.name, slash.instrument, slash.play("plays"));

class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  public id: number;
  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const amy = new Peeps("Amy");
console.log(amy.name, amy.id);

const steve = new Peeps("Steve");
console.log(steve.name, steve.id);

const sarah = new Peeps("Sarah");
console.log(sarah.name, sarah.id);

console.log("count", Peeps.count);

class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (
      Array.isArray(value) &&
      value.every((element) => typeof element === "string")
    ) {
      this.dataState = value;
      return;
    } else {
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
