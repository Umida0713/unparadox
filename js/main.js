'use strict';

// ── Translations ────────────────────────────────────────────────────
const translations = {
  en: {
    nav_about: 'About',
    nav_services: 'Services',
    nav_value: 'Why Me',
    nav_experience: 'Experience',
    nav_who: 'Clients',
    nav_cta: 'Get in Touch',
    hero_eyebrow: 'Tokyo-based · JP · EN · RU',
    hero_heading: 'I help businesses<br /><em>communicate</em>, sell, and<br />represent their brand<br />in Japan.',
    hero_sub: 'Multilingual support in Japanese, English, and Russian — from client communication to on-the-ground representation.',
    hero_motto: 'In a world of abundant choices, it makes perfect sense to choose UNPARADOX.',
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
    card2_title: 'Communication, Sales & Representation',
    card2_body: 'I support businesses not just with language, but with communication that leads somewhere — whether that\'s building relationships, creating opportunities, or closing deals.',
    card2_li1: 'Join client meetings (online or in person)',
    card2_li2: 'Support negotiations',
    card2_li3: 'Communicate with clients in JP, EN, or RU',
    card2_li4: 'On-site representation at events, expos, and conferences in Tokyo',
    card2_note: 'Especially helpful if you\'re based overseas, don\'t have time to attend events, or want someone who can confidently represent your brand on the ground.',
    card3_title: 'Communication Support',
    card3_body: 'Sometimes small changes in wording make a big difference in how your message is received.',
    card3_li1: 'Refine your client communication — from emails to meetings — so it feels more natural, clear, and effective',
    card3_li2: 'Help you phrase things in a way that feels more appealing, persuasive, and valuable to your clients',
    value_label: 'Why work with me',
    value_title: 'The value I bring',
    pullquote: '"I can walk into a room and make conversations work."',
    value_item1: 'Multilingual communication in Japanese, English, and Russian in real business settings',
    value_item2: 'Strong interpersonal and networking skills',
    value_item3: 'Experience working in a Japanese corporate environment',
    value_item4: 'Ability to represent your business professionally in Japan',
    value_item5: 'A combination of sales, communication, and cultural understanding',
    value_item6: 'Focused on real outcomes and long-term relationships — not just translation, but results',
    exp_label: 'Background',
    exp_title: 'Experience',
    exp_intro: 'I\'ve worked across corporate and international environments, supporting communication across different industries.',
    exp_li1: '9 years in a Japanese company with international subsidiaries — roles in HR, Overseas Project Development, and Corporate Strategy',
    exp_li2: 'Business translation & interpretation (JP / EN / RU)',
    exp_li3: 'Legal document translation',
    exp_li4: 'Interpreting at international events and exhibitions',
    exp_li5: 'Working with clients and teams from diverse cultural backgrounds',
    exp_li6: 'Media experience, including interpreting for Japanese TV programs',
    who_label: 'Clients',
    who_title: 'Who I help',
    who_item1: 'Startups',
    who_item2: 'Small businesses',
    who_item3: 'Japanese companies expanding internationally',
    who_item4: 'Overseas companies entering or operating in Japan',
    contact_label: 'Contact',
    contact_title: 'Let\'s talk.',
    contact_sub: 'Interested in working together? Reach out.',
    contact_email: 'Email',
    contact_linkedin: 'LinkedIn',
    footer_text: '© 2026 Unparadox — Tokyo, Japan',
  },

  ja: {
    nav_about: '概要',
    nav_services: 'サービス',
    nav_value: '選ぶ理由',
    nav_experience: '経歴',
    nav_who: 'クライアント',
    nav_cta: 'お問い合わせ',
    hero_eyebrow: '東京在住 · 日本語 · English · Русский',
    hero_heading: 'ビジネスの<em>コミュニケーション</em>、<br />営業、日本でのブランド<br />代表をサポートします。',
    hero_sub: '日本語・英語・ロシア語によるマルチリンガルサポート — クライアントとのコミュニケーションから現地代表活動まで。',
    hero_motto: '選択肢が豊富な世界だからこそ、UNPARADOXを選ぶのは理にかなっています。',
    hero_cta: 'お問い合わせ',
    about_label: '概要',
    about_title: '文化、言語、そして人々の架け橋。',
    about_p1: '東京を拠点に、日本語・英語・ロシア語に対応するマルチリンガルプロフェッショナルです。過去9年間、異文化間のコミュニケーションが単に重要なだけでなく、すべての鍵となる国際的な環境で活動してきました。',
    about_p2: '人々が互いを理解し、信頼を築き、会議・交渉・日常のコミュニケーションにおいて対話を前進させるお手伝いが、自然と得意になりました。新しい環境への適応が早く、関係構築が得意です。',
    about_p3: 'これがしばしば実際のビジネス成果につながります — 関係の構築、交渉のサポート、商談のクローズなど。',
    services_label: 'サービス',
    services_title: '提供サービス',
    card1_title: '翻訳・通訳',
    card1_body: '日本語・英語・ロシア語での翻訳・通訳サービスを提供します。企業ビジネス、国際イベント、メディアでの経験を持ち、特にビジネスの文脈における正確さとニュアンスの重要性を十分に理解しています。',
    card2_title: 'コミュニケーション・営業・代表業務',
    card2_body: '言語サポートにとどまらず、関係構築、機会創出、商談成立へとつながるコミュニケーションをサポートします。',
    card2_li1: 'クライアントミーティングへの参加（オンライン・対面）',
    card2_li2: '交渉のサポート',
    card2_li3: '日本語・英語・ロシア語でのクライアントコミュニケーション',
    card2_li4: '東京でのイベント・展示会・カンファレンスへの現地代表参加',
    card2_note: '海外拠点の企業、イベントに参加する時間がない方、または日本国内でブランドを自信を持って代表できる方をお探しの場合に特に有用です。',
    card3_title: 'コミュニケーションサポート',
    card3_body: '表現の小さな違いが、メッセージの受け取られ方に大きな影響を与えることがあります。',
    card3_li1: 'メールから会議まで、クライアントとのコミュニケーションを洗練させ、より自然で明確かつ効果的に',
    card3_li2: 'クライアントにとってより魅力的・説得力があり、価値を感じてもらえる言い回しのサポート',
    value_label: '選ぶ理由',
    value_title: '私がもたらす価値',
    pullquote: '「どんな場所でも、会話を機能させられます。」',
    value_item1: '実際のビジネス現場における日本語・英語・ロシア語のマルチリンガルコミュニケーション',
    value_item2: '高い対人・ネットワーキングスキル',
    value_item3: '日系企業でのコーポレート環境での勤務経験',
    value_item4: '日本でのビジネスをプロフェッショナルに代表する能力',
    value_item5: '営業・コミュニケーション・文化的理解の組み合わせ',
    value_item6: '単なる翻訳にとどまらない、実際の成果と長期的な関係構築への注力',
    exp_label: '経歴',
    exp_title: '経験',
    exp_intro: 'コーポレートおよび国際的な環境で働き、さまざまな業界をまたいだコミュニケーションをサポートしてきました。',
    exp_li1: '国際子会社を持つ日系企業での9年間 — 人事、海外プロジェクト開発、コーポレートストラテジーの分野',
    exp_li2: 'ビジネス翻訳・通訳（日本語・英語・ロシア語）',
    exp_li3: '法律文書の翻訳',
    exp_li4: '国際イベント・展示会での通訳',
    exp_li5: '多様な文化的背景を持つクライアントやチームとの協働',
    exp_li6: '日本のテレビ番組での通訳を含むメディア経験',
    who_label: 'クライアント',
    who_title: '支援対象',
    who_item1: 'スタートアップ',
    who_item2: '中小企業',
    who_item3: '海外展開を目指す日本企業',
    who_item4: '日本に進出・運営している海外企業',
    contact_label: 'お問い合わせ',
    contact_title: '話しましょう。',
    contact_sub: '協業に興味がありますか？ご連絡ください。',
    contact_email: 'メール',
    contact_linkedin: 'LinkedIn',
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
