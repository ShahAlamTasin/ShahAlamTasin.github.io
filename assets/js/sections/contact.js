/* sections/contact.js  -  contact details + mailto form (no backend needed) */
(function (P) {
  const { esc, icon, sectionHead } = P.util;

  function item(iconName, label, value, href, external) {
    const inner = `${icon(iconName)}<span><span class="contact__label">${esc(label)}</span><span class="contact__value">${esc(value)}</span></span>`;
    return href
      ? `<a class="contact__item" href="${esc(href)}"${external ? ' target="_blank" rel="noopener noreferrer"' : ""}>${inner}</a>`
      : `<div class="contact__item">${inner}</div>`;
  }

  P.sections.contact = {
    render(P, cfg) {
      const p = P.profile;
      const social = (type) => p.socials.find((s) => s.type === type);
      const li = social("linkedin");
      const gh = social("github");

      return `<div class="section__inner">
        ${sectionHead(cfg)}
        <div class="contact__grid">
          <div>
            <div class="contact__list">
              ${item("mail", "Email", p.email, `mailto:${p.email}`)}
              ${item("chat", "WhatsApp", p.phone, `https://wa.me/${p.whatsapp}`, true)}
              ${li ? item("linkedin", "LinkedIn", li.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""), li.url, true) : ""}
              ${gh ? item("github", "GitHub", gh.url.replace(/^https?:\/\//, ""), gh.url, true) : ""}
            ${item("pin", "Location", p.location)} 
            </div>
            <a class="btn btn--primary" href="${esc(P.site.cv.file)}" download="${esc(P.site.cv.downloadName)}">${icon("download")}${esc(P.site.cv.label)}</a>
          </div>

<form class="form" id="contact-form" novalidate>
  <div class="field"><label for="cf-subject">Subject</label><input id="cf-subject" name="subject" autocomplete="off" required /></div>
  <div class="field"><label for="cf-message">Message</label><textarea id="cf-message" name="message" required></textarea></div>
  <button class="btn btn--primary" type="submit">${icon("mail")}Send message</button>
  <p class="form__hint" id="cf-hint" role="status">This opens your email app with the message ready to send.</p>
</form>
        </div>
      </div>`;
    },

    mount(el, P) {
      const form = el.querySelector("#contact-form");
      const hint = el.querySelector("#cf-hint");
      form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const subject = String(data.get("subject") || "").trim();
  const message = String(data.get("message") || "").trim();

  if (!subject || !message) {
    hint.textContent = "Enter a subject and a message, then try again.";
    return;
  }
  hint.textContent = "Opening your email app. If nothing happens, write to " + P.profile.email + " directly.";
  window.location.href = `mailto:${P.profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
      });
    },
  };
})(window.PORTFOLIO);
