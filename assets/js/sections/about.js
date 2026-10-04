/* sections/about.js  -  bio, focus areas, education, certifications */
(function (P) {
  const { esc, icon, sectionHead } = P.util;

  const stackList = (items, iconName) =>
    `<ul class="stack">${items
      .map(
        (i) => `<li>
          <span class="stack__title">${icon(iconName, "stack__icon")}<span>${esc(i.title)}</span></span>
          <span class="stack__meta">${esc(i.meta)}</span>
        </li>`
      )
      .join("")}</ul>`;

  P.sections.about = {
    render(P, cfg) {
      const p = P.profile;
      return `<div class="section__inner">
        ${sectionHead(cfg)}
        <div class="about__grid">
          <div>
            <div class="about__text">${p.about.map((t) => `<p>${esc(t)}</p>`).join("")}</div>
            <div class="focus">
              ${p.focus.map((f) => `<div class="focus__item"><h3>${esc(f.title)}</h3><p>${esc(f.text)}</p></div>`).join("")}
            </div>
          </div>
          <div class="facts">
            <div class="facts__block">
              <h3>Details</h3>
              <dl class="facts__list">
                ${p.facts.map((f) => `<div><dt>${icon(f.icon)}${esc(f.label)}</dt><dd>${esc(f.value)}</dd></div>`).join("")}
              </dl>
            </div>
            <div class="facts__block"><h3>${icon("education")}Education</h3>${stackList(p.education, "education")}</div>
            <div class="facts__block"><h3>${icon("certificate")}Certifications</h3>${stackList(p.certifications, "certificate")}</div>
          </div>
        </div>
      </div>`;
    },

    mount(el, P) {
      // type out the short intro line once it scrolls into view (once only)
      const intro = el.querySelector(".section__intro");
      if (intro && "IntersectionObserver" in window) {
        const io = new IntersectionObserver(
          (entries, obs) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              P.util.typeOn(intro, { speed: 14 });
              obs.disconnect();
            });
          },
          { threshold: 0.6 }
        );
        io.observe(intro);
      }

      // type out the personal-details values (Based in / Nationality / Languages) in sequence
      const factsList = el.querySelector(".facts__list");
      if (factsList && "IntersectionObserver" in window) {
        const values = [...factsList.querySelectorAll("dd")];
        const io2 = new IntersectionObserver(
          (entries, obs) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              P.util.typeSequence(values, { speed: 12, gap: 120 });
              obs.disconnect();
            });
          },
          { threshold: 0.5 }
        );
        io2.observe(factsList);
      }

      // reveal the focus blocks one after another as they scroll into view
      const items = [...el.querySelectorAll(".focus__item")];
      items.forEach((it) => it.classList.add("reveal"));
      P.util.revealOnScroll(items);
    },
  };
})(window.PORTFOLIO);
