const accounId = 11223
let accounntEmail="omsambhajiraut@gmail.com"
var accountPassword = "0031"
accountCity="pune"
let accountstate; //this value will be undefined as its value is not declared

//accounId=288 // NOT Allowed because accountID is eclared as const
accounntEmail="ommi@gmai.com" //this variable can be changed as it is declared with "let" Keyword

accountCity="mumbai" // wothput any keyword it is declared as "let"

//console.log(accountCity);
//console.log(accounntEmail);

console.table([accounId,accounntEmail,accountPassword,accountstate])

/* due scope resolution problem we use let instead of var in modern coding 
and "const" Keywword for constant declaration*/

//strictly use "let" Keyword because issue in block scope and funtional scope

