// const P= document.getElementById("power").value
// const N=document.getElementById("RPM").value
// const T=document.getElementById("torque").value...
let condition1= true
function login(){

    if (condition1) {
        document.getElementById("login").classList.remove("d-none")
        document.getElementById("carouselExampleCaptions").classList.add("d-none")
        condition1 = false
        
      } else {
        document.getElementById("login").classList.add("d-none")
          document.getElementById("carouselExampleCaptions").classList.remove("d-none")
          condition1 = true
    }
}
const O=60 *1000/6.28
let X=""
 let velocity =""

function data() {
    const sigma = document.querySelector("#stress").value
    const material = document.querySelector("#material").value
    const torque = document.querySelector("#torque")
    const RPM=document.querySelector("#RPM").value
    const power = document.querySelector("#power").value
    const gteeth = document.querySelector("#gteeth").value
    const pteeth = document.querySelector("#pteeth").value
    const dp=document.querySelector("#dp").value
    const Modul =document.querySelector("#modul").value
    const SV =document.querySelector("#sarvesf").value
    const FOS =document.querySelector("#FOS").value
    const involut =document.querySelector("#involut").value
    const in1="14.5 Fulldepth"
    const in2="20 Full depth"
    const M1="ultimet tensil stress (ult)"
    const M2="parmisibal Bending Stress (ben)"
    
    let T= power*9554140.127/RPM
    console.log(T);
    torque.innerHTML=T
   
    if (dp==="") { 
        velocity= 0.0000523598*Modul*pteeth*RPM
    } else {
        velocity=0.0000523598*dp*RPM
    }
    document.querySelector("#velocity").innerHTML= velocity
  
    let F = ""
    if (dp==="") { 
    F= 2*T/(Modul*pteeth)
 } else {
    F= 2*T/dp
 }
 document.querySelector("#ptangent").innerHTML=F

 let CV=""
 if (velocity<10) {   
    CV=3/(3+velocity)
    
} else if ( 20>velocity>10) {  
    CV=6/(6+velocity)
    
}else{ CV=5.6/(5.6+velocity) }

document.querySelector("#CV").innerHTML= CV

let peffect= SV*(F/CV)
document.querySelector("#peffect").innerHTML=  peffect
console.warn(SV);
console.error(peffect);
let width =""
width=10*Modul
document.querySelector("#width").innerHTML=width

let Y=""
console.log(involut);
if (involut===in1 ) {
    Y=0.389-(2.148/pteeth)
} else if(involut===in2) {
    Y=0.484-(2.87/pteeth)
} else{   Y=0.55-(2.64/pteeth)   }
document.querySelector("#lewis").innerHTML=Y
console.log(Y);

let stress =""
if (material===M1) {
    stress=document.querySelector("#stress").value
} else {    
    stress=sigma/(2*FOS)
}
  console.log(stress);

let bstrengh=""
bstrengh=stress*width*Y*Modul
document.querySelector("#bstrengh").innerHTML=bstrengh
console.log(bstrengh);

}