/* sections/nav.js  -  header, mobile menu, active-link tracking */
(function (P) {
  const { esc, icon } = P.util;

  P.sections.nav = {
    render(P) {
      const { site, profile } = P;
      const links = site.sections
        .map((s) => `<li><a class="nav__link" href="#${esc(s.id)}" data-nav="${esc(s.id)}">${esc(s.label)}</a></li>`)
        .join("");

      return `<div class="container nav">
        <a class="nav__brand" href="#home" aria-label="${esc(profile.name)}, back to top">
          <span class="nav__mark" aria-hidden="true">${esc(profile.initials)}</span>
          <span>${esc(profile.name)}</span>
        </a>
        <button class="nav__toggle" type="button" aria-expanded="false" aria-controls="nav-panel" aria-label="Menu">
          ${icon("menu", "icon--menu")}${icon("close", "icon--close")}
        </button>
        <div class="nav__panel" id="nav-panel">
          <ul class="nav__links">${links}</ul>
          <a class="btn btn--ghost btn--small" href="${esc(site.cv.file)}" download="${esc(site.cv.downloadName)}">
            ${icon("download")}${esc(site.cv.label)}
          </a>
        </div>
      </div>`;
    },

    mount(header, P) {
      const toggle = header.querySelector(".nav__toggle");
      const panel = header.querySelector(".nav__panel");
      const links = [...header.querySelectorAll("[data-nav]")];

      const setOpen = (open) => {
        panel.classList.toggle("is-open", open);
        toggle.setAttribute("aria-expanded", String(open));
      };
      toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
      panel.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
      document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
      window.matchMedia("(min-width: 901px)").addEventListener("change", () => setOpen(false));

      // header border once the page scrolls
      const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });

      // highlight the link for the section in view
      const setCurrent = (id) =>
        links.forEach((a) => (a.dataset.nav === id ? a.setAttribute("aria-current", "true") : a.removeAttribute("aria-current")));

      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver(
          (entries) => entries.forEach((en) => en.isIntersecting && setCurrent(en.target.id)),
          { rootMargin: "-45% 0px -50% 0px" }
        );
        P.site.sections.forEach((s) => {
          const el = document.getElementById(s.id);
          if (el) io.observe(el);
        });
      }
    },
  };
})(window.PORTFOLIO);
