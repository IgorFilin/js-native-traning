const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
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
        scores: 100
    }
];
// самописный метод MAP
const getValueForObject = (el) => el.name
const getValueForObject2 = (el) => ({...el,Settled:true})
let result = []
function MyMap (array,fn){
    for(let key in array){
        let newPerem = fn(array[key])
        result.push(newPerem)

    }

  return console.log(result)
}
MyMap(students,getValueForObject2)
console.log(result === students)
//

// самописный метод Filter
let result2 = []
function MyFilter (arr,fn) {
    for(let key in arr){
        if(fn(arr[key]) === true){
            result2.push(arr[key])
        }
    }
    return result2
}

// console.log(MyFilter(students,getValueForObject))
