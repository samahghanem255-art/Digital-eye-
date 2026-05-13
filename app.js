function go(){
document.getElementById("services")
.scrollIntoView({behavior:"smooth"});
}

/* THEME */
function toggleTheme(){
document.body.classList.toggle("light");
}

/* LANGUAGE */
let lang="ar";

function toggleLang(){
lang = (lang==="ar")?"en":"ar";

document.documentElement.lang = lang;
document.documentElement.dir = (lang==="ar")?"rtl":"ltr";

alert("Language: " + lang);
}
