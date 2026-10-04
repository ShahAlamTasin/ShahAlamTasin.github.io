/* ==========================================================================
   data/site.js  -  site-wide settings
   - `sections` controls WHICH sections appear and in WHAT ORDER.
   - `renderer` must match a file in assets/js/sections/ (hero, about, ...).
   - To hide a section, delete or comment out its line.
   ========================================================================== */
window.PORTFOLIO = window.PORTFOLIO || {};

PORTFOLIO.site = {
  cv: {
    file: "assets/Mohammad_Shah_Alam_CV.pdf",
    downloadName: "Mohammad_Shah_Alam_CV.pdf",
    label: "Download CV",
  },

  sections: [
    { id: "home", label: "Home", renderer: "hero" },
    {
      id: "about",
      label: "About",
      renderer: "about",
      title: "About",
      intro: "Four years of testing fintech, ERP and e-commerce platforms, now expanding into Python, Playwright and performance testing with k6.",
    },
    {
      id: "skills",
      label: "Skills",
      renderer: "skills",
      title: "Skills",
      intro: "The tools and techniques I use to plan, automate and report on quality.",
    },
    {
      id: "experience",
      label: "Experience",
      renderer: "experience",
      title: "Experience",
      intro: "Where I have worked, and what changed because I was there.",
    },
    {
      id: "projects",
      label: "Projects",
      renderer: "projects",
      title: "Projects",
      intro: "Products and platforms I have owned quality for. Filter by domain, then open a card for the testing scope.",
    },
    {
      id: "contact",
      label: "Contact",
      renderer: "contact",
      title: "Get in touch",
      intro: "I am looking for a senior QA or SDET role. Send a message, or reach me directly.",
    },
  ],

 // footer: "Built with plain HTML, CSS and JavaScript. Hosted on GitHub Pages.",
};
