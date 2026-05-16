/* ============================================
   DIGITAL EYE - Complete Application Script
   ============================================ */

'use strict';

/* ===== TRANSLATIONS ===== */
const i18n = {
  ar: {
    breaking: "عاجل", nav_home: "الرئيسية", nav_news: "الأخبار",
    nav_videos: "الفيديوهات", nav_ai: "الذكاء الاصطناعي",
    nav_analytics: "التحليلات", nav_studio: "الاستوديو", nav_contact: "التواصل",
    hero_badge: "منصة إعلامية ذكية", hero_tagline: "عين واحدة... رؤية كاملة",
    hero_desc: "منصة إعلامية متكاملة تجمع بين قوة الذكاء الاصطناعي وتحليل البيانات الضخمة",
    stat_accuracy: "دقة التحليل", stat_fake: "خبر مزيف مكشوف",
    stat_countries: "دولة مغطاة", stat_sources: "مصدر إعلامي",
    cta_explore: "استكشف الأخبار", cta_ai: "أدوات الذكاء الاصطناعي",
    news_title: "آخر الأخبار", news_sub: "تغطية شاملة ومحدثة لحظة بلحظة",
    filter_all: "الكل", filter_tech: "تقنية", filter_politics: "سياسة",
    filter_economy: "اقتصاد", filter_sports: "رياضة",
    load_more: "تحميل المزيد",
    videos_title: "الفيديوهات", videos_sub: "محتوى مرئي حصري",
    ai_title: "أدوات الذكاء الاصطناعي", ai_sub: "حلول ذكية متقدمة",
    tab_fake: "كاشف الأخبار المزيفة", tab_sentiment: "تحليل المشاعر",
    tab_reputation: "رصد السمعة", tab_summary: "تلخيص المحتوى",
    fake_title: "كاشف الأخبار المزيفة", fake_sub: "أدخل نص الخبر للتحقق منه",
    sentiment_title: "تحليل المشاعر", sentiment_sub: "تحليل عاطفي للنصوص",
    rep_title: "رصد السمعة", rep_sub: "تتبع سمعة المؤسسات",
    sum_title: "تلخيص ذكي", sum_sub: "تلخيص المقالات الطويلة",
    analyze_btn: "تحليل الآن", analyze_sentiment: "تحليل المشاعر",
    analyze_rep: "رصد السمعة", analyze_sum: "تلخيص ذكي",
    analytics_title: "البيانات الإعلامية الضخمة", analytics_sub: "لوحة تحكم تحليلية شاملة",
    metric_articles: "مقال محلل اليوم", metric_fake: "خبر مزيف مكشوف",
    metric_countries: "دولة مغطاة", metric_users: "مستخدم نشط",
    chart_trend: "توزيع الأخبار حسب الفئة", chart_fake: "نسبة الأخبار المزيفة",
    chart_sources: "أبرز المصادر", chart_sentiment: "مؤشر المشاعر",
    studio_title: "الاستوديو السحابي", studio_sub: "أدوات الإنتاج الاحترافي",
    studio_editor: "محرر المحتوى", studio_editor_desc: "محرر ذكي مع تدقيق لغوي",
    studio_graphics: "مُنشئ الغرافيك", studio_graphics_desc: "تصميم إنفوغرافيك تلقائي",
    studio_broadcast: "البث المباشر", studio_broadcast_desc: "بث مباشر احترافي",
    studio_social: "نشر تلقائي", studio_social_desc: "نشر على جميع المنصات",
    studio_archive: "أرشيف سحابي", studio_archive_desc: "تخزين وفهرسة ذكية",
    studio_team: "إدارة الفريق", studio_team_desc: "تنسيق المهام الإعلامية",
    contact_title: "تواصل معنا", contact_sub: "نحن هنا على مدار الساعة",
    contact_address: "العنوان", contact_phone: "الهاتف", contact_email: "البريد",
    form_name: "الاسم الكامل", form_email: "البريد الإلكتروني",
    form_subject: "الموضوع", form_select: "اختر الموضوع...",
    form_inquiry: "استفسار عام", form_partnership: "شراكة إعلامية",
    form_technical: "دعم تقني", form_advertising: "إعلانات",
    form_message: "رسالتك", form_send: "إرسال الرسالة",
    footer_desc: "منصة إعلامية ذكية تجمع الصحافة بالذكاء الاصطناعي",
    footer_links: "روابط سريعة", footer_services: "الخدمات",
    footer_newsletter: "النشرة الإخبارية",
    newsletter_desc: "اشترك لتلقي أحدث الأخبار",
    footer_copy: "© 2025 Digital Eye. جميع الحقوق محفوظة.",
    privacy: "سياسة الخصوصية", terms: "الشروط والأحكام",
    svc_fake: "كشف الأخبار المزيفة", svc_rep: "رصد السمعة",
    svc_big: "البيانات الضخمة", svc_studio: "الاستوديو السحابي",
    live: "بث مباشر"
  },
  en: {
    breaking: "BREAKING", nav_home: "Home", nav_news: "News",
    nav_videos: "Videos", nav_ai: "AI Tools",
    nav_analytics: "Analytics", nav_studio: "Studio", nav_contact: "Contact",
    hero_badge: "Smart Media Platform", hero_tagline: "One Eye... Complete Vision",
    hero_desc: "An integrated media platform combining AI power and big data analytics for an exceptional media experience",
    stat_accuracy: "Analysis Accuracy", stat_fake: "Fake News Detected",
    stat_countries: "Countries Covered", stat_sources: "News Sources",
    cta_explore: "Explore News", cta_ai: "AI Tools",
    news_title: "Latest News", news_sub: "Comprehensive real-time coverage worldwide",
    filter_all: "All", filter_tech: "Technology", filter_politics: "Politics",
    filter_economy: "Economy", filter_sports: "Sports",
    load_more: "Load More",
    videos_title: "Videos", videos_sub: "Exclusive video content",
    ai_title: "AI Tools", ai_sub: "Advanced smart solutions",
    tab_fake: "Fake News Detector", tab_sentiment: "Sentiment Analysis",
    tab_reputation: "Reputation Monitor", tab_summary: "Content Summary",
    fake_title: "Fake News Detector", fake_sub: "Enter news text to verify",
    sentiment_title: "Sentiment Analysis", sentiment_sub: "Emotional text analysis",
    rep_title: "Reputation Monitor", rep_sub: "Track institutional reputation",
    sum_title: "Smart Summary", sum_sub: "Summarize long articles",
    analyze_btn: "Analyze Now", analyze_sentiment: "Analyze Sentiment",
    analyze_rep: "Monitor Reputation", analyze_sum: "Smart Summary",
    analytics_title: "Big Media Data", analytics_sub: "Comprehensive analytics dashboard",
    metric_articles: "Articles Analyzed Today", metric_fake: "Fake News Detected",
    metric_countries: "Countries Covered", metric_users: "Active Users",
    chart_trend: "News by Category", chart_fake: "Weekly Fake News Rate",
    chart_sources: "Top News Sources", chart_sentiment: "Media Sentiment Index",
    studio_title: "Cloud Studio", studio_sub: "Professional production tools",
    studio_editor: "Content Editor", studio_editor_desc: "Smart editor with spell check",
    studio_graphics: "Graphics Creator", studio_graphics_desc: "Auto infographic design",
    studio_broadcast: "Live Broadcast", studio_broadcast_desc: "Professional live streaming",
    studio_social: "Auto Publish", studio_social_desc: "Publish to all platforms",
    studio_archive: "Cloud Archive", studio_archive_desc: "Smart storage and indexing",
    studio_team: "Team Manager", studio_team_desc: "Media team coordination",
    contact_title: "Contact Us", contact_sub: "We're available 24/7",
    contact_address: "Address", contact_phone: "Phone", contact_email: "Email",
    form_name: "Full Name", form_email: "Email Address",
    form_subject: "Subject", form_select: "Choose subject...",
    form_inquiry: "General Inquiry", form_partnership: "Media Partnership",
    form_technical: "Technical Support", form_advertising: "Advertising",
    form_message: "Your Message", form_send: "Send Message",
    footer_desc: "Smart media platform combining journalism with AI",
    footer_links: "Quick Links", footer_services: "Services",
    footer_newsletter: "Newsletter",
    newsletter_desc: "Subscribe for the latest news",
    footer_copy: "© 2025 Digital Eye. All rights reserved.",
    privacy: "Privacy Policy", terms: "Terms & Conditions",
    svc_fake: "Fake News Detection", svc_rep: "Reputation Monitoring",
    svc_big: "Big Data Analytics", svc_studio: "Cloud Studio",
    live: "Live"
  },
  fr: {
    breaking: "URGENT", nav_home: "Accueil", nav_news: "Actualités",
    nav_videos: "Vidéos", nav_ai: "IA Tools",
    nav_analytics: "Analytiques", nav_studio: "Studio", nav_contact: "Contact",
    hero_badge: "Plateforme Médiatique Intelligente", hero_tagline: "Un œil... Une vision complète",
    hero_desc: "Une plateforme médiatique intégrée combinant l'IA et l'analyse des mégadonnées",
    stat_accuracy: "Précision d'analyse", stat_fake: "Fausses infos détectées",
    stat_countries: "Pays couverts", stat_sources: "Sources d'information",
    cta_explore: "Explorer les Actualités", cta_ai: "Outils IA",
    news_title: "Dernières Actualités", news_sub: "Couverture complète en temps réel",
    filter_all: "Tout", filter_tech: "Technologie", filter_politics: "Politique",
    filter_economy: "Économie", filter_sports: "Sport",
    load_more: "Charger plus",
    videos_title: "Vidéos", videos_sub: "Contenu vidéo exclusif",
    ai_title: "Outils d'IA", ai_sub: "Solutions intelligentes avancées",
    tab_fake: "Détecteur de fausses infos", tab_sentiment: "Analyse des sentiments",
    tab_reputation: "Surveillance réputationnelle", tab_summary: "Résumé de contenu",
    fake_title: "Détecteur de fausses infos", fake_sub: "Entrez le texte à vérifier",
    sentiment_title: "Analyse des sentiments", sentiment_sub: "Analyse émotionnelle des textes",
    rep_title: "Surveillance réputationnelle", rep_sub: "Suivre la réputation des institutions",
    sum_title: "Résumé intelligent", sum_sub: "Résumer les longs articles",
    analyze_btn: "Analyser maintenant", analyze_sentiment: "Analyser les sentiments",
    analyze_rep: "Surveiller la réputation", analyze_sum: "Résumé intelligent",
    analytics_title: "Mégadonnées Médiatiques", analytics_sub: "Tableau de bord analytique complet",
    metric_articles: "Articles analysés aujourd'hui", metric_fake: "Fausses infos détectées",
    metric_countries: "Pays couverts", metric_users: "Utilisateurs actifs",
    chart_trend: "Actualités par catégorie", chart_fake: "Taux hebdomadaire de fausses infos",
    chart_sources: "Principales sources", chart_sentiment: "Indice de sentiment médiatique",
    studio_title: "Studio Cloud", studio_sub: "Outils de production professionnels",
    studio_editor: "Éditeur de contenu", studio_editor_desc: "Éditeur intelligent avec vérification orthographique",
    studio_graphics: "Créateur graphique", studio_graphics_desc: "Conception automatique d'infographies",
    studio_broadcast: "Diffusion en direct", studio_broadcast_desc: "Streaming professionnel en direct",
    studio_social: "Publication auto", studio_social_desc: "Publier sur toutes les plateformes",
    studio_archive: "Archive Cloud", studio_archive_desc: "Stockage et indexation intelligents",
    studio_team: "Gestion d'équipe", studio_team_desc: "Coordination de l'équipe médiatique",
    contact_title: "Nous contacter", contact_sub: "Disponibles 24h/24",
    contact_address: "Adresse", contact_phone: "Téléphone", contact_email: "Email",
    form_name: "Nom complet", form_email: "Adresse email",
    form_subject: "Sujet", form_select: "Choisissez un sujet...",
    form_inquiry: "Demande générale", form_partnership: "Partenariat médiatique",
    form_technical: "Support technique", form_advertising: "Publicité",
    form_message: "Votre message", form_send: "Envoyer le message",
    footer_desc: "Plateforme médiatique intelligente combinant journalisme et IA",
    footer_links: "Liens rapides", footer_services: "Services",
    footer_newsletter: "Newsletter",
    newsletter_desc: "Abonnez-vous pour les dernières actualités",
    footer_copy: "© 2025 Digital Eye. Tous droits réservés.",
    privacy: "Politique de confidentialité", terms: "Conditions d'utilisation",
    svc_fake: "Détection de fausses infos", svc_rep: "Surveillance réputationnelle",
    svc_big: "Analyse de mégadonnées", svc_studio: "Studio Cloud",
    live: "Direct"
  }
};

