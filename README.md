# Mohammad Shah Alam - Portfolio

A single-page, dark, responsive portfolio built with plain HTML, CSS and JavaScript.
No build step, no dependencies, free to host on GitHub Pages.

## Folder structure

```
index.html                 page shell (rarely edited)
data/                      ALL your content lives here
  site.js                  section order, CV file, footer text
  profile.js               name, contact, bio, education, certifications, hero card
  skills.js                skill groups
  experience.js            jobs
  projects.js              projects (filter buttons are generated automatically)
assets/
  css/                     base (tokens) / layout / components
  js/utils.js              shared helpers
  js/sections/*.js         one file per section (hero, about, skills, ...)
  js/app.js                assembles the page from data/site.js
  img/profile.png          your photo
  Mohammad_Shah_Alam_CV.pdf
```

Rule of thumb: **to change content, edit `data/`. To change looks, edit `assets/css/`.**
Section code never needs touching for content updates.

## Preview locally

Double-click `index.html`, or run a local server:

```
python -m http.server 8000     # then open http://localhost:8000
```

## Publish on GitHub Pages (free)

Your GitHub username is `ShahAlamTasin`, so the best URL is `https://shahalamtasin.github.io`.

1. On GitHub, click **New repository**.
2. Name it exactly `ShahAlamTasin.github.io` (this is what gives you the short URL). Set it to **Public**. Create it.
3. Click **uploading an existing file**, drag in **all the files and folders from this project** (open the folder first, select everything inside it, so `index.html` is at the top level of the repo), then **Commit changes**.
4. Go to **Settings > Pages**. Under **Build and deployment**, set **Source: Deploy from a branch**, **Branch: main**, **Folder: / (root)**, and Save.
5. Wait 1-2 minutes, then open `https://shahalamtasin.github.io`.

Prefer a project-style URL? Name the repo `portfolio` instead; it will be served at `https://shahalamtasin.github.io/portfolio/`. All paths in this site are relative, so it works either way.

To update later: open the file on GitHub, click the pencil icon, edit, commit. The site redeploys automatically.

## Common edits

**Add a project** - open `data/projects.js`, copy one block, change the text. A new `domain` value creates a new filter button.

**Add a job** - open `data/experience.js`, copy a block to the top of the array.

**Add a skill** - open `data/skills.js`, add a string to a group. Use `{ name: "Tool", core: true }` to highlight it.

**Change the hero's auto-switching panel** - in `data/profile.js`, edit `report.rotator.panels`. It switches automatically every `autoplaySeconds`; hovering or focusing it pauses the switch.

**Update your CV** - replace `assets/Mohammad_Shah_Alam_CV.pdf` with the new file, keeping the same name.

**Change the accent colour or fonts** - edit the variables at the top of `assets/css/base.css`.

**Add a whole new section** - create `assets/js/sections/yourname.js` (copy `blog.js` as a template), add a `<script>` line for it in `index.html`, and add an entry to `sections` in `data/site.js`.

**Hide a section** - delete its line from `sections` in `data/site.js`.

## Before you go live checklist

- [ ] Read every project in `data/projects.js`. Entries marked `// REVIEW` were written from domain names, so adjust the scope lines to match your real work.
- [ ] Decide whether you want your phone number public (`data/profile.js`). Remove `phone` and the WhatsApp line in `assets/js/sections/contact.js` if not.
- [ ] Add real GitHub links to projects where you can share code (`links: [{ label: "Source", url: "..." }]`).
- [ ] If your repo name differs, update the `og:url` in `index.html`.
- [ ] Optional: a larger profile photo. The one from the CV is 199px, which is fine at the size shown but soft on high-density screens. Replace `assets/img/profile.png` with a square image of about 400px.
