import { archParallel, archTech, profile } from '../config.ts'
import { useLocale } from '../i18n/LocaleContext.tsx'
import PipelineDiagram from './PipelineDiagram.tsx'

export default function Architecture() {
  const { t } = useLocale()
  const a = t.architecture

  return (
    <section className="section" id="architecture">
      <div className="container">
        <h2>{a.title}</h2>
        <p className="section-intro">{a.intro}</p>
        <PipelineDiagram />
        <details className="arch-details">
          <summary>{a.detailsSummary}</summary>
          <ol className="arch-flow arch-flow-compact">
            {a.stages.map((s) => (
              <li className="arch-node" key={s.step}>
                <div className="arch-node-inner">
                  <header className="arch-node-header">
                    <span className="arch-step">{s.step}</span>
                    <h3>{s.title}</h3>
                  </header>
                  {s.step === '02' && (
                    <div className="arch-parallel" aria-label={a.parallelAria}>
                      {archParallel.map((p) => (
                        <span className="arch-lane" key={p}>
                          {p}
                        </span>
                      ))}
                    </div>
                  )}
                  <p className="arch-desc">{s.description}</p>
                  <ul className="tag-list">
                    {(archTech[s.step] ?? []).slice(0, 3).map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </details>
        <p className="arch-footnote">
          {a.footnoteBefore} <a href="#ci-lab">{t.nav.ciLab}</a> {a.footnoteMid}{' '}
          <a href={profile.github} target="_blank" rel="noreferrer">
            {a.footnoteGithub}
          </a>
          . {a.footnoteDash}{' '}
          <a href={profile.dashboardUrl} target="_blank" rel="noreferrer">
            {t.footer.dashboard}
          </a>
          .
        </p>
      </div>
    </section>
  )
}
