let word:string = "Hello World" 
word = "Bandung"

function sum(a:number, b:number) {
    return a + b
}

console.log(sum(10, 5))
console.log(sum(10, 2))

let str:string = "10"
let num:number = Number(str)

interface User {
    name: string,
    age: number
}

const obj:User = {
    name: "John",
    age: 20
}

const arr:Array<string> = ["a", "b", "c", "d", "e"]