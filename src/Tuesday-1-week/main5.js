const names = ['Bob','Mark','Donald','Alex','alex','007','Юрий']
names.sort() // сорт работает со строками сортирует по расположению в таблице юникода
const numbers = [1,2,6,7,88,324,643,100,12564]
numbers.sort() //сортирует как строки

const compareFunction = (a,b) => { // по возрастанию
    if(a > b){
        return 1
    }else return -1
}
const compareFunction2 = (a,b) => a - b// по возрастанию



numbers.sort(compareFunction)

// сорт изменяет, мутирует массив, возвращая на него ссылку
numbers.sort(compareFunction).reverse()//по убыванию
console.log('//////////////////////////////////////////////////////////////')
const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 21,
        isMarried: true,
        scores: 89
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
        scores: 121
    },
    {
        name: "alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
];
 students.sort((a,b)=> b.scores - a.scores)
 students.sort((a,b)=> a.scores - b.scores)
 students.sort((a,b)=> a.age - b.age)
 students.sort((a,b)=> a.name.localeCompare(b.name))// сортировка по имени
  students.sort((a,b)=> a.name.toLowerCase() > b.name.toLowerCase()? 1: -1)//тоже сортировка по имени

//сортировка пузырьком

let numbs = [54,11,4,123,6,23,2,12,3,54,6,78,8]

for (let j = 0;j<numbs.length -1 ;j++){
    console.log('1 цикл :' + j + '!!!')
    let isSorted = true
    for (let i = 0;i<numbs.length - 1;i++){
        console.log('2 цикл :' + numbs[i] + ' и ' + numbs[i+1])
        if(numbs[i] > numbs[i+1]){
            isSorted = false; //!!!!!!!!!!!!!!!!!!!!
            // let temp = numbs[i]
            // numbs[i] = numbs[i+1]
            // numbs[i+1] = temp
            [numbs[i+1],numbs[i]] = [numbs[i],numbs[i+1]]
        }
}
if(isSorted)break
}
console.log(numbs)
console.log('///////////////////////////////////////////////////////////////')

