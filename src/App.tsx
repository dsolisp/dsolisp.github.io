import Hero from './components/Hero.tsx'
import Highlights from './components/Highlights.tsx'
import CiLab from './components/CiLab.tsx'
import Architecture from './components/Architecture.tsx'
import Spotlight from './components/Spotlight.tsx'
import Projects from './components/Projects.tsx'
import About from './components/About.tsx'
import Footer from './components/Footer.tsx'
import SiteNav from './components/SiteNav.tsx'
import { LocaleProvider } from './i18n/LocaleContext.tsx'

export default function App() {
  return (
    <LocaleProvider>
      <div id="top" />
      <SiteNav />
      <Hero />
      <main>
        <Highlights />
        <CiLab />
        <Spotlight />
        <Architecture />
        <Projects />
        <About />
      </main>
      <Footer />
    </LocaleProvider>
  )
}
