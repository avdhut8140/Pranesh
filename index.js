
let out="0";
let demoveriabale="";
let data1=""


 function Number0(){
 N0=0; 
 console.log("number=0")
 out+=N0; 
 console.log(out)
 document.getElementById("outdisplay").innerHTML= out
 }

 function Number1() {
 N1=1; 
 console.log("number=1")
 out+=N1; 
 console.log(out)
 document.getElementById("outdisplay").innerHTML= out
 }

 function Number2() {
 N2=2; 
 console.log("number=2")
 out+=N2; 
 console.log(out)
 document.getElementById("outdisplay").innerHTML= out
 }

 function Number3() {
 N3=3; 
 console.log("number=3")
 out+=N3; 
 console.log(out)
 document.getElementById("outdisplay").innerHTML= out
 }

 function Number4() {
 N4=4; 
 console.log("number=4")
 out+=N4; 
 console.log(out)
 document.getElementById("outdisplay").innerHTML= out
 }

 function Number5() {
 N5=5; 
 console.log("number=5")
 out+=N5; 
 console.log(out)
 document.getElementById("outdisplay").innerHTML= out
 }

 function Number6() {
 N6=6; 
 console.log("number=6")
 out+=N6; 
 console.log(out)
 document.getElementById("outdisplay").innerHTML= out
 }

 function Number7() {
 N7=7; 
 console.log("number=7")
 out+=N7; 
 console.log(out)
 document.getElementById("outdisplay").innerHTML= out
 }

 function Number8() {
 N8=8; 
 console.log("number=8")
 out+=N8; 
 console.log(out)
 document.getElementById("outdisplay").innerHTML= out
 }

 function Number9() {
 N9=9; 
 console.log("number=9")
 out+=N9; 
 console.log(out)
 document.getElementById("outdisplay").innerHTML= out
 }
 

 function addition() {
 data1 = "0"
 addto=Number(out)
 out+=' + '; 
 document.getElementById("outdisplay").innerHTML= out
 data1 = out;
 console.log("data1 ="+data1)
 out="0"
 demoveriabale="A"
 }

 function subtraction() {
 data1 = "0"
 subto=Number(out)
 out+=' - '; 
 document.getElementById("outdisplay").innerHTML= out
 data1 = out;
 console.log("data1 ="+data1)
 out="0"
 demoveriabale="B"
 }

 function multiplication() {
 data1 = "0"
 multo=Number(out)
 out+=' x '; 
 document.getElementById("outdisplay").innerHTML= out
 data1 = out;
 console.log("data1 ="+data1)
 out="0"
 demoveriabale="C"
 }

 function division() {
 data1 = "0"
 divto=Number(out)
 out+=' / '; 
 document.getElementById("outdisplay").innerHTML= out
 data1 = out;
 console.log("data1 ="+data1)
 out="0"
 demoveriabale="D"
 }


 function output(){
  if (demoveriabale=="A") {
    total=addto+Number(out)
  }else if (demoveriabale=="B"){
  total=subto-Number(out)
  }else if (demoveriabale=="C"){
    total=multo*Number(out)
  }else if (demoveriabale=="D"){
    total=divto/Number(out)
  }else {   
 }
 let totaldata = data1 + out;
 document.getElementById("total").innerHTML= Number(total)
 let pastdata = totaldata +" = "+total;
console.error("totaldata==="+totaldata);
console.error("total==="+total);

document.getElementById("pastdata").innerHTML= pastdata;
addto="0",subto="0",multo="0", divto="0",out="0";
document.getElementById("outdisplay").innerHTML= "0";
demoveriabale="l";
 
}


function reset(){
  addto="0",subto="0",multo="0", divto="0",out="0";
  document.getElementById("outdisplay").innerHTML="0"
  document.getElementById("total").innerHTML="total ="
  document.getElementById("pastdata").innerHTML="0"
}
