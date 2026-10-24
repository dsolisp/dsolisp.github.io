import { architectureHref, profile } from '../config.ts'
import { useLocale } from '../i18n/LocaleContext.tsx'

export default function Footer() {
  const { t } = useLocale()
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          {profile.name} · {profile.location}
        </p>
        <nav aria-label={t.footer.linksAria}>
          <a href="#ci-lab">{t.nav.ciLab}</a>
          <a href="#gavel">{t.nav.gavel}</a>
          <a href={architectureHref}>{t.nav.architecture}</a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
            {t.footer.resume}
          </a>
          <a href={profile.dashboardUrl} target="_blank" rel="noreferrer">
            {t.footer.dashboard}
          </a>
        </nav>
        <p className="footer-note">
          {t.footer.noteBefore}{' '}
          <a href={`${profile.github}/dsolisp.github.io`} target="_blank" rel="noreferrer">
            {t.footer.source}
          </a>
        </p>
      </div>
    </footer>
  )
}