/* ===== NEWS DATA ===== */
const newsData = [
  {
    id: 1, category: 'tech', catColor: '#00b4ff', catBg: 'rgba(0,180,255,0.15)',
    title: 'الذكاء الاصطناعي يُحدث ثورة في غرف الأخبار العالمية',
    excerpt: 'تتسابق كبرى المؤسسات الإعلامية على دمج أدوات الذكاء الاصطناعي في عملياتها التحريرية، مما يُغير طبيعة العمل الصحفي للأبد.',
    source: 'Digital Eye', time: 'منذ 5 دقائق', readTime: '3 دقائق',
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&h=200&fit=crop',
    fake: false, views: '12.4K'
  },
  {
    id: 2, category: 'politics', catColor: '#ff6b35', catBg: 'rgba(255,107,53,0.15)',
    title: 'قمة دولية لمناقشة تنظيم وسائل التواصل الاجتماعي',
    excerpt: 'يجتمع قادة العالم في جنيف لوضع إطار دولي لتنظيم منصات التواصل الاجتماعي ومكافحة الأخبار الكاذبة.',
    source: 'رويترز', time: 'منذ 18 دقيقة', readTime: '4 دقائق',
    img: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=200&fit=crop',
    fake: false, views: '8.7K'
  },
  {
    id: 3, category: 'economy', catColor: '#00cc88', catBg: 'rgba(0,204,136,0.15)',
    title: 'أسواق المال تسجل ارتفاعاً قياسياً بفضل قطاع التقنية',
    excerpt: 'سجّلت أسواق المال العالمية ارتفاعات قياسية مدفوعة بالنمو الاستثنائي لشركات التقنية الكبرى والذكاء الاصطناعي.',
    source: 'بلومبرغ', time: 'منذ 32 دقيقة', readTime: '2 دقيقتان',
    img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=200&fit=crop',
    fake: false, views: '15.2K'
  },
  {
    id: 4, category: 'tech', catColor: '#00b4ff', catBg: 'rgba(0,180,255,0.15)',
    title: '⚠️ مزاعم غير مؤكدة: هاتف ذكي يعمل بدون شحن 30 عاماً',
    excerpt: 'تتداول ادعاءات عبر مواقع التواصل عن هاتف ذكي يعمل بطاقة الجاذبية دون حاجة للشحن - تم التحقق وهي معلومات مضللة.',
    source: 'غير محدد', time: 'منذ ساعة', readTime: '1 دقيقة',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=200&fit=crop',
    fake: true, views: '45.1K'
  },
  {
    id: 5, category: 'sports', catColor: '#f5a623', catBg: 'rgba(245,166,35,0.15)',
    title: 'كأس العالم 2026: المواجهات المرتقبة في ربع النهائي',
    excerpt: 'تستعد المنتخبات الثمانية المتأهلة لإجراء قرعة ربع النهائي في كأس العالم 2026 المُقام في أمريكا الشمالية.',
    source: 'ESPN', time: 'منذ ساعتين', readTime: '5 دقائق',
    img: 'https://images.unsplash.com/photo-1551958219-acbc630e2914?w=400&h=200&fit=crop',
    fake: false, views: '89.3K'
  },
  {
    id: 6, category: 'economy', catColor: '#00cc88', catBg: 'rgba(0,204,136,0.15)',
    title: 'البنك المركزي الأوروبي يُخفض أسعار الفائدة للمرة الثالثة',
    excerpt: 'قرر البنك المركزي الأوروبي تخفيض أسعار الفائدة بمقدار 25 نقطة أساس في خطوة تهدف إلى تحفيز النمو الاقتصادي.',
    source: 'الفايننشال تايمز', time: 'منذ 3 ساعات', readTime: '3 دقائق',
    img: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&h=200&fit=crop',
    fake: false, views: '6.8K'
  }
];

