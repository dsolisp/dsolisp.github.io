import SiteNav from '../components/SiteNav.tsx'
import Footer from '../components/Footer.tsx'
import HeroVisual from '../components/HeroVisual.tsx'
import { gavelSpotlight as g } from '../config.ts'
import { useLocale } from '../i18n/LocaleContext.tsx'

export default function GavelCase() {
  const { t } = useLocale()
  const c = t.gavelCase

  return (
    <div className="gavel-case-page">
      <div id="top" />
      <SiteNav />
      <main>
        <header className="gavel-case-hero section">
          <div className="gavel-case-hero-visual" aria-hidden="true">
            <HeroVisual />
          </div>
          <div className="container gavel-case-hero-inner">
            <p className="hero-meta">{c.eyebrow}</p>
            <h1 className="gavel-case-brand">{c.title}</h1>
            <p className="gavel-case-lede">{c.lede}</p>
            <nav className="hero-actions" aria-label={c.ctaAria}>
              <a className="btn btn-primary" href={g.npmUrl} target="_blank" rel="noreferrer">
                {t.gavel.npmCta}
              </a>
              <a className="btn" href={g.repoUrl} target="_blank" rel="noreferrer">
                {t.gavel.repository}
              </a>
            </nav>
            <p className="gavel-case-back">
              <a href="/">{c.backHome}</a>
            </p>
          </div>
        </header>

        <section className="section section-alt">
          <div className="container gavel-case-prose">
            <h2>{c.problemTitle}</h2>
            <p>{c.problem}</p>
            <h2>{c.approachTitle}</h2>
            <p>{c.approach}</p>
            <ul className="gavel-case-list">
              {c.constitution.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h2>{c.engagementTitle}</h2>
            <p className="gavel-case-label">{t.gavel.caseLabel}</p>
            <ul className="gavel-metrics" aria-label={c.metricsAria}>
              {t.gavel.metrics.map((m) => (
                <li key={m.label}>
                  <span className="gavel-metric-value">{m.value}</span>
                  <span className="gavel-metric-label">{m.label}</span>
                </li>
              ))}
            </ul>
            <p className="gavel-decision">{t.gavel.decision}</p>
            <h2>{c.proofTitle}</h2>
            <p>{c.proof}</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
