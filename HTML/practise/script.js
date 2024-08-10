// let x=16;
// (function f1()
// {
//     x=17;
    
//     console.log(x);
    
// })
// ();

function f1(a,b)
{
    console.log("done");
    console.log(a+b);
    return function()
    {
        console.log("hello");    
    }
}
let z= f1(10,29);
console.log(z);
z();
