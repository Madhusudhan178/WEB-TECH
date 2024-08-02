function f1()
{
    let a=document.querySelector("input").value;
    let div=document.querySelector("div")
    div.style.height=a+"px" ;
    let b=document.getElementById("w").value;
    div.style.width=b+"px" ;
    let c=document.getElementById("r").value;
    div.style.borderRadius=c+"px" ;
    let d=document.getElementById("c").value;
    div.style.backgroundColor=d;
}

