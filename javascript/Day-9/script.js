
    let z=setInterval(() => {
        let d=new Date();
        console.log(d);
    }, 1000);
function stop()
{
    clearTimeout(z);
}