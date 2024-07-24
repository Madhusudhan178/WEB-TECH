function f1(...d)
{
    console.log(d);
    let ans=d.filter((a)=>
    {
        return a%3==0;
    }
    )
    console.log(ans);
    
}
f1(10,30,40,50,60,70,80,3,6,9,12)