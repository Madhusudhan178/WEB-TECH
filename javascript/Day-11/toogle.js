// let x=document.querySelector("h1")
// x.style.color="red";
// let y=document.querySelector("button")
// function f1()
// {
//     if(x.style.color==="red")
//     {
//         x.style.color="green";
//     }
//     else{
//         x.style.color="red"
//     }
// }
function f1(){
let x=document.querySelector("input").value;
//console.log(x);
let z=document.querySelector("input")
let a=document.querySelector("p");

if(x.length<5)
{
    z.cssstyle="border:1px solid red;"
    a.style.color="red";
    a.innerText="Weak password"
}
else if(x.length<10 &&x.length>=5)
{
   
    a.style.color="yellow";
    a.innerText="middle password"
}
else{
    a.style.color="green";
    a.innerText="strong password";
}
}