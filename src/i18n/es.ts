import type { Messages } from './types.ts'

const es: Messages = {
  metaTitle: 'Daniel Solis — Arquitecto de Automatización QA | Calidad Agéntica · Costa Rica Remote',
  metaDescription:
    'Daniel Solis, Arquitecto de Automatización QA (Costa Rica, remote-ready). Diseña sistemas de pruebas multi-stack mantenibles y Gavel — quality gates open-source en CI para equipos de la era de IA.',
  nav: {
    sectionsAria: 'Secciones',
    ciLab: 'CI Lab',
    gavel: 'Gavel',
    projects: 'Proyectos',
    about: 'Acerca de',
    architecture: 'Arquitectura',
  },
  theme: {
    toDark: 'Oscuro',
    toLight: 'Claro',
    aria: 'Cambiar tema',
  },
  lang: {
    toEn: 'EN',
    toEs: 'ES',
    aria: 'Cambiar idioma',
  },
  hero: {
    remoteReady: 'Remote-ready',
    title: 'Arquitecto de Automatización QA',
    pitch:
      'Diseño sistemas de QA multi-stack mantenibles y quality gates para equipos de la era de IA — para que el código de pruebas escale cuando lo escriben personas y agentes. Prueba pública: CI en vivo, evidencia Allure y Gavel aplicando una Test Constitution entre repositorios.',
    ctaCi: 'CI Lab en vivo',
    ctaGavel: 'Gavel en npm',
  },
  highlights: {
    aria: 'Destacados',
    publicRepos: 'Repos públicos en GitHub',
    stacks: 'Stacks públicos (TS, Python, Java, JS)',
    frameworks: 'Frameworks y curricula en el portafolio',
    testTypes: 'Tipos de prueba cubiertos',
  },
  ciLab: {
    title: 'CI Lab en vivo',
    intro:
      'El estado de los workflows viene de la API de GitHub Actions. Los enlaces Allure solo aparecen cuando el reporte publicado tiene resultados reales (totales distintos de cero) — no se enlazan shells vacíos.',
    loading: 'Cargando runs…',
    apiError: 'No se pudo alcanzar la API de GitHub (rate limit). Revisa los runs directamente en',
    noRuns: 'No hay workflow runs recientes.',
    allRuns: 'Todos los runs →',
    allure: 'Reporte Allure →',
    report: 'Reporte',
    staleNightly: 'nightly desactualizado',
    tests: 'pruebas',
  },
  gavel: {
    title: 'Gavel',
    intro:
      'Disciplina open-source de QA para agentes de código — el diferenciador de este portafolio, y prueba de que la arquitectura de calidad se puede exigir como gate, no solo documentar.',
    onNpm: 'en npm',
    summary:
      'Gavel audita el código de pruebas. Es mi motor open-source de disciplina QA para agentes de IA: impone una Test Constitution — page objects en capas, locators accessibility-first, sin sleeps, DI vía fixtures, factories de datos — en Playwright, Selenium, Cypress, WebdriverIO, Cucumber, Robot y pytest. Revisa diffs de tests, marca código muerto, parsea reportes de CI (JUnit, Allure, Playwright, Cypress) y agrupa fallos en drift vs bug vs entorno.',
    caseLabel: 'Engagement empresarial multi-repo (anonimizado)',
    metrics: [
      { value: '8', label: 'Repositorios en la superficie de calidad' },
      { value: '5,000+', label: 'Hallazgos Gavel en el baseline' },
      { value: '~1,500', label: 'Restantes tras el roadmap (~70% de reducción)' },
      { value: '7 / 8', label: 'Repos con Gavel como gate de CI' },
    ],
    decision:
      'Decisión: primero endurecer las bases de automatización (page objects en capas, locators a11y-first, fixtures/DI, sin sleeps) para que el estate sea mantenible y escalable — y luego mantener a Gavel como juez continuo para que no regresen las mismas clases de deuda en el código de pruebas.',
    repository: 'Repositorio',
    npmCta: '@dsolisp/gavel en npm',
    bailiffStatus: 'En diseño',
    bailiffSummary:
      'Repo hermano planificado que corre el flujo QA completo alrededor del código de pruebas: testing manual y exploratorio, escritura de casos, troubleshooting en browser en vivo, orquestación de CI, bugs, tickets, ambientes y credenciales. La regla de frontera: todo dentro del codebase de tests es de Gavel; todo fuera es de Bailiff. Gavel juzga el código de pruebas; Bailiff corre el tribunal a su alrededor.',
    bailiffDoc: 'Doc de arquitectura →',
  },
  architecture: {
    title: 'Arquitectura del pipeline CI/CD',
    intro:
      'Cómo un git push se convierte en un reporte de pruebas público y verificable: GitHub Actions corre los stacks en paralelo, Allure + summary.json llegan a Cloudflare R2, y este sitio (más el QA Dashboard) presenta el estado en vivo — sin servidores de aplicación que mantener.',
    parallelAria: 'Suites en paralelo',
    footnoteBefore: 'Véalo en vivo: el',
    footnoteMid:
      'se renderiza desde la etapa 05 en tiempo real, los reportes Allure HTML se sirven desde Cloudflare R2 cuando existe un upload nightly coincidente, y cada workflow es público en',
    footnoteGithub: 'GitHub',
    footnoteDash: 'Las métricas también alimentan el',
    stages: [
      {
        step: '01',
        title: 'Trigger y orquestación',
        description:
          'Cada push, pull request y cron nightly dispara workflows de GitHub Actions versionados como .yml en cada repo (ci.yml, full-tests.yml, nightly.yml). Hacen checkout, provisionan toolchains Node/Java/Python y levantan la practice app en Docker para corridas UI herméticas.',
      },
      {
        step: '02',
        title: 'Ejecución en paralelo',
        description:
          'Jobs en matrix corren las suites en paralelo en cuatro repos de framework independientes — UI E2E, API, visual, accesibilidad (Axe) y performance — con continue-on-error para que un fallo no bloquee el resto.',
      },
      {
        step: '03',
        title: 'Reporting',
        description:
          'Cada run genera un Allure HTML estático y un script resume métricas legibles por máquina — pass rate, conteos, duración, run id — en un summary.json por run.',
      },
      {
        step: '04',
        title: 'Almacenamiento',
        description:
          'Reportes y métricas se suben a Cloudflare R2 (S3-compatible) con AWS CLI. El HTML Allure queda en {repo}/{run_id}/index.html; summary.json va a un bucket de métricas por run.',
      },
      {
        step: '05',
        title: 'Presentación',
        description:
          'Este sitio consulta la API REST de GitHub en el browser por los últimos workflow runs y enlaza Allure en R2 solo cuando las métricas publicadas muestran resultados reales (totales > 0) — sin backend ni polling: React estático en GitHub Pages sobre APIs en vivo.',
      },
    ],
  },
  projects: {
    title: 'Proyectos',
    intro:
      'Los frameworks flagship prueban las mismas apps (SauceDemo, practice app local, APIs REST públicas, SQLite) bajo estándares de arquitectura compartidos para que los stacks sean comparables.',
    also: 'También en el portafolio',
    sourceOnRequest: 'código bajo solicitud',
    items: {
      PlaywrightProject: {
        tagline: 'Framework E2E insignia',
        description:
          'UI E2E, API/schema, unit, BDD (playwright-bdd), visual, accesibilidad (Axe) y performance con OpenTelemetry. Page Object Model con locators espejo, fixtures para DI, Allure.',
      },
      PythonSeleniumProject: {
        tagline: 'Stack más longevo (2024)',
        description:
          'UI (Selenium + smoke Playwright), API, DB, visual, accesibilidad, Locust y tracking de flaky tests. Corridas herméticas contra practice app y SQLite compartidos.',
      },
      JavaSeleniumProject: {
        tagline: 'Stack Java estilo enterprise',
        description:
          'UI, API REST Assured, DB, visual (Shutterbug), Axe y Gatling. Maven, JUnit 5, listo para Docker/Selenium Grid, capa BDD Cucumber opcional.',
      },
      CypressProject: {
        tagline: 'Testing web de era de componentes',
        description:
          'Specs UI, API y unit, image-diff visual, accesibilidad, SQLite hermético y OpenTelemetry en Cypress. Pipeline Lighthouse opcional.',
      },
      CSharpSeleniumProject: {
        tagline: 'Librería de framework .NET',
        description:
          'Librería más unit, API, web y SpecFlow BDD con FluentAssertions y Allure — mismas apps bajo prueba que el stack Python.',
      },
      'LLM Testing & Agentic Engineering Masterclass': {
        tagline: 'Curriculum QA de era IA',
        description:
          'Roadmap zero-to-hero para probar apps LLM: DeepEval, Ragas, evaluación RAG, locators self-healing y OpenTelemetry para agentes.',
      },
      'API Automation Engineering Masterclass': {
        tagline: 'Curriculum API SDET',
        description:
          'Guía zero-to-hero de API testing: REST Assured, schema vs contratos consumer-driven, k6 y patrones de reuso de sesión.',
      },
    },
  },
  about: {
    title: 'Acerca de',
    intro:
      'Arquitecto de Automatización QA en Costa Rica, remote-ready. Diseño las bases de automatización multi-stack — page objects en capas, locators accessibility-first, fixtures para DI, datos herméticos, evidencia CI-first — y superviso la calidad cuando personas y agentes de IA escriben código de pruebas. Gavel codifica esa constitución como gate continuo. Los stacks de abajo son evidencia de amplitud; el producto son sistemas de calidad mantenibles que se pueden verificar en público.',
    groups: [
      {
        heading: 'Lenguajes',
        items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C#'],
      },
      {
        heading: 'Runners y frameworks',
        items: ['Playwright', 'Selenium WebDriver', 'Cypress', 'pytest', 'JUnit 5', 'Vitest', 'SpecFlow', 'Cucumber'],
      },
      {
        heading: 'API · performance · eval IA',
        items: ['REST Assured', 'k6', 'Locust', 'Gatling', 'DeepEval', 'Ragas'],
      },
      {
        heading: 'Reporting · CI · infra',
        items: ['Allure', 'GitHub Actions', 'Docker', 'Selenium Grid', 'axe-core', 'OpenTelemetry', 'SQLite', 'Maven', 'pnpm'],
      },
    ],
  },
  footer: {
    linksAria: 'Enlaces del pie',
    resume: 'CV',
    dashboard: 'QA Dashboard',
    noteBefore: 'Sitio estático (React + Vite) en GitHub Pages · datos en vivo de la API REST de GitHub ·',
    source: 'código',
  },
}

export default es