/* ===== VIDEOS DATA ===== */
const videosData = [
  {
    id: 'dQw4w9WgXcQ', title: 'تقرير خاص: مستقبل الصحافة في عصر الذكاء الاصطناعي',
    thumb: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=220&fit=crop',
    duration: '12:45', views: '234K', date: 'اليوم'
  },
  {
    id: 'L_jWHffIx5E', title: 'حوار مع خبراء: كيف تكشف الأخبار المزيفة؟',
    thumb: 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=400&h=220&fit=crop',
    duration: '28:30', views: '156K', date: 'أمس'
  },
  {
    id: 'Ks-_Mh1QhMc', title: 'تحليل: البيانات الضخمة وتأثيرها على الإعلام',
    thumb: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=220&fit=crop',
    duration: '18:20', views: '98K', date: 'منذ يومين'
  },
  {
    id: 'Xb9a2bLJIzA', title: 'تقرير ميداني: ثورة الإعلام الرقمي في الجزائر',
    thumb: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=220&fit=crop',
    duration: '35:10', views: '321K', date: 'منذ 3 أيام'
  },
  {
    id: 'ysz5S6PUM-U', title: 'لقاء حصري: رصد السمعة الرقمية للمؤسسات',
    thumb: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=220&fit=crop',
    duration: '22:55', views: '67K', date: 'منذ أسبوع'
  },
  {
    id: 'GgnClrx8N2k', title: 'الإعلام السحابي: مستقبل الاستوديوهات الرقمية',
    thumb: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=220&fit=crop',
    duration: '16:40', views: '45K', date: 'منذ أسبوع'
  }
];

