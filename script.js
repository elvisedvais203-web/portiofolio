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
/** Options « Nature de la demande » — prestations proposées */
const REQUEST_TYPE_KEYS = [
  'devWeb',
  'siEngineer',
  'softwareEng',
  'ai',
  'infra',
  'cyber',
  'audit',
  'maintenance',
  'training',
  'quote',
  'partnership',
  'other'
];

const SERVICE_CONFIG = [
  { key: 'development', icon: 'fas fa-laptop-code' },
  { key: 'ai', icon: 'fas fa-robot' },
  { key: 'infrastructure', icon: 'fas fa-shield-halved' },
  { key: 'dataSystems', icon: 'fas fa-database' },
  { key: 'embedded', icon: 'fas fa-microchip' },
  { key: 'consulting', icon: 'fas fa-lightbulb' }
];

const thumb = (name) => `images/projects/thumbs/${name}.jpg`;
const full = (name) => `images/projects/${name}.png`;

/** Projets réels — miniatures légères, pleine résolution à l'ouverture */
const PROJECT_CONFIG = [
  {
    key: 'nextalk',
    category: 'web',
    image: thumb('nextalk'),
    full: full('nextalk'),
    gallery: [full('nextalk')],
    stack: ['React Native', 'Node.js', 'Messagerie temps réel'],
    status: 'ongoing',
    demo: ''
  },
  {
    key: 'congolove',
    category: 'web',
    status: 'ongoing',
    image: thumb('congolove-home'),
    full: full('congolove-home'),
    gallery: [
      full('congolove-home'),
      full('congolove-profile'),
      full('congolove-brand'),
      full('auth-ui'),
      full('congolove-infra')
    ],
    stack: ['Node.js', 'PostgreSQL', 'Redis', 'IA Match', 'Vérification identité'],
    status: 'ongoing',
    demo: ''
  },
  {
    key: 'netcontrol',
    category: 'network',
    status: 'done',
    image: thumb('netcontrol'),
    full: full('netcontrol'),
    gallery: [full('netcontrol')],
    stack: ['Dashboard', 'Monitoring réseau', 'Contrôle à distance', 'Sécurité'],
    status: 'done',
    demo: ''
  },
  {
    key: 'edvaselve',
    category: 'web',
    status: 'done',
    image: thumb('edvaselve'),
    full: full('edvaselve'),
    gallery: [full('edvaselve')],
    stack: ['E-commerce', 'Multivendeur', 'Lubumbashi RDC', 'WhatsApp Commerce'],
    status: 'done',
    demo: ''
  },
  {
    key: 'solola',
    category: 'web',
    status: 'done',
    image: thumb('solola-brand'),
    full: full('solola-brand'),
    gallery: [full('solola-brand'), full('solola-deploy')],
    stack: ['Node.js', 'Render', 'Web Service'],
    demo: 'https://solola.onrender.com',
    status: 'done'
  },
  {
    key: 'congoloveStack',
    category: 'devops',
    status: 'done',
    image: thumb('congolove-deploy'),
    full: full('congolove-deploy'),
    gallery: [full('congolove-deploy'), full('congolove-infra')],
    stack: ['Railway', 'PostgreSQL', 'Valkey', 'Resend', 'Node.js'],
    status: 'done',
    demo: ''
  }
];

const PROJECT_CATEGORY_KEYS = {
  web: 'projects.catWeb',
  network: 'projects.catNetwork',
  devops: 'projects.catDevops'
};

const FUTURE_PROJECTS_CONFIG = [
  { key: 'siHub', icon: 'fas fa-diagram-project', year: '2026' },
  { key: 'secureCloud', icon: 'fas fa-shield-halved', year: '2026' },
  { key: 'eduAi', icon: 'fas fa-graduation-cap', year: '2027' },
  { key: 'iotCity', icon: 'fas fa-city', year: '2027' }
];

const EXPERIENCE_CONFIG = [
  { key: 'si', from: 2022, to: null, icon: 'fas fa-sitemap' },
  { key: 'dev', from: 2022, to: null, icon: 'fas fa-code' },
  { key: 'infra', from: 2023, to: null, icon: 'fas fa-network-wired' },
  { key: 'freelance', from: 2022, to: null, icon: 'fas fa-handshake' }
];

