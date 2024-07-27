//program to find an divisible  by3
// function f1(...d)
// {
//     console.log(d);
//     let ans=d.filter((a)=>
//     {
//         return a%3==0;
//     }
//     )
//     console.log(ans);//
    
// }

//wap max of an array

// function f1(...d)
// {
//     console.log(d);
//     let ans=d.reduce((a,b)=>
//     {
//         return (a>b)?a:b;
//     })
//     console.log(ans);
// }


//Wap   to  Extract half of an array ananmoyos fun
// let f1=function (...d)
// {
//     console.log(d);
//     let n=(d.length)/2
//     let ans=d.slice(0,n);//first half
//     let a=d.slice(n);//second half
//     console.log(ans);
//     console.log(a);
// }f1(10,30,40,50,60,70,80,3,6,9,12)

data=[
    {id:1,name:"qsp",sal:10000},
    {id:2,name:"jsp",sal:20000},
    {id:3,name:"pysp",sal:30000}
]

//let a=Object.entries(data)
//console.log(a);
// function f1(a)
// {
//     let ans=a.map((i)=>
//     {
//         console.log(i[0][3]);
        
//     })
// //     console.log(ans);
// // }
// function f1(){
//     let ans=data.map((i)=>
//     {
//         return i.sal;
//     })
//     console.log(ans);
//     let sum=ans.reduce((a,b)=>
//     {
//         return a+b;
//     })
//     console.log(sum);
// }
// f1(data);



//company='tyss'

// let x={
//     company:"Tyss"
// }

// function f1()
// {
//     let ans=data.map((i)=>
//     {
//         return Object.assign(i,x);
//     })
//     console.log(ans);
// }
// f1( )

//day-2
phone=[
    {product_name:"Samsung",price:35000,color:'white'},
    {product_name:"oppo",price:15000,color:'black'},
    {product_name:"vivo",price:25000,color:'Silver'},
]

// function f1()
// {
//     let ans=phone.map((i)=>
//     {
        
//         i.price=i.price-((0.15)*i.price);
//        return i; 
//     }
//     )
//     console.log(ans)
//     console.log(phone);
// }
// f1()
//

    // let ans=phone.filter((i)=>
    // {
    //     if(i.price>=25000)
    //     {
    //         return i;
    //     }
    // })
    // console.log(ans);
    //reversing without using reverse
// let x='hebbal'
// let ans='';
// for(var i=(x.length)-1;i>=0;i--)
// {
//     ans=ans+x[i];
// }
// console.log(ans);
//palindrome/not
// let x='madam'
// let ans='';
// for(var i=(x.length)-1;i>=0;i--)
// {
//     ans=ans+x[i];
// }
// console.log(ans);
// console.log(ans==x?`${x} is Palindrome`:"not palindrome");


//by using inbuilt
// let x='madam'
// let ans=x.split(" ")


var arr=[10,30,30,40,30,50]
let array=[];
for(let i=0;i<=(arr.length)-1;i++)
{
    for(let j=1;j<=(arr.length)-2;j++)
    {
        if(arr[i]==arr[j])
        {
            delete arr[i];
        }
    }
    
}
console.log(arr);

// function duplicate(arr)
// {
   
//     return arr.filter((a,b) =>
//     arr.indexOf(a)===b);
    
// }
// console.log(duplicate(arr));





