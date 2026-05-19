/* ===== Portfolio — KADIEBWE MAKINA EDVAIS ===== */

const LANG_CONFIG = {
  fr: { flag: '🇫🇷', code: 'FR', dir: 'ltr', htmlLang: 'fr' },
  en: { flag: '🇬🇧', code: 'EN', dir: 'ltr', htmlLang: 'en' },
  sw: { flag: '🇹🇿', code: 'SW', dir: 'ltr', htmlLang: 'sw' },
  pt: { flag: '🇵🇹', code: 'PT', dir: 'ltr', htmlLang: 'pt' },
  es: { flag: '🇪🇸', code: 'ES', dir: 'ltr', htmlLang: 'es' },
  zh: { flag: '🇨🇳', code: 'ZH', dir: 'ltr', htmlLang: 'zh' },
  ja: { flag: '🇯🇵', code: 'JA', dir: 'ltr', htmlLang: 'ja' },
  ru: { flag: '🇷🇺', code: 'RU', dir: 'ltr', htmlLang: 'ru' },
  hi: { flag: '🇮🇳', code: 'HI', dir: 'ltr', htmlLang: 'hi' },
  ar: { flag: '🇸🇦', code: 'AR', dir: 'rtl', htmlLang: 'ar' }
};

const SUPPORTED_LANGS = Object.keys(LANG_CONFIG);
const DEFAULT_LANG = 'fr';
const STORAGE_KEY = 'portfolio_lang';
const EMAIL_PRIMARY = 'elvisedvais203@gmail.com';
const EMAIL_ICLOUD = 'elvisedvais203@icloud.com';

const SKILL_CONFIG = [
  { key: 'html', icon: 'fab fa-html5', level: 95 },
  { key: 'css', icon: 'fab fa-css3-alt', level: 92 },
  { key: 'javascript', icon: 'fab fa-js', level: 90 },
  { key: 'python', icon: 'fab fa-python', level: 88 },
  { key: 'csharp', icon: 'fas fa-code', level: 85 },
  { key: 'java', icon: 'fab fa-java', level: 84 },
  { key: 'php', icon: 'fab fa-php', level: 82 },
  { key: 'sql', icon: 'fas fa-database', level: 90 },
  { key: 'flask', icon: 'fas fa-flask', level: 86 },
  { key: 'unity', icon: 'fab fa-unity', level: 80 },
  { key: 'ai', icon: 'fas fa-brain', level: 88 },
  { key: 'networking', icon: 'fas fa-network-wired', level: 87 },
  { key: 'cybersecurity', icon: 'fas fa-shield-halved', level: 85 },
  { key: 'database', icon: 'fas fa-server', level: 88 },
  { key: 'frontend', icon: 'fas fa-palette', level: 92 },
  { key: 'backend', icon: 'fas fa-cogs', level: 90 },
  { key: 'uiux', icon: 'fas fa-pen-ruler', level: 86 },
  { key: 'sysadmin', icon: 'fas fa-desktop', level: 87 },
  { key: 'linux', icon: 'fab fa-linux', level: 85 },
  { key: 'arduino', icon: 'fas fa-microchip', level: 83 },
  { key: 'api', icon: 'fas fa-plug', level: 89 },
  { key: 'sqlite', icon: 'fas fa-database', level: 88 },
  { key: 'git', icon: 'fab fa-git-alt', level: 90 }
];

const SERVICE_CONFIG = [
  { key: 'web', icon: 'fas fa-globe' },
  { key: 'mobile', icon: 'fas fa-mobile-screen' },
  { key: 'ai', icon: 'fas fa-robot' },
  { key: 'network', icon: 'fas fa-network-wired' },
  { key: 'database', icon: 'fas fa-database' },
  { key: 'smart', icon: 'fas fa-microchip' },
  { key: 'cyber', icon: 'fas fa-shield-halved' },
  { key: 'software', icon: 'fas fa-code' },
  { key: 'consulting', icon: 'fas fa-lightbulb' },
  { key: 'maintenance', icon: 'fas fa-tools' },
  { key: 'embedded', icon: 'fas fa-memory' },
  { key: 'automation', icon: 'fas fa-gears' }
];

