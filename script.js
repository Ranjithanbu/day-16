let arr=[10,9,8,7,6,5,4,3,2,1,"Happy new year"]
let a=1
let one=()=>{
    let b=arr.shift()
document.getElementById("result").innerHTML=b;
}
let shifts=()=>{
one()
a+=1

if(a<12){setTimeout(() => {
    shifts()
}, 1000);
    
}
else(console.log("govinda"))
}
shifts()