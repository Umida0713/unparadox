'use strict';

// ── Translations ────────────────────────────────────────────────────
const translations = {
  en: {
    nav_about: 'About',
    nav_services: 'Services',
    nav_value: 'Why Me',
    nav_experience: 'Experience',
    nav_who: 'Clients',
    nav_testimonials: 'Testimonials',
    nav_cta: 'Get in Touch',
    hero_eyebrow: 'Tokyo-based · JP · EN · RU',
    hero_heading: 'I help businesses<br /><em>communicate</em>, sell, and<br />represent their brand<br />in Japan.',
    hero_sub: 'Multilingual support in Japanese, English, and Russian — from client communication to on-the-ground representation.',
    hero_motto: 'In a world of endless options, choosing UNPARADOX is the obvious decision, because I help YOU become the obvious choice for your clients.',
    hero_cta: 'Get in Touch',
    about_label: 'About',
    about_title: 'A bridge between cultures, languages, and people.',
    about_p1: 'I\'m a Tokyo-based multilingual professional working in Japanese, English, and Russian. I\'ve spent the past 9 years in international environments, where communication across cultures isn\'t just important — it\'s everything.',
    about_p2: 'What I naturally became good at is helping people understand each other, build trust, and move conversations forward — whether in meetings, negotiations, or everyday communication. I adapt quickly, I\'m comfortable in new environments, and I\'m naturally good at building connections.',
    about_p3: 'This often turns into real business results — whether that\'s building relationships, supporting negotiations, or helping close deals.',
    services_label: 'Services',
    services_title: 'What I do',
    card1_title: 'Translation & Interpretation',
    card1_body: 'I provide translation and interpretation in Japanese, English, and Russian. With experience in corporate business settings, international events, and media, I understand how important accuracy and nuance are — especially in business contexts.',
    card2_title: 'Sales & Negotiation',
    card2_body: 'I attend client meetings with you and take it from there — doing the product presentation, negotiation, and closing. I also review emails and pitches before they go out, advising on how to make them more appealing and valuable to the client.',
    card2_li1: 'Client meetings (online or in person) in JP, EN, or RU',
    card2_li2: 'Sales presentations and negotiations',
    card2_li3: 'Email and pitch review before sending',
    card3_title: 'Networking & Representation',
    card3_body: 'I attend conferences, expos, and networking events on your behalf — introducing your business, building connections, and representing your brand in Japan so you can focus on your core work.',
    card3_li1: 'Events, expos, and conferences in Tokyo',
    card3_li2: 'Introductions and relationship building',
    card3_li3: 'On-the-ground presence for overseas businesses',
    card3_note: 'Especially useful if you\'re based overseas or simply don\'t have time to attend — you stay focused while I represent you on the ground.',
    card4_title: 'Coaching & Advisory',
    card4_body: 'I help you improve how you pitch and communicate with clients — not textbook advice, but guidance grounded in real experience working across cultures and industries.',
    card4_li1: 'Sales and pitch strategy',
    card4_li2: 'How to present more value to your clients',
    card4_li3: 'Communication approach tailored to Japanese business culture',
    pricing_label: 'Pricing',
    pricing_body: 'Hourly rate + commission on closed deals. No base salary required — you only pay for the hours I put in, making this a cost-efficient option for startups, sole proprietors, and entrepreneurs.',
    value_label: 'Why work with me',
    value_title: 'The value I bring',
    pullquote: 'I can walk into a room and make conversations work.',
    value_item1: 'Multilingual communication in Japanese, English, and Russian in real business settings',
    value_item2: 'Strong interpersonal and networking skills',
    value_item3: 'Experience working in a Japanese corporate environment',
    value_item4: 'Ability to represent your business professionally in Japan',
    value_item5: 'A combination of sales, communication, and cultural understanding',
    value_item6: 'Focused on real outcomes and long-term relationships — not just translation, but results',
    exp_label: 'Background',
    exp_title: 'Experience',
    exp_intro: 'I\'ve worked across corporate and international environments, supporting communication across different industries.',
    exp_li1_title: '9 years within a Japanese company operating across international markets',
    exp_li1_desc: 'Background in HR, overseas project development, and corporate strategy—shaping a deep understanding of how businesses operate, communicate, and make decisions.',
    exp_li2_title: 'Fluent in Japanese, English, and Russian',
    exp_li2_desc: 'Bridging cultural and business gaps with clarity and precision in real client interactions.',
    exp_li3_title: 'Business & legal translation and interpretation',
    exp_li3_desc: 'Ensuring not just accuracy, but contextual nuance and persuasive impact.',
    exp_li4_title: 'Interpreting at international events and exhibitions',
    exp_li4_desc: 'Supporting Japanese and global brands in fast-paced, client-facing environments where precision and presence matter.',
    exp_li5_title: 'Cross-cultural collaboration',
    exp_li5_desc: 'Working with clients and teams across different expectations, communication styles, and business cultures.',
    exp_li6_title: 'Media interpretation experience',
    exp_li6_desc: 'Consecutive interpretation for Japanese TV programs—where clarity, timing, and composure under pressure are critical.',
    exp_closing: 'With this experience, I step into critical client interactions—<span class="accent">helping you communicate clearly, navigate cultural nuance, and ensure your brand is understood, valued, and chosen</span>.',
    who_label: 'Clients',
    who_title: 'Who I help',
    who_item1: 'Startups',
    who_item2: 'Small businesses',
    who_item3: 'Japanese companies expanding internationally',
    who_item4: 'Overseas companies entering or operating in Japan',
    contact_label: 'Contact',
    contact_title: 'Let\'s Connect.',
    contact_sub: 'Interested in working together? Reach out.',
    contact_email: 'Email',
    contact_linkedin: 'LinkedIn',
    calendly_text: 'Not sure where to start? Book a short call and we can explore your situation.',
    calendly_btn: 'Book a Call',
    testimonials_label: 'Testimonials',
    testimonials_title: 'What clients say',
    t1_quote: 'I met Umida during my first trip to Japan while showing at Tranoï. What began as a simple conversation at my booth quickly turned into an invaluable collaboration. She effortlessly bridged the language gap and, with genuine enthusiasm, helped me navigate the local boutique landscape. Within no time she introduced me to Boutique W, opening doors that would have been difficult to access alone. Umida is incredibly savvy, results-driven, and has a rare gift for language and human connection. Simply put, I wouldn\'t consider doing business in Japan without her.',
    t1_badge: '🇩🇪 Germany',
    t1_role: 'Fashion Designer & Founder, Dennis Chuene clothing brand',
    t2_quote: 'Umida handled communication, coordination and kept the whole process on track, while also supporting positioning and sales conversations. It was a really smooth and enjoyable collaboration — I always felt things were clear and taken care of. She is a rare mix of clarity, intuition and consistency. Working with Umida felt effortless, focused and truly aligned.',
    t2_badge: '🇷🇴 Romania',
    t2_role: 'Owner & Designer, DeCorina Hats',
    t3_quote: 'Umida is the most unique blend of bubbly extroversion and serious sales-closer. She communicates effectively to build rapport and smash through any language or cultural barriers. She adds significant value to any team with her eye for detail and truth-based feedback — and that\'s on top of her world-class sales skills! After working with her once, I knew she would be a key to success on my future projects. Can\'t recommend her enough!',
    t3_badge: '🇺🇸 USA',
    t3_role: 'Founder, Glokyo',
    t4_quote: 'Umida is a highly skilled person. Clear communication, a warm and welcoming atmosphere, and professional attention to detail are her strong suits. She helped me adjust my branding for the local market, explored potential pitfalls, and improved my presentation pitch. Umida helped me open the most valuable doors in Japan to expand my business. If you\'re looking to adapt and integrate into Japan, I can\'t think of better help.',
    t4_badge: '🇱🇻 Latvia',
    t4_role: 'Founder, Guest House Lapa',
    t5_quote: 'Umida is a bubbly, smart, and professional woman with a strong command of multiple languages. It was refreshing to have someone ask me real questions about my business, and — unlike ChatGPT — she pushed back when something sounded off. She\'s undoubtedly a super helpful, driven person and I\'m confident she\'ll work hard to support you however she can!',
    t5_badge: '🇺🇸 USA',
    t5_role: 'Founder, Sumeba.org',
    footer_text: '© 2026 Unparadox — Tokyo, Japan',
  },

  ja: {
    nav_about: '概要',
    nav_services: 'サービス',
    nav_value: '選ぶ理由',
    nav_experience: '経歴',
    nav_who: 'クライアント',
    nav_testimonials: 'お客様の声',
    nav_cta: 'お問い合わせ',
    hero_eyebrow: '東京在住 · 日本語 · English · Русский',
    hero_heading: '日本市場において、企業が「選ばれる存在」となるための<br />コミュニケーション・営業・ブランド表現を支援しています。',
    hero_sub: '日本語・英語・ロシア語に対応し、異文化間のビジネスコミュニケーションを実務レベルでサポートします。',
    hero_motto: '選択肢が溢れる時代において、UNPARADOXを選ぶことは自然な判断です。クライアント企業が、その顧客にとって「選ばれる存在」となるための支援を行っています。',
    hero_cta: 'お問い合わせ',
    about_label: '概要',
    about_title: '文化・言語・人をつなぐ存在として',
    about_p1: '東京を拠点に、日本語・英語・ロシア語の3言語で活動しています。これまで9年間、国際的な環境の中で業務に携わってきました。',
    about_p2: '異なる文化や価値観が交わるビジネスの現場では、単なる言語理解にとどまらず、「どのように伝えるか」が結果に大きく影響します。',
    about_p3: '商談・交渉・日々のコミュニケーションにおいて、その橋渡し役となり、相互理解と信頼関係の構築を支援しています。その結果として、関係構築の促進、交渉の円滑化、成果につながるコミュニケーションの実現に貢献します。',
    services_label: '提供サービス',
    services_title: '提供サービス',
    card1_title: '通訳・翻訳',
    card1_body: '日本語・英語・ロシア語における通訳・翻訳サービスを提供しています。企業環境・国際イベント・メディア対応の経験を活かし、正確性だけでなく、文脈や意図を踏まえた伝達を重視しています。',
    card2_title: '営業・交渉サポート',
    card2_body: 'クライアントとの打ち合わせに同席し、プレゼンテーション、交渉、クロージングまで一貫してサポートします。また、事前のメールや提案資料についても内容確認および改善提案を行います。',
    card2_li1: '商談（オンライン／対面）',
    card2_li2: 'プレゼンテーションおよび交渉支援',
    card2_li3: 'メール・提案内容のレビュー',
    card3_title: 'ネットワーキング・現地対応',
    card3_body: '展示会・イベント・交流会などにおいて、貴社の代理として参加し、関係構築や情報収集を行います。海外企業の日本市場における活動を、現地から支援します。',
    card3_li1: '東京でのイベント・展示会・カンファレンス',
    card3_li2: '紹介・関係構築',
    card3_li3: '海外企業向けの現地プレゼンス',
    card3_note: '海外拠点の企業や、現地対応の時間が確保できない場合にも有効です。本業に集中いただく中で、現地での活動を担います。',
    card4_title: 'コンサルティング・アドバイザリー',
    card4_body: 'クライアントとのコミュニケーションや営業手法について、実務経験に基づいた改善提案を行います。',
    card4_li1: '営業戦略および提案方法の見直し',
    card4_li2: '価値の伝え方の最適化',
    card4_li3: '日本市場に適したコミュニケーション設計',
    pricing_label: '料金について',
    pricing_body: '業務内容や関与の度合いに応じて、個別にご提案しております。主に、商談・交渉・クライアント対応など、結果に影響する重要な場面での支援を行っています。初回は単発でのご依頼から開始し、必要に応じて継続的なサポートへと展開することも可能です。',
    value_label: '選ぶ理由',
    value_title: '提供できる価値',
    pullquote: 'どのような場面においても、会話を機能させることができます。',
    value_item1: '日本語・英語・ロシア語による実務対応力',
    value_item2: '異文化間コミュニケーションにおける経験',
    value_item3: '日本企業での実務経験',
    value_item4: 'クライアントとの関係構築力',
    value_item5: '営業・コミュニケーション・文化理解のバランス',
    value_item6: '単なる通訳にとどまらない、成果につながる支援',
    exp_label: '経歴',
    exp_title: '経験',
    exp_intro: 'コーポレートおよび国際的な環境で、さまざまな業界におけるコミュニケーションを支援してきました。',
    exp_li1_title: '国際市場で展開する日系企業にて9年間勤務',
    exp_li1_desc: '人事、海外プロジェクト開発、コーポレートストラテジーの経験を通じて、企業の運営・意思決定・コミュニケーションへの理解を深めてきました。',
    exp_li2_title: '日本語・英語・ロシア語に堪能',
    exp_li2_desc: '実際のクライアント対応において、文化的・ビジネス的なギャップを的確に橋渡しします。',
    exp_li3_title: 'ビジネス・法律分野における翻訳・通訳',
    exp_li3_desc: '正確さに加え、文脈理解と説得力ある表現を重視しています。',
    exp_li4_title: '国際イベント・展示会での通訳',
    exp_li4_desc: 'スピードと精度が求められる環境において、日本企業およびグローバルブランドの対応を支援。',
    exp_li5_title: '異文化間コラボレーション',
    exp_li5_desc: '多様な価値観・コミュニケーションスタイルを持つチームやクライアントとの協働経験。',
    exp_li6_title: 'メディア通訳経験',
    exp_li6_desc: '日本のテレビ番組における逐次通訳—明確さ、タイミング、冷静な対応が求められる環境での実務経験。',
    exp_closing: 'この経験により、重要なクライアントとのやり取りに即座に対応できます。<span class="accent">あなたのコミュニケーションを明確に、文化的ニュアンスをナビゲートし、自信を持って成約へと導きます</span>。',
    who_label: 'クライアント',
    who_title: '主な対象',
    who_item1: 'スタートアップ・成長企業',
    who_item2: '中小企業',
    who_item3: '海外展開を進める日本企業',
    who_item4: '日本市場への参入・展開を行う海外企業',
    contact_label: 'お問い合わせ',
    contact_title: 'お問い合わせ',
    contact_sub: 'ご興味をお持ちいただけましたら、お気軽にご連絡ください。',
    contact_email: '→ メール',
    contact_linkedin: '→ LinkedIn',
    calendly_text: '内容がまだ明確でない場合でも、まずはご相談ベースでお話しできればと思います。',
    calendly_btn: '通話を予約する',
    testimonials_label: 'お客様の声',
    testimonials_title: 'クライアントからの評価',
    t1_quote: '初めて日本を訪れ、Tranoïに出展した際にUmidaと出会いました。ブースでの何気ない会話から始まりましたが、すぐに非常に価値のある協力関係へと発展しました。彼女は言語の壁を自然に乗り越え、情熱を持って日本のブティック市場を理解する手助けをしてくれました。短期間でBoutique Wを紹介してくれたことは、自分一人では難しかった大きな一歩でした。Umidaは非常に鋭く、結果志向でありながら、人とのつながりを築く特別な力を持っています。日本でビジネスをするなら、彼女なしでは考えられません。',
    t1_badge: '🇩🇪 ドイツ',
    t1_role: 'ファッションデザイナー／Dennis Chuene 創業者',
    t2_quote: 'Umidaはコミュニケーションや調整を担い、プロセス全体を的確に進めながら、ポジショニングや営業面でもサポートしてくれました。とてもスムーズで心地よいコラボレーションで、常に状況が整理され、安心して任せることができました。明確さ、直感、そして一貫性を兼ね備えた稀有な存在であり、彼女と働くことは非常に自然で集中しやすく、方向性の一致を感じられるものでした。',
    t2_badge: '🇷🇴 ルーマニア',
    t2_role: 'DeCorina Hats オーナー／デザイナー',
    t3_quote: 'Umidaは非常に優れたコミュニケーターであり、成果につなげる力を持ったプロフェッショナルです。言語や文化の壁を越えて信頼関係を築きながら、自然に成果へと導くことができます。フレンドリーな対話から営業のクロージングへとスムーズに移行できる点は特に印象的でした。彼女の関わりにより、売上と顧客満足度の両方が向上しました。一度一緒に仕事をすれば、今後のプロジェクトでも欠かせない存在になると感じるはずです。',
    t3_badge: '🇺🇸 アメリカ',
    t3_role: 'Glokyo 創業者',
    t4_quote: 'Umidaは非常に高いスキルを持っています。明確なコミュニケーション、温かく親しみやすい対応、そして細部への配慮が強みです。日本市場に合わせたブランディングの調整や、潜在的な課題の検討、プレゼンテーションの改善など、多方面でサポートしてくれました。その結果、日本でのビジネス展開において重要な人脈を築くことができ、貴重な機会につながりました。日本への適応やビジネス展開を考えている方には、これ以上ないサポートだと思います。',
    t4_badge: '🇱🇻 ラトビア',
    t4_role: 'Guest House Lapa 創業者',
    t5_quote: 'Umidaは明るく、知的で、非常にプロフェッショナルな人物です。複数言語を高いレベルで使いこなします。特に印象的だったのは、単に同意するのではなく、違和感のある点に対してしっかりと指摘してくれたことです。ビジネスについて深く考えるきっかけを与えてくれる存在であり、非常に頼りになるパートナーだと感じました。誠実で努力家であり、クライアントのためにしっかりと力を尽くしてくれる方です。',
    t5_badge: '🇺🇸 アメリカ',
    t5_role: 'Sumeba.org 創業者',
    footer_text: '© 2026 Unparadox — 東京、日本',
  },

};

