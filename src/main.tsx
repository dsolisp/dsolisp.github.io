import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles.css'

// Apply saved theme + locale before first paint (defaults: dark, Spanish)
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
    <App />
  </StrictMode>,
)
