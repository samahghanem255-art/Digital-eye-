function go(){
document.getElementById("services")
.scrollIntoView({behavior:"smooth"});
}

function toggleTheme(){
document.body.classList.toggle("light");
}

function news(){
let v=document.getElementById("input").value;
let o=document.getElementById("out");

if(!v){
o.innerHTML="أدخل موضوع";
return;
}

o.innerHTML="جاري التوليد...";

setTimeout(()=>{
o.innerHTML="📰 خبر عن "+v;
},1000);
}
