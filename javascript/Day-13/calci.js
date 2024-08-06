let input=document.querySelector('input')
let del_elem=document.getElementById('del')

let getValue = (e)  => {
    let val =e.target.innerText
    input.value += val
}

let finalResult=() => {
    let res=eval(input.value)
    input.value=res
}

let clearVal=() => {
    input.value=""
}

del_elem.addEventListener("click",() => {
    let screen_val=input.value
    input.value = screen_val.slice(0,screen_val.length-1);
})