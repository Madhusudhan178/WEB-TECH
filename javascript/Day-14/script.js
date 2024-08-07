

// Storing all letter and digit combinations 
// for html color code
function f1(){ 
let letters = "0123456789ABCDEF"; 
var a="#"; 
// Generating 6 times as HTML color code  
// consist of 6 letter or digits 
for (let i = 0; i < 6; i++) 
    a += letters[(Math.trunc(Math.random() * 16))]; 
  
console.log(a);

let b=document.querySelector("body").style.backgroundColor=a;

}

