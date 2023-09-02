interface Transaction {
    readonly [index: string]: number, // all the keys will be string and all the values are numbers - Comment out to check the error
    Pizza: number,
    Books: number,
    Job: number
}

function indexSignatures() {
    const todaysTransaction: Transaction = {
        Pizza: -10,
        Books: -5,
        Job: 50
    }

    console.log("today's pizza transaction", todaysTransaction.Pizza, todaysTransaction["Pizza"])
// dynamic access
    let prop: string = "Pizza"; // TCE implicit any tipe since we can't restrict value to be Pizza, Books or Job. it can be anything else also
    console.log(todaysTransaction[prop])

    const todaysNet = (transactions: Transaction):number => {
        let total = 0;
        for (let transaction in transactions) {
            total += transactions[transaction]; // dynamic access
        }
        return total;
    }

    todaysTransaction.Job = 40; // TCE read-only
    console.log(todaysNet(todaysTransaction))

    console.log("dave", todaysTransaction["Dave"]); // access key on an object that does not exist. return undefined
}

indexSignatures();

interface Student {
    // [key: string]: string | number | number[] | undefined // since classes is optional
    name: string,
    GPA: number,
    classes?: number[]
}

function indexSignatures2() {
    const student: Student = {
        name: "Doug",
        GPA: 3.5,
        classes: [10, 20]
    }

    // console.log(student.test);
    console.log("keyof")
    for (let key in student) {
        console.log(`${key}: ${student[key as keyof Student]}`) // union type of key names of Student
    }

    console.log("keyof typeof")
    Object.keys(student).map(key => {
        console.log(`${key}: ${student[key as keyof typeof student]}`) // in case we don't know type of the object itself
    })

    console.log("keyof in function")
    const logStudentKey = (student: Student, key: keyof Student): void => {
        console.log(`Student ${key}: ${student[key]}`);
    }

    logStudentKey(student, "name")
    // logStudentKey(student, "asdf") // CTE
}

indexSignatures2();


type Streams = 'salary' | 'bonus' | 'sidehustle' // union type for streams
type Incomes = Record<Streams, number | string> // property can be number of string

function recordType() {
    const monthlyIncomes: Incomes = {
        salary: 500,
        bonus: 100,
        sidehustle: 250
    }

    console.log("Record type")
    for (let revenue in monthlyIncomes) {
        console.log(`${revenue}: ${monthlyIncomes[revenue as keyof Incomes]}`)
    }
}

recordType();

