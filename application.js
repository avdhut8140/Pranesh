

// let condition5= true
// function saport(){
//     if (condition5) {
        
//         document.getElementById("extra").classList.remove("d-none")
//         document.getElementById("ryde").classList.add("d-none")
//         document.getElementById("carouselExampleCaptions").classList.add("d-none")
//         condition5 = false
        
//       } else {
//           document.getElementById("extra").classList.add("d-none")
//           document.getElementById("ryde").classList.remove("d-none")
//           document.getElementById("carouselExampleCaptions").classList.remove("d-none")
//           condition5 = true
//     }
// }

function back(){

    document.getElementById("login").classList.add("d-none")
    document.getElementById("ryde").classList.remove("d-none")
    document.getElementById("subgears").classList.remove("d-none")
   
   
}

function signup(){
    document.getElementById("login").classList.remove("d-none")
    document.getElementById("ryde").classList.add("d-none")
    document.getElementById("subgears").classList.add("d-none")
   
}
function back0() {
    // document.getElementById("ryde").classList.add("d-none")
    // document.getElementById("carouselExampleCaptions").classList.add("d-none")
}

function back1(){
    document.getElementById("bearings").classList.remove("d-none")
    document.getElementById("belt").classList.remove("d-none")
    document.getElementById("gears").classList.remove("d-none")
    document.getElementById("titel").classList.remove("d-none")
    document.getElementById("subgears").classList.add("d-none")
  
         
    
}
function Gear(){
  
    gsap.from("#SPURE GEAR",{y:-50, opacity:0,duration:1, delay:0.1 , stagger: 0.5})
    gsap.from("#HELICAL GEAR",{y:-50, opacity:0,duration:1, delay:0.1 , stagger: 0.5})
    gsap.from("#BEVEL GEAR",{y:-50, opacity:0,duration:1, delay:0.1 , stagger: 0.5})
    
        document.getElementById("subgears").classList.remove("d-none")
        document.getElementById("bearings").classList.add("d-none")
        document.getElementById("belt").classList.add("d-none")
        document.getElementById("gears").classList.add("d-none")
        document.getElementById("titel").classList.add("d-none")
        document.getElementById("carouselExampleCaptions").classList.add("d-none")
    }
      
function login() {
   
        
        // document.getElementById("ryde").classList.remove("d-none")
        // document.getElementById("carouselExampleCaptions").classList.remove("d-none")
             
    

}

function back0(){
    document.getElementById("ryde").classList.add("d-none")
        document.getElementById("carouselExampleCaptions").classList.add("d-none")
}




    gsap.from(".imoji1", { scale: 2, x:300,y:200, rotate: +360, opacity: "10", duration: 3, delay: 0, yoyo:true,repeat:500, repeatDelay:0})
    gsap.from(".imoji2", { scale: 2, x:300,y:200, rotate: +360, opacity: "10", duration: 3, delay: 1, yoyo:true,repeat:500, repeatDelay:0})
    gsap.from(".imoji3", { scale: 2, x:-300,y:200, rotate: +360, opacity: "10", duration: 3, delay: 2, yoyo:true,repeat:500, repeatDelay:0})
    gsap.from(".imoji4", { scale: 2, x:-300,y:200, rotate: +360, opacity: "10", duration: 3, delay: 3, yoyo:true,repeat:500, repeatDelay:0})
    gsap.from(".imoji5", { scale: 2, x:-300,y:200, rotate: +360, opacity: "10", duration: 3, delay: 4, yoyo:true,repeat:500, repeatDelay:0})

    gsap.to(".emj21", { scale: 1, x:200, rotate: +360, opacity: "10", duration: 3, delay: 0, yoyo:true,repeat:500, repeatDelay:0})
    gsap.to(".emj22", { scale: 1, x:200, rotate: +360, opacity: "10", duration: 4, delay: 0, yoyo:true,repeat:500, repeatDelay:0})
    gsap.to(".emj1", { scale: 1, x:200, rotate: +360, opacity: "10", duration: 3, delay: 0, yoyo:true,repeat:500, repeatDelay:0})
    gsap.to(".emj2", { scale: 1, x:200, rotate: +360, opacity: "10", duration: 4, delay: 0, yoyo:true,repeat:500, repeatDelay:0})
    gsap.from(".emj3", { scale: 1, x:200, rotate: +360, opacity: "10", duration: 3, delay: 0, yoyo:true,repeat:500, repeatDelay:0})
    gsap.from(".emj4", { scale: 1, x:200, rotate: +360, opacity: "10", duration: 4, delay: 0, yoyo:true,repeat:500, repeatDelay:0})
    gsap.from(".emj31", { scale: 1, x:200, rotate: +360, opacity: "10", duration: 3, delay: 0, yoyo:true,repeat:500, repeatDelay:0})
    gsap.from(".emj32", { scale: 1, x:200, rotate: +360, opacity: "10", duration: 4, delay: 0, yoyo:true,repeat:500, repeatDelay:0})
    
    

