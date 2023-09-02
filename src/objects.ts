function objects() {
  let myObj: object;
  myObj = [];
  myObj = {};

  const obj1 = {
    name: "shravan",
    active: true,
  }; // inferred as object with name of type string and active of type boolean
  // obj1.active = 'false'; // CTE
  // obj1['name'] = 28; // CTE

  type User = {
    name: string;
    active: boolean;
    age?: number; // make age as optional property
    relations?: (string | number)[]; // make relations as optional property
  }; // declare type of object

  let shravan: User = {
    name: "shravan",
    active: true,
    age: 28,
    relations: ["shan", 98],
  }; // all fields are mandatory by default if not specified as optional

  let dave: User = {
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

  let stu: User = {
    name: "Stu",
    active: true,
  }; // since age and relations are optional

  shravan = stu;

  const greetUser = (user: User) => {
    console.log(`Hello ${user.name}!`);
  };

  greetUser(shravan);

  interface Task {
    name?: string;
    done?: boolean;
  }

  let laundry: Task = {
    name: "Laundry",
    done: false,
  };

  console.log(`I have completed ${laundry.name?.toUpperCase()}`); // name is optional so it can be undefined. TS says to use optional chaining
}

objects();
