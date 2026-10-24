import { gavelSpotlight as g } from '../config.ts'

export default function Spotlight() {
  const { caseStudy: c } = g

  return (
    <section className="section section-alt" id="gavel">
      <div className="container">
        <h2>Gavel</h2>
        <p className="section-intro">
          Open-source QA discipline for AI coding agents — the differentiator in this portfolio,
          and proof that quality architecture can be enforced as a gate, not just documented.
        </p>
        <article className="spotlight-card spotlight-featured">
          <header className="spotlight-header">
            <h3>{g.name}</h3>
            <span className="pill pill-pass">on npm</span>
          </header>
          <p>{g.summary}</p>

          <div className="gavel-case">
            <p className="gavel-case-label">{c.label}</p>
            <ul className="gavel-metrics" aria-label="Gavel enterprise outcomes">
              {c.metrics.map((m) => (
                <li key={m.label}>
                  <span className="gavel-metric-value">{m.value}</span>
                  <span className="gavel-metric-label">{m.label}</span>
                </li>
              ))}
            </ul>
            <p className="gavel-decision">{c.decision}</p>
          </div>

          <p className="spotlight-links">
            <a className="btn btn-primary" href={g.repoUrl} target="_blank" rel="noreferrer">
              Repository
            </a>
            <a className="btn" href={g.npmUrl} target="_blank" rel="noreferrer">
              @dsolisp/gavel on npm
            </a>
          </p>
        </article>
        <aside className="bailiff-note">
          <strong>{g.bailiff.name}</strong>
          <span className="pill pill-neutral">{g.bailiff.status}</span>
          <p>{g.bailiff.summary}</p>
          <a href={g.bailiff.architectureUrl} target="_blank" rel="noreferrer">
            Architecture doc →
          </a>
        </aside>
      </div>
    </section>
  )
}
