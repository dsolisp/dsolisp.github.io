import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LocaleProvider } from './i18n/LocaleContext.tsx'
import GavelCase from './pages/GavelCase.tsx'
import './styles.css'

;(function () {
  try {
    const savedTheme = localStorage.getItem('portfolio-theme')
    document.documentElement.dataset.theme =
      savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'dark'
    const savedLocale = localStorage.getItem('portfolio-locale')
    document.documentElement.lang =
      savedLocale === 'en' || savedLocale === 'es' ? savedLocale : 'es'
  } catch {
    document.documentElement.dataset.theme = 'dark'
    document.documentElement.lang = 'es'
  }
})()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LocaleProvider>
      <GavelCase />
    </LocaleProvider>
  </StrictMode>,
)
