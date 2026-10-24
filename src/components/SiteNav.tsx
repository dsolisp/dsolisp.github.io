import { useLocale } from '../i18n/LocaleContext.tsx'
import LangToggle from './LangToggle.tsx'
import ThemeToggle from './ThemeToggle.tsx'

export default function SiteNav() {
  const { t } = useLocale()
  const links = [
    { href: '/#ci-lab', label: t.nav.ciLab },
    { href: '/gavel/', label: t.nav.gavel },
    { href: '/#projects', label: t.nav.projects },
    { href: '/#about', label: t.nav.about },
  ]

  return (
    <nav className="site-nav" aria-label={t.nav.sectionsAria}>
      <div className="container site-nav-inner">
        <a className="site-nav-brand" href="/">
          DS
        </a>
        <ul className="site-nav-links site-nav-links-desktop">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
        <details className="site-nav-menu">
          <summary className="site-nav-menu-toggle">{t.nav.menu}</summary>
          <ul className="site-nav-links site-nav-links-mobile">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </details>
        <div className="site-nav-chrome">
          <LangToggle />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
