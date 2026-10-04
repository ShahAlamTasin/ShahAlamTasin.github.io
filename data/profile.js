/* ==========================================================================
   data/profile.js  -  who you are (used by hero, about, contact, footer)
   ========================================================================== */
window.PORTFOLIO = window.PORTFOLIO || {};

PORTFOLIO.profile = {
  name: "Mohammad Shah Alam",
  initials: "MSA",
  role: "QA Engineer & SDET — Automating Confidence Into Every Release",
  availability: "Open to Senior QA Engineer and SDET roles",
  pitch:
    "I build test automation that scales with the product: Java and Selenium for deep UI coverage, Python and Playwright for fast cross-browser checks, REST Assured for API integration, and k6 to keep performance honest under load.",
  photo: "assets/img/profile.png",

  // ---- contact ----
  location: "Dhaka, Bangladesh",
  email: "shahalam.tasin@gmail.com",
  //phone: "+880 1856 605725",
  whatsapp: "8801856605725", // digits only, used for the wa.me link
  socials: [
    { type: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/shah-alam-tasin/" },
    { type: "github", label: "GitHub", url: "https://github.com/ShahAlamTasin" },
  ],

  // ---- about ----
  about: [
    "I am a QA engineer with four years across fintech, ERP, e-commerce and internal enterprise platforms, including asset management, microfinance, staff management, CMS and event management. I pair rigorous manual testing with hands-on automation in Java, Python and Playwright, so coverage grows without losing the exploratory thinking that finds the unexpected bugs.",
    "At BRAC IT Services I built the project's test automation framework from scratch in Java, Selenium and Cucumber, then extended it with a lightweight Python and Playwright suite for fast cross-browser smoke checks. Integration coverage went from about 40% to over 75%, and an 18-hour manual regression cycle now runs in 4 hours.",
    "I lead API automation with REST Assured and validate performance with k6, and I own quality on complex financial processes: calculation accuracy, audit trails and compliance rules, traced through SQL and logs to the root cause.",
    "Beyond hands-on testing, I define QA strategy, review automation code, and mentor two junior QA engineers on framework usage and test design standards.",
  ],

  focus: [
    {
      title: "Automation frameworks",
      text: "Selenium, TestNG, Cucumber and Gradle frameworks with Page Object Model, reusable utilities, external test data and Allure reporting.",
    },
    {
      title: "Cross-browser and performance testing",
      text: "A Python and Playwright suite for fast, reliable cross-browser checks, backed by k6 for load and stress testing.",
    },
    {
      title: "API and integration testing",
      text: "REST Assured and Postman suites covering authentication, authorization, payments and third-party integrations.",
    },
    {
      title: "Test strategy and release readiness",
      text: "Sprint test plans, requirement traceability and input into go / no-go release decisions.",
    },
    {
      title: "Mentoring and code review",
      text: "Framework guidance, test design standards and code reviews for junior QA engineers.",
    },
  ],

  facts: [
    { label: "Based in", value: "Dhaka, Bangladesh", icon: "pin" },
    { label: "Nationality", value: "Bangladeshi", icon: "flag" },
    { label: "Languages", value: "Bengali (native), English (professional), Hindi (conversational)", icon: "language" },
  ],

  education: [
    {
      title: "M.Sc. in Computer Science & Engineering",
      meta: "Jahangirnagar University, 2022 – 2023, CGPA 3.60 / 4.00",
    },
    {
      title: "B.Sc. in Computer Science & Engineering",
      meta: "AUST, Dhaka, 2018 – 2022, CGPA 3.35 / 4.00",
    },
  ],

  certifications: [
    { title: "ISTQB Certified Tester Foundation Level (CTFL)", meta: "In progress, expected 2026" },
    { title: "Performance Testing with Apache JMeter", meta: "Udemy" },
    { title: "Software Testing Processes & Techniques", meta: "Udemy" },
  ],

  // ---- hero: the animated "test run" card ----
  // Suite names describe the kinds of testing you do; they are not real result counts.
  report: {
    title: "regression run",
    command: "gradle clean test allureReport",
    suites: [
      { name: "UI regression", tool: "Selenium WebDriver, TestNG" },
      { name: "BDD acceptance", tool: "Cucumber" },
      { name: "API integration", tool: "REST Assured" },
      { name: "Cross-browser and performance", tool: "Playwright, Python, k6" },
      { name: "Database checks", tool: "SQL" },
      { name: "Sanity gate", tool: "Smoke and sanity" },
    ],
    summary: [
      { label: "Automated regression tests", count: 250, suffix: "+" },
      { label: "Regression cycle, per release", from: "18h", to: "4h" },
      { label: "API integration test coverage", from: "40%", to: "75%+" },
    ],
    note: "Sample output. Figures are from my current project.",
    rotator: {
      autoplaySeconds: 5,
      panels: [
        {
          label: "Also comfortable with",
          kind: "chips",
          items: ["Python", "Playwright", "k6", "Java", "Selenium", "REST Assured", "TestNG", "Docker"],
        },
        {
          label: "Key expertise",
          kind: "list",
          items: [
            "Framework architecture across Java/Selenium and Python/Playwright",
            "API and performance testing with REST Assured and k6",
            "Mentoring and code review for junior QA engineers",
          ],
        },
      ],
    },
  },
};
