import { profile } from '../config.ts'
import { useLocale } from '../i18n/LocaleContext.tsx'
import HeroVisual from './HeroVisual.tsx'

export default function Hero() {
  const { t } = useLocale()
  return (
    <header className="hero">
      <div className="hero-atmosphere" aria-hidden="true">
        <svg className="hero-orbits" viewBox="0 0 640 640" fill="none">
          <circle className="hero-orbit hero-orbit--outer" cx="320" cy="320" r="300" />
          <circle className="hero-orbit hero-orbit--mid" cx="320" cy="320" r="230" />
          <circle className="hero-orbit hero-orbit--inner" cx="320" cy="320" r="160" />
          <circle className="hero-orbit-dot" cx="320" cy="20" r="5" />
          <circle className="hero-orbit-dot" cx="550" cy="320" r="4" />
        </svg>
      </div>
      <HeroVisual />
      <div className="container hero-inner">
        <p className="hero-meta">
          {profile.location} · {t.hero.remoteReady}
        </p>
        <h1 className="brand">{profile.name}</h1>
        <p className="hero-headline">{t.hero.title}</p>
        <p className="hero-pitch">{t.hero.pitch}</p>
        <nav className="hero-actions" aria-label="Primary links">
          <a className="btn btn-primary" href="#ci-lab">
            {t.hero.ctaCi}
          </a>
          <a className="btn" href="/gavel/">
            {t.hero.ctaGavelCase}
          </a>
        </nav>
      </div>
    </header>
  )
}
