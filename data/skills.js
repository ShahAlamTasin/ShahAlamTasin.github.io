/* ==========================================================================
   data/skills.js
   - Add a group: copy one object in `groups`.
   - Add a skill: append a string, or { name: "Tool", core: true } to highlight it.
   ========================================================================== */
window.PORTFOLIO = window.PORTFOLIO || {};

PORTFOLIO.skills = {
  legendCore: "Tools I use every day",
  groups: [
    {
      title: "Programming and databases",
      note: "Java and Python, with SQL for data validation.",
      items: [
        { name: "Java", core: true },
        { name: "Python", core: true },
        { name: "SQL", core: true },
        "MySQL",
        "PostgreSQL",
        "Oracle",
        "JavaScript (working knowledge)",
      ],
    },
    {
      title: "Test automation",
      note: "Maintainable frameworks across Java and Python, not one-off scripts.",
      items: [
        { name: "Selenium WebDriver", core: true },
        { name: "Playwright", core: true },
        { name: "TestNG", core: true },
        { name: "Cucumber BDD", core: true },
        { name: "Page Object Model", core: true },
        "Data-driven frameworks",
        "Hybrid frameworks",
      ],
    },
    {
      title: "API and performance testing",
      note: "Functional, security and load coverage for services.",
      items: [
        { name: "REST Assured", core: true },
        { name: "k6", core: true },
        { name: "Postman", core: true },
        "Swagger",
        "REST",
        "JSON validation",
        "OAuth 2.0",
        "Apache JMeter (load, stress)",
      ],
    },
    {
      title: "CI/CD, tools and process",
      note: "Fast, reliable build feedback and clear traceability.",
      items: [
        { name: "Gradle", core: true },
        { name: "Git / GitHub", core: true },
        { name: "Docker", core: true },
        { name: "Allure", core: true },
        { name: "Jira", core: true },
        "Maven",
        "Extent Reports",
        "Confluence",
        "Zephyr",
        "Agile / Scrum",
        "SDLC / STLC",
        "Requirement traceability matrix",
        "Shift-left testing",
      ],
    },
    {
      title: "Testing types and design",
      note: "Choosing the right test for the risk.",
      items: [
        "Functional",
        "Regression",
        "Smoke and sanity",
        "Integration",
        "System",
        "End-to-end",
        "UAT",
        "Exploratory",
        "Database",
        "API security",
        "Boundary value analysis",
        "Equivalence partitioning",
        "Decision tables",
        "Risk-based test design",
      ],
    },
    {
      title: "Working style",
      note: "How I work with teams.",
      items: [
        "Leadership and mentorship",
        "Cross-functional collaboration",
        "Problem-solving and analysis",
        "Ownership and accountability",
        "Communication",
      ],
    },
  ],
};
