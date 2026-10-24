import { useLocale } from '../i18n/LocaleContext.tsx'

export default function LangToggle() {
  const { locale, toggleLocale, t } = useLocale()
  const next = locale === 'es' ? 'en' : 'es'
  return (
    <button
      type="button"
      className="lang-toggle"
      onClick={toggleLocale}
      title={next === 'en' ? t.lang.toEn : t.lang.toEs}
      aria-label={t.lang.aria}
    >
      {locale === 'es' ? t.lang.toEn : t.lang.toEs}
    </button>
  )
}
