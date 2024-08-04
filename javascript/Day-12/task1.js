function f1()
{
    let r=document.querySelector("input").value
    let g=document.getElementById("g").value;
    let b=document.getElementById("b").value;
    let o=document.getElementById("o").value;
    let a=document.querySelector("body").style.backgroundColor="rgba("+r+","+g+","+b+","+o+")";
    document.querySelector("h1").innerText="rgba("+r+","+g+","+b+","+o+")";
    
    
}