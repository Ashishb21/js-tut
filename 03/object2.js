// singleton 
const tinderuser=new Object()
//simple

const tinderuser1={}

console.log(tinderuser)
console.log(tinderuser1)

const obj1={1:'22'}
const obj2={3:"22"}
const obj3= {obj1,obj2} // doesnot combine
console.log(obj3)

const obj4=Object.assign({},obj1,obj2)
console.log(obj4)

const obj5={...obj4,...obj1}
console.log(obj5)

console.log(Object.keys(obj5)) //keys of object 
console.log(Object.values(obj5))
console.log(Object.entries(obj3))


//destructure 

const jsuer={name:"ashish",age:19,salary:2000}

const {salary:sal}=jsuer

console.log(sal)