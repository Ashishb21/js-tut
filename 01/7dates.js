//date 

let mydate=new Date()
console.log(mydate.toString())
console.log(mydate.getDate())
console.log(mydate.toLocaleString())

let mycreateddate = new Date(2023,0,23) // months starts from zero 
let mycreateddate1 = new Date(2023,0,23) // yyyy-mm-dd

console.log(mycreateddate.toDateString())

let mytimestramp=Date.now()
console.log(mytimestramp)
console.log(mycreateddate.getTime())
console.log(Math.floor(Date.now()/1000)) // date in seconds 

console.log(mydate.toLocaleString().split(",")[1])
console.log(mydate.toLocaleString('default',{weekday:"long"}))