function f1()
{
    let arr=[50,60,200,4,7,50]
    // console.log(arr.lastIndexOf(50));//5
    // console.log(arr.lastIndexOf(200))//2 
    // console.log(typeof(arr))
    let x=arr.toString();
    console.log(typeof(x))
    let z=arr.join(" ");
    arr.push(10,20)
    console.log(z)
    data={
        id:1,
        name:"pooja"
    }
    let a=Object.entries(data)
    console.log(a);
    console.log(typeof(a));
    console.log(Object.fromEntries(a));
    let m=document.querySelectorAll(".c")
    console.log(m)
for(let i=0;i<m.length;i++)
{
    console.log(m[i])
}
    let c=document.getElementsByClassName("c")
    console.log(c)
    let array=Array.from(c);
    console.log(array);
    console.log(array[1]);
    
    
}
f1()