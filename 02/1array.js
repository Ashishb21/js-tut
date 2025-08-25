//array
const myarray=[0,1,2,4,"dd",[1,2]]
let myarray1=["skatiman","aa","sdd"]

console.log(myarray[5][1])

let myarry2= new Array(1,2,3,4,4)

console.log(myarry2)
myarry2.push(3) //push

console.log(myarry2)
myarry2.pop() //pop
console.log(myarry2)
myarry2.unshift(10) // insert at the start 

console.log(myarry2)

myarry2.shift() //removes the first element
console.log(myarry2.includes(9))
console.log(myarry2.indexOf(2))

// splice slice

let mynew1=[1,2,3,1,44,5,4]

console.log(mynew1)
let new1=mynew1.splice(1,3) // removes the slice part from orginal array
console.log(new1)
console.log(mynew1)