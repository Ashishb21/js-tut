// primitive 
// String , Number , Boolean , null , undefined , Symbol, Bigint

// non primoitive 

// Object Array Functions

//let myobj={"name":"Ashish","age":12}
//console.log(myobj)

let heros=["skatiman","dogra"]

const myid1=Symbol("1233")
console.log(myid1)

console.log(heros)

// primitive data type -- stack make a copy of it 

// no primitive object , functions , Array -- > heap memory changes in original refernce milta hain 


myvar="123"
console.log(myvar)

myvar="344"
console.log(myvar)

let myvar2=myvar

myvar=3332


console.log(myvar)
console.log(myvar2)

let myobj={name:"ashish",email:"sss@.com"}

let myobj2=myobj



console.log(myobj.email)
myobj2.email="ass@aa.com"
console.log(myobj2.email)
console.log(myobj.email)