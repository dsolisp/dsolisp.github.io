import { projects, type Project } from '../config.ts'

function isFramework(p: Project): boolean {
  return p.status === 'live' && Boolean(p.repoUrl?.includes('Project'))
}

function ProjectCard({ p, compact = false }: { p: Project; compact?: boolean }) {
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
          <span className="pill pill-neutral">source on request</span>
        )}
      </header>
      <p className="project-tagline">{p.tagline}</p>
      {!compact && <p>{p.description}</p>}
      <ul className="tag-list">
        {p.tags.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </article>
  )
}

export default function Projects() {
  const frameworks = projects.filter(isFramework)
  const also = projects.filter((p) => !isFramework(p))

  return (
    <section className="section" id="projects">
      <div className="container">
        <h2>Projects</h2>
        <p className="section-intro">
          Flagship frameworks test the same apps (SauceDemo, a local practice app, public REST
          APIs, SQLite) under shared architecture standards so stacks are directly comparable.
        </p>
        <div className="project-grid">
          {frameworks.map((p) => (
            <ProjectCard key={p.name} p={p} />
          ))}
        </div>
        {also.length > 0 && (
          <>
            <h3 className="projects-subhead">Also in the portfolio</h3>
            <div className="project-grid project-grid-compact">
              {also.map((p) => (
                <ProjectCard key={p.name} p={p} compact />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
