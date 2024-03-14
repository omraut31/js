//console.log(2>4);
//console.log(2>=7);

/**************comparisons of different datatypes*********** */


//console.log("2">1); // True automatically string converted into number datatype
//console.log("02">1); //True automatically string converted into number datatype

console.log(null>0); //false
console.log(null==0); //false
console.log(null>=0); //true

/* above such result are due to equality check(==.>.<) and comparisons(>=,<=) works differently
 comparisons convert the null to number ,treating it as 0
 thats why it shows 0>=0:true in 3rd case
 whle false in other*/

 // comparing with ===

console.log("2"===2); //false
/* shows false because === compares datatype and value both of given variables */
