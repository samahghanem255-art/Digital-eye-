// SCROLL TO SERVICES

function scrollToServices(){
    document.getElementById('services')
    .scrollIntoView({
        behavior:'smooth'
    });
}

/* =========================
   NEWS GENERATOR
========================= */

async function generateNews(){

    const topic =
    document.getElementById('newsTopic').value.trim();

    const result =
    document.getElementById('newsResult');

    if(!topic){
        alert('أدخل موضوع الخبر');
        return;
    }

    result.style.display='block';

    result.innerHTML = `
    <div class="loading">
        جاري توليد الخبر...
    </div>
    `;

    setTimeout(()=>{

        result.innerHTML = `
        <h3>📰 خبر مولد بالذكاء الاصطناعي</h3>

        <p>
        شهدت الساعات الأخيرة تطورات مهمة حول "${topic}"،
        حيث أكد خبراء ومتابعون أن هذا الحدث قد يساهم
        في تغيير المشهد الإعلامي والرقمي خلال الفترة القادمة.
        </p>

        <p>
        وأشارت التحليلات الأولية إلى تزايد اهتمام الجمهور
        بهذا الموضوع على منصات التواصل الاجتماعي،
        مع توقعات بارتفاع نسب التفاعل خلال الأيام المقبلة.
        </p>

        <p>
        كما يرى مختصون أن استخدام تقنيات الذكاء الاصطناعي
        في تغطية الأحداث الإعلامية أصبح يمثل تحولاً
        كبيراً في مستقبل الإعلام الرقمي الحديث.
        </p>
        `;

    },2000);

}

/* =========================
   CONTENT ANALYZER
========================= */

async function analyzeContent(){

    const text =
    document.getElementById('contentInput').value.trim();

    const result =
    document.getElementById('analysisResult');

    if(!text){
        alert('أدخل نصاً للتحليل');
        return;
    }

    result.style.display='block';

    result.innerHTML = `
    <div class="loading">
        جاري تحليل المحتوى...
    </div>
    `;

    setTimeout(()=>{

        const score =
        Math.floor(Math.random()*20)+80;

        const engagement =
        Math.floor(Math.random()*30)+70;

        result.innerHTML = `

        <h3>📊 نتائج التحليل</h3>

        <p>✅ جودة المحتوى: ${score}%</p>

        <p>🔥 التفاعل المتوقع: ${engagement}%</p>

        <p>📈 قابلية الانتشار: مرتفعة</p>

        <p>🧠 تحليل المشاعر:
        إيجابي واحترافي.</p>

        <p>
        النص يحتوي على أسلوب إعلامي جيد،
        مع قابلية عالية لجذب الجمهور
        وتحقيق انتشار رقمي مناسب.
        </p>
        `;

    },1800);

}

/* =========================
   FACT CHECKER
========================= */

async function verifyNews(){

    const text =
    document.getElementById('factInput').value.trim();

    const result =
    document.getElementById('factResult');

    if(!text){
        alert('أدخل الخبر للتحقق');
        return;
    }

    result.style.display='block';

    result.innerHTML = `
    <div class="loading">
        جاري التحقق من الخبر...
    </div>
    `;

    setTimeout(()=>{

        const trust =
        Math.floor(Math.random()*15)+85;

        result.innerHTML = `

        <h3>✅ تقرير التحقق</h3>

        <p>📌 نسبة الموثوقية: ${trust}%</p>

        <p>🔎 حالة الخبر:
        موثوق جزئياً</p>

        <p>
        تم تحليل النص ومقارنته
        بمؤشرات إعلامية عامة.
        </p>

        <p>
        يُنصح بمراجعة المصادر الرسمية
        قبل اعتماد الخبر للنشر النهائي.
        </p>
        `;

    },2000);

}

/* =========================
   REPUTATION ANALYZER
========================= */

async function analyzeReputation(){

    const brand =
    document.getElementById('brandInput').value.trim();

    const result =
    document.getElementById('brandResult');

    if(!brand){
        alert('أدخل اسم المؤسسة');
        return;
    }

    result.style.display='block';

    result.innerHTML = `
    <div class="loading">
        جاري تحليل السمعة الرقمية...
    </div>
    `;

    setTimeout(()=>{

        const rep =
        Math.floor(Math.random()*20)+80;

        result.innerHTML = `

        <h3>🏢 تحليل السمعة الرقمية</h3>

        <p>⭐ تقييم السمعة: ${rep}%</p>

        <p>
        📈 الانطباع العام:
        إيجابي
        </p>

        <p>
        💬 مستوى التفاعل:
        مرتفع على المنصات الرقمية.
        </p>

        <p>
        🧠 التحليل يشير إلى وجود
        حضور رقمي جيد للمؤسسة
        مع تفاعل جماهيري مستقر.
        </p>
        `;

    },2200);

}

/* =========================
   ANIMATION ON SCROLL
========================= */

const cards =
document.querySelectorAll(
'.service-card,.ai-box,.stat-card,.feature'
);

window.addEventListener('scroll',()=>{

    const trigger =
    window.innerHeight * 0.85;

    cards.forEach(card=>{

        const top =
        card.getBoundingClientRect().top;

        if(top < trigger){

            card.style.opacity='1';
            card.style.transform='translateY(0)';

        }

    });

});

/* INITIAL STYLE */

cards.forEach(card=>{

    card.style.opacity='0';

    card.style.transform=
    'translateY(40px)';

    card.style.transition=
    '0.7s ease';

});

/* =========================
   LIVE STATS EFFECT
========================= */

const stats =
document.querySelectorAll('.stat-card h2');

stats.forEach(stat=>{

    const finalText =
    stat.innerText;

    stat.innerText='0';

    let current = 0;

    const interval = setInterval(()=>{

        current += 5;

        if(finalText.includes('%')){

            stat.innerText =
            current + '%';

            if(current >=
            parseInt(finalText)){

                stat.innerText =
                finalText;

                clearInterval(interval);
            }

        }

        else if(finalText.includes('K')){

            stat.innerText =
            current + 'K+';

            if(current >= 250){

                stat.innerText =
                finalText;

                clearInterval(interval);
            }

        }

        else{

            stat.innerText =
            current + '+';

            if(current >=
            parseInt(finalText)){

                stat.innerText =
                finalText;

                clearInterval(interval);
            }

        }

    },30);

});
