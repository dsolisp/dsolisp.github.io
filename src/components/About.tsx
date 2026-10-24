const techGroups: { heading: string; items: string[] }[] = [
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
]

export default function About() {
  return (
    <section className="section section-alt" id="about">
      <div className="container">
        <h2>About</h2>
        <p className="section-intro">
          QA automation engineer focused on maintainable test architecture: Page Object Model with
          mirrored locators, shared standards across stacks, hermetic test data, and CI-first
          workflows with Allure reporting and Docker/Selenium Grid-ready runs. Active portfolio
          since 2024 — Python and Java are the longest-running stacks, Playwright the most
          iterated, and the API/LLM masterclasses the most recent work on AI-era test engineering.
        </p>
        {techGroups.map((g) => (
          <div key={g.heading}>
            <h3 className="tech-heading">{g.heading}</h3>
            <ul className="tag-list tag-list-lg">
              {g.items.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
