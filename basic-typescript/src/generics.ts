// use type generic as return type
interface BoolCheck<T> {
    arg: T,
    is: boolean
}

function generics() {
// type variable or placeholder
    const stringEcho = (arg: string): string => arg; // only works with string type

    const echo = <T>(arg: T): void => console.log(arg); // generic type
    echo("hey")

    const isObj = <T>(arg: T): boolean => {
        return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
    }
    console.log(isObj(true))
    console.log(isObj("Doe"))
    console.log(isObj([1, 2, 3]))
    console.log(isObj({name: "John"})) // true
    console.log(isObj(null))

    // returns an object with argument of type T and boolean value
    const isTrue = <T>(arg: T): BoolCheck<T> => {
        if (Array.isArray(arg) && !arg.length) {
            return {arg, is: false}
        }
        if (isObj(arg) && !Object.keys(arg as keyof T).length) {
            return { arg, is: false}
        }
        return { arg, is: !!arg} // double negation returns true/false
    }
    console.log(isTrue(false))
    console.log(isTrue(0))
    console.log(isTrue(true))
    console.log(isTrue(1)) // true
    console.log(isTrue("Dave"))
    console.log(isTrue(""))
    console.log(isTrue(null))
    console.log(isTrue(undefined))
    console.log(isTrue({}))
    console.log(isTrue({name: "David"})) // true
    console.log(isTrue([]))
    console.log(isTrue([1, 2, 3])) // true
    console.log(isTrue(NaN))
    console.log(isTrue(-0))
}

generics();

interface HasId {
    id: number
}


function generics2() {
    // processUser takes any parameter than has id parameter
    const processUser = <T extends HasId>(user: T): T => {
        return user;
    }

    console.log(processUser({id: 1, name: "Dave"}))
    // console.log(processUser({name: "John"})) // TCE id is mandatory

    /*
    accepts parameter which has an id and key which is a key of the first parameter
    return an array of values by key of first parameter
    For example accept list of users and property age and return array of ages of all users
    */
    const getUsersProperty = <T extends HasId, K extends keyof T>(users: T[], key: K): T[K][] => {
        return users.map(user => user[key])
    }

    console.log(getUsersProperty([{id: 1, name: "Morty", age: 14}, {id: 2, name: "Rick", age: 78}], "age"))

}

generics2();

class StateObject<T> {
    private _data: T;
    constructor(value: T) {
        this._data = value;
    }


    get state(): T {
        return this._data;
    }

    set state(value: T) {
        this._data = value;
    }
}

function generics3() {
    const store = new StateObject("John");
    console.log(store.state)
    // store.state = 12; // inferred type as string so it cannot be number

    const myState = new StateObject<(string|boolean|number)[]>([15])
    console.log(myState.state);
    myState.state = ["Dave", 14, true]
    console.log(myState.state)
}

generics3()