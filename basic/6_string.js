const name="om"
const repocount=3

console.log(`My name is ${name}, My repocount is ${repocount}`); // This is better syntax to write a code
// known as string interpolation

const name1= new String("omeei")
console.log(name1.length);
console.log(name1.toUpperCase());
console.log(name1);


const newstring=name1.substring(0,2)
console.log(newstring);

const another=name1.slice(-5,2)
console.log(another);

const newstringOne = "   Om   "
console.log(newstringOne);
console.log(newstringOne.trim()); // there are also trim strat and trim end

// replace() : Use to replace a part of string with other
// include() : Use to check wheather a particular substring is present in main string

// also there are various string methods on MDN which nedd to practise