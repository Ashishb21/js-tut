console.log(1)

//for loops  for of 


let myarry=[{name:"ssdd"},"sss",123]

// same as for name in myarry

for (const num of myarry) {
    
    console.log(num)
}

//maps

const map = new Map

map.set("In","India")
map.set("AU","Austrailia")
map.set("Fr","France")

console.log(map)
const obj={"name":"ashish","name":"ssss"}

console.log(obj)
for (const [key,val] of map) {
    console.log(key,"-->",val)
}

// for (const [key,val] of obj) {
//     console.log(key,val)    
// }
// not workimh for objects 


const myobje={
    name :"ashish",
    age:13,
    language:"python",
    ai:"ML"
}

for (const key in myobje) {
       console.log(myobje[key])
        
    }


for (const key in myarry){
    console.log(myarry[key])
}

myarry.forEach(element => {
    console.log(element)
});

myarry.forEach((item,index,arr) => {
    console.log(item,index,arr)
});

const printfun=function(item)
{
    console.log(item)
    
}
printfun(1)

myarry.forEach(printfun)// only call that function