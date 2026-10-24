import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import en from './en.ts'
import es from './es.ts'
import type { Locale, Messages } from './types.ts'

const KEY = 'portfolio-locale'
const catalogs: Record<Locale, Messages> = { es, en }

function readInitialLocale(): Locale {
  try {
    const saved = localStorage.getItem(KEY)
    if (saved === 'es' || saved === 'en') return saved
  } catch {
    // ignore
  }
  return 'es'
}

function applyDocumentLocale(locale: Locale, messages: Messages) {
  document.documentElement.lang = locale
  const onGavel = /\/gavel\/?$/.test(window.location.pathname)
  document.title = onGavel ? messages.gavelCase.documentTitle : messages.metaTitle
  const meta = document.querySelector('meta[name="description"]')
  if (meta) {
    meta.setAttribute(
      'content',
      onGavel ? messages.gavelCase.documentDescription : messages.metaDescription,
    )
  }
}

interface LocaleContextValue {
  locale: Locale
  t: Messages
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readInitialLocale)
  const t = catalogs[locale]

  useEffect(() => {
    applyDocumentLocale(locale, t)
    try {
      localStorage.setItem(KEY, locale)
    } catch {
      // ignore
    }
  }, [locale, t])

  const setLocale = useCallback((next: Locale) => setLocaleState(next), [])
  const toggleLocale = useCallback(
    () => setLocaleState((prev) => (prev === 'es' ? 'en' : 'es')),
    [],
  )

  const value = useMemo(
    () => ({ locale, t, setLocale, toggleLocale }),
    [locale, t, setLocale, toggleLocale],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}
