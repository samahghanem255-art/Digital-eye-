function scrollToServices(){
document.getElementById("services")
.scrollIntoView({behavior:"smooth"});
}

/* THEME */
function toggleTheme(){
document.body.classList.toggle("light-mode");
}

/* LANGUAGE */
let lang="ar";
function toggleLanguage(){
lang=(lang==="ar")?"en":"ar";
document.documentElement.lang=lang;
document.documentElement.dir=(lang==="ar")?"rtl":"ltr";
}

/* HELP FUNCTION */
function show(el,text){
el.style.display="block";
el.innerHTML=text;
}

/* NEWS */
function generateNews(){
let t=document.getElementById("newsTopic").value;
let r=document.getElementById("newsResult");

if(!t){show(r,"أدخل موضوع الخبر");return;}

show(r,"جاري التوليد...");

setTimeout(()=>{
show(r,"📰 خبر عن "+t+" تم إنشاؤه بنجاح");
},1000);
}

/* ANALYSIS */
function analyzeContent(){
let r=document.getElementById("analysisResult");
show(r,"📊 تحليل المحتوى: جودة 90%");
}

/* FACT */
function verifyNews(){
let r=document.getElementById("factResult");
show(r,"✅ الخبر موثوق جزئياً");
}

/* REP */
function analyzeReputation(){
let r=document.getElementById("brandResult");
show(r,"🏢 السمعة: إيجابية 88%");
}

/* CATEGORY */
function filterNews(cat){
show(document.getElementById("newsResult"),"📂 قسم: "+cat);
}
