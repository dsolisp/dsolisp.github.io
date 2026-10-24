import { useEffect, useState } from 'react'
import { useLocale } from '../i18n/LocaleContext.tsx'

const KEY = 'portfolio-theme'

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const saved = localStorage.getItem(KEY)
      if (saved === 'light' || saved === 'dark') return saved
    } catch {
      // ignore
    }
    return 'dark'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem(KEY, theme)
    } catch {
      // ignore
    }
  }, [theme])

  return {
    theme,
    toggle: () => setTheme((t) => (t === 'light' ? 'dark' : 'light')),
  }
}

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const { t } = useLocale()
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      title={theme === 'light' ? t.theme.toDark : t.theme.toLight}
      aria-label={t.theme.aria}
    >
      {theme === 'light' ? t.theme.toDark : t.theme.toLight}
    </button>
  )
}
