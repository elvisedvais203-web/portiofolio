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

/** Compétences fusionnées par domaine */
const SKILL_CONFIG = [
  { key: 'frontend', icon: 'fas fa-code', level: 93 },
  { key: 'backend', icon: 'fas fa-server', level: 90 },
  { key: 'databases', icon: 'fas fa-database', level: 90 },
  { key: 'ai', icon: 'fas fa-brain', level: 88 },
  { key: 'infrastructure', icon: 'fas fa-network-wired', level: 87 },
  { key: 'cybersecurity', icon: 'fas fa-shield-halved', level: 85 },
  { key: 'iot', icon: 'fas fa-microchip', level: 83 },
  { key: 'devops', icon: 'fab fa-git-alt', level: 90 }
];

/** Services fusionnés par offre */
const SERVICE_CONFIG = [
  { key: 'development', icon: 'fas fa-laptop-code' },
  { key: 'ai', icon: 'fas fa-robot' },
  { key: 'infrastructure', icon: 'fas fa-shield-halved' },
  { key: 'dataSystems', icon: 'fas fa-database' },
  { key: 'embedded', icon: 'fas fa-microchip' },
  { key: 'consulting', icon: 'fas fa-lightbulb' }
];

/** Projets réels — captures locales (images/projects/) */
const PROJECT_CONFIG = [
  {
    key: 'nextalk',
    category: 'web',
    image: 'images/projects/nextalk.png',
    gallery: ['images/projects/nextalk.png'],
    stack: ['React Native', 'Node.js', 'Messagerie temps réel'],
    demo: '',
    repo: 'https://github.com/elvisedvais203-web'
  },
  {
    key: 'congolove',
    category: 'web',
    image: 'images/projects/congolove-home.png',
    gallery: [
      'images/projects/congolove-home.png',
      'images/projects/congolove-profile.png',
      'images/projects/congolove-brand.png',
      'images/projects/auth-ui.png',
      'images/projects/congolove-infra.png'
    ],
    stack: ['Node.js', 'PostgreSQL', 'Redis', 'IA Match', 'Vérification identité'],
    demo: '',
    repo: 'https://github.com/elvisedvais203-web'
  },
  {
    key: 'netcontrol',
    category: 'network',
    image: 'images/projects/netcontrol.png',
    gallery: ['images/projects/netcontrol.png'],
    stack: ['Dashboard', 'Monitoring réseau', 'Contrôle à distance', 'Sécurité'],
    demo: '',
    repo: 'https://github.com/elvisedvais203-web'
  },
  {
    key: 'edvaselve',
    category: 'web',
    image: 'images/projects/edvaselve.png',
    gallery: ['images/projects/edvaselve.png'],
    stack: ['E-commerce', 'Multivendeur', 'Lubumbashi RDC', 'WhatsApp Commerce'],
    demo: '',
    repo: 'https://github.com/elvisedvais203-web'
  },
  {
    key: 'solola',
    category: 'web',
    image: 'images/projects/solola-brand.png',
    gallery: ['images/projects/solola-brand.png', 'images/projects/solola-deploy.png'],
    stack: ['Node.js', 'Render', 'Web Service'],
    demo: 'https://solola.onrender.com',
    repo: 'https://github.com/elvisedvais203-web/SOLOLA'
  },
  {
    key: 'congoloveStack',
    category: 'devops',
    image: 'images/projects/congolove-deploy.png',
    gallery: ['images/projects/congolove-deploy.png', 'images/projects/congolove-infra.png'],
    stack: ['Railway', 'PostgreSQL', 'Valkey', 'Resend', 'Node.js'],
    demo: '',
    repo: 'https://github.com/elvisedvais203-web'
  }
];

const PROJECT_CATEGORY_KEYS = {
  web: 'projects.catWeb',
  network: 'projects.catNetwork',
  devops: 'projects.catDevops'
};

