/** Dashboard metrics published to GitHub Pages (same-origin in prod; CORS * for local). */
export const summariesUrl = 'https://dsolisp.github.io/qa-dashboard/data/summaries.json'

export interface RepoSummary {
  repo: string
  run_id: string
  timestamp: string
  suite: string
  total: number
  passed: number
  failed: number
  broken: number
  skipped: number
  duration_ms: number
}

let cache: RepoSummary[] | null = null
let inflight: Promise<RepoSummary[]> | null = null

export async function fetchSummaries(): Promise<RepoSummary[]> {
  if (cache) return cache
  if (inflight) return inflight
  inflight = fetch(summariesUrl, { cache: 'no-store' })
    .then(async (res) => {
      if (!res.ok) throw new Error(`summaries.json ${res.status}`)
      const data = (await res.json()) as RepoSummary[]
      cache = Array.isArray(data) ? data : []
      return cache
    })
    .finally(() => {
      inflight = null
    })
  return inflight
}

/** Latest nonzero summary row for a repo, optionally filtered by suite substring. */
export function latestNonzeroSummary(
  rows: RepoSummary[],
  repo: string,
  suiteHint?: string,
): RepoSummary | undefined {
  const matched = rows
    .filter((r) => r.repo === repo && r.total > 0)
    .filter((r) => (suiteHint ? r.suite.toLowerCase().includes(suiteHint.toLowerCase()) : true))
    .sort((a, b) => b.timestamp.localeCompare(a.timestamp))
  return matched[0]
}

export function summaryForRun(
  rows: RepoSummary[],
  repo: string,
  runId: number | string,
  suiteHint?: string,
): RepoSummary | undefined {
  const id = String(runId)
  return rows.find(
    (r) =>
      r.repo === repo &&
      r.run_id === id &&
      r.total > 0 &&
      (suiteHint ? r.suite.toLowerCase().includes(suiteHint.toLowerCase()) : true),
  )
}
