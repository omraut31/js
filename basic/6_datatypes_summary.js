

/********************** Primitives(call by value) *********************/
/* 7 types: String, Number, Boolean, null, undefined, Symbol, Bigint */

const score=100

const Isloggedin=false

let outsidetemp=null

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id==anotherId);//false


// Refrence (non primitive)

// Array, Objects, Functions

const heros =["ironman","captainamerica","hulk"]; //Array

let obj={        // Objects
    name:"om",
    age:21,
}

const myfunction=function(){   //Fumctions
    console.log("hello world");  
}

console.log(heros);