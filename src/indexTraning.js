export function Traning () {
   return  console.log(1)
}

const obj = {
    name:'Igor',
    age: 28
}
const obj2 = obj
obj2.age = 29



const copyObj = {...obj}
console.log(obj === copyObj)//  false

const copyObj2 = Object.assign(obj)

console.log(copyObj2 === obj)// true

let propsKey = 'Russia'

let copyCopyUser = {...obj,[propsKey]:'My Country'}
console.log(copyCopyUser)

let newObj = {
    name:'Igor',
    age: 28,
    status: 'online',
    technologies: ['JS','HTML','CSS','ReactJS','TypeScript']
}

let copyNewObj = {...newObj,technologies:[...newObj.technologies]}
console.log(copyNewObj === newObj) // false
console.log(newObj.technologies === copyNewObj.technologies) // false

console.log(true && true && "Igor")