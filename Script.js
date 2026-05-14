// ===== SERVICES PAGE FUNCTIONS =====

// ===== Bar chart for AI metrics =====

function buildChart(){

  const c = document.getElementById('chart1');

  if(!c) return;

  const data = [

    {
      label:'تفاعل القراء',
      val:87,
      color:'var(--acc)'
    },

    {
      label:'وصول المحتوى',
      val:73,
      color:'var(--acc3)'
    },

    {
      label:'معدل الاحتفاظ',
      val:91,
      color:'var(--acc2)'
    },

    {
      label:'مشاركات اجتماعية',
      val:64,
      color:'var(--acc)'
    }

  ];

  c.innerHTML = data.map(d => `

    <div style="display:flex;align-items:center;gap:10px">

      <span style="
        font-size:11px;
        color:var(--tx2);
        width:120px;
        flex-shrink:0;
        text-align:right
      ">
        ${d.label}
      </span>

      <div style="
        flex:1;
        background:var(--bg);
        border-radius:4px;
        height:8px;
        overflow:hidden
      ">

        <div
          style="
            height:100%;
            border-radius:4px;
            background:${d.color};
            width:0;
            transition:width 1.2s ease
          "
          data-w="${d.val}%">
        </div>

      </div>

      <span style="
        font-size:11px;
        color:${d.color};
        font-weight:700;
        width:32px
      ">
        ${d.val}%
      </span>

    </div>

  `).join('');

  setTimeout(() => {

    c.querySelectorAll('[data-w]')
      .forEach(b => b.style.width = b.dataset.w);

  },300);
}


// ===== NLP TEXT IMPROVER =====

