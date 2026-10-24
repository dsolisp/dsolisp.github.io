import type { Messages } from './types.ts'

const en: Messages = {
  metaTitle: 'Daniel Solis — QA Automation Architect | Agentic Quality · Costa Rica Remote',
  metaDescription:
    'Daniel Solis, QA Automation Architect (Costa Rica, remote-ready). Designs maintainable multi-stack QA Automation systems and Gavel — open-source CI quality gates for AI-era engineering teams.',
  nav: {
    sectionsAria: 'Sections',
    menu: 'Menu',
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
      'I design maintainable multi-stack QA Automation systems and quality gates for AI-era teams — so test code stays scalable when humans and agents both write it. Public proof: live CI, Allure evidence, and Gavel enforcing a Test Constitution across repos.',
    ctaCi: 'Live CI Lab',
    ctaGavel: 'Gavel on npm',
    ctaGavelCase: 'Gavel case study',
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
      'System health evidence from GitHub Actions — Allure links only when a published report has real results (nonzero totals).',
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
    caseCta: 'Read the case study →',
    bailiffStatus: 'In design',
    bailiffSummary:
      'Planned sibling repo that runs the full QA workflow around the test code: manual and exploratory testing, writing test cases, troubleshooting in a live browser context, CI orchestration, bug reports, tickets, environments and credentials. The boundary rule: everything inside the test codebase belongs to Gavel; everything outside it belongs to Bailiff. Gavel judges the test code; Bailiff runs the courtroom around it.',
    bailiffDoc: 'Architecture doc →',
  },
  gavelCase: {
    documentTitle: 'Gavel — Test Constitution case study | Daniel Solis',
    documentDescription:
      'Case study: Gavel enforces a Test Constitution and CI quality gates for AI-era QA automation. Daniel Solis, QA Automation Architect.',
    eyebrow: 'Case study · open source',
    title: 'Gavel',
    lede: 'Enforcing a Test Constitution across multi-repo QA estates — so automation stays maintainable when humans and agents both write tests.',
    ctaAria: 'Gavel links',
    backHome: '← Portfolio home',
    problemTitle: 'The problem',
    problem:
      'AI coding agents and fast-moving teams ship test code that looks green and still accrues the same debt: brittle asserts, hardcoded environments, sleeps, selector leaks, and frameworks that juniors cannot extend. Documentation alone does not hold the line.',
    approachTitle: 'The approach',
    approach:
      'Gavel is a framework-adaptive QA discipline engine. It audits test code against a Test Constitution, reviews diffs, flags dead page-object paths, parses CI reports, and can gate pipelines — so quality architecture is enforced, not just described.',
    constitution: [
      'Layered page objects — no selectors in specs',
      'Accessibility-first locators',
      'No static sleeps as a habit',
      'Dependency injection via fixtures',
      'Factories for test data',
    ],
    engagementTitle: 'Engagement snapshot',
    metricsAria: 'Gavel engagement metrics',
    proofTitle: 'Public proof',
    proof:
      'Install from npm, read the architecture, and see live CI + Allure evidence on the portfolio. Gavel judges the test codebase; Bailiff (in design) will run the courtroom around it.',
  },
  architecture: {
    title: 'CI/CD Pipeline Architecture',
    intro:
      'How a git push becomes public proof: Actions runs stacks in parallel under quality gates (Gavel + Test Constitution where wired), Allure + summary.json land on R2, and this site plus the QA Dashboard show live status — no app servers.',
    parallelAria: 'Suites running in parallel',
    detailsSummary: 'Stage detail',
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
      'Flagship frameworks hit the same apps under shared architecture standards — stacks stay directly comparable.',
    also: 'Also in the portfolio',
    sourceOnRequest: 'source on request',
    items: {
      PlaywrightProject: {
        tagline: 'Flagship E2E framework',
        description:
          'Reference multi-layer stack — UI, API, visual, a11y and perf under shared POM + fixtures.',
      },
      PythonSeleniumProject: {
        tagline: 'Longest-running stack (2024)',
        description:
          'Longest hermetic run: UI, API, DB, visual, a11y and Locust on the shared practice apps.',
      },
      JavaSeleniumProject: {
        tagline: 'Enterprise-style Java stack',
        description:
          'Enterprise Java coverage — UI, REST Assured, Gatling — Docker/Grid-ready on the same apps.',
      },
      CypressProject: {
        tagline: 'Component-era web testing',
        description:
          'Component-era web coverage: UI, API, visual, a11y and optional Lighthouse.',
      },
      CSharpSeleniumProject: {
        tagline: '.NET framework library',
        description:
          'Private .NET library + SpecFlow suite on the same apps under test.',
      },
      'LLM Testing & Agentic Engineering Masterclass': {
        tagline: 'AI-era QA curriculum',
        description:
          'Zero-to-advanced LLM/RAG eval curriculum — DeepEval, Ragas and agentic QA patterns.',
      },
      'API Automation Engineering Masterclass': {
        tagline: 'API SDET curriculum',
        description:
          'Zero-to-advanced API SDET path: contracts, REST Assured and k6.',
      },
    },
  },
  about: {
    title: 'About',
    intro:
      'QA Automation Architect based in Costa Rica and remote-ready. I design the foundations of multi-stack QA Automation — layered page objects, accessibility-first locators, fixtures for DI, hermetic data, CI-first evidence — and supervise quality when humans and AI agents both write test code. Gavel encodes that constitution as a continuous gate. The product is maintainable quality systems you can verify in public.',
    skillsAria: 'Core stack',
    groups: [
      {
        heading: 'Stack',
        items: [
          'TypeScript',
          'Java',
          'Python',
          'C#',
          'Playwright',
          'Selenium',
          'Cypress',
          'pytest',
          'Allure',
          'GitHub Actions',
          'REST Assured',
          'DeepEval',
        ],
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
