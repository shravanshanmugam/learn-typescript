"use strict";
function partial() {
    const updateAssignment = (assign, toUpdate) => {
        return Object.assign(Object.assign({}, assign), toUpdate);
    };
    let graded = updateAssignment({ studentId: "1", title: "Final project", grade: 1 }, { grade: 2 });
    console.log("graded", graded);
}
partial();
function required() {
    const recordAssignment = (assign) => {
        // make all properties as required
        return assign;
    };
    // console.log("record", recordAssignment({studentId: "2", title: "Mid sem", grade: 3})) // CTE since all properties are required
    console.log("record", recordAssignment({ studentId: "2", title: "Mid sem", grade: 3, verified: false }));
}
required();
function readOnly() {
    const student = { studentId: "2", title: "Final sem", grade: 5, verified: false };
    const assignVerified = Object.assign(Object.assign({}, student), { verified: true });
    console.log("readOnly", assignVerified); // assignVerified is an immutable/read-only object
    // assignVerified.grade = 9; // CTE
}
readOnly();
const hexColor = {
    red: "ff0000",
    green: "00ff00",
    blue: "0000ff"
};
function recordTypes() {
    const finalGrades = {
        "Sarah": "B",
        "Kelly": "A"
    };
    console.log("finalGrades", finalGrades);
    const gradeData = {
        "Sarah": { math: 80, science: 90 },
        "Kelly": { math: 50, science: 40 }
    };
    console.log("gradeData", gradeData);
}
recordTypes();
