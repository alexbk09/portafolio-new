/**
 * Organismo: sección de experiencia laboral con línea de tiempo.
 */
import { experience } from '@/lib/data/experience'
import Reveal from '@/components/atoms/Reveal'
import SectionLabel from '@/components/atoms/SectionLabel'

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-shell content-section experience-section">
      <Reveal>
        <SectionLabel
          eyebrow="02 / Experiencia"
          title="Construido desde los cimientos."
          copy="Más de siete años construyendo desde los cimientos: de sistemas ERP y plataformas logísticas a arquitecturas de alto tráfico, equipos remotos y productos digitales completos."
        />
      </Reveal>

      <div className="timeline">
        {experience.map((item, index) => (
          <Reveal key={item.year} delay={index * 0.08} className="timeline-item">
            <div className="timeline-marker">0{index + 1}</div>
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-body">
              <h3>{item.role}</h3>
              <p className="timeline-company">{item.company}</p>
              <p>{item.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}