const LAYER_IDS = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
const LAYER_TITLE_KEYS = ['nav.home', 'nav.about', 'nav.skills', 'nav.projects', 'nav.experience', 'nav.contact'];

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
    const extra = { ar: 'Noto+Sans+Arabic', zh: 'Noto+Sans+SC', ja: 'Noto+Sans+JP', hi: 'Noto+Sans+Devanagari' };
    const id = 'lang-font-extra';
    let link = document.getElementById(id);
    if (extra[this.lang]) {
      if (!link) {
        link = document.createElement('link');
        link.id = id;
        link.rel = 'stylesheet';
        document.head.appendChild(link);
      }
      link.href = `https://fonts.googleapis.com/css2?family=${extra[this.lang]}:wght@400;600&display=swap`;
    } else if (link) link.remove();
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
    this.renderProjects();
    this.renderExperience();
    this.renderFutureProjects();
    this.renderFutureProjects('future-grid');
    this.renderFutureProjects('future-grid-projects');
    this.renderContactRequestTypes();
  }

  renderContactRequestTypes() {
    const select = document.getElementById('request-type');
    if (!select) return;
    const current = select.value;
    const placeholder = this.t('contact.requestPlaceholder');
    select.innerHTML = `<option value="">${placeholder.startsWith('contact.') ? '—' : placeholder}</option>` +
      REQUEST_TYPE_KEYS.map(key => {
        const label = this.t(`contact.request${key.charAt(0).toUpperCase()}${key.slice(1)}`);
        const text = label.startsWith('contact.') ? key : label;
        return `<option value="${key}">${text}</option>`;
      }).join('');
    if (current && REQUEST_TYPE_KEYS.includes(current)) select.value = current;
  }

  renderFutureProjects(gridId = 'future-grid') {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    grid.innerHTML = FUTURE_PROJECTS_CONFIG.map((p, i) => `
      <article class="future-card" style="--fi: ${i}">
        <div class="future-card-orbit" aria-hidden="true"></div>
        <span class="future-card-year">${p.year}</span>
        <span class="future-card-icon"><i class="${p.icon}" aria-hidden="true"></i></span>
        <h3>${this.t(`future.items.${p.key}.title`)}</h3>
        <p>${this.t(`future.items.${p.key}.desc`)}</p>
        <span class="future-card-status">${this.t(`future.items.${p.key}.status`)}</span>
      </article>
    `).join('');
    const layer = grid.closest('.layer');
    if (window.portfolioApp) window.portfolioApp.observeAnimated(grid.querySelectorAll('.future-card'), layer);
  }

  renderSkills() {
    const grid = document.getElementById('skills-grid');
    if (!grid) return;
    const levelLbl = this.t('skills.levelLabel');
    grid.innerHTML = SKILL_CONFIG.map((s, i) => {
      const title = this.t(`skillItems.${s.key}`);
      const stack = this.t(`skillStacks.${s.key}`);
      const name = title.startsWith('skillItems.') ? s.key : title;
      const tools = stack.startsWith('skillStacks.') ? '' : stack;
      return `
      <article class="skill-card" role="listitem" style="--delay: ${i * 45}ms; --level: ${s.level}" data-skill="${s.key}">
        <header class="skill-card-head">
          <span class="skill-card-icon" aria-hidden="true"><i class="${s.icon}"></i></span>
          <div class="skill-card-meta">
            <h3 class="skill-card-title">${name}</h3>
            ${tools ? `<p class="skill-card-stack">${tools}</p>` : ''}
          </div>
          <span class="skill-card-level" aria-label="${levelLbl}">${s.level}%</span>
        </header>
        <div class="skill-card-bar" role="presentation"><span style="width: ${s.level}%"></span></div>
      </article>`;
    }).join('');
    if (window.portfolioApp) window.portfolioApp.revealInLayer(grid);
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

  projectCardHtml(p, i) {
    const status = p.status || 'done';
    const statusLabel = status === 'ongoing'
      ? this.t('projects.statusOngoing')
      : this.t('projects.statusDone');
    return `
      <article class="project-card project-card--sealed project-card--animated" style="--delay: ${i * 55}ms"
        data-category="${p.category}" data-project-key="${p.key}" data-status="${status}" tabindex="0" role="button"
        aria-label="${this.t(`projectItems.${p.key}.title`)} — ${this.t('projects.revealCta')}">
        <span class="project-status project-status--${status}">${statusLabel}</span>
        <div class="project-img">
          <img class="project-thumb" src="${p.image}" alt="" loading="lazy" decoding="async" width="480" height="300">
          <div class="project-seal" aria-hidden="true">
            <span class="project-seal-icon"><i class="fas fa-folder-open"></i></span>
            <span class="project-seal-text" data-i18n="projects.sealedLabel">Aperçu</span>
          </div>
          <div class="project-overlay">
            <span class="project-tag">${this.t(PROJECT_CATEGORY_KEYS[p.category] || 'projects.catWeb')}</span>
            <span class="project-reveal-hint"><i class="fas fa-eye"></i> ${this.t('projects.revealCta')}</span>
          </div>
        </div>
        <div class="project-body">
          <h3>${this.t(`projectItems.${p.key}.title`)}</h3>
          <p class="project-desc-clamp">${this.t(`projectItems.${p.key}.desc`)}</p>
          <ul class="project-stack-preview">${p.stack.slice(0, 3).map(s => `<li>${s}</li>`).join('')}</ul>
        </div>
      </article>`;
  }

  renderProjects() {
    const done = PROJECT_CONFIG.filter(p => (p.status || 'done') === 'done');
    const ongoing = PROJECT_CONFIG.filter(p => p.status === 'ongoing');
    const gridDone = document.getElementById('projects-grid-done');
    const gridOngoing = document.getElementById('projects-grid-ongoing');
    if (gridDone) {
      gridDone.innerHTML = done.map((p, i) => this.projectCardHtml(p, i)).join('');
    }
    if (gridOngoing) {
      gridOngoing.innerHTML = ongoing.map((p, i) => this.projectCardHtml(p, i)).join('');
    }
    if (window.portfolioApp) {
      window.portfolioApp.initProjectFilters();
      window.portfolioApp.initProjectArchive();
      window.portfolioApp.initProjectTabs();
      const layer = document.getElementById('layer-projects');
      window.portfolioApp.observeAnimated([
        ...(gridDone?.querySelectorAll('.project-card') || []),
        ...(gridOngoing?.querySelectorAll('.project-card') || [])
      ], layer);
    }
  }

  formatExperiencePeriod(from, to) {
    let present = this.t('experience.present');
    if (present === 'experience.present') present = 'Aujourd\'hui';
    const end = to == null ? present : String(to);
    return `${from} — ${end}`;
  }

  renderExperience() {
    const timeline = document.getElementById('timeline');
    if (!timeline) return;
    timeline.innerHTML = EXPERIENCE_CONFIG.map((e, i) => {
      const org = this.t(`experienceItems.${e.key}.org`);
      const orgHtml = org && !org.startsWith('experienceItems.')
        ? `<p class="xp-org">${org}</p>`
        : '';
      const title = this.t(`experienceItems.${e.key}.title`);
      const desc = this.t(`experienceItems.${e.key}.desc`);
      return `
      <article class="xp-entry" role="listitem" style="--xp-i: ${i}">
        <time class="xp-entry-period" datetime="${e.from}">${this.formatExperiencePeriod(e.from, e.to)}</time>
        <div class="xp-entry-body">
          <header class="xp-entry-head">
            <span class="xp-entry-icon" aria-hidden="true"><i class="${e.icon}"></i></span>
            <h3>${title.startsWith('experienceItems.') ? e.key : title}</h3>
          </header>
          ${orgHtml}
          <p class="xp-entry-desc">${desc.startsWith('experienceItems.') ? '' : desc}</p>
        </div>
      </article>`;
    }).join('');
    if (window.portfolioApp) window.portfolioApp.revealInLayer(timeline);
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
    this.currentLayer = 0;
    this.layerAnimating = false;
  }

  async init() {
    window.portfolioApp = this;
    await this.i18n.init();
    this.initLoader();
    this.initStage();
    this.initTheme();
    this.initLangSwitcher();
    this.initTyping();
    this.initContactForm();
    this.initProjectModal();
    this.initProjectModalZoom();
    this.initHomePortals();
    this.initFuturisticFx();
    this.modalZoom = 1;
    setTimeout(() => this.refreshLayerAnimations(0), 400);
  }

  initFuturisticFx() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const canvas = document.getElementById('fx-particles');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let particles = [];
    const count = 48;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.2 + 0.3,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        a: Math.random() * 0.35 + 0.15
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const cyan = getComputedStyle(document.documentElement).getPropertyValue('--neon-cyan').trim() || '#00e8ff';
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = cyan;
        ctx.globalAlpha = p.a;
        ctx.fill();
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = cyan;
            ctx.globalAlpha = (1 - dist / 100) * 0.08;
            ctx.stroke();
          }
        }
      });
      ctx.globalAlpha = 1;
      requestAnimationFrame(draw);
    };

    resize();
    initParticles();
    draw();
    window.addEventListener('resize', () => {
      resize();
      initParticles();
    });
  }

  initHomePortals() {
    const home = document.getElementById('layer-home');
    if (!home || typeof IntersectionObserver === 'undefined') return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    }, { root: home, threshold: 0.15 });
    document.querySelectorAll('.portal-card, .future-card').forEach((el) => obs.observe(el));
  }

  initLoader() {
    const hide = () => document.getElementById('loader')?.classList.add('hidden');
    if (document.readyState === 'complete') hide();
    else window.addEventListener('load', hide, { once: true });
  }

  initStage() {
    const stage = document.getElementById('stage');
    const dotsEl = document.getElementById('stage-dots');
    const prev = document.getElementById('layer-prev');
    const next = document.getElementById('layer-next');
    const discover = document.getElementById('welcome-discover');
    if (!stage || !dotsEl) return;

    dotsEl.innerHTML = LAYER_IDS.map((id, i) =>
      `<button type="button" class="stage-dot ${i === 0 ? 'active' : ''}" data-layer="${i}" role="tab" aria-selected="${i === 0}" aria-label="${id}"></button>`
    ).join('');

    const go = (index) => this.goToLayer(index);

    next?.addEventListener('click', () => go(this.currentLayer + 1));
    prev?.addEventListener('click', () => go(this.currentLayer - 1));
    discover?.addEventListener('click', () => go(1));

    dotsEl.querySelectorAll('.stage-dot').forEach(dot => {
      dot.addEventListener('click', () => go(+dot.dataset.layer));
    });

    document.querySelectorAll('[data-layer-jump]').forEach(el => {
      el.addEventListener('click', e => {
        e.preventDefault();
        const idx = +el.dataset.layerJump;
        const tab = el.dataset.projectTab;
        go(idx);
        if (tab) setTimeout(() => this.setProjectTab(tab), 720);
      });
    });

    document.addEventListener('keydown', e => {
      if (document.body.classList.contains('modal-open')) return;
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        go(this.currentLayer + 1);
      }
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        go(this.currentLayer - 1);
      }
    });

    let touchX = 0;
    let touchY = 0;
    stage.addEventListener('touchstart', e => {
      touchX = e.touches[0].clientX;
      touchY = e.touches[0].clientY;
    }, { passive: true });
    stage.addEventListener('touchend', e => {
      if (document.body.classList.contains('modal-open')) return;
      if (document.getElementById('lang-switcher')?.classList.contains('open')) return;
      const dx = e.changedTouches[0].clientX - touchX;
      const dy = e.changedTouches[0].clientY - touchY;
      if (Math.abs(dx) < 56 || Math.abs(dx) < Math.abs(dy) * 1.25) return;
      const activeLayer = document.querySelector('.layer.layer--active');
      if (activeLayer && activeLayer.scrollHeight > activeLayer.clientHeight + 16) {
        const atTop = activeLayer.scrollTop <= 10;
        const atBottom = activeLayer.scrollTop + activeLayer.clientHeight >= activeLayer.scrollHeight - 10;
        if (dx < 0 && !atBottom) return;
        if (dx > 0 && !atTop) return;
      }
      go(dx < 0 ? this.currentLayer + 1 : this.currentLayer - 1);
    }, { passive: true });

    document.querySelectorAll('.layer').forEach((layer, i) => {
      if (i !== 0) layer.classList.add('layer--future');
    });
    this.updateStageUI();
  }

  goToLayer(index) {
    if (this.layerAnimating) return;
    const max = LAYER_IDS.length - 1;
    index = Math.max(0, Math.min(max, index));
    if (index === this.currentLayer) return;

    this.layerAnimating = true;
    const layers = document.querySelectorAll('.layer');
    const from = this.currentLayer;
    const dir = index > from ? 1 : -1;

    layers.forEach((layer, i) => {
      layer.classList.remove('layer--active', 'layer--past', 'layer--future', 'layer--entering', 'layer--leaving');
      if (i === index) {
        layer.classList.add('layer--entering');
        requestAnimationFrame(() => {
          layer.classList.add('layer--active');
          layer.classList.remove('layer--entering');
        });
      } else if (i === from) {
        layer.classList.add('layer--leaving');
        layer.classList.add(dir > 0 ? 'layer--past' : 'layer--future');
      } else if (i < index) {
        layer.classList.add('layer--past');
      } else {
        layer.classList.add('layer--future');
      }
    });

    this.currentLayer = index;
    document.getElementById('stage')?.setAttribute('data-current-layer', String(index));
    document.body.classList.toggle('on-home', index === 0);
    document.body.classList.toggle('stage-body', true);

    const active = document.getElementById(`layer-${LAYER_IDS[index]}`);
    if (active) active.scrollTop = 0;

    this.updateStageUI();
    this.refreshLayerAnimations(index);

    setTimeout(() => {
      layers.forEach(layer => layer.classList.remove('layer--leaving', 'layer--entering'));
      this.layerAnimating = false;
    }, 720);
  }

  updateStageUI() {
    const i = this.currentLayer;
    const max = LAYER_IDS.length - 1;
    const header = document.getElementById('stage-header');
    const title = document.getElementById('stage-header-title');
    const prev = document.getElementById('layer-prev');
    const next = document.getElementById('layer-next');
    const nav = document.getElementById('stage-nav');

    header?.toggleAttribute('aria-hidden', i === 0);
    header?.classList.toggle('visible', i > 0);
    nav?.classList.toggle('on-home', i === 0);

    if (title) title.textContent = this.i18n.t(LAYER_TITLE_KEYS[i]);

    prev && (prev.disabled = i === 0);
    next && (next.disabled = i === max);
    if (prev) {
      prev.setAttribute('aria-label', this.i18n.t('stage.prev'));
    }
    if (next) {
      const nextLabel = i === max ? this.i18n.t('stage.finish') : this.i18n.t('stage.next');
      next.querySelector('span') && (next.querySelector('span').textContent = nextLabel);
      next.setAttribute('aria-label', nextLabel);
    }

    document.querySelectorAll('.stage-dot').forEach((dot, idx) => {
      dot.setAttribute('aria-label', this.i18n.t(LAYER_TITLE_KEYS[idx]));
    });

    document.querySelectorAll('.stage-dot').forEach((dot, idx) => {
      dot.classList.toggle('active', idx === i);
      dot.setAttribute('aria-selected', idx === i ? 'true' : 'false');
    });
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

  initProjectModalZoom() {
    const ZOOM_STEPS = [0.75, 1, 1.25, 1.5, 2, 2.5];
    const viewport = document.getElementById('project-modal-viewport');
    const img = document.getElementById('project-modal-img');
    const resetBtn = document.getElementById('zoom-reset');
    const zoomInBtn = document.getElementById('zoom-in');
    const zoomOutBtn = document.getElementById('zoom-out');

    const applyZoom = () => {
      if (!img) return;
      img.style.transform = `scale(${this.modalZoom})`;
      if (resetBtn) resetBtn.textContent = `${Math.round(this.modalZoom * 100)}%`;
      viewport?.classList.toggle('is-zoomed', this.modalZoom > 1.02);
      if (zoomInBtn) {
        zoomInBtn.setAttribute('aria-label', this.i18n.t('projects.zoomIn'));
      }
      if (zoomOutBtn) {
        zoomOutBtn.setAttribute('aria-label', this.i18n.t('projects.zoomOut'));
      }
    };

    const setZoom = (z) => {
      this.modalZoom = Math.min(2.5, Math.max(0.75, Math.round(z * 100) / 100));
      applyZoom();
    };

    const nearestStepIndex = () => {
      let best = 0;
      let diff = Math.abs(ZOOM_STEPS[0] - this.modalZoom);
      for (let i = 1; i < ZOOM_STEPS.length; i++) {
        const d = Math.abs(ZOOM_STEPS[i] - this.modalZoom);
        if (d < diff) {
          diff = d;
          best = i;
        }
      }
      return best;
    };

    zoomInBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      const i = nearestStepIndex();
      setZoom(ZOOM_STEPS[Math.min(ZOOM_STEPS.length - 1, i + 1)]);
    });
    zoomOutBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      const i = nearestStepIndex();
      setZoom(ZOOM_STEPS[Math.max(0, i - 1)]);
    });
    resetBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      setZoom(1);
    });

    img?.addEventListener('click', () => {
      if (this.modalZoom < 1.4) setZoom(1.5);
      else if (this.modalZoom < 1.9) setZoom(2);
      else setZoom(1);
    });

    viewport?.addEventListener('wheel', (e) => {
      const modal = document.getElementById('project-modal');
      if (!modal?.classList.contains('is-open')) return;
      e.preventDefault();
      setZoom(this.modalZoom + (e.deltaY < 0 ? 0.12 : -0.12));
    }, { passive: false });

    this.resetModalZoom = () => setZoom(1);
    this.applyModalZoom = applyZoom;
    setZoom(1);
  }

  openProjectModal(key) {
    const project = PROJECT_CONFIG.find(p => p.key === key);
    const modal = document.getElementById('project-modal');
    if (!project || !modal) return;

    document.querySelector(`.project-card[data-project-key="${key}"]`)?.classList.add('project-card--opened');

    const title = this.i18n.t(`projectItems.${key}.title`);
    const desc = this.i18n.t(`projectItems.${key}.desc`);
    const cat = this.i18n.t(PROJECT_CATEGORY_KEYS[project.category] || 'projects.catWeb');
    const gallery = project.gallery?.length ? project.gallery : [project.full || project.image];
    const toThumb = (src) => src.includes('/projects/') && src.endsWith('.png')
      ? src.replace('/projects/', '/projects/thumbs/').replace('.png', '.jpg')
      : src;

    document.getElementById('project-modal-title').textContent = title;
    document.getElementById('project-modal-desc').textContent = desc;
    document.getElementById('project-modal-cat').textContent = cat;

    const img = document.getElementById('project-modal-img');
    img.src = gallery[0];
    img.alt = title;

    const galleryEl = document.getElementById('project-modal-gallery');
    galleryEl.innerHTML = gallery.map((src, i) =>
      `<button type="button" class="project-modal-thumb ${i === 0 ? 'active' : ''}" data-src="${src}">
        <img src="${toThumb(src)}" alt="" loading="lazy" decoding="async">
      </button>`
    ).join('');
    galleryEl.querySelectorAll('.project-modal-thumb').forEach(btn => {
      btn.addEventListener('click', () => {
        galleryEl.querySelectorAll('.project-modal-thumb').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const src = btn.dataset.src;
        img.src = src;
        img.loading = 'eager';
        this.resetModalZoom?.();
      });
    });
    PROJECT_CONFIG.find(p => p.key === key)?.gallery?.slice(1).forEach(src => {
      const preload = new Image();
      preload.src = src;
    });

    const stackEl = document.getElementById('project-modal-stack');
    stackEl.innerHTML = project.stack.map(s => `<li>${s}</li>`).join('');

    const actions = document.getElementById('project-modal-actions');
    const demoLabel = this.i18n.t('projects.demo');
    actions.innerHTML = project.demo
      ? `<a href="${project.demo}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">${demoLabel}</a>`
      : '';

    this.resetModalZoom?.();

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  }

  closeProjectModal() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;
    this.resetModalZoom?.();
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
    if (meta) meta.content = saved === 'dark' ? '#050810' : '#f6f5f2';

    btn?.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('portfolio_theme', next);
      this.updateThemeIcon(next);
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.content = next === 'dark' ? '#050810' : '#f8fafc';
    });
  }

  updateThemeIcon(theme) {
    const icon = document.querySelector('#theme-toggle i');
    if (icon) {
      icon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    }
    const btn = document.getElementById('theme-toggle');
    if (btn && this.i18n?.translations) {
      btn.setAttribute('aria-label', this.i18n.t(theme === 'dark' ? 'a11y.themeLight' : 'a11y.themeDark'));
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
    const pane = document.getElementById('project-pane-done');
    if (!pane || pane.dataset.filtersBound) return;
    pane.dataset.filtersBound = '1';
    pane.querySelectorAll('.btn-filter').forEach(btn => {
      btn.addEventListener('click', () => {
        pane.querySelectorAll('.btn-filter').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        pane.querySelectorAll('.project-card').forEach(card => {
          const visible = filter === 'all' || card.dataset.category === filter;
          card.classList.toggle('hidden', !visible);
          if (visible) {
            card.classList.remove('is-visible');
            this.observeAnimated(card);
          }
        });
      });
    });
  }

  initProjectTabs() {
    if (this._projectTabsBound) return;
    this._projectTabsBound = true;
    const tabs = document.querySelectorAll('.project-tab');
    const panes = {
      done: document.getElementById('project-pane-done'),
      ongoing: document.getElementById('project-pane-ongoing'),
      future: document.getElementById('project-pane-future')
    };
    const activate = (key) => {
      tabs.forEach(t => {
        const on = t.dataset.projectTab === key;
        t.classList.toggle('active', on);
        t.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      Object.entries(panes).forEach(([k, pane]) => {
        if (!pane) return;
        const on = k === key;
        pane.classList.toggle('is-active', on);
        pane.hidden = !on;
      });
      const pane = panes[key];
      if (pane) {
        this.observeAnimated(pane.querySelectorAll('.project-card--animated, .future-card, .skill-card'), pane.closest('.layer'));
      }
    };
    tabs.forEach(tab => {
      tab.addEventListener('click', () => activate(tab.dataset.projectTab));
    });
    activate('done');
  }

  setProjectTab(key) {
    const tab = document.querySelector(`.project-tab[data-project-tab="${key}"]`);
    if (tab) tab.click();
  }

  observeAnimated(elements, rootEl) {
    const list = elements
      ? (elements.length !== undefined && !elements.nodeName ? [...elements] : [elements])
      : [];
    list.forEach(el => {
      if (!el) return;
      el.classList.remove('is-visible');
      if (typeof IntersectionObserver === 'undefined') {
        el.classList.add('is-visible');
        return;
      }
      const root = rootEl && rootEl.scrollHeight > rootEl.clientHeight + 8 ? rootEl : null;
      const obs = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, root, rootMargin: '0px 0px -4% 0px' });
      obs.observe(el);
    });
  }

  revealInLayer(container) {
    if (!container) return;
    const layer = container.closest('.layer') || container;
    const items = container.querySelectorAll
      ? container.querySelectorAll('.skill-card, .xp-entry, .project-card--animated, .future-card')
      : [];
    const nodes = container.classList?.contains('skill-card') || container.classList?.contains('xp-entry')
      ? [container]
      : [...items];
    if (!nodes.length && container.id) {
      nodes.push(...container.querySelectorAll('.skill-card, .xp-entry'));
    }
    this.observeAnimated(nodes, layer.classList?.contains('layer') ? layer : layer.closest('.layer'));
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        nodes.forEach(el => {
          const r = el.getBoundingClientRect();
          if (r.width > 0 && r.height > 0 && r.top < window.innerHeight * 0.92) {
            el.classList.add('is-visible');
          }
        });
      });
    });
  }

  refreshLayerAnimations(layerIndex) {
    const layer = document.getElementById(`layer-${LAYER_IDS[layerIndex]}`);
    if (!layer) return;
    const selectors = '.skill-card, .project-card--animated, .future-card, .xp-entry, .contact-channel, .contact-dossier, .portal-card';
    const nodes = layer.querySelectorAll(selectors);
    this.observeAnimated(nodes, layer);
    setTimeout(() => {
      nodes.forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.width > 0 && r.height > 0) el.classList.add('is-visible');
      });
    }, layerIndex === 0 ? 200 : 780);
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
    if (!form || form.dataset.bound) return;
    form.dataset.bound = '1';

    const typeBtns = form.querySelectorAll('.contact-type-btn');
    const panelPhys = document.getElementById('contact-panel-physical');
    const panelMoral = document.getElementById('contact-panel-moral');
    let contactType = 'physical';

    const setType = (type) => {
      contactType = type;
      typeBtns.forEach(btn => {
        const on = btn.dataset.contactType === type;
        btn.classList.toggle('active', on);
        btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      panelPhys?.classList.toggle('is-active', type === 'physical');
      panelPhys?.toggleAttribute('hidden', type !== 'physical');
      panelMoral?.classList.toggle('is-active', type === 'moral');
      panelMoral?.toggleAttribute('hidden', type !== 'moral');
    };
    typeBtns.forEach(btn => btn.addEventListener('click', () => setType(btn.dataset.contactType)));

    const clearInvalid = (group) => group?.classList.remove('is-invalid');

    form.querySelectorAll('input, textarea, select').forEach(field => {
      field.addEventListener('input', () => clearInvalid(field.closest('.form-group')));
    });

    const validate = () => {
      let ok = true;
      form.querySelectorAll('.form-group').forEach(g => g.classList.remove('is-invalid'));

      const req = (selector, condition = true) => {
        const el = form.querySelector(selector);
        const group = el?.closest('.form-group');
        if (!el || !condition) return;
        const empty = el.type === 'checkbox' ? !el.checked : !String(el.value || '').trim();
        if (empty) {
          group?.classList.add('is-invalid');
          ok = false;
        }
      };

      if (contactType === 'physical') {
        req('[name="physFirstname"]', true);
        req('[name="physLastname"]', true);
      } else {
        req('[name="companyName"]', true);
        req('[name="repName"]', true);
        req('[name="repRole"]', true);
      }

      const emailEl = form.querySelector('[name="email"]');
      const emailGroup = emailEl?.closest('.form-group');
      if (!emailEl?.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value.trim())) {
        emailGroup?.classList.add('is-invalid');
        ok = false;
      }

      req('[name="phone"]');
      req('[name="requestType"]');
      req('[name="subject"]');
      req('[name="message"]');
      req('[name="assertAccuracy"]');
      req('[name="assertPrivacy"]');

      return ok;
    };

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validate()) {
        this.showToast(this.i18n.t('notifications.formInvalid'));
        return;
      }

      const t = (k) => this.i18n.t(k);
      const lines = [
        `=== ${t('contact.mailHeader')} ===`,
        `${t('contact.mailType')}: ${contactType === 'physical' ? t('contact.typePhysical') : t('contact.typeMoral')}`,
        ''
      ];

      if (contactType === 'physical') {
        lines.push(
          `${t('contact.firstName')}: ${form.physFirstname.value.trim()}`,
          `${t('contact.lastName')}: ${form.physLastname.value.trim()}`
        );
      } else {
        lines.push(
          `${t('contact.companyName')}: ${form.companyName.value.trim()}`,
          `${t('contact.legalForm')}: ${form.legalForm.value || '—'}`,
          `${t('contact.companyId')}: ${form.companyId.value.trim() || '—'}`,
          `${t('contact.repName')}: ${form.repName.value.trim()}`,
          `${t('contact.repRole')}: ${form.repRole.value.trim()}`
        );
      }

      const requestLabel = form.requestType.selectedOptions[0]?.textContent || form.requestType.value;
      lines.push(
        '',
        `${t('contact.formEmail')}: ${form.email.value.trim()}`,
        `${t('contact.formPhone')}: ${form.phone.value.trim()}`,
        `${t('contact.requestType')}: ${requestLabel}`,
        `${t('contact.formSubject')}: ${form.subject.value.trim()}`,
        '',
        `${t('contact.formMessage')}:`,
        form.message.value.trim(),
        '',
        `— ${t('contact.mailFooter')}`
      );

      const subjectPrefix = contactType === 'moral' ? '[PM]' : '[PP]';
      const mailSubject = `${subjectPrefix} ${form.subject.value.trim()}`;
      const mailto = `mailto:${EMAIL_PRIMARY}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(lines.join('\n'))}`;
      window.location.href = mailto;
      this.showToast(this.i18n.t('notifications.formSent'));
      form.reset();
      setType('physical');
    });
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

