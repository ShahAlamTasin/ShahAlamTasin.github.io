/* sections/hero.js  -  intro + the animated "test run" card */
(function (P) {
  const { esc, icon } = P.util;

  function summaryRow(item) {
    const value = item.count != null
      ? `<span data-count="${item.count}" data-suffix="${esc(item.suffix || "")}">${item.count}${esc(item.suffix || "")}</span>`
      : `${esc(item.from)}<span class="arrow" aria-label="to">to</span>${esc(item.to)}`;
    return `<div class="report__row"><dt>${esc(item.label)}</dt><dd>${value}</dd></div>`;
  }

  P.sections.hero = {
    render(P, cfg) {
      const { profile, site } = P;
      const r = profile.report;

      const socials = profile.socials
        .map((s) => `<li><a class="social__link" href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${icon(s.type)}${esc(s.label)}</a></li>`)
        .join("");

      const suites = r.suites
        .map((s) => `<li class="report__suite">
            <span class="report__status">PASSED</span>
            <span class="report__suite-name">${esc(s.name)}</span>
            <span class="report__suite-tool">${esc(s.tool)}</span>
          </li>`)
        .join("");

      const panel = (p, i) => {
        const body = p.kind === "chips"
          ? `<ul class="chip-list chip-list--tight">${p.items.map((s) => `<li class="chip chip--core">${esc(s)}</li>`).join("")}</ul>`
          : `<ul class="report__rotator-list">${p.items.map((i2) => `<li>${esc(i2)}</li>`).join("")}</ul>`;
        return `<div class="report__rotator-panel${i === 0 ? " is-active" : ""}" data-index="${i}">
          <p class="report__rotator-label">${esc(p.label)}</p>
          ${body}
        </div>`;
      };
      const rotator = r.rotator
        ? `<div class="report__rotator" data-autoplay="${esc(r.rotator.autoplaySeconds)}">
            ${r.rotator.panels.map(panel).join("")}
            <div class="report__rotator-dots" aria-hidden="true">
              ${r.rotator.panels.map((_, i) => `<span${i === 0 ? ' class="is-active"' : ""}></span>`).join("")}
            </div>
          </div>`
        : "";

      return `<div class="container hero__grid">
        <div class="hero__intro">
          <p class="availability"><span class="availability__dot" aria-hidden="true"></span>${esc(profile.availability)}</p>
          <div class="hero__id">
            <img class="hero__photo" src="${esc(profile.photo)}" width="112" height="112" alt="Portrait of ${esc(profile.name)}" />
            <div>
              <h1>${esc(profile.name)}</h1>
              <p class="hero__role">${esc(profile.role)}</p>
            </div>
          </div>
          <p class="hero__pitch">${esc(profile.pitch)}</p>
          <div class="hero__actions">
            <a class="btn btn--primary" href="${esc(site.cv.file)}" download="${esc(site.cv.downloadName)}">${icon("download")}${esc(site.cv.label)}</a>
            <a class="btn btn--ghost" href="#projects">View projects</a>
          </div>
          <ul class="social">${socials}</ul>
        </div>

        <aside class="report" aria-label="Sample automated test run">
          <div class="report__bar">
            <span class="report__lights" aria-hidden="true"><i></i><i></i><i></i></span>
            <span>${esc(r.title)}</span>
          </div>
          <div class="report__body">
            <p class="report__cmd"><span class="report__prompt" aria-hidden="true">$</span>${esc(r.command)}</p>
            <ul class="report__suites">${suites}</ul>
            <div class="report__progress" aria-hidden="true"><span></span></div>
            <dl class="report__summary">${r.summary.map(summaryRow).join("")}</dl>
            ${rotator}
            <p class="report__note">${esc(r.note)}</p>
          </div>
        </aside>
      </div>`;
    },

    mount(el, P) {
      const pitch = el.querySelector(".hero__pitch");
      if (pitch) P.util.typeOn(pitch, { delay: 250, speed: 14 });

      const rotator = el.querySelector(".report__rotator");
      if (rotator) this.mountRotator(rotator, P);

      const report = el.querySelector(".report");
      if (!report || P.util.reducedMotion()) return; // static results are already visible

      const suites = [...report.querySelectorAll(".report__suite")];
      const bar = report.querySelector(".report__progress span");
      const counter = report.querySelector("[data-count]");
      report.classList.add("is-armed");

      const countUp = () => {
        if (!counter) return;
        const target = Number(counter.dataset.count);
        const suffix = counter.dataset.suffix || "";
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min((now - start) / 900, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          counter.textContent = Math.round(target * eased) + (t === 1 ? suffix : "");
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      };

      let i = 0;
      const next = () => {
        if (i >= suites.length) {
          report.classList.add("is-complete");
          countUp();
          return;
        }
        const suite = suites[i];
        const status = suite.querySelector(".report__status");
        status.textContent = "RUNNING";
        status.classList.add("is-running");
        suite.classList.add("is-shown");
        bar.style.width = `${((i + 1) / suites.length) * 100}%`;
        setTimeout(() => {
          status.textContent = "PASSED";
          status.classList.remove("is-running");
        }, 320);
        i += 1;
        setTimeout(next, 480);
      };
      setTimeout(next, 500);
    },

    // auto-switch the small "child window" between its panels, pausing on hover/focus
    mountRotator(rotator, P) {
      const panels = [...rotator.querySelectorAll(".report__rotator-panel")];
      const dots = [...rotator.querySelectorAll(".report__rotator-dots span")];
      if (panels.length < 2) return;
      const duration = Number(rotator.dataset.autoplay || 5) * 1000;
      const reduced = P.util.reducedMotion();
      let index = 0;
      let timer = null;

      function show(i) {
        index = (i + panels.length) % panels.length;
        panels.forEach((p, n) => p.classList.toggle("is-active", n === index));
        dots.forEach((d, n) => d.classList.toggle("is-active", n === index));
      }
      function schedule() {
        timer = setTimeout(() => {
          show(index + 1);
          schedule();
        }, duration);
      }
      if (reduced) return; // first panel stays put, exactly as rendered
      schedule();
      rotator.addEventListener("mouseenter", () => clearTimeout(timer));
      rotator.addEventListener("mouseleave", schedule);
      rotator.addEventListener("focusin", () => clearTimeout(timer));
      rotator.addEventListener("focusout", schedule);
    },
  };
})(window.PORTFOLIO);
