import { useLocale } from '../i18n/LocaleContext.tsx'

export default function About() {
  const { t } = useLocale()
  return (
    <section className="section section-alt" id="about">
      <div className="container">
        <h2>{t.about.title}</h2>
        <p className="section-intro">{t.about.intro}</p>
        {t.about.groups.map((g) => (
          <div key={g.heading}>
            <h3 className="tech-heading">{g.heading}</h3>
            <ul className="tag-list tag-list-lg">
              {g.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
