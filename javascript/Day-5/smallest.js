let num1=Number(prompt("Enter a number1"))
let num2=Number(prompt("Enter number 2"))

let z=function(n1,n2)
{
     if(n1<n2)
     {
          return n1;
     }
     else if(n1>n2)
     {
          return n2;
     }
     else{
          return "both are equal";
     }
}
console.log(`The lowest among ${num1} and ${num2}is:${z(num1,num2)}`);