let T =""
let CV=""
let Y=""
let width =""
let peffect=""
let bstrengh=""
let wstrengh = ""

const O=60 *1000/6.28
let X=""
let velocity =""
let F = ""
let condition2= true

var BHN =""
var gteeth = parseFloat(document.querySelector("#gteeth").value)
var pteeth= parseFloat(document.querySelector("#pteeth").value)
const sigma = document.querySelector("#stress").value
const material = document.querySelector("#material").value
const torque = document.querySelector("#torque")
const RPM=document.querySelector("#RPM").value 
const power = document.querySelector("#power").value
const dp=document.querySelector("#dp").value
const Modul1 =document.querySelector("#modul").value
const SV =document.querySelector("#sarvesf").value
const FOS =document.querySelector("#FOS").value
const involut =document.querySelector("#involut").value
    
function data() {
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


// Torque start 
// let T =""
T= power*9554140.127/RPM
console.log("torqu=",T);
console.log("power=",power);
console.log("RPM=",RPM);
torque.innerHTML=T
console.log("torque =",T);
// Torque end

// modul start 
let Modul=""
if (dp==="") {
    Modul=document.querySelector("#modul").value
} else {
    
    Modul=dp/pteeth
}
// modul END

// velocity start 


velocity=0.0000523598*Modul*pteeth*RPM
document.querySelector("#velocity").innerHTML= velocity
// velocity END 

let F = ""
F= 2*T/(Modul*pteeth)
document.querySelector("#ptangent").innerHTML= F

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

let peffect=""
 peffect= SV*(F/CV)
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
console.log("pteeth=",pteeth);
console.log("gteeth=",gteeth);
console.log("nacent=",nacent);
var lob=10000*FOS*peffect/nacent
console.log("FOS=",FOS);
console.log("lob=",lob);
var root1= Math.sqrt(lob)
console.log("root1=",root1);
console.log("BHN=",BHN);
var BHN =""
BHN = root1
document.querySelector("#BHN").innerHTML=BHN
}


// //stetment start
// function store(){
//     adddata("Torque is", T) ||
//     adddata("tagential force is", F)||                  
//     adddata("velocity(m/sec) ", velocity)||
//     adddata("velocity factor ", CV) ||
//     adddata("Effective Lode  ", peffect)|| 
//     adddata("Lewis form factor ", Y) ||
//     adddata(" width of Gear ", width) ||
//     adddata("Beam Strength of Gear  ", bstrengh)|| 
//     adddata("Wear Stength of Gear  ", wstrengh) ||
//     adddata("Suitable Hardness of Gear (BHN)", BHN) 

//     document.getElementById("worning1").innerHTML = `   <div class="alert alert-success " > solution save success fully</div>`
//     setTimeout(function () {
// document.getElementById("worning1").innerHTML = ""
// }, 3000)

// }
// function show() {
//     getdata("Torque is","Torque is") ||
//     getdata("tagential force is","tagential force is")||                                
//     getdata("velocity(m/sec) ", "velocity(m/sec) ")||
//     getdata("velocity factor ","velocity factor") ||
//     getdata("Effective Lode  ", "Effective Lode ")|| 
//     getdata("Lewis form factor ","Lewis form factor") ||
//     getdata(" width of Gear "," width of Gear") ||
//     getdata("Beam Strength of Gear  ","Beam Strength of Gear ")|| 
//     getdata("Wear Stength of Gear  ","Wear Stength of Gear") ||
//     getdata("Suitable Hardness of Gear (BHN)","Suitable Hardness of Gear (BHN)") 

   
// let condition4= true
       
//     if (condition4) {
//         document.getElementById("storagecard").classList.remove("d-none")
      
