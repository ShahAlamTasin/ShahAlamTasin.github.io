/* ==========================================================================
   data/experience.js  -  newest first
   To add a job: copy one object and put it at the top of the array.
   `metrics` and `tags` are optional.
   ========================================================================== */
window.PORTFOLIO = window.PORTFOLIO || {};

PORTFOLIO.experience = [
  {
    role: "Software Quality Assurance Engineer",
    company: "BRAC IT Services Limited",
    sector: "Fintech / ERP",
    location: "Dhaka, Bangladesh",
    period: "Oct 2024 – Present",
    current: true,
    metrics: [
      { value: "250+", label: "automated test cases" },
      { value: "40% to 75%+", label: "API integration coverage" },
      { value: "18h to 4h", label: "regression cycle" },
    ],
    points: [
      "Architected the project's test automation framework from scratch in Java (Selenium WebDriver, TestNG, Cucumber, Gradle): Page Object Model structure, reusable utilities, external test-data management and automated reporting. It now runs 250+ automated test cases and is the team standard.",
      "Also architected a complementary Python and Playwright suite for fast cross-browser smoke and UI checks, and introduced k6 load tests to validate critical endpoints under peak traffic.",
      "Lead API automation for the entire platform with REST Assured, raising end-to-end integration coverage from roughly 40% to over 75% across core services.",
      "Delivered a sanity and regression automation suite with the QA team, cutting an 18-hour manual regression cycle to 4 hours, a reduction of over 70% in per-release testing effort.",
      "Own quality for complex financial processes and integrations across interconnected modules and third-party services: validating calculation accuracy, audit trails and compliance rules, and using SQL and log analysis to isolate root cause.",
      "Define QA test strategy and sprint-level test plans with engineering leads and product managers, and contribute key input into go / no-go release readiness decisions.",
      "Integrated the automation suite into CI/CD pipelines with Dockerized test environments and Allure reporting. Lead code reviews of automation scripts and mentor 2 junior QA engineers on framework usage, test design and coding standards.",
    ],
    tags: ["Java", "Selenium", "Playwright", "Python", "TestNG", "Cucumber", "REST Assured", "k6", "Gradle", "Docker", "Allure", "SQL"],
  },
  {
    role: "Software Quality Assurance Engineer",
    company: "Bit Mascot (Pvt.) Ltd.",
    sector: "E-commerce and CMS products",
    location: "Dhaka, Bangladesh",
    period: "Feb 2023 – Sep 2024",
    metrics: [{ value: "~40%", label: "less API regression time" }],
    points: [
      "Owned manual and automated testing for a multi-tenant CMS platform serving clients across multiple countries, helping keep production rollouts stable and low-risk each release cycle.",
      "Tested authentication, authorization and payment APIs with Postman, building reusable collections and assertion scripts that cut API regression time by about 40%.",
      "Ran integration, UX and cross-browser / cross-device testing for e-commerce catalogue and checkout journeys, getting severe defects resolved before release.",
      "Managed the full defect lifecycle in Jira (reproduction, severity and priority triage, root-cause collaboration, closure verification) and facilitated UAT with business stakeholders, turning requirements into acceptance criteria and securing sign-off before each release.",
    ],
    tags: ["Postman", "Jira", "Cross-browser testing", "API testing", "UAT"],
  },
  {
    role: "Intern",
    company: "BRAC IT Services Limited",
    location: "Dhaka, Bangladesh",
    period: "Feb 2022 – May 2022",
    points: [
      "Wrote unit tests and supported feature development within an Agile team, gaining early exposure to code review, version control and shift-left testing practices.",
    ],
    tags: ["Unit testing", "Agile", "Git"],
  },
];