/* ===== STATE ===== */
let currentLang = 'ar';
let currentTheme = 'dark';
let currentFilter = 'all';
let newsPage = 1;
let animatedCounters = false;

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  initTicker();
  initDate();
  renderNews();
  renderVideos();
  renderSources();
  renderSentimentMeter();
  initScrollEffects();
  initNavHighlight();
  initCounterObserver();
  drawCharts();
  updateLang();
  setTimeout(() => { document.getElementById('liveIndicator').onclick = () => showToast('جاري الاتصال بالبث المباشر...'); }, 2000);
});

/* ===== DATE ===== */
function initDate() {
  const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const langs = { ar: 'ar-DZ', en: 'en-US', fr: 'fr-FR' };
  document.getElementById('tickerDate').textContent = new Date().toLocaleDateString(langs[currentLang] || 'ar-DZ', opts);
}

/* ===== TICKER ===== */
function initTicker() {
  const tc = document.getElementById('tickerContent');
  tc.innerHTML += tc.innerHTML; // duplicate for seamless loop
}

/* ===== THEME ===== */
function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  document.getElementById('themeIcon').className = currentTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
}

/* ===== LANGUAGE ===== */
function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  const btn = [...document.querySelectorAll('.lang-btn')].find(b => b.textContent.trim() === (lang === 'ar' ? 'ع' : lang.toUpperCase()));
  if (btn) btn.classList.add('active');
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.setAttribute('dir', dir);
  document.documentElement.setAttribute('lang', lang);
  document.body.setAttribute('dir', dir);
  updateLang();
  initDate();
  renderNews();
  renderVideos();
}

function updateLang() {
  const t = i18n[currentLang] || i18n.ar;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = t[key];
      else el.textContent = t[key];
    }
  });
}

/* ===== MOBILE MENU ===== */
function toggleMenu() {
  const links = document.getElementById('navLinks');
  const ham = document.getElementById('hamburger');
  links.classList.toggle('open');
  ham.classList.toggle('open');
}

/* ===== NAVBAR SCROLL ===== */
function initScrollEffects() {
  const navbar = document.getElementById('navbar');
  const scrollBtn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    scrollBtn.classList.toggle('visible', window.scrollY > 400);
  });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ===== NAV HIGHLIGHT ===== */
function initNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'));
        const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => observer.observe(s));
}

/* ===== NEWS RENDER ===== */
function renderNews(filter = 'all') {
  const grid = document.getElementById('newsGrid');
  const filtered = filter === 'all' ? newsData : newsData.filter(n => n.category === filter);
  grid.innerHTML = filtered.map(n => `
    <div class="news-card" onclick="openNewsModal(${n.id})">
      <div class="news-card-img">
        <img src="${n.img}" alt="${n.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=200&fit=crop'"/>
        <span class="news-card-cat" style="background:${n.catBg};color:${n.catColor}">${getCatName(n.category)}</span>
        ${n.fake ? `<div class="fake-badge"><i class="fas fa-exclamation-triangle"></i> مزيف</div>` : ''}
      </div>
      <div class="news-card-body">
        <div class="news-card-meta">
          <span><i class="fas fa-clock"></i> ${n.time}</span>
          <span><i class="fas fa-eye"></i> ${n.views}</span>
          <span><i class="fas fa-book-open"></i> ${n.readTime}</span>
        </div>
        <h3>${n.title}</h3>
        <p>${n.excerpt}</p>
        <div class="news-card-footer">
          <button class="news-read-btn"><span>اقرأ المزيد</span> <i class="fas fa-arrow-${currentLang === 'ar' ? 'left' : 'right'}"></i></button>
          <button class="news-share-btn" onclick="event.stopPropagation();shareNews(${n.id})"><i class="fas fa-share-alt"></i></button>
        </div>
      </div>
    </div>
  `).join('');
}

function getCatName(cat) {
  const t = i18n[currentLang];
  const map = { tech: t.filter_tech, politics: t.filter_politics, economy: t.filter_economy, sports: t.filter_sports };
  return map[cat] || cat;
}

function filterNews(filter) {
  currentFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  renderNews(filter);
}

function loadMoreNews() {
  showToast('تم تحميل المزيد من الأخبار');
}