//         condition4 = false
        
//       } else {
//         document.getElementById("storagecard").classList.add("d-none")
//              condition4 = true }
// }
// function remove() {
//     removedata("Torque is") ||
//     removedata("tagential force is")||                                
//     removedata("velocity(m/sec) ")||
//     removedata("velocity factor ") ||
//     removedata("Effective Lode  ")|| 
//     removedata("Lewis form factor ") ||
//     removedata(" width of Gear ") ||
//     removedata("Beam Strength of Gear  ")|| 
//     removedata("Wear Stength of Gear  ",) ||
//     removedata("Suitable Hardness of Gear (BHN)") 

    
//     document.getElementById("worning1").innerHTML = `   <div class="alert alert-info " > Remove your save data</div>`
//     setTimeout(function () {
//         document.getElementById("worning2").innerHTML = ""
//     }, 3000)
// }
// const account = []

// function removedata(K) {
//     const y = {
//         from: K,
//         type: "remove"

//     }
//     account.unshift(y)

//     display()
// }
// function adddata(M,P) {
//     const y = {
//         from: M,
//         amount:  P,
//         type: "credit"

//     }
//     account.unshift(y)

//     display()
// }
// function getdata(D,R) {
   
           
//     const y = {
//         from: D,
//         amount: R,
//         type: "debit"

//     }
//     account.unshift(y)
//     display()


// }
// function display() {
//     const Statments = document.querySelector("#Statments")
//     console.log(account);

//     let str = ""
//     for (const item of account) {
//         if (item.type === "credit") {
//             localStorage.setItem(item.from, JSON.stringify(item.amount))
           
//         }
//       else  if (item.type === "debit") {
            
//             const data = localStorage.getItem(item.from)
//             console.log(JSON.parse(data))
//             str += `
//             <div class=" alert alert-success d-flex justify-content-between">
//                <p>${item.amount}</p>
//                <strong>${JSON.parse(data)}</strong>
//              </div>`
//          }
//        else  if (item.type === "remove") {
//             localStorage.removeItem(item.from)
//          } 
//     }
//     Statments.innerHTML = str
    
// }
//stetment end
// var power=""
// var RPM=""
// var SV=""
// var FOS=""
// var sigma=""
// var pteeth=""
// var dteeth=""
// var Modul1=""
const cta = document.getElementById("machined")
const title = document.getElementById("title")
const subtital = document.getElementById("subtital")
const desc = document.getElementById("carouselExampleCaptions")

const tl = gsap.timeline()
tl.from("#machined", {
    scale: 2,
    opacity: 0,
    duration: 0.5
})

tl.from(desc, {
    rotation: 360,
    scale: 2,
    opacity: 0,
    duration: 1
})
tl.from(title, {
    x: "-200vh",
    duration: 1
})
tl.from(subtital, {
    x: "+200vh",
    duration: 1
})


     gsap.from(".navbar",{y:-50, opacity:0,duration:1, delay:0.1 , stagger: 0.5})
    gsap.from("#zwindo",{y:-50, opacity:0,duration:3, delay:0.1 , stagger: 0.5})
    gsap.from("#geometry",{y:-50, opacity:0,duration:3, delay:0.1 , stagger: 0.5})
    gsap.from("#Saport",{y:-50, opacity:0,duration:3, delay:0.1 , stagger: 0.5})
    gsap.from("#Design",{y:-50, opacity:0,duration:3, delay:0.1 , stagger: 0.5})


    function Meclanical(){
        document.getElementById("Meclanical443").classList.remove("d-none")
    document.getElementById("elec443").classList.add("d-none")
    document.getElementById("heading").classList.add("d-none")
    }

    function backsupport() {
        document.getElementById("Meclanical443").classList.add("d-none")
    document.getElementById("elec443").classList.remove("d-none")
    document.getElementById("heading").classList.remove("d-none")

    }

    function Electrical(){
        document.getElementById("electronic443").classList.remove("d-none")
    document.getElementById("mech443").classList.add("d-none")
    document.getElementById("heading").classList.add("d-none")

    }
    function backsuppor2() {
        document.getElementById("electronic443").classList.add("d-none")
    document.getElementById("mech443").classList.remove("d-none")
    document.getElementById("heading").classList.remove("d-none")

    }
    
   
