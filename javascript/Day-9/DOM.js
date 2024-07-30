
var a =document.getElementById("xyz");//
console.log(a);
console.log(a.innerText);
console.log(a.innerHTML);
console.log(a.textContent);
a.innerHTML="Welcome to qspider";
console.log(a.innerHTML);
console.log(a.innerText);
console.log(a.textContent);


//converting collection into array
let ar=Array.from(q);
console.log(ar)
console.log(Array.isArray(ar))
ar.map((b)=>
    {
        //console.log(bb);
           console.log(b.innerHTML);
   })
  