/* sections/experience.js  -  timeline of roles */
(function (P) {
  const { esc, sectionHead } = P.util;

  const job = (j) => {
    const org = [j.sector, j.location].filter(Boolean).map(esc).join(", ");
    return `<article class="job${j.current ? " job--current" : ""}">
      <div class="job__head">
        <h3 class="job__role">${esc(j.role)}</h3>
        <p class="job__period">${esc(j.period)}</p>
      </div>
      <p class="job__org"><strong>${esc(j.company)}</strong>${org ? `, ${org}` : ""}</p>
      ${
        j.metrics && j.metrics.length
          ? `<dl class="metrics">${j.metrics
              .map((m) => `<div><dd class="metric__value">${esc(m.value)}</dd><dt class="metric__label">${esc(m.label)}</dt></div>`)
              .join("")}</dl>`
          : ""
      }
      <ul class="job__points">${j.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
      ${j.tags && j.tags.length ? `<ul class="chip-list">${j.tags.map((t) => `<li class="chip">${esc(t)}</li>`).join("")}</ul>` : ""}
    </article>`;
  };

  P.sections.experience = {
    render(P, cfg) {
      return `<div class="section__inner">
        ${sectionHead(cfg)}
        <div class="timeline">${P.experience.map(job).join("")}</div>
      </div>`;
    },

    mount(el, P) {
      // within each job, reveal its bullet points one after another on scroll
      el.querySelectorAll(".job").forEach((jobEl) => {
        const points = [...jobEl.querySelectorAll(".job__points li")];
        points.forEach((li) => li.classList.add("reveal"));
        P.util.revealOnScroll(points, { stagger: 70 });
      });
    },
  };
})(window.PORTFOLIO);
