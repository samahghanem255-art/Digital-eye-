window.onload = () => {
    document.querySelector(".hero").classList.remove("hidden");
};

function go(id) {
    document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

function analyze() {
    const t = document.getElementById("contentInput").value;
    document.getElementById("contentResult").innerText =
        t.length > 30 ? "✔ المحتوى جاهز للنشر" : "⚠ النص قصير";
}

function recommend() {
    const ul = document.getElementById("recResult");
    ul.innerHTML="";
    ["عنوان جذاب","زاوية تحليل","اختصار المحتوى"].forEach(i=>{
        const li=document.createElement("li");
        li.textContent=i;
        ul.appendChild(li);
    });
}

function checkFact() {
    document.getElementById("factResult").innerText="✔ الخبر موثوق (محاكاة)";
}

function simulate() {
    document.getElementById("simResult").innerText="📊 تفاعل مرتفع متوقع";
}

function automation() {
    document.getElementById("autoResult").innerText="🤖 تم تنفيذ الأتمتة";
}

function competition() {
    document.getElementById("compResult").innerText="🏆 أداء أعلى من المنافسين";
}

function runStats() {
    document.querySelectorAll(".circle").forEach(c=>{
        const value=Math.floor(Math.random()*30)+70;
        c.querySelector("strong").innerText=value+"%";
        c.querySelector(".progress").style.strokeDashoffset =
            314-(314*value/100);
    });
}

function sendMail() {
    window.location.href="mailto:contact@digitaleye.com";
}
