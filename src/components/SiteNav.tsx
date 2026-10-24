const links = [
  { href: '#ci-lab', label: 'CI Lab' },
  { href: '#gavel', label: 'Gavel' },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
]

export default function SiteNav() {
  return (
    <nav className="site-nav" aria-label="Sections">
      <div className="container site-nav-inner">
        <a className="site-nav-brand" href="#top">
          DS
        </a>
        <ul className="site-nav-links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
