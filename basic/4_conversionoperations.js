//we can use typeof(__)/typeof operations for check datatype
let score= true
console.log(typeof score)

let intnumbervalue=Number(score)
console.log(intnumbervalue) //shows NaN 

// "42"=>42
// "42abc"=> NaN
// true =>1;false=>0

let isloggedIn=""
let booleanIsLoggedIn=Boolean(isloggedIn)
console.log(booleanIsLoggedIn)

//1=> true;0=>false
//" "=> false
//"om"=> true
