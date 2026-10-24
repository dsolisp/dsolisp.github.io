import { gavelSpotlight as g } from '../config.ts'
import { useLocale } from '../i18n/LocaleContext.tsx'

export default function Spotlight() {
  const { t } = useLocale()
  const gavel = t.gavel

  return (
    <section className="section section-alt" id="gavel">
      <div className="container">
        <p className="spotlight-kicker">
          <span className="pill pill-pass">{gavel.onNpm}</span>
        </p>
        <h2>{gavel.title}</h2>
        <p className="section-intro">{gavel.intro}</p>
        <p className="spotlight-summary">{gavel.summary}</p>

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
          <a className="btn btn-primary" href="/gavel/">
            {gavel.caseCta}
          </a>
          <a className="btn" href={g.npmUrl} target="_blank" rel="noreferrer">
            {gavel.npmCta}
          </a>
        </p>

        <p className="bailiff-footnote">
          <strong>{g.bailiff.name}</strong>
          <span className="pill pill-neutral">{gavel.bailiffStatus}</span>
          {' · '}
          <a href={g.bailiff.architectureUrl} target="_blank" rel="noreferrer">
            {gavel.bailiffDoc}
          </a>
        </p>
      </div>
    </section>
  )
}