// ── Language switcher ────────────────────────────────────────────────
const langMap = { en: 'en', ja: 'ja' };

function setLanguage(lang) {
  if (!translations[lang]) return;
  const t = translations[lang];

  // Plain-text elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // HTML elements (headings with <br> / <em>)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Update <html lang>
  document.documentElement.lang = langMap[lang] || 'en';

  // Update active button state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('lang-btn--active', btn.dataset.lang === lang);
  });

  localStorage.setItem('upx-lang', lang);
}

// Attach lang switcher events
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

// Init on load
setLanguage(localStorage.getItem('upx-lang') || 'en');



// ── Sticky nav shadow ──────────────────────────────────────────────
const nav = document.getElementById('nav');
const heroSection = document.getElementById('hero');

const navObserver = new IntersectionObserver(
  ([entry]) => nav.classList.toggle('scrolled', !entry.isIntersecting),
  { threshold: 0.1 }
);
navObserver.observe(heroSection);

// ── Mobile hamburger menu ──────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

// Close mobile nav when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// ── Scroll-reveal animations ────────────────────────────────────────
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── Active nav link tracking ────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav__link:not(.nav__link--cta)');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinkEls.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach(section => sectionObserver.observe(section));

// ── Smooth scroll polyfill for Safari ──────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
