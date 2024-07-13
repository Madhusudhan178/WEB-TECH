let x=Number(prompt("ennter the starting range:"))
let y=Number(prompt("enter the stop range"))

function  div3_4(a,b)
{
     console.log(`The number divisble by both ${a} and ${b} are:` );
     for(;a<b;a++)
     {
          if(a%3==0 && a%4==0)
          {
               console.log(a);
          }
     }
}
div3_4(x,y);