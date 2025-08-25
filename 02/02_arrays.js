let heros=['skaltiman','batman']

let mc=['spidrman']

//heros.push(mc)
//console.log(heros)
allheros=heros.concat(mc)
console.log(allheros)

// spread all items 

const allherosnew =[...mc ,...allheros, ...heros]
console.log(allherosnew)


// flat all arrays  [1,2,3,[1,2[3,4,4]]] with depth  or Infinity 

const myarray=[1,2,3,4,[1,2,3],3,[3,4,5,[4,5,6]]]
console.log(myarray)
myarrayflat=myarray.flat(Infinity)
console.log(myarrayflat)

// 
console.log(Array.isArray("hiets"))
console.log(Array.from("hiets")) // to convert into array
console.log(Array.from({name:"ashish",age:10}))

const num1=100
const num2=333
const name="1222"

console.log(Array.of(num1,num2,name)) //convert multiple items into array