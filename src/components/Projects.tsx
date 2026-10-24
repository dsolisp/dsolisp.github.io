import { projects, type Project } from '../config.ts'
import { useLocale } from '../i18n/LocaleContext.tsx'

function isFramework(p: Project): boolean {
  return p.status === 'live' && Boolean(p.repoUrl?.includes('Project'))
}

function ProjectCard({
  p,
  compact = false,
  tagline,
  description,
  sourceOnRequest,
}: {
  p: Project
  compact?: boolean
  tagline: string
  description: string
  sourceOnRequest: string
}) {
  const tags = p.tags.slice(0, 3)
  return (
    <article className={`project-card${compact ? ' project-card-compact' : ''}`}>
      <header className="project-header">
        <h3>
          {p.repoUrl ? (
            <a href={p.repoUrl} target="_blank" rel="noreferrer">
              {p.name}
            </a>
          ) : (
            p.name
          )}
        </h3>
        {p.status === 'private' && (
          <span className="pill pill-neutral">{sourceOnRequest}</span>
        )}
      </header>
      <p className="project-tagline">{tagline}</p>
      {!compact && <p>{description}</p>}
      <ul className="tag-list">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  )
}

export default function Projects() {
  const { t } = useLocale()
  const frameworks = projects.filter(isFramework)
  const also = projects.filter((p) => !isFramework(p))

  return (
    <section className="section" id="projects">
      <div className="container">
        <h2>{t.projects.title}</h2>
        <p className="section-intro">{t.projects.intro}</p>
        <div className="project-grid project-grid-frameworks">
          {frameworks.map((p) => {
            const copy = t.projects.items[p.name]
            return (
              <ProjectCard
                key={p.name}
                p={p}
                tagline={copy?.tagline ?? p.name}
                description={copy?.description ?? ''}
                sourceOnRequest={t.projects.sourceOnRequest}
              />
            )
          })}
        </div>
        {also.length > 0 && (
          <>
            <h3 className="projects-subhead">{t.projects.also}</h3>
            <div className="project-grid project-grid-compact">
              {also.map((p) => {
                const copy = t.projects.items[p.name]
                return (
                  <ProjectCard
                    key={p.name}
                    p={p}
                    compact
                    tagline={copy?.tagline ?? p.name}
                    description={copy?.description ?? ''}
                    sourceOnRequest={t.projects.sourceOnRequest}
                  />
                )
              })}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
