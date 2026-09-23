/**
 * Organismo: especialidades técnicas del desarrollador.
 * Enfocado a mostrar el nivel y la forma de trabajo, no a vender paquetes.
 */
'use client'

import { Code2, Users, Wrench, GraduationCap, CheckCircle2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { services } from '@/lib/data/services'
import Reveal from '@/components/atoms/Reveal'
import SectionLabel from '@/components/atoms/SectionLabel'

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Users,
  Wrench,
  GraduationCap,
}

export default function ServicesSection() {
  return (
    <section id="services" className="services-section section-shell">
      <Reveal>
        <SectionLabel
          eyebrow="Especialidades"
          title="Enfoque técnico para producto, backend y experiencia web."
          copy="Construyo software mantenible, escalable y con buena experiencia de uso: APIs, dashboards, plataformas de negocio y experiencias web que ayudan a equipos a operar mejor y entregar más."
        />
      </Reveal>

      <div className="services-grid">
        {services.map((service, index) => {
          const Icon = iconMap[service.iconName] ?? Code2

          return (
            <Reveal key={service.title} delay={index * 0.08} className="service-card-wrap">
              <article className={`service-card ${service.accent}`}>
                <div className="service-card-head">
                  <div className="service-icon">
                    <Icon size={22} />
                  </div>
                  <span className="service-contract">{service.contractType}</span>
                </div>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>

                <ul className="service-deliverables">
                  {service.deliverables.map((item) => (
                    <li key={item}>
                      <CheckCircle2 size={14} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}