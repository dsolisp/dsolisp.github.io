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
          QA Automation Architect based in Costa Rica and remote-ready. I design the foundations of
          multi-stack automation — layered page objects, accessibility-first locators, fixtures for
          DI, hermetic data, CI-first evidence — and supervise quality when humans and AI agents both
          write test code. Gavel encodes that constitution as a continuous gate. Supporting stacks
          below are evidence of breadth; the product is maintainable quality systems you can verify
          in public.
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
