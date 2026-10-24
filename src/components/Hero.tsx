import { profile } from '../config.ts'

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-atmosphere" aria-hidden="true" />
      <div className="container hero-inner">
        <p className="hero-meta">
          {profile.location} · Remote-ready
        </p>
        <h1 className="brand">{profile.name}</h1>
        <p className="hero-headline">{profile.title}</p>
        <p className="hero-pitch">{profile.pitch}</p>
        <nav className="hero-actions" aria-label="Primary links">
          <a className="btn btn-primary" href="#ci-lab">
            Live CI Lab
          </a>
          <a className="btn" href={profile.resumeUrl} target="_blank" rel="noreferrer">
            Resume
          </a>
        </nav>
      </div>
    </header>
  )
}