const PROJECT_CONFIG = [
  { key: 'surveillance', category: 'ai', image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&q=80' },
  { key: 'parking', category: 'iot', image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=600&q=80' },
  { key: 'barrier', category: 'iot', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
  { key: 'school', category: 'web', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80' },
  { key: 'security', category: 'ai', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80' },
  { key: 'ecommerce', category: 'web', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80' },
  { key: 'arduino', category: 'iot', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80' },
  { key: 'network', category: 'network', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80' },
  { key: 'animation', category: 'ai', image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&q=80' }
];

const EXPERIENCE_CONFIG = [
  { key: 'projects', year: '2020 — 2026' },
  { key: 'software', year: '2019 — 2026' },
  { key: 'ai', year: '2021 — 2026' },
  { key: 'network', year: '2018 — 2026' },
  { key: 'teaching', year: '2020 — 2026' },
  { key: 'freelance', year: '2019 — 2026' }
];

const TESTIMONIAL_CONFIG = [
  { key: 't1', initials: 'JM' },
  { key: 't2', initials: 'AK' },
  { key: 't3', initials: 'PL' }
];

/** Niveaux de mystère pour les compétences */
const SKILL_VAULT_TIERS = {
  ai: 'vault',
  cybersecurity: 'vault',
  csharp: 'vault',
  unity: 'vault',
  networking: 'classified',
  flask: 'classified',
  sysadmin: 'classified',
  api: 'classified',
  java: 'classified'
};

const GATE_STORAGE_KEY = 'portfolio_gate_seen';

/* ===== i18n System ===== */
class I18n {
  constructor() {
    this.lang = DEFAULT_LANG;
    this.translations = {};
    this.cache = {};
  }

  detectBrowserLanguage() {
    const browserLangs = navigator.languages || [navigator.language || 'fr'];
    for (const bl of browserLangs) {
      const code = bl.split('-')[0].toLowerCase();
      if (SUPPORTED_LANGS.includes(code)) return code;
      if (code === 'zh' || bl.startsWith('zh')) return 'zh';
    }
    return DEFAULT_LANG;
  }

  async loadLanguage(lang) {
    if (this.cache[lang]) {
      this.translations = this.cache[lang];
      return;
    }
    const res = await fetch(`languages/${lang}.json`);
    if (!res.ok) throw new Error(`Failed to load ${lang}`);
    const data = await res.json();
    this.cache[lang] = data;
    this.translations = data;
  }

  t(key) {
    const keys = key.split('.');
    let val = this.translations;
    for (const k of keys) {
      if (val == null) return key;
      val = val[k];
    }
    return val ?? key;
  }

  async setLanguage(lang, save = true) {
    if (!SUPPORTED_LANGS.includes(lang)) lang = DEFAULT_LANG;
    document.body.classList.add('lang-transition');
    try {
      await this.loadLanguage(lang);
    } catch {
      await this.loadLanguage(DEFAULT_LANG);
      lang = DEFAULT_LANG;
    }
    this.lang = lang;
    if (save) localStorage.setItem(STORAGE_KEY, lang);
    this.applyTranslations();
    this.updateMeta();
    this.updateDirection();
    this.updateLangUI();
    this.renderDynamicContent();
    document.documentElement.lang = LANG_CONFIG[lang].htmlLang;
    setTimeout(() => document.body.classList.remove('lang-transition'), 300);
    if (window.portfolioApp) {
      window.portfolioApp.updateTyping();
      window.portfolioApp.updateFilterLabels();
    }
  }

  applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = this.t(key);
      if (typeof text === 'string') el.textContent = text;
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const specs = el.getAttribute('data-i18n-attr').split(';');
      specs.forEach(spec => {
        const [attr, key] = spec.split(':').map(s => s.trim());
        const val = this.t(key);
        if (typeof val === 'string') el.setAttribute(attr, val);
      });
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = this.t(el.getAttribute('data-i18n-placeholder'));
    });
  }

  updateMeta() {
    document.title = this.t('meta.title');
  }

  updateDirection() {
    const cfg = LANG_CONFIG[this.lang];
    document.documentElement.dir = cfg.dir;
    document.documentElement.setAttribute('data-lang', this.lang);
  }

  updateLangUI() {
    const cfg = LANG_CONFIG[this.lang];
    const flagEl = document.getElementById('current-flag');
    const codeEl = document.getElementById('current-lang');
    if (flagEl) flagEl.textContent = cfg.flag;
    if (codeEl) codeEl.textContent = cfg.code;
    document.querySelectorAll('.lang-dropdown li').forEach(li => {
      li.classList.toggle('active', li.dataset.lang === this.lang);
    });
  }

  renderDynamicContent() {
    this.renderSkills();
    this.renderServices();
    this.renderProjects();
    this.renderExperience();
    this.renderTestimonials();
  }

  renderSkills() {
    const grid = document.getElementById('skills-grid');
    if (!grid) return;
    grid.innerHTML = SKILL_CONFIG.map(s => `
      <article class="cipher-card reveal" data-tier="${SKILL_VAULT_TIERS[s.key] || 'public'}" data-skill="${s.key}" tabindex="0" role="button">
        <span class="cipher-tier">${this.t(`vault.tier.${SKILL_VAULT_TIERS[s.key] || 'public'}`)}</span>
        <span class="cipher-mask">${'••••••'.slice(0, 5)}</span>
        <i class="${s.icon}"></i>
        <h4 class="cipher-name">${this.t(`skillItems.${s.key}`)}</h4>
        <div class="skill-bar"><div class="skill-bar-fill" data-level="${s.level}"></div></div>
      </article>
    `).join('');
    if (window.portfolioApp) {
      window.portfolioApp.observeReveals();
      window.portfolioApp.initVault();
    }
  }

  renderServices() {
    const grid = document.getElementById('services-grid');
    if (!grid) return;
    grid.innerHTML = SERVICE_CONFIG.map(s => `
      <div class="service-card reveal">
        <div class="service-icon"><i class="${s.icon}"></i></div>
        <h3>${this.t(`serviceItems.${s.key}.title`)}</h3>
        <p>${this.t(`serviceItems.${s.key}.desc`)}</p>
      </div>
    `).join('');
    if (window.portfolioApp) window.portfolioApp.observeReveals();
  }

  renderProjects() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;
    const cats = { ai: 'projects.catAi', web: 'projects.catWeb', iot: 'projects.catIot', network: 'projects.catNetwork' };
    grid.innerHTML = PROJECT_CONFIG.map(p => `
      <article class="project-card reveal" data-category="${p.category}">
        <div class="project-img">
          <img src="${p.image}" alt="${this.t(`projectItems.${p.key}.title`)}" loading="lazy">
          <div class="project-overlay">
            <span class="project-tag">${this.t(cats[p.category] || 'projects.catWeb')}</span>
          </div>
        </div>
        <div class="project-body">
          <h3>${this.t(`projectItems.${p.key}.title`)}</h3>
          <p>${this.t(`projectItems.${p.key}.desc`)}</p>
        </div>
      </article>
    `).join('');
    if (window.portfolioApp) {
      window.portfolioApp.observeReveals();
      window.portfolioApp.initProjectFilters();
    }
  }

  renderExperience() {
    const timeline = document.getElementById('timeline');
    if (!timeline) return;
    timeline.innerHTML = EXPERIENCE_CONFIG.map(e => `
      <div class="timeline-item reveal">
        <div class="timeline-dot"></div>
        <div class="panel">
          <span class="timeline-date">${e.year}</span>
          <h3>${this.t(`experienceItems.${e.key}.title`)}</h3>
          <p>${this.t(`experienceItems.${e.key}.desc`)}</p>
        </div>
      </div>
    `).join('');
    if (window.portfolioApp) window.portfolioApp.observeReveals();
  }

  renderTestimonials() {
    const slider = document.getElementById('testimonials-slider');
    const dots = document.getElementById('testimonial-dots');
    if (!slider || !dots) return;
    slider.innerHTML = TESTIMONIAL_CONFIG.map((t, i) => `
      <div class="testimonial-card ${i === 0 ? 'active' : ''}" data-index="${i}" style="${i === 0 ? '' : 'display:none'}">
        <p>${this.t(`testimonialItems.${t.key}.text`)}</p>
        <div class="testimonial-author">
          <div class="testimonial-avatar">${t.initials}</div>
          <div>
            <h4>${this.t(`testimonialItems.${t.key}.name`)}</h4>
            <span>${this.t(`testimonialItems.${t.key}.role`)}</span>
          </div>
        </div>
      </div>
    `).join('');
    dots.innerHTML = TESTIMONIAL_CONFIG.map((_, i) =>
      `<button type="button" data-index="${i}" class="${i === 0 ? 'active' : ''}" aria-label="Testimonial ${i + 1}"></button>`
    ).join('');
    if (window.portfolioApp) window.portfolioApp.initTestimonials();
  }

  async init() {
    const saved = localStorage.getItem(STORAGE_KEY);
    const detected = this.detectBrowserLanguage();
    const lang = saved && SUPPORTED_LANGS.includes(saved) ? saved : detected;
    await this.setLanguage(lang, !!saved);
  }
}

/* ===== Main App ===== */
class PortfolioApp {
  constructor() {
    this.i18n = new I18n();
    this.typingIndex = 0;
    this.typingCharIndex = 0;
    this.typingDeleting = false;
    this.testimonialIndex = 0;
    this.testimonialInterval = null;
  }

  async init() {
    window.portfolioApp = this;
    await this.i18n.init();
    this.initLoader();
    this.initMysteryGate();
    this.initParticles();
    this.initHeader();
    this.initChapterNav();
    this.initNavPortal();
    this.initScrollProgress();
    this.initCursorGlow();
    this.initTheme();
    this.initLangSwitcher();
    this.initTyping();
    this.initScrollReveal();
    this.initStats();
    this.initContactForm();
    this.initCvDownload();
    this.observeReveals();
  }

  initLoader() {
    window.addEventListener('load', () => {
      setTimeout(() => {
        document.getElementById('loader')?.classList.add('hidden');
      }, 1500);
    });
  }

  initParticles() {
    const canvas = document.getElementById('particles');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const count = Math.min(80, Math.floor(window.innerWidth / 15));
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 162, 39, ${p.opacity * 0.6})`;
        ctx.fill();
        particles.slice(i + 1).forEach(p2 => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(201, 162, 39, ${0.08 * (1 - dist / 100)})`;
            ctx.stroke();
          }
        });
      });
      requestAnimationFrame(animate);
    };
    animate();
  }

  initHeader() {
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
      header?.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  initChapterNav() {
    const links = document.querySelectorAll('.chapter-link');
    const line = document.getElementById('chapter-line');
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];

    const setActive = (id) => {
      links.forEach(l => l.classList.toggle('active', l.dataset.section === id));
      const active = document.querySelector(`.chapter-link[data-section="${id}"]`);
      if (active && line) {
        const nav = document.getElementById('chapter-nav');
        const navRect = nav?.getBoundingClientRect();
        const linkRect = active.getBoundingClientRect();
        if (navRect) line.style.top = `${linkRect.top - navRect.top + linkRect.height / 2 - 12}px`;
      }
    };

    window.addEventListener('scroll', () => {
      const y = window.scrollY + window.innerHeight * 0.35;
      let current = 'home';
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      });
      setActive(current);
    }, { passive: true });
    setActive('home');
  }

  initNavPortal() {
    const btn = document.getElementById('nav-portal-btn');
    const portal = document.getElementById('nav-portal');
    const backdrop = document.getElementById('portal-backdrop');
    const close = () => {
      portal?.classList.remove('open');
      btn?.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };
    btn?.addEventListener('click', () => {
      const open = portal?.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    backdrop?.addEventListener('click', close);
    portal?.querySelectorAll('.portal-link').forEach(link => {
      link.addEventListener('click', close);
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  }

  initMysteryGate() {
    const gate = document.getElementById('mystery-gate');
    const enter = document.getElementById('gate-enter');
    if (!gate) return;
    if (sessionStorage.getItem(GATE_STORAGE_KEY)) {
      gate.classList.add('dismissed');
      document.body.classList.remove('gate-open');
    } else {
      document.body.classList.add('gate-open');
    }
    const dismiss = () => {
      gate.classList.add('dismissed');
      document.body.classList.remove('gate-open');
      sessionStorage.setItem(GATE_STORAGE_KEY, '1');
    };
    enter?.addEventListener('click', dismiss);
  }

  initScrollProgress() {
    const bar = document.getElementById('scroll-progress');
    window.addEventListener('scroll', () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (bar && h > 0) bar.style.width = `${(window.scrollY / h) * 100}%`;
    }, { passive: true });
  }

  initCursorGlow() {
    const glow = document.getElementById('cursor-glow');
    if (!glow || window.matchMedia('(max-width: 768px)').matches) return;
    window.addEventListener('mousemove', e => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    }, { passive: true });
  }

  initVault() {
    const grid = document.getElementById('skills-grid');
    const counter = document.getElementById('vault-counter');
    const revealAll = document.getElementById('vault-reveal-all');
    if (!grid) return;

    const updateCounter = () => {
      const total = grid.querySelectorAll('.cipher-card').length;
      const revealed = grid.querySelectorAll('.cipher-card.revealed').length;
      if (counter) counter.textContent = `${revealed} / ${total}`;
    };

    const revealCard = (card) => {
      if (card.classList.contains('revealed')) return;
      card.classList.add('revealed');
      card.setAttribute('aria-pressed', 'true');
      const bar = card.querySelector('.skill-bar-fill');
      if (bar) bar.style.width = `${bar.dataset.level}%`;
      updateCounter();
    };

    grid.querySelectorAll('.cipher-card').forEach(card => {
      card.addEventListener('click', () => revealCard(card));
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          revealCard(card);
        }
      });
    });

    revealAll?.addEventListener('click', () => {
      grid.querySelectorAll('.cipher-card').forEach(revealCard);
    });

    updateCounter();
  }

  initTheme() {
    const btn = document.getElementById('theme-toggle');
    const saved = localStorage.getItem('portfolio_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
    this.updateThemeIcon(saved);

    btn?.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('portfolio_theme', next);
      this.updateThemeIcon(next);
    });
  }

  updateThemeIcon(theme) {
    const icon = document.querySelector('#theme-toggle i');
    if (icon) {
      icon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    }
  }

  initLangSwitcher() {
    const switcher = document.getElementById('lang-switcher');
    const btn = document.getElementById('lang-btn');
    const dropdown = document.getElementById('lang-dropdown');
    const fab = document.getElementById('fab-translate');

    btn?.addEventListener('click', (e) => {
      e.stopPropagation();
      switcher?.classList.toggle('open');
      btn.setAttribute('aria-expanded', switcher?.classList.contains('open'));
    });

    fab?.addEventListener('click', (e) => {
      e.stopPropagation();
      const isMobile = window.innerWidth <= 768;
      if (isMobile) {
        switcher?.classList.toggle('mobile-open');
        switcher?.classList.remove('open');
      } else {
        switcher?.classList.toggle('open');
      }
    });

    dropdown?.querySelectorAll('li').forEach(li => {
      li.addEventListener('click', async () => {
        const lang = li.dataset.lang;
        await this.i18n.setLanguage(lang);
        switcher?.classList.remove('open', 'mobile-open');
        this.showToast(this.i18n.t('notifications.langChanged'));
      });
    });

    document.addEventListener('click', () => switcher?.classList.remove('open', 'mobile-open'));
    switcher?.addEventListener('click', e => e.stopPropagation());
  }

  getTypingTitles() {
    const titles = this.i18n.t('typing.titles');
    return Array.isArray(titles) ? titles : [
      'IT Engineer',
      'Software Engineer',
      'AI Developer',
      'Full Stack Developer'
    ];
  }

  initTyping() {
    const el = document.getElementById('typing-text');
    if (!el) return;
    const type = () => {
      const titles = this.getTypingTitles();
      const current = titles[this.typingIndex % titles.length];
      if (!this.typingDeleting) {
        el.textContent = current.substring(0, this.typingCharIndex + 1);
        this.typingCharIndex++;
        if (this.typingCharIndex === current.length) {
          this.typingDeleting = true;
          setTimeout(type, 2000);
          return;
        }
      } else {
        el.textContent = current.substring(0, this.typingCharIndex - 1);
        this.typingCharIndex--;
        if (this.typingCharIndex === 0) {
          this.typingDeleting = false;
          this.typingIndex++;
        }
      }
      setTimeout(type, this.typingDeleting ? 40 : 80);
    };
    type();
  }

  updateTyping() {
    this.typingIndex = 0;
    this.typingCharIndex = 0;
    this.typingDeleting = false;
  }

  updateFilterLabels() {}

  initScrollReveal() {
    this.observeReveals();
  }

  observeReveals() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.querySelectorAll('.cipher-card.revealed .skill-bar-fill').forEach(bar => {
            bar.style.width = bar.dataset.level + '%';
          });
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal').forEach(el => {
      if (!el.classList.contains('observed')) {
        el.classList.add('observed');
        observer.observe(el);
      }
    });
  }

  initStats() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.stat-number').forEach(num => {
            const target = +num.dataset.target;
            const duration = 2000;
            const start = performance.now();
            const update = (now) => {
              const progress = Math.min((now - start) / duration, 1);
              num.textContent = Math.floor(progress * target);
              if (progress < 1) requestAnimationFrame(update);
              else num.textContent = target;
            };
            requestAnimationFrame(update);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    document.querySelectorAll('.stats-grid')?.forEach(el => observer.observe(el));
  }

  initProjectFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.project-card');
    buttons.forEach(btn => {
      btn.replaceWith(btn.cloneNode(true));
    });
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        document.querySelectorAll('.project-card').forEach(card => {
          const show = filter === 'all' || card.dataset.category === filter;
          card.classList.toggle('hidden', !show);
        });
      });
    });
  }

  initTestimonials() {
    clearInterval(this.testimonialInterval);
    const cards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.testimonial-dots button');
    if (!cards.length) return;

    const show = (index) => {
      cards.forEach((c, i) => {
        c.style.display = i === index ? 'block' : 'none';
      });
      dots.forEach((d, i) => d.classList.toggle('active', i === index));
      this.testimonialIndex = index;
    };

    dots.forEach(dot => {
      dot.addEventListener('click', () => show(+dot.dataset.index));
    });

    this.testimonialInterval = setInterval(() => {
      show((this.testimonialIndex + 1) % cards.length);
    }, 6000);
  }

  initContactForm() {
    const form = document.getElementById('contact-form');
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.name.value;
      const email = form.email.value;
      const subject = form.subject.value;
      const message = form.message.value;
      const mailto = `mailto:${EMAIL_PRIMARY}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\n${message}`)}`;
      window.location.href = mailto;
      this.showToast(this.i18n.t('notifications.formSent'));
      form.reset();
    });
  }

  initCvDownload() {
    document.getElementById('cv-download')?.addEventListener('click', (e) => {
      e.preventDefault();
      try {
        this.generateCVPdf();
        this.showToast(this.i18n.t('notifications.cvDownloaded'));
      } catch (err) {
        console.error(err);
        this.showToast(this.i18n.t('notifications.cvPdfError'));
      }
    });
  }

  /**
   * CV en PDF — police « times » (Times Roman PDF, équivalent professionnel à Times New Roman).
   */
  generateCVPdf() {
    const jspdf = window.jspdf;
    if (!jspdf?.jsPDF) {
      throw new Error('jsPDF indisponible');
    }
    const { jsPDF } = jspdf;
    const doc = new jsPDF({ unit: 'mm', format: 'a4', compress: true });
    const margin = 20;
    const maxW = 170;
    const lineH = (size) => size * 0.52;
    let y = 22;

    const newPageIfNeeded = (extra) => {
      if (y + extra > 285) {
        doc.addPage();
        y = 20;
      }
    };

    const writeParagraph = (text, size, style) => {
      doc.setFont('times', style);
      doc.setFontSize(size);
      const lines = doc.splitTextToSize(String(text), maxW);
      const h = lines.length * lineH(size) + 4;
      newPageIfNeeded(h);
      doc.text(lines, margin, y);
      y += h;
    };

    const writeLine = (text, size, style) => {
      doc.setFont('times', style);
      doc.setFontSize(size);
      newPageIfNeeded(lineH(size) + 3);
      doc.text(String(text), margin, y);
      y += lineH(size) + 2;
    };

    doc.setFont('times', 'bold');
    doc.setFontSize(20);
    doc.text('KADIEBWE MAKINA EDVAIS', margin, y);
    y += 9;

    doc.setFont('times', 'italic');
    doc.setFontSize(11);
    doc.text(this.i18n.t('cv.title'), margin, y);
    y += 7;

    doc.setFont('times', 'normal');
    doc.setFontSize(10);
    const contact = [
      'Lubumbashi, République Démocratique du Congo',
      `${EMAIL_PRIMARY} · ${EMAIL_ICLOUD}`,
      'Tél: +243 895 966 288 · +243 976 088 812',
      'WhatsApp: https://wa.me/message/U5VBQ5ZPUAS6A1',
      'GitHub: https://github.com/elvisedvais203-web'
    ];
    contact.forEach((line) => {
      newPageIfNeeded(6);
      doc.text(line, margin, y);
      y += 5.5;
    });
    y += 4;

    doc.setFont('times', 'bold');
    doc.setFontSize(12);
    newPageIfNeeded(8);
    doc.text(this.i18n.t('cv.education').toUpperCase(), margin, y);
    y += 7;
    doc.setFont('times', 'normal');
    doc.setFontSize(10);
    writeParagraph(
      'Université Protestante de Lubumbashi (UPL) — Systèmes Informatiques, Génie Logiciel et Intelligence Artificielle.',
      10,
      'normal'
    );

    doc.setFont('times', 'bold');
    doc.setFontSize(12);
    newPageIfNeeded(8);
    doc.text(this.i18n.t('cv.profile').toUpperCase(), margin, y);
    y += 7;
    writeParagraph(this.i18n.t('about.p1'), 10, 'normal');
    writeParagraph(this.i18n.t('about.p2'), 10, 'normal');

    doc.setFont('times', 'bold');
    doc.setFontSize(12);
    newPageIfNeeded(8);
    doc.text(this.i18n.t('cv.skills').toUpperCase(), margin, y);
    y += 7;
    doc.setFont('times', 'normal');
    doc.setFontSize(9.5);
    SKILL_CONFIG.forEach((s) => {
      writeLine(`• ${this.i18n.t(`skillItems.${s.key}`)}`, 9.5, 'normal');
    });

    doc.setFont('times', 'italic');
    doc.setFontSize(9);
    newPageIfNeeded(8);
    writeParagraph(
      'Portfolio : https://elvisedvais203-web.github.io/portiofolio/ — GitHub : https://github.com/elvisedvais203-web/portiofolio',
      9,
      'italic'
    );

    doc.save('CV_KADIEBWE_MAKINA_EDVAIS.pdf');
  }

  showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  }
}

/* ===== Boot ===== */
document.addEventListener('DOMContentLoaded', () => {
  new PortfolioApp().init();
});

