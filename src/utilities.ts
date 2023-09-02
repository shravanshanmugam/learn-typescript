// Partial, Required, Read only, Record, Pick, Omit, Exclude and Extract types
interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
}

function partial() {
    const updateAssignment = (assign: Assignment, toUpdate:Partial<Assignment>): Assignment => {
        return {...assign, ...toUpdate}
    }

    let graded: Assignment = updateAssignment({studentId: "1", title: "Final project", grade: 1}, { grade: 2});
    console.log("graded", graded)
}

partial()

function required() {
    const recordAssignment = (assign: Required<Assignment>): Assignment => {
        // make all properties as required
        return assign;
    }

    // console.log("record", recordAssignment({studentId: "2", title: "Mid sem", grade: 3})) // CTE since all properties are required
    console.log("record", recordAssignment({studentId: "2", title: "Mid sem", grade: 3, verified: false}))
}

required()

function readOnly(){
    const student = {studentId: "2", title: "Final sem", grade: 5, verified: false}

    const assignVerified: Readonly<Assignment> = {...student, verified: true}
    console.log("readOnly", assignVerified) // assignVerified is an immutable/read-only object
    // assignVerified.grade = 9; // CTE

}

readOnly()

const hexColor: Record<string, string> = {
    red: "ff0000",
    green: "00ff00",
    blue: "0000ff"
}

type Students = "Sarah" | "Kelly";
type GradeLetters = "A" | "B" | "C" | "D" | "F";

interface Grades {
    math: number,
    science: number
}

function recordTypes() {
    const finalGrades: Record<Students, GradeLetters> = {
        "Sarah": "B",
        "Kelly": "A"
    }
    console.log("finalGrades", finalGrades)

    const gradeData: Record<Students, Grades> = {
        "Sarah": {math: 80, science: 90},
        "Kelly": {math: 50, science: 40}
    }
    console.log("gradeData", gradeData)
}

recordTypes();