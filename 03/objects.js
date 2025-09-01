//singleton --> only 1 object 
//Object.create
//object literals

const mysym=Symbol("key1")

const juser={
    name:"hitesh",
    "fullname":"bansal",
    [mysym]:"mykey1",  // define symbol
    age :19,
    isloggedin:false,
    email:"Ashish@google.com",
    lastlogin:["mon","tuesday"]

}

console.log(juser.email)
console.log(juser["email"])
console.log(juser['fullname'])
console.log(juser.fullname)
console.log(juser[mysym]) // symbol access

juser.email="ass@dnjd.com"
console.log(juser)
//Object.freeze(juser) // freeze the object so that no one can change


juser.myfunction= function(){
    console.log("this is my function")

}

juser.myfunction2=function(){
    console.log(`this is user - ${this.name} ${this.fullname}`)
}

console.log(juser.myfunction())
console.log(juser.myfunction2())