async function runNLP(){

  const inp = document.getElementById('nlpInput');
  const out = document.getElementById('nlpOutput');

  const txt = inp.value.trim();

  if(!txt){

    inp.style.borderColor = 'var(--acc2)';

    setTimeout(() => {
      inp.style.borderColor = 'var(--bd)';
    },1500);

    return;
  }

  out.style.display = 'block';

  out.innerHTML = `
    <div class="dots">
      <span></span>
      <span></span>
      <span></span>
    </div>
  `;

  try{

    const res = await fetch(
      'https://api.anthropic.com/v1/messages',
      {
        method:'POST',

        headers:{
          'Content-Type':'application/json',
          'x-api-key':'YOUR_API_KEY',
          'anthropic-version':'2023-06-01'
        },

        body:JSON.stringify({

          model:'claude-sonnet-4-20250514',

          max_tokens:600,

          system:'أنت محرر صحفي محترف. مهمتك تحسين النصوص الإعلامية من حيث الأسلوب والوضوح والتأثير. أجب فقط بالنص المحسّن بدون شرح.',

          messages:[
            {
              role:'user',
              content:`حسّن هذا النص الإعلامي:\n${txt}`
            }
          ]

        })

      }
    );

    const d = await res.json();

    out.textContent =
      d.content?.[0]?.text || 'عذراً، حدث خطأ.';

  }

  catch(e){

    out.innerHTML = `
      <span style="color:var(--acc2)">
        ⚠️ أضف مفتاح API لتفعيل هذه الخاصية.
      </span>
    `;
  }// ===== CONTENT GENERATOR =====

async function generateContent(){

  const type =
    document.getElementById('contentType').value;

  const cat =
    document.getElementById('contentCat').value;

  const topic =
    document.getElementById('contentTopic')
    .value.trim();

  if(!topic){

    document.getElementById('contentTopic')
      .style.borderColor='var(--acc2)';

    setTimeout(()=>{

      document.getElementById('contentTopic')
        .style.borderColor='var(--bd)';

    },1500);

    return;
  }

  document.getElementById('genOutput')
    .style.display='none';

  document.getElementById('genLoading')
    .style.display='block';

  try{

    const res = await fetch(
      'https://api.anthropic.com/v1/messages',
      {

        method:'POST',

        headers:{
          'Content-Type':'application/json',
          'x-api-key':'YOUR_API_KEY',
          'anthropic-version':'2023-06-01'
        },

        body:JSON.stringify({

          model:'claude-sonnet-4-20250514',

          max_tokens:800,

          system:
          `أنت صحفي محترف لمنصة Digital Eye الإعلامية.
          اكتب ${type} متخصص في قسم ${cat}.
          المحتوى باللغة العربية الفصحى،
          احترافي وموضوعي ومناسب للنشر الإعلامي.`,

          messages:[
            {
              role:'user',
              content:`اكتب ${type} عن: ${topic}`
            }
          ]

        })

      }
    );

    const d = await res.json();

    document.getElementById('genLoading')
      .style.display='none';

    document.getElementById('genOutput')
      .style.display='block';

    document.getElementById('genText')
      .textContent =
      d.content?.[0]?.text || 'عذراً، حدث خطأ.';

  }

  catch(e){

    document.getElementById('genLoading')
      .style.display='none';

    document.getElementById('genOutput')
      .style.display='block';

    document.getElementById('genText')
      .innerHTML =
      `
      <span style="color:var(--acc2)">
        ⚠️ أضف مفتاح API لتفعيل مولّد المحتوى.
      </span>
      `;
  }
}


// ===== COPY CONTENT =====

function copyContent(){

  const txt =
    document.getElementById('genText')
    .textContent;

  navigator.clipboard.writeText(txt)
    .then(()=>{

      const btn = event.target;

      btn.textContent='تم النسخ ✅';

      setTimeout(()=>{

        btn.textContent='نسخ 📋';

      },2000);

    });

}


// ===== AUDIENCE ANALYZER =====

async function analyzeAudience(){

  const inp =
    document.getElementById('analyzeInput')
    .value.trim();

  if(!inp) return;

  document.getElementById('analyzeOutput')
    .style.display='none';

  try{

    const res = await fetch(
      'https://api.anthropic.com/v1/messages',
      {

        method:'POST',

        headers:{
          'Content-Type':'application/json',
          'x-api-key':'YOUR_API_KEY',
          'anthropic-version':'2023-06-01'
        },

        body:JSON.stringify({

          model:'claude-sonnet-4-20250514',

          max_tokens:500,

          system:
          `أنت محلل بيانات إعلامية.
          عند تحليل عنوان خبر أعط:
          المشاهدات والتفاعل والمشاركات.`,

          messages:[
            {
              role:'user',
              content:`حلّل هذا العنوان:
              ${inp}`
            }
          ]

        })

      }
    );

    const d = await res.json();

    const raw =
      d.content?.[0]?.text || '';

    const metricsMatch =
      raw.match(
        /METRICS:views=(\d+),engage=(\d+)%,shares=(\d+)/
      );

    const textMatch =
      raw.match(/TEXT:([\s\S]+)/);

    if(metricsMatch){

      animNum(
        'scoreViews',
        parseInt(metricsMatch[1]),
        'K'
      );

      animNum(
        'scoreEngage',
        parseInt(metricsMatch[2]),
        '%'
      );

      animNum(
        'scoreShare',
        parseInt(metricsMatch[3]),
        ''
      );
    }

    document.getElementById('analyzeAIText')
      .textContent =
      textMatch ? textMatch[1].trim() : raw;

    document.getElementById('analyzeOutput')
      .style.display='block';

  }

  catch(e){

    document.getElementById('analyzeOutput')
      .style.display='block';

    document.getElementById('analyzeAIText')
      .innerHTML =
      `
      <span style="color:var(--acc2)">
        ⚠️ أضف مفتاح API لتفعيل التحليل.
      </span>
      `;
  }
}


// ===== NUMBER ANIMATION =====

function animNum(id,target,suffix){

  const el =
    document.getElementById(id);

  if(!el) return;

  let v = 0;

  let step =
    Math.ceil(target / 40);

  const tm = setInterval(()=>{

    v = Math.min(v + step,target);

    el.textContent = v + suffix;

    if(v >= target){

      clearInterval(tm);

    }

  },30);

}


// ===== AI DEMO =====

function showAIDemo(){

  showPage('services');

  setTimeout(()=>{

    document.getElementById('contentTopic')
      .scrollIntoView({
        behavior:'smooth',
        block:'center'
      });

  },300);

}


// ===== PAGE EVENT =====

const origShow = window.showPage;

window.showPage = function(p){

  origShow(p);

  if(p === 'services'){

    setTimeout(buildChart,400);

  }

};
}
