// "use strict";

// // alert(3 + 3);// we are using nodejs not browser
// console.log(typeof(null));
// let arr=[];
// console.log(typeof(arr));

// let a=undefined
// let n=Number (a);
// console.log(typeof a);
// console.log(a);
// console.log("~~~~~~~~~~~~~~~~~~~~~")
// console.log(n);
// console.log(typeof(n))
// console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!")
// let z=NaN
// console.log(z)
// console.log(typeof(z))
// console.log(1-"hello")

// ################ Comparsion(<,>,<=,>=) and equality check(==) behave diffferrently
console.log(null == 0);//false
console.log(null>= 0);//true

console.log(undefined == 0);//false
console.log(undefined>= 0);//false


//=== strictly check it checks datatype and value
console.log("2" === 2);//false

//Primitive-7(call by value)-it gives copy 
//String,Number,Null,Boolean,undefined,symbol(to make unique),BigInt(biggy value )


//Refrence-Type(Non-Primitive)-Array,Objects,Functions
let s="hello";
console.log(typeof s)


let a = new String('madhusudhan')

console.log()