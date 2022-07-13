let students = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {   id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 23,
        isMarried: false,
        scores: 100
    }
];

console.log(students.reduce((acc,el) => {
    acc[el.id]={...el}
    delete acc[el.id].id
    return acc
},{}))