function openNewsModal(id) {
  const n = newsData.find(x => x.id === id);
  if (!n) return;
  const content = `
    <img src="${n.img}" style="width:100%;border-radius:10px;margin-bottom:20px;" alt="${n.title}" onerror="this.style.display='none'"/>
    <div style="display:flex;gap:10px;align-items:center;margin-bottom:16px;flex-wrap:wrap;">
      <span style="background:${n.catBg};color:${n.catColor};padding:4px 14px;border-radius:20px;font-size:0.8rem;font-weight:700">${getCatName(n.category)}</span>
      ${n.fake ? `<span style="background:rgba(255,68,68,0.15);color:#ff4444;padding:4px 14px;border-radius:20px;font-size:0.8rem;font-weight:700"><i class="fas fa-exclamation-triangle"></i> خبر مزيف</span>` : '<span style="background:rgba(0,204,136,0.15);color:#00cc88;padding:4px 14px;border-radius:20px;font-size:0.8rem;font-weight:700"><i class="fas fa-check-circle"></i> موثوق</span>'}
    </div>
    <h2 style="font-size:1.3rem;font-weight:900;margin-bottom:16px;line-height:1.5">${n.title}</h2>
    <div style="display:flex;gap:16px;color:var(--text-muted);font-size:0.8rem;margin-bottom:20px;">
      <span><i class="fas fa-newspaper"></i> ${n.source}</span>
      <span><i class="fas fa-clock"></i> ${n.time}</span>
      <span><i class="fas fa-eye"></i> ${n.views} مشاهدة</span>
    </div>
    <p style="line-height:1.9;color:var(--text-secondary);font-size:0.95rem">${n.excerpt}</p>
    <p style="line-height:1.9;color:var(--text-secondary);font-size:0.95rem;margin-top:14px">استمراراً لهذا الموضوع، تُشير التقارير إلى أن الأحداث المتسارعة تُلقي بظلالها على المشهد الإعلامي الدولي، فيما يترقب المراقبون التطورات القادمة بكثير من الاهتمام والمتابعة الدقيقة لكل تفصيل.</p>
    <div style="display:flex;gap:10px;margin-top:24px;flex-wrap:wrap;">
      <button class="btn-primary" onclick="closeModal();showToast('تم حفظ الخبر')"><i class="fas fa-bookmark"></i> حفظ</button>
      <button class="btn-secondary" onclick="shareNews(${n.id})"><i class="fas fa-share-alt"></i> مشاركة</button>
    </div>
  `;
  openModal(content);
}

function shareNews(id) {
  showToast('تم نسخ رابط الخبر للمشاركة');
}

