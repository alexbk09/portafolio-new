/**
 * Organismo: sección de servicios profesionales.
 * "Cómo puedo ayudarte": 4 ofertas claras orientadas a conversión.
 */
'use client'

import { Code2, Users, Wrench, GraduationCap, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { services } from '@/lib/data/services'
import { siteConfig, buildWhatsAppLink } from '@/lib/data/site'
import Reveal from '@/components/atoms/Reveal'
import SectionLabel from '@/components/atoms/SectionLabel'

/** Mapa de nombres de icono → componente lucide */
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
          eyebrow="¿Cómo puedo ayudarte?"
          title="Ofertas claras, sin letra pequeña."
          copy="No vendo tecnologías: resuelvo problemas de negocio. Cada modalidad tiene entregables concretos y un contrato claro. Elige la que se ajuste a tu momento."
        />
      </Reveal>

      <div className="services-grid">
        {services.map((service, index) => {
          const Icon = iconMap[service.iconName] ?? Code2
          // Mensaje de WhatsApp contextual por servicio
          const waMessage = `Hola Keiber, me interesa tu servicio de "${service.title}". ¿Podemos conversar?`
          const waUrl = buildWhatsAppLink(siteConfig.whatsapp.phone, waMessage)

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

                <div className="service-ideal">
                  <strong>Ideal para</strong>
                  <span>{service.idealFor}</span>
                </div>

                <ul className="service-deliverables">
                  {service.deliverables.map((item) => (
                    <li key={item}>
                      <CheckCircle2 size={14} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="service-actions">
                  <a href={waUrl} target="_blank" rel="noreferrer" className="button button-primary">
                    Empezar ahora <ArrowUpRight size={14} />
                  </a>
                  <a href="#work" className="text-link">
                    Ver sistemas construidos <span>↓</span>
                  </a>
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}