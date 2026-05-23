/**
 * Carrousel infini premium — défilement auto, pause au survol, glisser tactile/souris
 */
class PremiumCarousel {
  constructor(root) {
    this.root = typeof root === 'string' ? document.querySelector(root) : root;
    if (!this.root) return;
    this.viewport = this.root.querySelector('.premium-carousel-viewport');
    this.track = this.root.querySelector('.premium-carousel-track');
    this.duration = parseFloat(this.root.dataset.speed) || 48;
    this.offset = 0;
    this.dragging = false;
    this.startX = 0;
    this.startOffset = 0;
    this.halfWidth = 0;
    this._bound = false;
  }

  mountFromHtml(html) {
    if (!this.track || !html.trim()) return;
    this.track.innerHTML =
      `<div class="premium-carousel-set">${html}</div>` +
      `<div class="premium-carousel-set" aria-hidden="true">${html}</div>`;
    this.track.style.setProperty('--marquee-duration', `${this.duration}s`);
    this._measure();
    if (!this._bound) this._bind();
  }

  remount() {
    const set = this.track?.querySelector('.premium-carousel-set');
    if (!set) return;
    this.mountFromHtml(set.innerHTML);
  }

  _measure() {
    requestAnimationFrame(() => {
      this.halfWidth = this.track ? this.track.scrollWidth / 2 : 0;
    });
  }

  _bind() {
    if (!this.viewport || this._bound) return;
    this._bound = true;
    const pause = () => this.root.classList.add('is-paused');
    const resume = () => {
      if (!this.dragging) this.root.classList.remove('is-paused');
    };
    this.root.addEventListener('mouseenter', pause);
    this.root.addEventListener('mouseleave', resume);
    this.root.addEventListener('focusin', pause);
    this.root.addEventListener('focusout', resume);

    const onDown = (e) => {
      if (e.button > 0) return;
      this.dragging = true;
      this.startX = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
      this.startOffset = this.offset;
      this.viewport.classList.add('is-dragging');
      this.root.classList.add('is-paused');
      this.track.style.animation = 'none';
    };
    const onMove = (e) => {
      if (!this.dragging) return;
      const x = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
      this.offset = this.startOffset + (x - this.startX);
      this._applyOffset();
    };
    const onUp = () => {
      if (!this.dragging) return;
      this.dragging = false;
      this.viewport.classList.remove('is-dragging');
      this._normalizeOffset();
      this.track.style.animation = '';
      this.root.classList.remove('is-paused');
    };

    this.viewport.addEventListener('mousedown', onDown);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    this.viewport.addEventListener('touchstart', onDown, { passive: true });
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('touchend', onUp);

    window.addEventListener('resize', () => this._measure());
  }

  _applyOffset() {
    if (!this.track) return;
    this.track.style.transform = `translateX(${this.offset}px)`;
  }

  _normalizeOffset() {
    if (!this.halfWidth) return;
    while (this.offset > 0) this.offset -= this.halfWidth;
    while (this.offset < -this.halfWidth) this.offset += this.halfWidth;
    this._applyOffset();
  }
}

window.PremiumCarousel = PremiumCarousel;