/* ===== VIDEOS RENDER ===== */
function renderVideos() {
  const grid = document.getElementById('videosGrid');
  grid.innerHTML = videosData.map(v => `
    <div class="video-card" onclick="playVideo('${v.id}')">
      <div class="video-thumb">
        <img src="${v.thumb}" alt="${v.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=220&fit=crop'"/>
        <div class="video-play-btn"><i class="fas fa-play"></i></div>
        <div class="video-duration">${v.duration}</div>
      </div>
      <div class="video-info">
        <h3>${v.title}</h3>
        <div class="video-meta">
          <span><i class="fas fa-eye"></i> ${v.views}</span>
          <span><i class="fas fa-calendar"></i> ${v.date}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function playVideo(id) {
  const modal = document.getElementById('videoModal');
  const frame = document.getElementById('videoFrame');
  frame.src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
  const modal = document.getElementById('videoModal');
  document.getElementById('videoFrame').src = '';
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

/* ===== AI TOOLS ===== */
function switchAI(panel) {
  document.querySelectorAll('.ai-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.ai-tab').forEach(t => t.classList.remove('active'));
  document.getElementById(`ai-${panel}`).classList.add('active');
  event.currentTarget.classList.add('active');
}

function analyzeFakeNews() {
  const text = document.getElementById('fakeNewsInput').value.trim();
  if (!text) { showToast('الرجاء إدخال نص الخبر أولاً'); return; }
  const btn = event.currentTarget;
  btn.disabled = true;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري التحليل...';
  setTimeout(() => {
    btn.disabled = false;
    btn.innerHTML = '<i class="fas fa-search"></i> تحليل الآن';
    const score = Math.random();
    const isFake = score > 0.55;
    const pct = Math.round(isFake ? score * 100 : (1 - score) * 100);
    const color = isFake ? '#ff4444' : '#00cc88';
    const label = isFake ? 'محتمل كذب' : 'موثوق';
    const icon = isFake ? 'fa-times-circle' : 'fa-check-circle';
    const result = document.getElementById('fakeNewsResult');
    result.classList.add('show');
    result.innerHTML = `
      <div class="result-header" style="color:${color}">
        <i class="fas ${icon}"></i> ${label} — نسبة الدقة ${pct}%
      </div>
      <div class="score-bar"><div class="score-fill" style="width:${pct}%;background:${color}"></div></div>
      <p style="font-size:0.85rem;color:var(--text-secondary);margin-top:12px;line-height:1.6">
        ${isFake
          ? `⚠️ يُحتمل أن هذا الخبر يحتوي على معلومات مضللة أو غير موثقة. تحقق من المصدر الأصلي واستشر مصادر متعددة قبل التصديق أو النشر.`
          : `✅ الخبر يبدو موثوقاً ومطابقاً للمعطيات المتاحة. يُنصح دائماً بالتحقق المزدوج من مصادر مستقلة.`}
      </p>
      <div class="result-tags">
        <span class="result-tag"><i class="fas fa-robot"></i> تحليل آلي</span>
        <span class="result-tag"><i class="fas fa-database"></i> قاعدة بيانات ضخمة</span>
        <span class="result-tag"><i class="fas fa-clock"></i> تحليل فوري</span>
      </div>`;
  }, 2200);
}

function analyzeSentiment() {
  const text = document.getElementById('sentimentInput').value.trim();
  if (!text) { showToast('الرجاء إدخال النص أولاً'); return; }
  const btn = event.currentTarget;
  btn.disabled = true;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> يُحلَّل...';
  setTimeout(() => {
    btn.disabled = false;
    btn.innerHTML = '<i class="fas fa-heart"></i> تحليل المشاعر';
    const sentiments = [
      { label: 'إيجابي', color: '#00cc88', icon: 'fa-smile', pct: Math.round(Math.random() * 50 + 30) },
      { label: 'محايد', color: '#ffaa00', icon: 'fa-meh', pct: Math.round(Math.random() * 20 + 10) },
      { label: 'سلبي', color: '#ff4444', icon: 'fa-frown', pct: 0 }
    ];
    sentiments[2].pct = 100 - sentiments[0].pct - sentiments[1].pct;
    const dominant = sentiments.reduce((a, b) => a.pct > b.pct ? a : b);
    const result = document.getElementById('sentimentResult');
    result.classList.add('show');
    result.innerHTML = `
      <div class="result-header" style="color:${dominant.color}">
        <i class="fas ${dominant.icon}"></i> المشاعر السائدة: ${dominant.label}
      </div>
      ${sentiments.map(s => `
        <div style="margin:10px 0">
          <div style="display:flex;justify-content:space-between;font-size:0.82rem;margin-bottom:4px">
            <span style="font-weight:600">${s.label}</span><span style="color:${s.color};font-weight:700">${s.pct}%</span>
          </div>
          <div class="score-bar"><div class="score-fill" style="width:${s.pct}%;background:${s.color}"></div></div>
        </div>`).join('')}
      <div class="result-tags" style="margin-top:16px">
        <span class="result-tag">تحليل سياقي</span>
        <span class="result-tag">NLP متقدم</span>
        <span class="result-tag">97.3% دقة</span>
      </div>`;
  }, 1800);
}

function analyzeReputation() {
  const name = document.getElementById('repInput').value.trim();
  if (!name) { showToast('الرجاء إدخال اسم المؤسسة أو الشخص'); return; }
  const btn = event.currentTarget;
  btn.disabled = true;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> يرصد...';
  setTimeout(() => {
    btn.disabled = false;
    btn.innerHTML = '<i class="fas fa-chart-pie"></i> رصد السمعة';
    const score = Math.round(Math.random() * 30 + 60);
    const color = score >= 75 ? '#00cc88' : score >= 55 ? '#ffaa00' : '#ff4444';
    const result = document.getElementById('repResult');
    result.classList.add('show');
    result.innerHTML = `
      <div class="result-header" style="color:${color}">
        <i class="fas fa-star"></i> مؤشر سمعة "${name}": ${score}/100
      </div>
      <div class="score-bar" style="height:12px">
        <div class="score-fill" style="width:${score}%;background:linear-gradient(90deg,${color},${color}88)"></div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:16px">
        ${[
          ['ذكر إيجابي', `${Math.round(score * 0.8)}%`, '#00cc88'],
          ['ذكر سلبي', `${Math.round((100 - score) * 0.5)}%`, '#ff4444'],
          ['وسائل إعلام', `${Math.round(Math.random() * 200 + 50)}`, '#00b4ff'],
          ['وسائل التواصل', `${Math.round(Math.random() * 2000 + 500)}`, '#f5a623']
        ].map(([label, val, color]) => `
          <div style="background:var(--bg-secondary);border:1px solid var(--border);border-radius:10px;padding:12px;text-align:center">
            <div style="font-size:1.2rem;font-weight:900;color:${color}">${val}</div>
            <div style="font-size:0.75rem;color:var(--text-muted);margin-top:4px">${label}</div>
          </div>`).join('')}
      </div>`;
  }, 2000);
}

function summarizeContent() {
  const text = document.getElementById('summaryInput').value.trim();
  if (!text) { showToast('الرجاء إدخال النص المراد تلخيصه'); return; }
  const btn = event.currentTarget;
  btn.disabled = true;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> يلخص...';
  setTimeout(() => {
    btn.disabled = false;
    btn.innerHTML = '<i class="fas fa-magic"></i> تلخيص ذكي';
    const words = text.split(' ').length;
    const reducePct = Math.round(Math.random() * 20 + 65);
    const summary = text.length > 200
      ? text.substring(0, Math.floor(text.length * 0.35)) + '...'
      : 'النص قصير جداً للتلخيص. يُنصح بإدخال مقال أو تقرير أطول للحصول على ملخص دقيق وشامل.';
    const result = document.getElementById('summaryResult');
    result.classList.add('show');
    result.innerHTML = `
      <div class="result-header" style="color:var(--accent)">
        <i class="fas fa-compress-alt"></i> ملخص ذكي — تم تقليص ${reducePct}% من الحجم
      </div>
      <p style="line-height:1.8;color:var(--text-secondary);font-size:0.9rem;margin:12px 0;padding:14px;background:var(--bg-primary);border-radius:8px;border-right:3px solid var(--accent)">${summary}</p>
      <div class="result-tags">
        <span class="result-tag"><i class="fas fa-font"></i> ${words} كلمة أصلية</span>
        <span class="result-tag"><i class="fas fa-compress"></i> تقليص ${reducePct}%</span>
        <span class="result-tag"><i class="fas fa-clock"></i> ثانية واحدة</span>
      </div>`;
  }, 2500);
}

/* ===== COUNTERS ===== */
function initCounterObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animatedCounters) {
        animatedCounters = true;
        animateCounters();
      }
    });
  }, { threshold: 0.3 });
  const section = document.getElementById('analytics');
  if (section) observer.observe(section);
  
  // Also observe hero stats
  const hero = document.getElementById('home');
  if (hero) {
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) animateHeroStats();
      });
    }, { threshold: 0.5 });
    heroObserver.observe(hero);
  }
}

function animateCounters() {
  document.querySelectorAll('.counter').forEach(el => {
    const target = parseInt(el.getAttribute('data-target'));
    animateNumber(el, 0, target, 2000);
  });
}

function animateHeroStats() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = parseInt(el.getAttribute('data-target'));
    animateNumber(el, 0, target, 2500);
  });
}

function animateNumber(el, start, end, duration) {
  const startTime = performance.now();
  const update = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(start + (end - start) * eased).toLocaleString('ar-DZ');
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = end.toLocaleString('ar-DZ');
  };
  requestAnimationFrame(update);
}

/* ===== SOURCES LIST ===== */
function renderSources() {
  const sources = [
    { name: 'رويترز', pct: 85 }, { name: 'بي بي سي عربي', pct: 72 },
    { name: 'الجزيرة', pct: 68 }, { name: 'العربية', pct: 61 },
    { name: 'فرانس 24', pct: 54 }
  ];
  document.getElementById('sourcesList').innerHTML = sources.map((s, i) => `
    <div class="source-item">
      <div class="source-rank">${i + 1}</div>
      <div class="source-bar-wrap">
        <div class="source-name">${s.name}</div>
        <div class="source-bar"><div class="source-fill" style="width:${s.pct}%"></div></div>
      </div>
      <div class="source-pct">${s.pct}%</div>
    </div>`).join('');
}

/* ===== SENTIMENT METER ===== */
function renderSentimentMeter() {
  const data = [
    { label: 'إيجابي', pct: 42, color: '#00cc88' },
    { label: 'محايد', pct: 35, color: '#ffaa00' },
    { label: 'سلبي', pct: 23, color: '#ff4444' }
  ];
  document.getElementById('sentimentMeter').innerHTML = data.map(d => `
    <div class="sentiment-row">
      <span class="sentiment-label" style="color:${d.color}">${d.label}</span>
      <div class="sentiment-bar-wrap">
        <div class="sentiment-bar">
          <div class="sentiment-fill" style="width:${d.pct}%;background:${d.color}"></div>
        </div>
      </div>
      <span class="sentiment-pct" style="color:${d.color}">${d.pct}%</span>
    </div>`).join('');
}

/* ===== CHARTS ===== */
function drawCharts() {
  drawCategoryChart();
  drawFakeChart();
}

function drawCategoryChart() {
  const canvas = document.getElementById('categoryChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const data = [
    { label: 'تقنية', value: 35, color: '#00b4ff' },
    { label: 'سياسة', value: 25, color: '#ff6b35' },
    { label: 'اقتصاد', value: 20, color: '#00cc88' },
    { label: 'رياضة', value: 12, color: '#f5a623' },
    { label: 'أخرى', value: 8, color: '#9b59b6' }
  ];
  const W = canvas.width, H = canvas.height;
  ctx.clearRect(0, 0, W, H);
  const cx = W * 0.38, cy = H / 2, R = Math.min(cx, cy) * 0.8, r = R * 0.55;
  let angle = -Math.PI / 2;
  const total = data.reduce((s, d) => s + d.value, 0);
  data.forEach(d => {
    const slice = (d.value / total) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, R, angle, angle + slice);
    ctx.closePath();
    ctx.fillStyle = d.color;
    ctx.fill();
    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--bg-card').trim() || '#0d1f3a';
    ctx.lineWidth = 3;
    ctx.stroke();
    angle += slice;
  });
  // hole
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--bg-card').trim() || '#0d1f3a';
  ctx.fill();
  // legend
  const lx = W * 0.72, ly = H * 0.15;
  data.forEach((d, i) => {
    ctx.fillStyle = d.color;
    ctx.beginPath();
    ctx.arc(lx, ly + i * 34 + 8, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#7ba3c8';
    ctx.font = '13px Cairo, sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText(`${d.label} (${d.value}%)`, lx - 16, ly + i * 34 + 13);
  });
}

function drawFakeChart() {
  const canvas = document.getElementById('fakeChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const days = ['س', 'أ', 'ث', 'ر', 'خ', 'ج', 'ح'];
  const realData = [65, 72, 68, 85, 78, 92, 88];
  const fakeData = [22, 35, 28, 40, 31, 25, 18];
  const W = canvas.width, H = canvas.height;
  ctx.clearRect(0, 0, W, H);
  const pad = { top: 20, right: 20, bottom: 36, left: 36 };
  const cW = W - pad.left - pad.right, cH = H - pad.top - pad.bottom;
  const max = 100;
  // grid
  for (let i = 0; i <= 4; i++) {
    const y = pad.top + cH - (i / 4) * cH;
    ctx.strokeStyle = 'rgba(0,180,255,0.08)';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(pad.left + cW, y); ctx.stroke();
    ctx.fillStyle = '#4a6a8a'; ctx.font = '11px Cairo'; ctx.textAlign = 'right';
    ctx.fillText((i * 25) + '%', pad.left - 6, y + 4);
  }
  // draw line
  function drawLine(data, color, fill) {
    const pts = data.map((v, i) => ({ x: pad.left + (i / (data.length - 1)) * cW, y: pad.top + cH - (v / max) * cH }));
    if (fill) {
      ctx.beginPath();
      ctx.moveTo(pts[0].x, pad.top + cH);
      pts.forEach(p => ctx.lineTo(p.x, p.y));
      ctx.lineTo(pts[pts.length - 1].x, pad.top + cH);
      ctx.closePath();
      const grad = ctx.createLinearGradient(0, pad.top, 0, pad.top + cH);
      grad.addColorStop(0, color + '44');
      grad.addColorStop(1, color + '00');
      ctx.fillStyle = grad;
      ctx.fill();
    }
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2.5;
    ctx.lineJoin = 'round';
    pts.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
    ctx.stroke();
    pts.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    });
  }
  drawLine(realData, '#00b4ff', true);
  drawLine(fakeData, '#ff4444', false);
  // x labels
  ctx.fillStyle = '#4a6a8a'; ctx.font = '11px Cairo'; ctx.textAlign = 'center';
  days.forEach((d, i) => ctx.fillText(d, pad.left + (i / (days.length - 1)) * cW, H - 10));
  // legend
  [['أخبار حقيقية', '#00b4ff'], ['أخبار مزيفة', '#ff4444']].forEach(([label, color], i) => {
    ctx.fillStyle = color;
    ctx.fillRect(pad.left + i * 140, 4, 12, 12);
    ctx.fillStyle = '#7ba3c8'; ctx.font = '12px Cairo'; ctx.textAlign = 'right';
    ctx.fillText(label, pad.left + i * 140 + 90, 15);
  });
}

/* ===== STUDIO TOOLS ===== */
function openStudioTool(tool) {
  const tools = {
    editor: { title: 'محرر المحتوى الذكي', icon: 'fa-edit', desc: 'محرر نصي متقدم مع تصحيح تلقائي للأخطاء الإملائية والنحوية، واقتراحات تحريرية ذكية مدعومة بالذكاء الاصطناعي. يدعم التحرير التعاوني في الوقت الفعلي.' },
    graphics: { title: 'مُنشئ الغرافيك الإعلامي', icon: 'fa-image', desc: 'أداة متطورة لتصميم الإنفوغرافيك والصور الإخبارية تلقائياً. استورد بياناتك وسيُنشئ الذكاء الاصطناعي تصاميم احترافية في ثوانٍ.' },
    broadcast: { title: 'منصة البث المباشر', icon: 'fa-broadcast-tower', desc: 'بث مباشر بجودة 4K مع تحكم كامل في الصوت والصورة، وإمكانية الوصول من أي جهاز. يدعم البث على منصات متعددة في آنٍ واحد.' },
    social: { title: 'أداة النشر التلقائي', icon: 'fa-share-alt', desc: 'جدولة ونشر المحتوى على جميع منصات التواصل الاجتماعي بضغطة واحدة مع تحليل أفضل أوقات النشر وتتبع التفاعل.' },
    archive: { title: 'الأرشيف السحابي الذكي', icon: 'fa-archive', desc: 'تخزين لامحدود وفهرسة ذكية لكل محتواك الإعلامي. بحث فوري بالنص أو الصورة أو الصوت بفضل الذكاء الاصطناعي.' },
    team: { title: 'لوحة إدارة الفريق', icon: 'fa-users-cog', desc: 'نظام متكامل لإدارة المهام وتوزيع الأدوار وتتبع الإنجازات لفريق التحرير. يشمل تقارير الأداء والجدولة الذكية.' }
  };
  const t = tools[tool];
  if (!t) return;
  openModal(`
    <div style="text-align:center;margin-bottom:24px">
      <div style="width:72px;height:72px;background:rgba(0,180,255,0.1);border:2px solid rgba(0,180,255,0.3);border-radius:20px;display:inline-flex;align-items:center;justify-content:center;font-size:2rem;color:var(--accent);margin-bottom:16px">
        <i class="fas ${t.icon}"></i>
      </div>
      <h2 style="font-size:1.4rem;font-weight:900;margin-bottom:8px">${t.title}</h2>
      <p style="color:var(--text-secondary);line-height:1.7">${t.desc}</p>
    </div>
    <div style="background:var(--bg-secondary);border-radius:12px;padding:20px;margin-bottom:20px;border:1px solid var(--border)">
      <div style="display:flex;align-items:center;gap:8px;color:var(--success);font-weight:700;margin-bottom:8px">
        <i class="fas fa-check-circle"></i> الأداة جاهزة للاستخدام
      </div>
      <p style="font-size:0.85rem;color:var(--text-muted)">الاشتراك المطلوب: Pro أو Team</p>
    </div>
    <button class="btn-primary full-width" onclick="closeModal();showToast('تم تفعيل الأداة بنجاح!')">
      <i class="fas fa-rocket"></i> تشغيل الأداة
    </button>
  `);
}

/* ===== CONTACT ===== */
function submitContact(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الإرسال...';
  setTimeout(() => {
    btn.disabled = false;
    btn.innerHTML = '<i class="fas fa-paper-plane"></i> إرسال الرسالة';
    e.target.reset();
    showToast('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً');
  }, 2000);
}

/* ===== NEWSLETTER ===== */
function subscribeNewsletter() {
  const email = document.getElementById('newsletterEmail').value.trim();
  if (!email || !email.includes('@')) { showToast('الرجاء إدخال بريد إلكتروني صحيح'); return; }
  document.getElementById('newsletterEmail').value = '';
  showToast('تم الاشتراك في النشرة الإخبارية بنجاح!');
}

/* ===== MODAL ===== */
function openModal(content) {
  document.getElementById('modalContent').innerHTML = content;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ===== TOAST ===== */
function showToast(msg, duration = 3000) {
  const toast = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

/* ===== KEYBOARD SHORTCUTS ===== */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    closeVideoModal();
    const navLinks = document.getElementById('navLinks');
    if (navLinks.classList.contains('open')) toggleMenu();
  }
});

/* ===== SMOOTH ANCHOR LINKS ===== */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 102;
      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
      const navLinks = document.getElementById('navLinks');
      if (navLinks.classList.contains('open')) toggleMenu();
    }
  });
});

/* ===== LIVE UPDATES SIMULATION ===== */
setInterval(() => {
  const ticker = document.getElementById('tickerContent');
  if (ticker) {
    const breakingItems = [
      '🔴 تحديث: Digital Eye تكشف 37 خبراً مزيفاً في الساعة الماضية',
      '📡 عاجل: مؤتمر إعلامي دولي ينطلق غداً في باريس',
      '⚡ تقنية: اختراق جديد في مجال معالجة اللغة الطبيعية بالعربية',
      '🌍 عالم: تقرير أممي يرصد انتشار المعلومات المضللة عالمياً',
    ];
    const newSpan = document.createElement('span');
    newSpan.textContent = breakingItems[Math.floor(Math.random() * breakingItems.length)];
    ticker.appendChild(newSpan);
    if (ticker.children.length > 20) ticker.removeChild(ticker.firstChild);
  }
}, 15000);

console.log('%c🌐 Digital Eye Platform v1.0', 'color:#00b4ff;font-size:18px;font-weight:bold');
console.log('%c✅ جميع الأنظمة تعمل بشكل طبيعي', 'color:#00cc88;font-size:13px');
