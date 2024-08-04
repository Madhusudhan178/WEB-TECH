// function f1()
// {
//     let a=document.querySelector("input").value;
//     let b=document.querySelector("body");
//     body.style.backgroundColor=a;
// }
function f1()
{
    let r=document.querySelector("input").value
    let g=document.getElementById("g").value;
    let b=document.getElementById("b").value;
    let a=document.querySelector("body").style.backgroundColor="rgb("+r+","+g+","+b+")";
    document.querySelector("h1").innerText="rgb("+r+","+g+","+b+")";
    
    
}