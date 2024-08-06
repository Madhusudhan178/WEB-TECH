// let p=new Promise((res,rej)=>
// {
//     if(false)
//     {
//         res('Selected')
//     }
//     else{
//         rej("Rejected")
//     }
// })
// console.log(p)

// p.then((data)=>
// {
//     console.log(data)
// })
// p.catch((err)=>
// {
//     console.log(err)
// })
let urldata=fetch(`https://github.com/users`)
console.log(urldata)
let data=urldata.then{}