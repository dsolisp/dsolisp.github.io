import { gavelSpotlight as g } from '../config.ts'

export default function Spotlight() {
  return (
    <section className="section section-alt" id="gavel">
      <div className="container">
        <h2>Gavel</h2>
        <p className="section-intro">
          Open-source QA discipline for AI coding agents — the differentiator in this portfolio.
        </p>
        <article className="spotlight-card spotlight-featured">
          <header className="spotlight-header">
            <h3>{g.name}</h3>
            <span className="pill pill-pass">on npm</span>
          </header>
          <p>{g.summary}</p>
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
