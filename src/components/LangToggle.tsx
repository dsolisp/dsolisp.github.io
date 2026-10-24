import { useLocale } from '../i18n/LocaleContext.tsx'

/** Shows current locale as pressed; click switches to the other. */
export default function LangToggle() {
  const { locale, setLocale, t } = useLocale()
  return (
    <div className="lang-switch" role="group" aria-label={t.lang.aria}>
      <button
        type="button"
        className={`lang-toggle${locale === 'es' ? ' is-active' : ''}`}
        aria-pressed={locale === 'es'}
        onClick={() => setLocale('es')}
      >
        ES
      </button>
      <button
        type="button"
        className={`lang-toggle${locale === 'en' ? ' is-active' : ''}`}
        aria-pressed={locale === 'en'}
        onClick={() => setLocale('en')}
      >
        EN
      </button>
    </div>
  )
}
