/* sections/skills.js  -  grouped skill rows; core tools are highlighted */
(function (P) {
  const { esc, sectionHead } = P.util;

  const chip = (item) => {
    const skill = typeof item === "string" ? { name: item } : item;
    return `<li class="chip${skill.core ? " chip--core" : ""}">${esc(skill.name)}</li>`;
  };

  P.sections.skills = {
    render(P, cfg) {
      const { groups, legendCore } = P.skills;
      return `<div class="section__inner">
        ${sectionHead(cfg)}
        <div class="skills">
          ${groups
            .map(
              (g) => `<div class="skills__row">
                <div><h3>${esc(g.title)}</h3>${g.note ? `<p>${esc(g.note)}</p>` : ""}</div>
                <ul class="chip-list">${g.items.map(chip).join("")}</ul>
              </div>`
            )
            .join("")}
        </div>
        ${legendCore ? `<p class="skills__legend"><span class="chip chip--core chip--legend">Highlighted</span>${esc(legendCore)}</p>` : ""}
      </div>`;
    },
  };
})(window.PORTFOLIO);
