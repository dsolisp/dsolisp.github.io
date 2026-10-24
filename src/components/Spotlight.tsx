import { gavelSpotlight as g } from '../config.ts'
import { useLocale } from '../i18n/LocaleContext.tsx'

export default function Spotlight() {
  const { t } = useLocale()
  const gavel = t.gavel

  return (
    <section className="section section-alt" id="gavel">
      <div className="container">
        <h2>{gavel.title}</h2>
        <p className="section-intro">{gavel.intro}</p>
        <article className="spotlight-card spotlight-featured">
          <header className="spotlight-header">
            <h3>{g.name}</h3>
            <span className="pill pill-pass">{gavel.onNpm}</span>
          </header>
          <p>{gavel.summary}</p>

          <div className="gavel-case">
            <p className="gavel-case-label">{gavel.caseLabel}</p>
            <ul className="gavel-metrics" aria-label="Gavel">
              {gavel.metrics.map((m) => (
                <li key={m.label}>
                  <span className="gavel-metric-value">{m.value}</span>
                  <span className="gavel-metric-label">{m.label}</span>
                </li>
              ))}
            </ul>
            <p className="gavel-decision">{gavel.decision}</p>
          </div>

          <p className="spotlight-links">
            <a className="btn btn-primary" href={g.repoUrl} target="_blank" rel="noreferrer">
              {gavel.repository}
            </a>
            <a className="btn" href={g.npmUrl} target="_blank" rel="noreferrer">
              {gavel.npmCta}
            </a>
          </p>
        </article>
        <aside className="bailiff-note">
          <strong>{g.bailiff.name}</strong>
          <span className="pill pill-neutral">{gavel.bailiffStatus}</span>
          <p>{gavel.bailiffSummary}</p>
          <a href={g.bailiff.architectureUrl} target="_blank" rel="noreferrer">
            {gavel.bailiffDoc}
          </a>
        </aside>
      </div>
    </section>
  )
}
