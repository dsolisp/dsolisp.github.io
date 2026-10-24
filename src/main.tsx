import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles.css'

// Apply saved theme before first paint to avoid flash (default: dark)
;(function () {
  try {
    const saved = localStorage.getItem('portfolio-theme')
    document.documentElement.dataset.theme =
      saved === 'light' || saved === 'dark' ? saved : 'dark'
  } catch {
    document.documentElement.dataset.theme = 'dark'
  }
})()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
