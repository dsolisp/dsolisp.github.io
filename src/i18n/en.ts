import type { Messages } from './types.ts'

const en: Messages = {
  metaTitle: 'Daniel Solis — QA Automation Architect | Agentic Quality · Costa Rica Remote',
  metaDescription:
    'Daniel Solis, QA Automation Architect (Costa Rica, remote-ready). Designs maintainable multi-stack test systems and Gavel — open-source CI quality gates for AI-era engineering teams.',
  nav: {
    sectionsAria: 'Sections',
    ciLab: 'CI Lab',
    gavel: 'Gavel',
    projects: 'Projects',
    about: 'About',
    architecture: 'Architecture',
  },
  theme: {
    toDark: 'Dark',
    toLight: 'Light',
    aria: 'Toggle theme',
  },
  lang: {
    toEn: 'EN',
    toEs: 'ES',
    aria: 'Switch language',
  },
  hero: {
    remoteReady: 'Remote-ready',
    title: 'QA Automation Architect',
    pitch:
      'I design maintainable multi-stack QA systems and quality gates for AI-era teams — so test code stays scalable when humans and agents both write it. Public proof: live CI, Allure evidence, and Gavel enforcing a Test Constitution across repos.',
    ctaCi: 'Live CI Lab',
    ctaGavel: 'Gavel on npm',
  },
  highlights: {
    aria: 'Highlights',
    publicRepos: 'Public repos on GitHub',
    stacks: 'Public stacks (TS, Python, Java, JS)',
    frameworks: 'Frameworks & curricula in the portfolio',
    testTypes: 'Test types covered',
  },
  ciLab: {
    title: 'Live CI Lab',
    intro:
      'Workflow status comes from the GitHub Actions API. Allure links appear only when a published report has real results (nonzero test totals) — empty shells are hidden.',
    loading: 'Loading runs…',
    apiError: 'Could not reach the GitHub API (rate limit). Check runs directly on',
    noRuns: 'No recent workflow runs found.',
    allRuns: 'All runs →',
    allure: 'Allure report →',
    report: 'Report',
    staleNightly: 'stale nightly',
    tests: 'tests',
  },
  gavel: {
    title: 'Gavel',
    intro:
      'Open-source QA discipline for AI coding agents — the differentiator in this portfolio, and proof that quality architecture can be enforced as a gate, not just documented.',
    onNpm: 'on npm',
    summary:
      'Gavel audits test code. It is my open-source QA discipline engine for AI coding agents: it enforces a Test Constitution — layered page objects, accessibility-first locators, no sleeps, DI via fixtures, factories for test data — across Playwright, Selenium, Cypress, WebdriverIO, Cucumber, Robot and pytest. It reviews test diffs, flags dead code, parses CI reports (JUnit, Allure, Playwright, Cypress) and clusters failures into drift vs bug vs env.',
    caseLabel: 'Enterprise multi-repo engagement (anonymized)',
    metrics: [
      { value: '8', label: 'Repositories on the quality surface' },
      { value: '5,000+', label: 'Baseline Gavel findings' },
      { value: '~1,500', label: 'Remaining after roadmap (~70% reduction)' },
      { value: '7 / 8', label: 'Repos with Gavel as a CI gate' },
    ],
    decision:
      'Decision: fix the automation foundations first (layered page objects, a11y-first locators, fixtures/DI, no sleeps) so the estate stays maintainable and scalable — then keep Gavel as the continuous judge so the same classes of test-code debt do not return.',
    repository: 'Repository',
    npmCta: '@dsolisp/gavel on npm',
    bailiffStatus: 'In design',
    bailiffSummary:
      'Planned sibling repo that runs the full QA workflow around the test code: manual and exploratory testing, writing test cases, troubleshooting in a live browser context, CI orchestration, bug reports, tickets, environments and credentials. The boundary rule: everything inside the test codebase belongs to Gavel; everything outside it belongs to Bailiff. Gavel judges the test code; Bailiff runs the courtroom around it.',
    bailiffDoc: 'Architecture doc →',
  },
  architecture: {
    title: 'CI/CD Pipeline Architecture',
    intro:
      'How a git push becomes a public, verifiable test report: GitHub Actions runs the stacks in parallel, Allure + summary.json land on Cloudflare R2, and this site (plus the QA Dashboard) present live status — no app servers to maintain.',
    parallelAria: 'Suites running in parallel',
    footnoteBefore: 'See it live: the',
    footnoteMid:
      'is rendered from stage 05 in real time, Allure HTML reports are served from Cloudflare R2 when a matching nightly upload exists, and every workflow file is public on',
    footnoteGithub: 'GitHub',
    footnoteDash: 'Metrics also feed the',
    stages: [
      {
        step: '01',
        title: 'Trigger & Orchestration',
        description:
          'Every push, pull request and nightly cron schedule fires GitHub Actions workflows defined as version-controlled .yml files in each repo (ci.yml, full-tests.yml, nightly.yml). Workflows checkout the code, provision Node/Java/Python toolchains and boot the dockerized practice app for hermetic UI runs.',
      },
      {
        step: '02',
        title: 'Parallel Execution',
        description:
          'Matrix jobs run the suites in parallel across four independent framework repos — UI E2E, API, visual regression, accessibility (Axe) and performance — each with continue-on-error isolation so one failing suite never blocks the rest.',
      },
      {
        step: '03',
        title: 'Reporting',
        description:
          'Each run generates a static Allure HTML report from the raw results, and a script distills machine-readable metrics — pass rate, test counts, duration, run id — into a compact summary.json per run.',
      },
      {
        step: '04',
        title: 'Storage',
        description:
          'Reports and metrics are pushed to Cloudflare R2 (S3-compatible object storage) with the AWS CLI pointed at the R2 endpoint. Allure HTML lands at {repo}/{run_id}/index.html on a public bucket; summary.json metrics go to a separate metrics bucket keyed by run.',
      },
      {
        step: '05',
        title: 'Presentation',
        description:
          'This site queries the GitHub REST API in the browser for the latest workflow runs per repo (status, duration, timing) and deep-links Allure reports on R2 only when published metrics show real results (nonzero totals) — no backend, no polling service: static React on GitHub Pages over live APIs.',
      },
    ],
  },
  projects: {
    title: 'Projects',
    intro:
      'Flagship frameworks test the same apps (SauceDemo, a local practice app, public REST APIs, SQLite) under shared architecture standards so stacks are directly comparable.',
    also: 'Also in the portfolio',
    sourceOnRequest: 'source on request',
    items: {
      PlaywrightProject: {
        tagline: 'Flagship E2E framework',
        description:
          'E2E UI, API/schema, unit, BDD (playwright-bdd), visual, accessibility (Axe) and performance testing with OpenTelemetry tracing. Page Object Model with mirrored locators, fixtures for DI, Allure reporting.',
      },
      PythonSeleniumProject: {
        tagline: 'Longest-running stack (2024)',
        description:
          'UI (Selenium + Playwright smoke), API, DB, visual regression, accessibility, Locust load testing and flaky-test history tracking. Hermetic runs against a shared local practice app and SQLite.',
      },
      JavaSeleniumProject: {
        tagline: 'Enterprise-style Java stack',
        description:
          'UI, REST Assured API, DB, visual (Shutterbug), Axe accessibility and Gatling load tests. Maven, JUnit 5, Docker/Selenium Grid-ready, optional Cucumber BDD layer.',
      },
      CypressProject: {
        tagline: 'Component-era web testing',
        description:
          'UI, API and unit specs, visual image-diff, accessibility, hermetic SQLite data layer and OpenTelemetry wired into the Cypress config. Includes an optional Lighthouse performance pipeline.',
      },
      CSharpSeleniumProject: {
        tagline: '.NET framework library',
        description:
          'Framework library plus unit, API, web and SpecFlow BDD tests with FluentAssertions and Allure — same applications under test as the Python stack, so results are directly comparable.',
      },
      'LLM Testing & Agentic Engineering Masterclass': {
        tagline: 'AI-era QA curriculum',
        description:
          'Zero-to-Hero roadmap for testing LLM applications: DeepEval, Ragas, RAG evaluation, self-healing locators and OpenTelemetry for agents.',
      },
      'API Automation Engineering Masterclass': {
        tagline: 'API SDET curriculum',
        description:
          'Zero-to-Hero API testing guide: REST Assured, schema validation vs consumer-driven contracts, k6 performance and session-reuse patterns.',
      },
    },
  },
  about: {
    title: 'About',
    intro:
      'QA Automation Architect based in Costa Rica and remote-ready. I design the foundations of multi-stack automation — layered page objects, accessibility-first locators, fixtures for DI, hermetic data, CI-first evidence — and supervise quality when humans and AI agents both write test code. Gavel encodes that constitution as a continuous gate. Supporting stacks below are evidence of breadth; the product is maintainable quality systems you can verify in public.',
    groups: [
      {
        heading: 'Languages',
        items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C#'],
      },
      {
        heading: 'Runners & frameworks',
        items: ['Playwright', 'Selenium WebDriver', 'Cypress', 'pytest', 'JUnit 5', 'Vitest', 'SpecFlow', 'Cucumber'],
      },
      {
        heading: 'API · performance · AI eval',
        items: ['REST Assured', 'k6', 'Locust', 'Gatling', 'DeepEval', 'Ragas'],
      },
      {
        heading: 'Reporting · CI · infra',
        items: ['Allure', 'GitHub Actions', 'Docker', 'Selenium Grid', 'axe-core', 'OpenTelemetry', 'SQLite', 'Maven', 'pnpm'],
      },
    ],
  },
  footer: {
    linksAria: 'Footer links',
    resume: 'Resume',
    dashboard: 'QA Dashboard',
    noteBefore: 'Static site (React + Vite) on GitHub Pages · live data from the GitHub REST API ·',
    source: 'source',
  },
}

export default en
