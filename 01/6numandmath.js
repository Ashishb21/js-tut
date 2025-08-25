let money=new Number(100)
let money1=23.4399
let money2=23.633
let money3=100000
console.log(money.toFixed(2))

console.log(money.toString())

console.log(money.toString())
console.log(money1.toPrecision(3))
// precision takes the round off 
console.log(money2.toPrecision(2))
// representation of numbers with commas
console.log(money3.toLocaleString('en-IN'))

///////////+++++++++ maths +++++++++++

console.log(Math.abs(-2))
console.log(Math.round(4.5))
console.log(Math.min(2,3,4,55,2))
console.log(((Math.random()*10) +1).toFixed(2))