// const P= document.getElementById("power").value
// const N=document.getElementById("RPM").value
// const T=document.getElementById("torque").value...

let condition4= true
function login(){
       
    if (condition4) {
        document.getElementById("ryde").classList.remove("d-none")
        document.getElementById("carouselExampleCaptions").classList.add("d-none")
        document.getElementById("extra").classList.add("d-none")
        condition4 = false
        
      } else {
        document.getElementById("ryde").classList.add("d-none")
          document.getElementById("carouselExampleCaptions").classList.remove("d-none")
          document.getElementById("extra").classList.remove("d-none")
          condition4 = true
    }
}

let condition1= true
function signup(){
       
    if (condition1) {
        document.getElementById("login").classList.remove("d-none")
        condition1 = false
        
      } else {
        document.getElementById("login").classList.add("d-none")
          condition1 = true
    }
}

let condition3= true
function Gear(){
    if (condition3) {
        document.getElementById("bearings").classList.add("d-none")
        document.getElementById("belt").classList.add("d-none")
        document.getElementById("gears").classList.remove("d-none")
        condition3 = false
        
      } else {
        document.getElementById("gears").classList.add("d-none")
        document.getElementById("bearings").classList.remove("d-none")
        document.getElementById("belt").classList.remove("d-none")
          condition3 = true
    }
}


const O=60 *1000/6.28
let X=""
let velocity =""
let condition2= true
function data() {
    

    const sigma = document.querySelector("#stress").value
    const material = document.querySelector("#material").value
    const torque = document.querySelector("#torque")
    const RPM=document.querySelector("#RPM").value 
    const power = document.querySelector("#power").value
    var gteeth = parseFloat(document.querySelector("#gteeth").value)
    var pteeth = parseFloat(document.querySelector("#pteeth").value)
    const dp=document.querySelector("#dp").value
    const Modul1 =document.querySelector("#modul").value
    const SV =document.querySelector("#sarvesf").value
    const FOS =document.querySelector("#FOS").value
    const involut =document.querySelector("#involut").value
    const in1="14.5 Fulldepth"
    const in2="20 Full depth"
    const M1="ultimet tensil stress (ult)"
    const M2="parmisibal Bending Stress (ben)"
    


    if (condition2) {
        document.getElementById("ans").classList.remove("d-none")
        condition2 = false
        
      } else {
          condition2 = true
        //   panik();
        }



    let T= power*9554140.127/RPM
    console.log(T);
    torque.innerHTML=T
    let Modul=""
    if (dp==="") {
        Modul=document.querySelector("#modul").value
    } else {
        
        Modul=dp/pteeth
    }
     
    
    velocity=0.0000523598*Modul*pteeth*RPM
    document.querySelector("#velocity").innerHTML= velocity
  
    let F = ""
F= 2*T/(Modul*pteeth)
 document.querySelector("#ptangent").innerHTML=F

 if (velocity>20) {  
     
     var root= Math.sqrt(velocity)
    
 } else {
    
 }
 let CV=""
 if (velocity<10) {   
    CV=3/(3+velocity)
    
} else if ( 20>velocity>10) {  
    CV=6/(6+velocity)
    
}else{ CV=5.6/(5.6+root) }

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

let wstrengh = ""
wstrengh= FOS*peffect
document.querySelector("#wstrengh").innerHTML=wstrengh

var Q =2*gteeth/(pteeth+gteeth);
console.warn(Q);
console.warn(pteeth);
console.warn(gteeth);
console.log(pteeth + gteeth);
   
var nacent = 0.16*Q*width*Modul*pteeth
console.log("Q=",Q);
console.log("width",width);
console.log("modul=",Modul);
console.log("pteeth=",peffect);
console.log("nacent=",nacent);
var lob=10000*FOS*peffect/nacent
console.log("FOS=",FOS);
console.log("lob=",lob);
var root1= Math.sqrt(lob)
console.log("root1=",root1);
console.log("BHN=",BHN);
var BHN= root1
document.querySelector("#BHN").innerHTML=BHN

}


// function panik(){
    
//     document.querySelector("#stress").value            =""
//      document.querySelector("#material").value=""
//      document.querySelector("#torque")=""
//     document.querySelector("#RPM").value=""
//      document.querySelector("#power").value=""
//      document.querySelector("#gteeth").value=""
//      document.querySelector("#pteeth").value=""
//     document.querySelector("#dp").value=""
//     document.querySelector("#modul").value=""
//     document.querySelector("#sarvesf").value=""
//     document.querySelector("#FOS").value=""
//     document.querySelector("#involut").value=""
// }