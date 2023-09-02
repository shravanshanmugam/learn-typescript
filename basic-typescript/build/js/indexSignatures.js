"use strict";
function indexSignatures() {
    const todaysTransaction = {
        Pizza: -10,
        Books: -5,
        Job: 50
    };
    console.log("today's pizza transaction", todaysTransaction.Pizza, todaysTransaction["Pizza"]);
    // dynamic access
    let prop = "Pizza"; // TCE implicit any tipe since we can't restrict value to be Pizza, Books or Job. it can be anything else also
    console.log(todaysTransaction[prop]);
    const todaysNet = (transactions) => {
        let total = 0;
        for (let transaction in transactions) {
            total += transactions[transaction]; // dynamic access
        }
        return total;
    };
    todaysTransaction.Job = 40; // TCE read-only
    console.log(todaysNet(todaysTransaction));
    console.log("dave", todaysTransaction["Dave"]); // access key on an object that does not exist. return undefined
}
indexSignatures();
function indexSignatures2() {
    const student = {
        name: "Doug",
        GPA: 3.5,
        classes: [10, 20]
    };
    // console.log(student.test);
    console.log("keyof");
    for (let key in student) {
        console.log(`${key}: ${student[key]}`); // union type of key names of Student
    }
    console.log("keyof typeof");
    Object.keys(student).map(key => {
        console.log(`${key}: ${student[key]}`); // in case we don't know type of the object itself
    });
    console.log("keyof in function");
    const logStudentKey = (student, key) => {
        console.log(`Student ${key}: ${student[key]}`);
    };
    logStudentKey(student, "name");
    // logStudentKey(student, "asdf") // CTE
}
indexSignatures2();
function recordType() {
    const monthlyIncomes = {
        salary: 500,
        bonus: 100,
        sidehustle: 250
    };
    console.log("Record type");
    for (let revenue in monthlyIncomes) {
        console.log(`${revenue}: ${monthlyIncomes[revenue]}`);
    }
}
recordType();
