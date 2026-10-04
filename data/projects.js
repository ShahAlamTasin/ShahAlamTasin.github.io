/* ==========================================================================
   data/projects.js
   To add a project: copy one object, change `domain` (a new domain creates
   a new filter button automatically), and fill in the fields.

   Fields
     domain        filter label (e.g. "Fintech")
     title         card heading
     company       where the work happened
     period        optional
     summary       2-3 sentences shown on the card
     scope         what was tested (shown in the details dialog)
     contribution  what you personally did
     outcomes      measurable results (only add numbers you can back up)
     tech          tags shown on the card
     links         optional: [{ label: "Source", url: "https://..." }]

   REVIEW NOTE: entries marked "// REVIEW" were written from the domains you
   listed. Check the scope lines match your real work and add specifics.
   ========================================================================== */
window.PORTFOLIO = window.PORTFOLIO || {};

PORTFOLIO.projects = [
  {
    domain: "Fintech",
    title: "Fintech platform",
    company: "BRAC IT Services Limited",
    period: "Oct 2024 – Present",
    summary:
      "Quality ownership for a financial platform made of interconnected modules and third-party services, where calculation accuracy and compliance rules cannot slip. Recently extended with a lightweight Python and Playwright suite for fast cross-browser smoke coverage.",
    scope: [
      "Calculation accuracy across financial processes",
      "Audit trail completeness and compliance rules",
      "Integrations with third-party services",
      "Cross-browser smoke checks with Python and Playwright",
      "Load and stress testing of key endpoints with k6",
      "Root-cause analysis with SQL queries and log inspection",
    ],
    contribution: [
      "Defined the QA test strategy and sprint-level test plans with engineering leads and product managers",
      "Built a lightweight Python and Playwright suite for fast cross-browser smoke runs alongside the platform's existing automation",
      "Ran k6 load tests against critical endpoints to validate performance under peak load",
      "Gave key input into go / no-go release readiness decisions",
    ],
    outcomes: [
      "Integration coverage raised from roughly 40% to over 75%",
      "Manual regression cycle cut from 18 hours to 4 hours",
    ],
    tech: ["Python", "Playwright", "REST Assured", "k6", "SQL", "Docker", "Allure"],
  },
  {
    domain: "ERP",
    title: "ERP suite",
    company: "BRAC IT Services Limited",
    period: "Oct 2024 – Present",
    summary:
      "End-to-end quality for an ERP where a change in one module ripples into others. Automation follows the business workflows, not just the screens.",
    scope: [
      "Cross-module business workflows, end to end",
      "Data consistency between interconnected modules",
      "Requirement traceability from acceptance criteria to test cases",
      "Sanity and regression gating for every release",
    ],
    contribution: [
      "Built the shared automation framework that the team adopted as its standard",
      "Reviewed automation code and mentored 2 junior QA engineers",
    ],
    outcomes: ["250+ automated test cases running in CI/CD with Allure reports"],
    tech: ["Java", "Selenium", "TestNG", "Cucumber", "Gradle", "Jira"],
  },
  {
    // REVIEW: written from the domain name; confirm the workflows you covered.
    domain: "Asset Management",
    title: "Asset management module",
    company: "BRAC IT Services Limited",
    summary:
      "Testing of asset records and their movement through the organisation, with attention to the financial figures and approvals attached to each asset.",
    scope: [
      "Asset registration, assignment, transfer and retirement workflows",
      "Approval and permission rules for each step",
      "Accuracy of asset values and related calculations",
      "Audit trail for every change to an asset record",
    ],
    contribution: [
      "Designed test cases with boundary value analysis and decision tables",
      "Validated stored data directly with SQL",
    ],
    tech: ["Selenium", "TestNG", "SQL", "Decision tables"],
  },
  // {
  //   // REVIEW: written from the domain name; confirm the products and workflows.
  //   domain: "Microfinance",
  //   title: "Microfinance system",
  //   company: "BRAC IT Services Limited",
  //   summary:
  //     "Quality checks for lending and repayment processes, where every figure must reconcile and every action must be traceable.",
  //   scope: [
  //     "Loan lifecycle from application to closure",
  //     "Repayment and balance calculation accuracy",
  //     "Compliance rules and audit trails",
  //     "Integrations with external services",
  //   ],
  //   contribution: [
  //     "Risk-based test design focused on money-moving flows",
  //     "API and database validation to isolate root cause quickly",
  //   ],
  //   tech: ["REST Assured", "SQL", "Postman", "Risk-based testing"],
  // },
  {
    // REVIEW: written from the domain name; confirm the workflows you covered.
    domain: "Staff Management",
    title: "Staff management system",
    company: "BRAC IT Services Limited",
    summary:
      "Testing of employee records and the approval-driven workflows around them, with a strong focus on who is allowed to see and change what.",
    scope: [
      "Employee record creation, update and history",
      "Role-based access and authorization rules",
      "Multi-step approval workflows",
      "Data validation and negative-path testing",
    ],
    contribution: [
      "Authorization test matrix across roles",
      "Equivalence partitioning and boundary value test design",
    ],
    tech: ["Selenium", "REST Assured", "OAuth 2.0", "SQL"],
  },
  {
    domain: "CMS",
    title: "Multi-tenant CMS platform",
    company: "Bit Mascot (Pvt.) Ltd.",
    period: "Feb 2023 – Sep 2024",
    summary:
      "Manual and automated testing for a CMS serving clients across multiple countries, so each release reached production stable and low-risk.",
    scope: [
      "Tenant isolation and per-client configuration",
      "Authentication and authorization APIs",
      "Cross-browser and cross-device behaviour",
      "Release regression before every rollout",
    ],
    contribution: [
      "Built reusable Postman collections with assertion scripts",
      "Managed the full defect lifecycle in Jira and facilitated UAT",
    ],
    outcomes: ["API regression time cut by about 40%"],
    tech: ["Postman", "Jira", "Cross-browser testing", "UAT"],
  },
  {
    domain: "E-commerce",
    title: "E-commerce catalogue and checkout",
    company: "Bit Mascot (Pvt.) Ltd.",
    period: "Feb 2023 – Sep 2024",
    summary:
      "Integration, UX and cross-device testing of the buying journey, from browsing the catalogue to paying at checkout.",
    scope: [
      "Catalogue browsing, search and product pages",
      "Checkout and payment flows",
      "Authentication and authorization around orders",
      "UX consistency across browsers and devices",
    ],
    contribution: [
      "Drove severe defects to resolution before release",
      "Turned requirements into acceptance criteria and secured sign-off",
    ],
    tech: ["Postman", "Jira", "Integration testing", "UX testing"],
  },
  {
    // REVIEW: written from the domain name; confirm the product and workflows.
    domain: "Event Management",
    title: "Event management product",
    company: "Bit Mascot (Pvt.) Ltd.",
    summary:
      "Testing of event creation, registration and the notifications that keep organisers and attendees in sync.",
    scope: [
      "Event setup, scheduling and publishing",
      "Registration and payment journeys",
      "Notifications and confirmations",
      "Behaviour across browsers and devices",
    ],
    contribution: [
      "Exploratory and regression testing each release",
      "API checks with Postman for registration and payments",
    ],
    tech: ["Postman", "Exploratory testing", "Jira"],
  },
  {
    // REVIEW: written from the domain name; confirm the editor and features.
    domain: "Frontend Editors",
    title: "Frontend page and content editors",
    company: "Bit Mascot (Pvt.) Ltd.",
    summary:
      "Testing of visual editors where what the author builds must match what visitors see, on every browser and screen size.",
    scope: [
      "Editing, formatting and layout behaviour",
      "Save, preview and publish flow",
      "Rendering parity between the editor and the live page",
      "Cross-browser and responsive behaviour",
    ],
    contribution: [
      "Exploratory sessions on interaction-heavy features",
      "Cross-browser and cross-device regression checks",
    ],
    tech: ["Exploratory testing", "Cross-browser testing", "UX testing"],
  },
  {
    domain: "Automation",
    title: "Test automation framework",
    company: "BRAC IT Services Limited",
    period: "Oct 2024 – Present",
    summary:
      "A Java framework built from scratch and adopted as the team standard: Page Object Model, reusable utilities, external test data and automated reporting.",
    scope: [
      "UI automation with Selenium WebDriver and TestNG",
      "BDD scenarios with Cucumber",
      "External test-data management and data-driven runs",
      "Allure reporting and CI/CD execution in Docker",
    ],
    contribution: [
      "Designed the architecture and coding standards",
      "Reviewed automation code and guided 2 junior QA engineers",
    ],
    outcomes: ["Scaled to 250+ automated test cases", "Adopted as the team standard"],
    tech: ["Java", "Selenium", "TestNG", "Cucumber", "Gradle", "Docker"],
  },
  {
    domain: "Automation",
    title: "API automation suite",
    company: "BRAC IT Services Limited",
    period: "Oct 2024 – Present",
    summary:
      "REST Assured automation covering the platform's core services, built to catch integration problems before the UI ever runs.",
    scope: [
      "REST endpoint and JSON response validation",
      "OAuth 2.0 authentication and authorization checks",
      "End-to-end integration flows across core services",
      "Third-party service integrations",
    ],
    contribution: [
      "Lead the API automation effort for the entire platform",
      "Wired the suite into CI/CD for fast build feedback",
    ],
    outcomes: ["Integration coverage raised from roughly 40% to over 75%"],
    tech: ["REST Assured", "Java", "OAuth 2.0", "JSON", "Gradle"],
  },
];
