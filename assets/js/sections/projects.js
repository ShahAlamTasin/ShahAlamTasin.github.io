/* sections/projects.js  -  filterable cards + details dialog */
(function (P) {
  const { esc, icon, sectionHead } = P.util;

  const list = (items) => `<ul class="job__points">${items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;
  const tags = (items) => `<ul class="chip-list">${items.map((t) => `<li class="chip">${esc(t)}</li>`).join("")}</ul>`;

  function card(p, index) {
    const meta = [p.company, p.period].filter(Boolean).map(esc).join(", ");
    return `<article class="project" data-domain="${esc(p.domain)}">
      <p class="project__domain">${esc(p.domain)}</p>
      <h3>${esc(p.title)}</h3>
      <p class="project__meta">${meta}</p>
      <p class="project__summary">${esc(p.summary)}</p>
      ${tags((p.tech || []).slice(0, 5))}
      <button class="project__more" type="button" data-project="${index}" aria-haspopup="dialog">View details</button>
    </article>`;
  }

  function details(p) {
    const links = (p.links || [])
      .map((l) => `<a class="btn btn--ghost btn--small" href="${esc(l.url)}" target="_blank" rel="noopener noreferrer">${icon("external")}${esc(l.label)}</a>`)
      .join("");
    return `
      <div class="modal__head">
        <div>
          <p class="project__domain">${esc(p.domain)}</p>
          <h3 id="project-dialog-title">${esc(p.title)}</h3>
          <p class="project__meta" style="margin-top:.35rem">${[p.company, p.period].filter(Boolean).map(esc).join(", ")}</p>
        </div>
        <button class="modal__close" type="button" data-close aria-label="Close details">${icon("close")}</button>
      </div>
      <div class="modal__body">
        <p>${esc(p.summary)}</p>
        ${p.scope && p.scope.length ? `<div><h4>What I tested</h4>${list(p.scope)}</div>` : ""}
        ${p.contribution && p.contribution.length ? `<div><h4>What I did</h4>${list(p.contribution)}</div>` : ""}
        ${p.outcomes && p.outcomes.length ? `<div><h4>Results</h4>${list(p.outcomes)}</div>` : ""}
        ${p.tech && p.tech.length ? `<div><h4>Tools</h4>${tags(p.tech)}</div>` : ""}
        ${links ? `<div class="modal__links">${links}</div>` : ""}
      </div>`;
  }

  P.sections.projects = {
    render(P, cfg) {
      const domains = [...new Set(P.projects.map((p) => p.domain))];
      const filters = ["All", ...domains]
        .map((d, i) => `<button class="filter" type="button" data-filter="${esc(d)}" aria-pressed="${i === 0}">${esc(d)}</button>`)
        .join("");
      return `<div class="section__inner">
        ${sectionHead(cfg)}
        <div class="filters" role="group" aria-label="Filter projects by domain">${filters}</div>
        <div class="projects__grid">${P.projects.map(card).join("")}</div>
        <dialog class="modal" aria-labelledby="project-dialog-title"></dialog>
      </div>`;
    },

    mount(el, P) {
      const dialog = el.querySelector("dialog");
      const cards = [...el.querySelectorAll(".project")];
      const buttons = [...el.querySelectorAll(".filter")];
      let opener = null;

      // filtering
      buttons.forEach((btn) =>
        btn.addEventListener("click", () => {
          const domain = btn.dataset.filter;
          buttons.forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
          cards.forEach((c) => (c.hidden = domain !== "All" && c.dataset.domain !== domain));
        })
      );

      // details dialog
      el.addEventListener("click", (e) => {
        const open = e.target.closest("[data-project]");
        if (open && typeof dialog.showModal === "function") {
          opener = open;
          dialog.innerHTML = details(P.projects[Number(open.dataset.project)]);
          dialog.showModal();
          dialog.querySelector("[data-close]").focus();
        }
      });
      dialog.addEventListener("click", (e) => {
        // close on the X button or a click on the backdrop
        if (e.target.closest("[data-close]") || e.target === dialog) dialog.close();
      });
      dialog.addEventListener("close", () => opener && opener.focus());
    },
  };
})(window.PORTFOLIO);
