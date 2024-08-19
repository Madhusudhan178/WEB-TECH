// let a = document.querySelector("button");
// let im = document.querySelector("body");
// let arr = ["app-link-background.svg", "google-play-badge.svg", "Homebackground.webp", "logo_knightbite.png"]


// function f1() {
//     // for(let i=0;i<arr.length;i++)
//     //     {
//     //         f=Math.trunc(Math.random()*4);
//     //     }
//     //     console.log(arr[f])
//     //     console.log((typeof(arr[f])))
//     //     im.style.backgroundImage="url(./"+arr[f]+")";
//     let r = Math.trunc(Math.random() * 250);
//     let g = Math.trunc(Math.random() * 250);
//     let b = Math.trunc(Math.random() * 250);
//     im.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";


// }
// // let x;
// // console.log(x)

// // let z= ()=>
// // {
// //     var x=10;
// //     console.log(x);

// // }
// // z()
// // console.log(z()))


// let a=[10,20,30,40];
// console.log(...a);
// a.map((z)=>
// {
//     console.log(z)
// })
// let x=[100,200,300,400]
// let [q,w,...e]=x;
// console.log(q);
// console.log(w);
// console.log(e);



let o={id:1,name:"pooja"};
let o2={age:30}
//console.log(...o,...o);//requires iteratable objects
let z={...o,...o2};
console.log(z)
// let s=setInterval(function f1()
// {
//     let d =new Date();
//     console.log(d)
// },2000)

//addEventListener("click",function)

let arr=[10,20,10,30,10,40,50]
function  removeduplicate(ar){
    return arr.filter((item,index)=>
        ar.indexOf(item)===index);
}
console.log(arr)
let as=removeduplicate(arr)
console.log(as);
arr.filter((item,index)=>{
    console.log("this item is:"+item)
    console.log("this index is:"+index)
    arr.indexOf(item)===index});
;