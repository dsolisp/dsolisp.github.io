export const profile = {
  name: 'Daniel Solis',
  location: 'Costa Rica',
  github: 'https://github.com/dsolisp',
  githubUser: 'dsolisp',
  linkedin: 'https://www.linkedin.com/in/danieleduardosolisprado/',
  resumeUrl: `${import.meta.env.BASE_URL}resume.pdf`,
  dashboardUrl: 'https://dsolisp.github.io/qa-dashboard/',
  email: null as string | null,
}

export const architectureHref = '#architecture'

/**
 * Public base URL of the Cloudflare R2 bucket `qa-portfolio-allure`.
 * Leave empty to hide Allure links.
 */
export const allureR2BaseUrl = 'https://pub-525e3f872a0d44b7821f03ce22e3af44.r2.dev'

export interface CiRepo {
  repo: string
  label: string
  stack: string
  allureWorkflow?: string
  allureSuite?: string
}

/** Public repos whose GitHub Actions runs are shown live. */
export const ciRepos: CiRepo[] = [
  {
    repo: 'PlaywrightProject',
    label: 'Playwright',
    stack: 'TypeScript · Playwright · Vitest',
    allureWorkflow: 'Nightly Test Suite',
  },
  {
    repo: 'CypressProject',
    label: 'Cypress',
    stack: 'TypeScript · Cypress',
    allureWorkflow: 'Nightly Test Suite',
    allureSuite: 'sauce',
  },
  {
    repo: 'JavaSeleniumProject',
    label: 'Java Selenium',
    stack: 'Java 21 · JUnit 5 · Selenium',
    allureWorkflow: 'Nightly Test Suite',
  },
  {
    repo: 'PythonSeleniumProject',
    label: 'Python Selenium',
    stack: 'Python · pytest · Selenium',
    allureWorkflow: 'Nightly Test Suite',
  },
  { repo: 'gavel', label: 'Gavel', stack: 'Node.js · npm package' },
]

export interface Project {
  name: string
  tags: string[]
  repoUrl?: string
  status?: 'live' | 'in-design' | 'private'
}

export const projects: Project[] = [
  {
    name: 'PlaywrightProject',
    tags: ['TypeScript', 'Playwright', 'Vitest', 'Allure', 'OpenTelemetry'],
    repoUrl: 'https://github.com/dsolisp/PlaywrightProject',
    status: 'live',
  },
  {
    name: 'PythonSeleniumProject',
    tags: ['Python', 'pytest', 'Selenium', 'Locust'],
    repoUrl: 'https://github.com/dsolisp/PythonSeleniumProject',
    status: 'live',
  },
  {
    name: 'JavaSeleniumProject',
    tags: ['Java 21', 'JUnit 5', 'REST Assured', 'Gatling'],
    repoUrl: 'https://github.com/dsolisp/JavaSeleniumProject',
    status: 'live',
  },
  {
    name: 'CypressProject',
    tags: ['TypeScript', 'Cypress', 'Lighthouse'],
    repoUrl: 'https://github.com/dsolisp/CypressProject',
    status: 'live',
  },
  {
    name: 'CSharpSeleniumProject',
    tags: ['C# / .NET', 'Selenium', 'SpecFlow'],
    status: 'private',
  },
  {
    name: 'LLM Testing & Agentic Engineering Masterclass',
    tags: ['Python', 'DeepEval', 'Ragas', 'Agentic'],
    repoUrl: 'https://github.com/dsolisp/LLM-Testing-and-Agentic-Engineering-Masterclass',
    status: 'live',
  },
  {
    name: 'API Automation Engineering Masterclass',
    tags: ['Java', 'REST Assured', 'k6'],
    status: 'private',
  },
]

export const gavelSpotlight = {
  name: 'Gavel',
  npmUrl: 'https://www.npmjs.com/package/@dsolisp/gavel',
  repoUrl: 'https://github.com/dsolisp/gavel',
  bailiff: {
    name: 'Bailiff',
    architectureUrl: 'https://github.com/dsolisp/gavel/blob/main/docs/ARCHITECTURE.md',
  },
}

export const archParallel = ['Cypress', 'Playwright', 'Java Selenium', 'Python Selenium'] as const

export const archTech: Record<string, string[]> = {
  '01': ['GitHub Actions', 'YAML workflows', 'cron schedules', 'Docker Compose'],
  '02': ['Matrix strategy', 'Hermetic SQLite', 'OpenTelemetry'],
  '03': ['Allure', 'allure-commandline', 'summary.json'],
  '04': ['Cloudflare R2', 'S3 API', 'aws s3 cp'],
  '05': ['GitHub REST API', 'React + Vite', 'GitHub Pages'],
}
