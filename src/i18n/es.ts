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
      'Evidencia del estado del sistema desde GitHub Actions — los enlaces Allure solo aparecen cuando el reporte tiene resultados reales (totales distintos de cero).',
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
      'De un git push a evidencia pública: Actions corre los stacks en paralelo bajo quality gates (Gavel + Test Constitution donde aplica), Allure y summary.json aterrizan en R2, y este sitio más el QA Dashboard muestran el estado en vivo — sin servidores de aplicación.',
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
      'Los frameworks principales prueban las mismas apps con estándares de arquitectura compartidos — los stacks se pueden comparar de frente.',
    also: 'También en el portafolio',
    sourceOnRequest: 'código bajo solicitud',
    items: {
      PlaywrightProject: {
        tagline: 'Framework E2E insignia',
        description:
          'Stack de referencia multi-capa — UI, API, visual, a11y y performance con POM compartido y fixtures.',
      },
      PythonSeleniumProject: {
        tagline: 'Stack con más trayectoria (2024)',
        description:
          'El de más trayectoria: UI, API, DB, visual, a11y y Locust herméticos sobre las mismas practice apps.',
      },
      JavaSeleniumProject: {
        tagline: 'Stack Java de corte enterprise',
        description:
          'Cobertura Java enterprise — UI, REST Assured, Gatling — lista para Docker/Grid sobre las mismas apps.',
      },
      CypressProject: {
        tagline: 'Testing web orientado a componentes',
        description:
          'Cobertura web de era de componentes: UI, API, visual, a11y y Lighthouse opcional.',
      },
      CSharpSeleniumProject: {
        tagline: 'Librería de framework .NET',
        description:
          'Librería .NET privada + SpecFlow sobre las mismas apps bajo prueba.',
      },
      'LLM Testing & Agentic Engineering Masterclass': {
        tagline: 'Curriculum QA para la era de la IA',
        description:
          'Curriculum de cero a avanzado en eval LLM/RAG — DeepEval, Ragas y patrones de QA agéntica.',
      },
      'API Automation Engineering Masterclass': {
        tagline: 'Curriculum API SDET',
        description:
          'Ruta API SDET de cero a avanzado: contratos, REST Assured y k6.',
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
