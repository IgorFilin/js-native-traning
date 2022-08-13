
const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

let deepCopyStudents = students.map(el => ({...el}))
let bestStudent = deepCopyStudents.reduce((a, b) => a > b.scores ? a : b.scores,0)
// console.log(bestStudent)

function sumFirstNumbers(N) {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    let result = 0
    while (N) {
        result += N % 10;
        N = Math.floor(N / 10);
    }
    return N
}

console.log(sumFirstNumbers(4))