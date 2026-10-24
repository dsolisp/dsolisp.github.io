import { useEffect, useState } from 'react'
import { allureR2BaseUrl, ciRepos, profile } from '../config.ts'
import { useLocale } from '../i18n/LocaleContext.tsx'
import {
  fetchWorkflowRuns,
  latestRunPerWorkflow,
  relativeTime,
  runDuration,
  type WorkflowRun,
} from '../lib/github.ts'
import {
  fetchSummaries,
  latestNonzeroSummary,
  summaryForRun,
  type RepoSummary,
} from '../lib/summaries.ts'

type RunsByRepo = Record<string, WorkflowRun[] | 'error'>

interface AllureLink {
  url: string
  reportedAt: string
  total: number
}

type AllureByRepo = Record<string, AllureLink | undefined>

function buildAllureUrl(
  repo: string,
  runId: number | string,
  suite: string | undefined,
): string {
  const base = allureR2BaseUrl.replace(/\/$/, '')
  const path = suite ? `${repo}/${runId}/${suite}/index.html` : `${repo}/${runId}/index.html`
  return `${base}/${path}`
}

/**
 * Prefer the newest completed Nightly run that has a nonzero dashboard summary.
 * Fall back to the latest nonzero summary row for that repo (still a real report).
 * Never link empty Allure shells (total === 0).
 */
function resolveAllureLink(
  repo: string,
  workflowName: string | undefined,
  suite: string | undefined,
  runs: WorkflowRun[],
  summaries: RepoSummary[],
): AllureLink | undefined {
  if (!allureR2BaseUrl || !workflowName) return undefined

  const completed = runs.filter(
    (r) => r.name === workflowName && r.status === 'completed',
  )
  for (const run of completed) {
    const row = summaryForRun(summaries, repo, run.id, suite)
    if (row) {
      return {
        url: buildAllureUrl(repo, run.id, suite),
        reportedAt: row.timestamp,
        total: row.total,
      }
    }
  }

  const fallback = latestNonzeroSummary(summaries, repo, suite)
  if (fallback) {
    return {
      url: buildAllureUrl(repo, fallback.run_id, suite),
      reportedAt: fallback.timestamp,
      total: fallback.total,
    }
  }
  return undefined
}

function statusInfo(run: WorkflowRun): { cls: string; text: string } {
  if (run.status !== 'completed') return { cls: 'pill-running', text: run.status.replace('_', ' ') }
  switch (run.conclusion) {
    case 'success':
      return { cls: 'pill-pass', text: 'passed' }
    case 'failure':
      return { cls: 'pill-fail', text: 'failed' }
    case 'cancelled':
      return { cls: 'pill-neutral', text: 'cancelled' }
    default:
      return { cls: 'pill-neutral', text: run.conclusion ?? 'unknown' }
  }
}

export default function CiLab() {
  const { t } = useLocale()
  const [runs, setRuns] = useState<RunsByRepo>({})
  const [allureLinks, setAllureLinks] = useState<AllureByRepo>({})

  function freshnessLabel(iso: string): { text: string; stale: boolean } {
    const days = (Date.now() - new Date(iso).getTime()) / (24 * 60 * 60 * 1000)
    return {
      text: `${t.ciLab.report} · ${relativeTime(iso)}`,
      stale: days >= 14,
    }
  }

  useEffect(() => {
    let cancelled = false

    fetchSummaries()
      .catch(() => [] as RepoSummary[])
      .then((summaries) => {
        for (const { repo, allureWorkflow, allureSuite } of ciRepos) {
          fetchWorkflowRuns(profile.githubUser, repo)
            .then((all) => {
              if (cancelled) return
              setRuns((prev) => ({ ...prev, [repo]: latestRunPerWorkflow(all).slice(0, 3) }))
              const link = resolveAllureLink(repo, allureWorkflow, allureSuite, all, summaries)
              if (link) {
                setAllureLinks((prev) => ({ ...prev, [repo]: link }))
              }
            })
            .catch(() => {
              if (cancelled) return
              setRuns((prev) => ({ ...prev, [repo]: 'error' }))
              // Still try summary-only Allure when GitHub API is rate-limited
              const link = resolveAllureLink(repo, allureWorkflow, allureSuite, [], summaries)
              if (link) setAllureLinks((prev) => ({ ...prev, [repo]: link }))
            })
        }
      })

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section className="section" id="ci-lab">
      <div className="container">
        <h2>{t.ciLab.title}</h2>
        <p className="section-intro">{t.ciLab.intro}</p>
        <div className="ci-grid">
          {ciRepos.map(({ repo, label, stack }) => {
            const repoRuns = runs[repo]
            const allure = allureLinks[repo]
            const freshness = allure ? freshnessLabel(allure.reportedAt) : null

            return (
              <article className="ci-card" key={repo}>
                <header className="ci-card-header">
                  <h3>{label}</h3>
                  <span className="ci-stack">{stack}</span>
                </header>
                {freshness && (
                  <p className={`ci-freshness${freshness.stale ? ' is-stale' : ''}`}>
                    {freshness.text}
                    {freshness.stale ? ` · ${t.ciLab.staleNightly}` : ''}
                    {allure ? ` · ${allure.total} ${t.ciLab.tests}` : ''}
                  </p>
                )}
                {repoRuns === undefined && <p className="ci-note">{t.ciLab.loading}</p>}
                {repoRuns === 'error' && (
                  <p className="ci-note">
                    {t.ciLab.apiError}{' '}
                    <a href={`${profile.github}/${repo}/actions`}>GitHub</a>.
                  </p>
                )}
                {Array.isArray(repoRuns) && repoRuns.length === 0 && (
                  <p className="ci-note">{t.ciLab.noRuns}</p>
                )}
                {Array.isArray(repoRuns) && repoRuns.length > 0 && (
                  <ul className="run-list">
                    {repoRuns.map((run) => {
                      const s = statusInfo(run)
                      return (
                        <li key={run.id}>
                          <a className="run-row" href={run.html_url} target="_blank" rel="noreferrer">
                            <span className={`pill ${s.cls}`}>{s.text}</span>
                            <span className="run-name">{run.name}</span>
                            <span className="run-meta">
                              {runDuration(run)} · {relativeTime(run.run_started_at)}
                            </span>
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                )}
                <footer className="ci-card-footer">
                  <a className="ci-all-link" href={`${profile.github}/${repo}/actions`} target="_blank" rel="noreferrer">
                    {t.ciLab.allRuns}
                  </a>
                  {allure && (
                    <a className="allure-link" href={allure.url} target="_blank" rel="noreferrer">
                      {t.ciLab.allure}
                    </a>
                  )}
                </footer>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
