/* ==========================================================================
   app.js  -  builds the page from data/site.js
   For each entry in PORTFOLIO.site.sections it looks up the matching
   renderer (PORTFOLIO.sections.<renderer>), inserts its HTML, then calls
   its optional mount() hook. Sections never talk to each other.
   ========================================================================== */
(function (P) {
  function boot() {
    const header = document.getElementById("site-header");
    const app = document.getElementById("app");
    const footer = document.getElementById("site-footer");
    const mounted = [];

    header.innerHTML = P.sections.nav.render(P);

    P.site.sections.forEach((cfg) => {
      const mod = P.sections[cfg.renderer];
      if (!mod) {
        console.warn(`[portfolio] No renderer "${cfg.renderer}" for section "${cfg.id}".`);
        return;
      }
      const el = document.createElement("section");
      el.id = cfg.id;
      el.className = `section section--${cfg.renderer}`;
      if (cfg.renderer !== "hero") el.setAttribute("aria-labelledby", `${cfg.id}-title`);
      el.innerHTML = mod.render(P, cfg);
      app.appendChild(el);
      mounted.push({ mod, el, cfg });
    });

    footer.innerHTML = `<div class="container site-footer__inner">
      <p>&copy; ${new Date().getFullYear()} ${P.util.esc(P.profile.name)}</p>
      <p>${P.util.esc(P.site.footer)}</p>
    </div>`;

    P.sections.nav.mount(header, P);
    mounted.forEach(({ mod, el, cfg }) => mod.mount && mod.mount(el, P, cfg));
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})(window.PORTFOLIO);
