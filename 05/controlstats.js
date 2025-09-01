
let balance=1000

if (balance<=1000) console.log("test"),console.log("test1"); // write 2 -3 lines with , 

//switch case 
month=1
switch(month){

    
    case 1:
        console.log("January") // if we dont include break then next case will also run 
        
    case 2:
        console.log("Febuary")
        break;


    default:
        break;
}


// fasly value 

myarray=[] // array is empty still its showing its true in case of string empty string is false
if (myarray){
    console.log("true")

}
else{
    console.log("false")
}


// false values
//0 -0 false BigInt 0n ,"" ,null ,undefined , NaN

// truthy values 
//"0" ,"flase"," " ,[] , {} ,function(){} //empty function  

const myarry=[]
const myobject={}

if (myarry.length===0){
    console.log("array is empty")
}

if (Object.keys(myobject).length===0){
    console.log("object is empty")
}

// nullish Coali=escing Operator (??): null undefined 


let val1;

//val1=5 ?? 10 // value 5 will be assigned 

val1=null ?? 23 //if val1 comes null then assign it to 23 
val1=undefined ?? 34 // if val1 comes undefined then assign it to 34 

val1 =null ?? 12 ?? 43 // if val null then 12 will be assigned not 43 
console.log(val1)