const ARCHIVE_INTRO_KEY = 'portfolio_archive_intro_seen';

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
    grid.innerHTML = SKILL_CONFIG.map((s, i) => `
      <article class="skill-card reveal reveal-stagger" style="--delay: ${i * 60}ms">
        <div class="skill-card-header">
          <i class="${s.icon}" aria-hidden="true"></i>
          <h3>${this.t(`skillItems.${s.key}`)}</h3>
        </div>
        <p class="skill-stack">${this.t(`skillStacks.${s.key}`)}</p>
        <div class="skill-level-row">
          <span>${this.t('skills.levelLabel')}</span>
          <span>${s.level}%</span>
        </div>
        <div class="skill-bar"><div class="skill-bar-fill" data-level="${s.level}"></div></div>
      </article>
    `).join('');
    if (window.portfolioApp) window.portfolioApp.observeReveals();
  }

  renderServices() {
    const grid = document.getElementById('services-grid');
    if (!grid) return;
    grid.innerHTML = SERVICE_CONFIG.map((s, i) => `
      <div class="service-card reveal reveal-stagger" style="--delay: ${i * 50}ms">
        <div class="service-icon"><i class="${s.icon}"></i></div>
        <h3>${this.t(`serviceItems.${s.key}.title`)}</h3>
        <p>${this.t(`serviceItems.${s.key}.desc`)}</p>
      </div>
    `).join('');
    if (window.portfolioApp) window.portfolioApp.observeReveals();
  }

  renderProjects() {
    const grid = document.getElementById('projects-grid');
    const strip = document.getElementById('archive-strip');
    if (!grid) return;
    grid.innerHTML = PROJECT_CONFIG.map((p, i) => `
      <article class="project-card project-card--sealed reveal reveal-stagger" style="--delay: ${i * 70}ms"
        data-category="${p.category}" data-project-key="${p.key}" tabindex="0" role="button"
        aria-label="${this.t(`projectItems.${p.key}.title`)} — ${this.t('projects.revealCta')}">
        <div class="project-img">
          <img class="project-thumb" src="${p.image}" alt="" loading="lazy" decoding="async">
          <div class="project-seal" aria-hidden="true">
            <span class="project-seal-icon"><i class="fas fa-lock"></i></span>
            <span class="project-seal-text" data-i18n="projects.sealedLabel">Dossier classifié</span>
          </div>
          <div class="project-overlay">
            <span class="project-tag">${this.t(PROJECT_CATEGORY_KEYS[p.category] || 'projects.catWeb')}</span>
            <span class="project-reveal-hint"><i class="fas fa-eye"></i> ${this.t('projects.revealCta')}</span>
          </div>
        </div>
        <div class="project-body">
          <h3>${this.t(`projectItems.${p.key}.title`)}</h3>
          <p>${this.t(`projectItems.${p.key}.desc`)}</p>
          <ul class="project-stack-preview">${p.stack.slice(0, 3).map(s => `<li>${s}</li>`).join('')}</ul>
        </div>
      </article>
    `).join('');
    if (strip) {
      strip.innerHTML = PROJECT_CONFIG.map(p =>
        `<img src="${p.image}" alt="" loading="lazy" width="120" height="68">`
      ).join('');
      strip.removeAttribute('aria-hidden');
    }
    if (window.portfolioApp) {
      window.portfolioApp.observeReveals();
      window.portfolioApp.initProjectFilters();
      window.portfolioApp.initProjectArchive();
    }
  }

  renderExperience() {
    const timeline = document.getElementById('timeline');
    if (!timeline) return;
    timeline.innerHTML = EXPERIENCE_CONFIG.map(e => `
      <div class="timeline-item reveal">
        <div class="timeline-dot"></div>
        <div class="timeline-card">
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
      <div class="testimonial-card ${i === 0 ? 'active' : 'is-hidden'}" data-index="${i}">
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
    this.initHeader();
    this.initNav();
    this.initScrollProgress();
    this.initBackToTop();
    this.initTheme();
    this.initLangSwitcher();
    this.initTyping();
    this.initScrollReveal();
    this.initStats();
    this.initContactForm();
    this.initCvDownload();
    this.initArchiveGate();
    this.initProjectModal();
    this.observeReveals();
  }

  initLoader() {
    window.addEventListener('load', () => {
      setTimeout(() => {
        document.getElementById('loader')?.classList.add('hidden');
        this.maybeShowArchiveGate();
      }, 800);
    });
  }

  maybeShowArchiveGate() {
    const gate = document.getElementById('archive-gate');
    if (!gate || localStorage.getItem(ARCHIVE_INTRO_KEY)) return;
    gate.hidden = false;
    document.body.classList.add('archive-gate-open');
    requestAnimationFrame(() => gate.classList.add('is-visible'));
  }

  initArchiveGate() {
    const gate = document.getElementById('archive-gate');
    const unlock = document.getElementById('archive-unlock');
    const skip = document.getElementById('archive-skip');
    if (!gate) return;

    const closeGate = (scrollToProjects) => {
      gate.classList.remove('is-visible');
      document.body.classList.remove('archive-gate-open');
      localStorage.setItem(ARCHIVE_INTRO_KEY, '1');
      setTimeout(() => { gate.hidden = true; }, 500);
      if (scrollToProjects) {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    unlock?.addEventListener('click', () => closeGate(true));
    skip?.addEventListener('click', () => closeGate(false));
  }

  initProjectArchive() {
    document.querySelectorAll('.project-card[data-project-key]').forEach(card => {
      if (card.dataset.boundArchive) return;
      card.dataset.boundArchive = '1';
      const open = () => this.openProjectModal(card.dataset.projectKey);
      card.addEventListener('click', open);
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          open();
        }
      });
    });
  }

  initProjectModal() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;
    modal.querySelectorAll('[data-close-modal]').forEach(el => {
      el.addEventListener('click', () => this.closeProjectModal());
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) this.closeProjectModal();
    });
  }

  openProjectModal(key) {
    const project = PROJECT_CONFIG.find(p => p.key === key);
    const modal = document.getElementById('project-modal');
    if (!project || !modal) return;

    document.querySelector(`.project-card[data-project-key="${key}"]`)?.classList.add('project-card--opened');

    const title = this.i18n.t(`projectItems.${key}.title`);
    const desc = this.i18n.t(`projectItems.${key}.desc`);
    const cat = this.i18n.t(PROJECT_CATEGORY_KEYS[project.category] || 'projects.catWeb');
    const gallery = project.gallery?.length ? project.gallery : [project.image];

    document.getElementById('project-modal-title').textContent = title;
    document.getElementById('project-modal-desc').textContent = desc;
    document.getElementById('project-modal-cat').textContent = cat;

    const img = document.getElementById('project-modal-img');
    img.src = gallery[0];
    img.alt = title;

    const galleryEl = document.getElementById('project-modal-gallery');
    galleryEl.innerHTML = gallery.map((src, i) =>
      `<button type="button" class="project-modal-thumb ${i === 0 ? 'active' : ''}" data-src="${src}">
        <img src="${src}" alt="" loading="lazy">
      </button>`
    ).join('');
    galleryEl.querySelectorAll('.project-modal-thumb').forEach(btn => {
      btn.addEventListener('click', () => {
        galleryEl.querySelectorAll('.project-modal-thumb').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        img.src = btn.dataset.src;
      });
    });

    const stackEl = document.getElementById('project-modal-stack');
    stackEl.innerHTML = project.stack.map(s => `<li>${s}</li>`).join('');

    const actions = document.getElementById('project-modal-actions');
    const demoLabel = this.i18n.t('projects.demo');
    const repoLabel = this.i18n.t('projects.repo');
    actions.innerHTML = [
      project.demo ? `<a href="${project.demo}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">${demoLabel}</a>` : '',
      project.repo ? `<a href="${project.repo}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">${repoLabel}</a>` : ''
    ].filter(Boolean).join('');

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  }

  closeProjectModal() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  initHeader() {
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
      header?.classList.toggle('scrolled', window.scrollY > 24);
    }, { passive: true });
  }

  initNav() {
    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('nav-menu');
    const overlay = document.getElementById('nav-overlay');

    const setMenuOpen = (open) => {
      menu?.classList.toggle('open', open);
      toggle?.classList.toggle('active', open);
      overlay?.classList.toggle('visible', open);
      document.body.classList.toggle('nav-open', open);
      toggle?.setAttribute('aria-expanded', open ? 'true' : 'false');
    };

    toggle?.addEventListener('click', () => setMenuOpen(!menu?.classList.contains('open')));
    overlay?.addEventListener('click', () => setMenuOpen(false));

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => setMenuOpen(false));
    });

    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY + 140;
      let current = 'home';
      sections.forEach(section => {
        if (section.offsetTop <= scrollY) current = section.getAttribute('id');
      });
      document.querySelectorAll('.nav-link').forEach(l => {
        const href = l.getAttribute('href')?.slice(1);
        l.classList.toggle('active', href === current);
      });
    }, { passive: true });
  }

  initScrollProgress() {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;
    window.addEventListener('scroll', () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (h > 0) bar.style.width = `${(window.scrollY / h) * 100}%`;
    }, { passive: true });
  }

  initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;
    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  initTheme() {
    const btn = document.getElementById('theme-toggle');
    const saved = localStorage.getItem('portfolio_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
    this.updateThemeIcon(saved);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = saved === 'dark' ? '#0b1120' : '#f8fafc';

    btn?.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('portfolio_theme', next);
      this.updateThemeIcon(next);
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.content = next === 'dark' ? '#0b1120' : '#f8fafc';
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
          entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
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
    const buttons = document.querySelectorAll('.btn-filter');
    const cards = document.querySelectorAll('.project-card');
    buttons.forEach(btn => {
      btn.replaceWith(btn.cloneNode(true));
    });
    document.querySelectorAll('.btn-filter').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.btn-filter').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        document.querySelectorAll('.project-card').forEach(card => {
          const visible = filter === 'all' || card.dataset.category === filter;
          card.classList.toggle('hidden', !visible);
          if (visible) card.classList.add('reveal', 'visible');
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
        c.classList.toggle('is-hidden', i !== index);
        c.classList.toggle('active', i === index);
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

