export type Locale = 'es' | 'en'

export interface ProjectCopy {
  tagline: string
  description: string
}

export interface Messages {
  metaTitle: string
  metaDescription: string
  nav: {
    sectionsAria: string
    ciLab: string
    gavel: string
    projects: string
    about: string
    architecture: string
  }
  theme: {
    toDark: string
    toLight: string
    aria: string
  }
  lang: {
    toEn: string
    toEs: string
    aria: string
  }
  hero: {
    remoteReady: string
    title: string
    pitch: string
    ctaCi: string
    ctaGavel: string
  }
  highlights: {
    aria: string
    publicRepos: string
    stacks: string
    frameworks: string
    testTypes: string
  }
  ciLab: {
    title: string
    intro: string
    loading: string
    apiError: string
    noRuns: string
    allRuns: string
    allure: string
    report: string
    staleNightly: string
    tests: string
  }
  gavel: {
    title: string
    intro: string
    onNpm: string
    summary: string
    caseLabel: string
    metrics: { value: string; label: string }[]
    decision: string
    repository: string
    npmCta: string
    bailiffStatus: string
    bailiffSummary: string
    bailiffDoc: string
  }
  architecture: {
    title: string
    intro: string
    parallelAria: string
    footnoteBefore: string
    footnoteMid: string
    footnoteGithub: string
    footnoteDash: string
    stages: { step: string; title: string; description: string }[]
  }
  projects: {
    title: string
    intro: string
    also: string
    sourceOnRequest: string
    items: Record<string, ProjectCopy>
  }
  about: {
    title: string
    intro: string
    groups: { heading: string; items: string[] }[]
  }
  footer: {
    linksAria: string
    resume: string
    dashboard: string
    noteBefore: string
    source: string
  }
}
