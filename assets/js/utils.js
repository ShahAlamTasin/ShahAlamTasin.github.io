/* ==========================================================================
   utils.js  -  tiny shared helpers. No section-specific code lives here.
   Every section file registers itself as PORTFOLIO.sections.<name> with:
     render(P, cfg) -> HTML string
     mount(el, P, cfg)  (optional) -> attach behaviour after insertion
   ========================================================================== */
window.PORTFOLIO = window.PORTFOLIO || {};

(function (P) {
  P.sections = P.sections || {};

  const ICONS = {
    mail: { d: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>' },
    phone: { d: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>' },
    chat: { d: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>' },
    pin: { d: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>' },
    download: { d: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>' },
    external: { d: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/>' },
    menu: { d: '<path d="M4 7h16M4 12h16M4 17h16"/>' },
    close: { d: '<path d="M18 6 6 18M6 6l12 12"/>' },
    github: {
      fill: true,
      d: '<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.921.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>',
    },
    linkedin: {
      fill: true,
      d: '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>',
    },
    language: {
      d: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    },
    flag: {
      d: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>',
    },
    education: {
      d: '<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5"/><path d="M22 10v6"/>',
    },
    certificate: {
      d: '<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>',
    },
  };

  P.util = {
    /** Escape text for safe insertion into HTML. */
    esc(value) {
      return String(value ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
    },

    /** Inline SVG icon by name. */
    icon(name, extraClass = "") {
      const i = ICONS[name];
      if (!i) return "";
      const attrs = i.fill
        ? 'fill="currentColor"'
        : 'fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"';
      return `<svg class="icon ${extraClass}" viewBox="0 0 24 24" ${attrs} aria-hidden="true" focusable="false">${i.d}</svg>`;
    },

    /** Standard section heading block. */
    sectionHead(cfg) {
      const { esc } = P.util;
      return `<header class="section__head">
        <h2 id="${esc(cfg.id)}-title">${esc(cfg.title)}</h2>
        ${cfg.intro ? `<p class="section__intro">${esc(cfg.intro)}</p>` : ""}
      </header>`;
    },

    reducedMotion() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    },

    /** "2026-10-01" -> "1 Oct 2026" */
    formatDate(iso) {
      const d = new Date(iso + "T00:00:00");
      if (isNaN(d)) return iso;
      return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
    },

    /**
     * Type an element's existing text out character by character, once.
     * Skipped entirely under reduced motion (the full text just stays put).
     */
    typeOn(el, opts = {}) {
      if (!el || P.util.reducedMotion()) return;
      const text = el.textContent;
      if (!text) return;
      const speed = opts.speed || 16;
      const delay = opts.delay || 0;
      el.style.minHeight = `${el.offsetHeight}px`; // hold layout while the text is cleared
      el.textContent = "";
      el.classList.add("is-typing");
      let i = 0;
      const tick = () => {
        i += 1;
        el.textContent = text.slice(0, i);
        if (i < text.length) {
          setTimeout(tick, speed);
        } else {
          el.classList.remove("is-typing");
          el.style.minHeight = "";
        }
      };
      setTimeout(tick, delay);
    },

    /**
     * Reveal `items` with a short fade/slide as each scrolls into view, staggered
     * by its position in the array. Call this right after adding the "reveal"
     * class to those elements, so nothing disappears if JS fails to run.
     * Skipped under reduced motion (everything is just shown immediately).
     */
    revealOnScroll(items, opts = {}) {
      if (!items.length) return;
      if (P.util.reducedMotion() || !("IntersectionObserver" in window)) {
        items.forEach((el) => el.classList.add("is-visible"));
        return;
      }
      const stagger = opts.stagger ?? 90;
      const io = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const delay = items.indexOf(el) * stagger;
            setTimeout(() => el.classList.add("is-visible"), delay);
            obs.unobserve(el);
          });
        },
        { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
      );
      items.forEach((el) => io.observe(el));
    },
    /**
     * Type several elements out one after another (not simultaneously), based on
     * each one's text length so the next never starts mid-word. Skipped under
     * reduced motion (all the text just stays put).
     */
    typeSequence(elements, opts = {}) {
      if (!elements.length || P.util.reducedMotion()) return;
      const speed = opts.speed || 14;
      const gap = opts.gap ?? 150;
      let cumulative = opts.startDelay || 0;
      elements.forEach((el) => {
        const len = (el.textContent || "").length;
        P.util.typeOn(el, { speed, delay: cumulative });
        cumulative += len * speed + gap;
      });
    },
  };
})(window.PORTFOLIO);
