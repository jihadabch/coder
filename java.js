var erea=document.getElementById("text");

var button1=document.getElementById("b1");

var button2=document.getElementById("b2");

var result=document.getElementById("result");

button2.onclick=()=>{
	result.innerHTML=erea.value;
	localStorage.setItem("data",document.getElementById("text").value)
};

button1.onclick=()=>{
	result.innerHTML="";
	
};

onload=()=>{
erea.value=localStorage.getItem("data");
	result.innerHTML=erea.value;
};

document.getElementById("color").onchange=function(){
	localStorage.setItem("color",document.getElementById("color").value);
	document.body.style.background=localStorage.getItem("color")
};
onload=()=>{
	document.getElementById("color").value=localStorage.getItem("color");
	document.body.style.background=localStorage.getItem("color")
};






