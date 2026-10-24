import type { Messages } from './types.ts'

const es: Messages = {
  metaTitle: 'Daniel Solis — QA Automation Architect | Calidad Agéntica · Costa Rica Remote',
  metaDescription:
    'Daniel Solis, QA Automation Architect (Costa Rica, remote-ready). Diseña sistemas de QA Automation multi-stack mantenibles y Gavel: quality gates open-source en CI para equipos de la era de la IA.',
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
    title: 'QA Automation Architect',
    pitch:
      'Diseño sistemas de QA Automation multi-stack mantenibles y quality gates para equipos de la era de la IA, de modo que el código de pruebas escale tanto si lo escriben personas como agentes. Evidencia en CI en vivo, reportes Allure y Gavel aplicando una Test Constitution entre repositorios.',
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
      'Disciplina open-source de QA para agentes de código: el diferenciador de este portafolio. Demuestra que la arquitectura de calidad se puede exigir como gate en CI, no solo dejar por escrito.',
    onNpm: 'en npm',
    summary:
      'Gavel audita el código de pruebas. Es mi motor open-source de disciplina QA para agentes de IA: impone una Test Constitution — page objects en capas, locators accessibility-first, sin sleeps, inyección de dependencias con fixtures y factories de datos — en Playwright, Selenium, Cypress, WebdriverIO, Cucumber, Robot y pytest. Revisa diffs de tests, detecta código muerto, interpreta reportes de CI (JUnit, Allure, Playwright, Cypress) y agrupa fallos en drift, bug o entorno.',
    caseLabel: 'Engagement empresarial multi-repo (anonimizado)',
    metrics: [
      { value: '8', label: 'Repositorios bajo la superficie de calidad' },
      { value: '5,000+', label: 'Hallazgos de Gavel en el baseline' },
      { value: '~1,500', label: 'Pendientes tras el roadmap (~70% menos)' },
      { value: '7 / 8', label: 'Repos con Gavel como gate de CI' },
    ],
    decision:
      'Decisión: primero fortalecer las bases de la automatización (page objects en capas, locators a11y-first, fixtures/DI, sin sleeps) para que el conjunto sea mantenible y pueda crecer; después dejar a Gavel como juez continuo, para que no vuelvan las mismas clases de deuda en el código de pruebas.',
    repository: 'Repositorio',
    npmCta: '@dsolisp/gavel en npm',
    bailiffStatus: 'En diseño',
    bailiffSummary:
      'Repositorio hermano planeado para el flujo QA alrededor del código de pruebas: exploración manual, escritura de casos, troubleshooting en el browser, orquestación de CI, bugs, tickets, ambientes y credenciales. Frontera clara: lo que vive dentro del codebase de tests es de Gavel; lo demás es de Bailiff. Gavel juzga el código de pruebas; Bailiff opera el entorno donde se ejecuta.',
    bailiffDoc: 'Documento de arquitectura →',
  },
  architecture: {
    title: 'Arquitectura del pipeline CI/CD',
    intro:
      'De un git push a un reporte de pruebas público y verificable: GitHub Actions ejecuta los stacks en paralelo, Allure y summary.json aterrizan en Cloudflare R2, y este sitio — junto con el QA Dashboard — muestra el estado en vivo, sin servidores de aplicación que operar.',
    parallelAria: 'Suites en paralelo',
    footnoteBefore: 'En vivo: el',
    footnoteMid:
      'se arma desde la etapa 05 en tiempo real; los HTML de Allure salen de Cloudflare R2 cuando hay un upload nightly válido; y cada workflow está público en',
    footnoteGithub: 'GitHub',
    footnoteDash: 'Las métricas también alimentan el',
    stages: [
      {
        step: '01',
        title: 'Disparo y orquestación',
        description:
          'Cada push, pull request y cron nightly dispara workflows de GitHub Actions versionados como .yml en cada repo (ci.yml, full-tests.yml, nightly.yml). Hacen checkout, preparan toolchains Node/Java/Python y levantan la practice app en Docker para corridas de UI herméticas.',
      },
      {
        step: '02',
        title: 'Ejecución en paralelo',
        description:
          'Los jobs en matrix corren las suites en paralelo sobre cuatro repos de framework — UI E2E, API, visual, accesibilidad (Axe) y performance — con continue-on-error para que un fallo no detenga al resto.',
      },
      {
        step: '03',
        title: 'Reporting',
        description:
          'Cada run genera un Allure HTML estático y un script resume métricas legibles por máquina (pass rate, conteos, duración, run id) en un summary.json por ejecución.',
      },
      {
        step: '04',
        title: 'Almacenamiento',
        description:
          'Reportes y métricas se suben a Cloudflare R2 (compatible con S3) vía AWS CLI. El HTML de Allure queda en {repo}/{run_id}/index.html; el summary.json va a un bucket de métricas por run.',
      },
      {
        step: '05',
        title: 'Presentación',
        description:
          'Este sitio consulta la API REST de GitHub desde el navegador, toma los últimos workflow runs y solo enlaza Allure en R2 cuando las métricas publicadas tienen resultados reales (totales > 0). Sin backend ni servicio de polling: React estático en GitHub Pages sobre APIs en vivo.',
      },
    ],
  },
  projects: {
    title: 'Proyectos',
    intro:
      'Los frameworks principales prueban las mismas aplicaciones (SauceDemo, practice app local, APIs REST públicas y SQLite) con estándares de arquitectura compartidos, para poder comparar stacks de frente.',
    also: 'También en el portafolio',
    sourceOnRequest: 'código bajo solicitud',
    items: {
      PlaywrightProject: {
        tagline: 'Framework E2E insignia',
        description:
          'UI E2E, API/schema, unitarias, BDD (playwright-bdd), visual, accesibilidad (Axe) y performance con OpenTelemetry. Page Object Model con locators espejo, fixtures para DI y Allure.',
      },
      PythonSeleniumProject: {
        tagline: 'Stack con más trayectoria (2024)',
        description:
          'UI (Selenium + smoke con Playwright), API, DB, visual, accesibilidad, Locust y seguimiento de flaky tests. Corridas herméticas contra la practice app y SQLite compartidos.',
      },
      JavaSeleniumProject: {
        tagline: 'Stack Java de corte enterprise',
        description:
          'UI, API con REST Assured, DB, visual (Shutterbug), Axe y Gatling. Maven, JUnit 5, listo para Docker/Selenium Grid, con capa BDD Cucumber opcional.',
      },
      CypressProject: {
        tagline: 'Testing web orientado a componentes',
        description:
          'Specs de UI, API y unitarias, image-diff visual, accesibilidad, capa SQLite hermética y OpenTelemetry en Cypress. Pipeline Lighthouse opcional.',
      },
      CSharpSeleniumProject: {
        tagline: 'Librería de framework .NET',
        description:
          'Librería más pruebas unitarias, API, web y SpecFlow BDD con FluentAssertions y Allure; las mismas aplicaciones bajo prueba que el stack Python.',
      },
      'LLM Testing & Agentic Engineering Masterclass': {
        tagline: 'Curriculum QA para la era de la IA',
        description:
          'Ruta de cero a avanzado para probar aplicaciones LLM: DeepEval, Ragas, evaluación RAG, locators self-healing y OpenTelemetry para agentes.',
      },
      'API Automation Engineering Masterclass': {
        tagline: 'Curriculum API SDET',
        description:
          'Guía de cero a avanzado en API testing: REST Assured, validación de schema frente a contratos consumer-driven, k6 y reuso de sesión.',
      },
    },
  },
  about: {
    title: 'Acerca de',
    intro:
      'QA Automation Architect en Costa Rica, remote-ready. Diseño las bases de la automatización multi-stack — page objects en capas, locators accessibility-first, fixtures para DI, datos herméticos y evidencia CI-first — y superviso la calidad cuando el código de pruebas lo escriben personas y agentes de IA. Gavel convierte esa constitución en un gate continuo. Los stacks de abajo muestran amplitud; el producto son sistemas de calidad mantenibles que cualquiera puede verificar en público.',
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
