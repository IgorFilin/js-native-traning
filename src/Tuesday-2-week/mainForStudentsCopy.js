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

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

//1. Создайте поверхностную копию объекта user
let copyUser = {...user}

//Проверка:
console.log(user===copyUser)
console.log(user.friends===copyUser.friends)

//2. Полная (глубокая) копия объекта user
let deepCopyUser = {...user,friends: [...user.friends]}

//Проверка:
console.log(user===deepCopyUser)
console.log(user.friends===deepCopyUser.friends)

//3. Поверхностная копия массива students
let copyStudents = [...students]

//Проверка:
console.log(copyStudents === students)
console.log(copyStudents[0] === students[0])


//4*. Полная (глубокая) копия массива students (map)
let deepCopyStudents = students.map(st => ({...st}))

//Проверка:
console.log(deepCopyStudents === students)
console.log(deepCopyStudents[0] === students[0])

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль

//5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)
let sortedByName2 = deepCopyStudents.sort((a,b)=> a.name > b.name? 1 : -1)
let sortedByName = deepCopyStudents.sort((a,b)=> a.name.localeCompare(b.name))
console.log(sortedByName);
console.log(sortedByName2);

//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
let sortedByScores2 = [...deepCopyStudents].sort((a,b) => b.scores - a.scores)
let sortedByScores = [...deepCopyStudents].sort((a,b) => a.scores > b.scores? -1: 1)
console.log(sortedByScores2);
console.log(sortedByScores);
console.log(sortedByScores2 === deepCopyStudents)
//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let  bestStudents = deepCopyStudents.filter(st => st.scores >= 100)
console.log(bestStudents)

//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let topStudents = deepCopyStudents.sort((a,b)=> b.scores - a.scores).splice(0,3)
console.log(topStudents)
console.log(deepCopyStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
//чтоб сохранился порядок сортировки (spread-оператор || concat)
let newDeepCopyStudents = [...topStudents,...deepCopyStudents]
let newDeepCopyStudents2 = topStudents.concat(deepCopyStudents)

console.log(newDeepCopyStudents)
console.log(newDeepCopyStudents2)


//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = newDeepCopyStudents.filter(st => st.isMarried === false)
console.log(notMarriedStudents)

//8. Сформируйте массив имён студентов (map)
let studentsNames = newDeepCopyStudents.map(st => st.name)
console.log(studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
let namesWithSpace = studentsNames.join(' ')
console.log(namesWithSpace)
let namesWithComma = studentsNames.join(',')
console.log(namesWithComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = newDeepCopyStudents.map(st => ({...st,isStudent:true}))
console.log(trueStudents)

//10. Nick женился. Выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick = newDeepCopyStudents.map(st => st.name === 'Nick'? {...st,isMarried:true}:st)
console.log(studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find)
let ann = newDeepCopyStudents.find(st => st.name === 'Ann')
console.log(ann)

//12. Найдите студента с самым высоким баллом (reduce)
// - c помощью reduce
// - *не испльзуя методы массивов и Math.max()*
let max = newDeepCopyStudents[0].scores
for(let i = 0; i < newDeepCopyStudents.length;i++){
    if(newDeepCopyStudents[i] > max) {
        max = newDeepCopyStudents[i]
    }
}
let bestStudent = newDeepCopyStudents.reduce((acc,st)=> {
    return acc.scores > st.scores?acc:st
})

console.log(max)
console.log(bestStudent)


//13. Найдите сумму баллов всех студентов (reduce)

// И поднимаем руку!!!!

let scoresSum = newDeepCopyStudents.reduce((acc,st)=> acc + st.scores,0)
console.log(scoresSum)
// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
//////////////////////////////////////////////////////////////////////////////////////
const addFriends = (students) => {
    let copyStudents = [...students].map(st => ({...st,friends:[...students].filter(st2 => {
            if(st.name !== st2.name){
                return st.name
            }
        })
    }))
    return copyStudents.map(st => ({...st,friends:st.friends.map(fr => fr.name)}))
}
console.log(addFriends(students))

/////////////////////////////////////////////////////////////////////////////////////

const addFriends2 = (students) => students.map(st => ({...st,friends:students.map(el => st.name !== el.name && el.name).filter(el => el)}))

console.log(addFriends2(students));

////////////////////////////////////////////////////////////////////////////////////







