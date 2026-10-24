import { useLocale } from '../i18n/LocaleContext.tsx'

export default function About() {
  const { t } = useLocale()
  const skills = t.about.groups.flatMap((g) => g.items).slice(0, 12)

  return (
    <section className="section section-alt" id="about">
      <div className="container">
        <h2>{t.about.title}</h2>
        <p className="section-intro">{t.about.intro}</p>
        <ul className="tag-list tag-list-lg about-skills" aria-label={t.about.skillsAria}>
          {skills.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
