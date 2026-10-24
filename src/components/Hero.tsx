import { profile } from '../config.ts'
import { useLocale } from '../i18n/LocaleContext.tsx'
import HeroVisual from './HeroVisual.tsx'

export default function Hero() {
  const { t } = useLocale()
  return (
    <header className="hero">
      <div className="hero-atmosphere" aria-hidden="true" />
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
