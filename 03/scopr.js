// let a=10
// const b =20
// var c=30


//this is scope -->{} 
//var is global 
//rest let and const used inside the scope 

if (true){
    let a=10
    const b =20
    var c=30
}

//console.log(a)
//console.log(b)
console.log(c)

// functions   passing multiple values 

const add=function(...num){
    return num
}

console.log(add(12,2))

let juser={

    name:"ashish",
    age:18,
    welcome: function(){
        console.log(`welcome ${this.name}`)
        console.log(this)
    }
}

console.log(juser.welcome())
juser.name="sam"
console.log(juser.welcome())
console.log(this) // this will return empty as context is set for node while if we send this to browser 
// it will show window as a context 


function chai(){
    let username="ashish"
    console.log(this.username) // it will not work inside function only works with objects
    console.log(this)// will display all the methods that comes with function
}



chai() // it will display lot of functions which comes along with it 

// arrow function s

const myfunct=function(){

    console.log(this)
}

myfunct()

const myfunction=()=>{
    console.log(this)
}

myfunction() // gives {}

// arrow function 

const myarrow=(a,b)=>(a+b)
const myarrow1=(a,b)=>a+b // can use () or cannot
console.log(myarrow(2,3))
const myarrow2=(a,b)=>({username:"hitesh"}) // if return object need to wrap it in parathesis
