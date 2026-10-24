import { useEffect, useState } from 'react'
import { profile } from '../config.ts'
import { useLocale } from '../i18n/LocaleContext.tsx'
import { fetchUserRepos } from '../lib/github.ts'

export default function Highlights() {
  const { t } = useLocale()
  const [repoCount, setRepoCount] = useState('—')

  useEffect(() => {
    fetchUserRepos(profile.githubUser)
      .then((repos) => setRepoCount(String(repos.length)))
      .catch(() => {
        // leave placeholder
      })
  }, [])

  const stats = [
    { value: repoCount, label: t.highlights.publicRepos },
    { value: '4+', label: t.highlights.stacks },
    { value: '7', label: t.highlights.frameworks },
    { value: 'UI · API · a11y · visual · perf', label: t.highlights.testTypes },
  ]

  return (
    <section className="section highlights" aria-label={t.highlights.aria}>
      <div className="container stats-grid">
        {stats.map((s) => (
          <div className="stat-card" key={s.label}>
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
