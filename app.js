// ================= THEME =================
function toggleTheme(){
document.body.classList.toggle("light");
}

// ================= LANGUAGE =================
let lang="ar";
function toggleLang(){
lang=(lang==="ar")?"en":"ar";
document.documentElement.lang=lang;
document.documentElement.dir=(lang==="ar")?"rtl":"ltr";
}

// ================= NLP =================
async function runNLP(){

const inp=document.getElementById("nlpInput");
const out=document.getElementById("nlpOutput");

if(!inp||!out)return;

let txt=inp.value.trim();
if(!txt)return;

out.style.display="block";
out.innerHTML="جاري التحسين...";

try{

out.innerHTML="✍️ النص المحسن: "+txt;

}catch(e){
out.innerHTML="خطأ";
}
}

// ================= CONTENT GENERATOR =================
async function generateContent(){

const type=document.getElementById("contentType");
const cat=document.getElementById("contentCat");
const topic=document.getElementById("contentTopic");

if(!type||!cat||!topic)return;

let t=topic.value.trim();
if(!t)return;

document.getElementById("genLoading").style.display="block";
document.getElementById("genOutput").style.display="none";

setTimeout(()=>{

document.getElementById("genLoading").style.display="none";
document.getElementById("genOutput").style.display="block";
document.getElementById("genText").textContent =
"📰 "+type.value+" عن "+t+" في "+cat.value;

},1000);
}

// ================= COPY =================
function copyContent(e){
const txt=document.getElementById("genText").textContent;
navigator.clipboard.writeText(txt);

if(e && e.target){
e.target.textContent="تم النسخ";
setTimeout(()=>e.target.textContent="نسخ",2000);
}
}

// ================= ANALYSIS =================
function analyzeAudience(){

const inp=document.getElementById("analyzeInput");
const out=document.getElementById("analyzeOutput");

if(!inp||!out)return;

let v=inp.value.trim();
if(!v)return;

out.style.display="block";

document.getElementById("analyzeAIText").textContent=
"📊 تحليل: "+v;

anim("scoreViews",1200,"K");
anim("scoreEngage",87,"%");
anim("scoreShare",300,"");
}

// ================= ANIMATION =================
function anim(id,target,suffix){

const el=document.getElementById(id);
if(!el)return;

let v=0;
let step=Math.ceil(target/40);

let t=setInterval(()=>{
v+=step;
if(v>=target)v=target;
el.textContent=v+suffix;
if(v===target)clearInterval(t);
},30);

}

// ================= CHART =================
function buildChart(){

const c=document.getElementById("chart1");
if(!c)return;

const data=[
{label:"تفاعل",val:87},
{label:"وصول",val:73},
{label:"احتفاظ",val:91},
{label:"مشاركة",val:64}
];

c.innerHTML=data.map(d=>
`<div>${d.label} - ${d.val}%</div>`
).join("");
}

window.onload=buildChart;
