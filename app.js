function scrollToServices(){
document.getElementById("services").scrollIntoView({behavior:"smooth"});
}

/* THEME */
function toggleTheme(){
document.body.classList.toggle("light-mode");
}

/* LANGUAGE */
let lang="ar";
function toggleLanguage(){
lang=lang==="ar"?"en":"ar";
document.documentElement.lang=lang;
document.documentElement.dir=lang==="ar"?"rtl":"ltr";
}

/* NEWS */
function generateNews(){
let t=document.getElementById("newsTopic").value;
let r=document.getElementById("newsResult");
r.style.display="block";
r.innerHTML="جاري التوليد...";
setTimeout(()=>{
r.innerHTML="📰 خبر عن "+t;
},1200);
}

/* ANALYSIS */
function analyzeContent(){
let r=document.getElementById("analysisResult");
r.style.display="block";
r.innerHTML="تحليل المحتوى: 90% جودة عالية";
}

/* FACT CHECK */
function verifyNews(){
let r=document.getElementById("factResult");
r.style.display="block";
r.innerHTML="الخبر موثوق جزئياً";
}

/* REPUTATION */
function analyzeReputation(){
let r=document.getElementById("brandResult");
r.style.display="block";
r.innerHTML="السمعة: إيجابية (88%)";
}

/* CATEGORIES */
function filterNews(cat){
alert("قسم: "+cat);
}
