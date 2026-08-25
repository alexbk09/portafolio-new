/**
 * Organismo: sección de contacto con formulario SMTP y enlaces sociales.
 */
import { Code2, Globe2, Mail } from 'lucide-react'
import { siteConfig } from '@/lib/data/site'
import Reveal from '@/components/atoms/Reveal'
import ContactForm from '@/components/molecules/ContactForm'

export default function ContactSection() {
  return (
    <section id="contact" className="section-shell content-section contact-section">
      <Reveal>
        <div className="contact-panel">
          {/* Columna izquierda: información */}
          <div className="contact-copy">
            <p className="eyebrow">03 / Hablemos</p>
            <h2>
              ¿Tienes un problema<br />
              <span>que vale la pena resolver?</span>
            </h2>
            <p>Cuéntame qué estás construyendo. Estoy disponible para contratación B2B y proyectos internacionales.</p>

            {/* Redes sociales */}
            <div className="social-links">
              <a href={siteConfig.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Code2 />
              </a>
              <a href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Globe2 />
              </a>
              <a href={`mailto:${siteConfig.socials.email}`} aria-label="Correo electrónico">
                <Mail />
              </a>
            </div>
          </div>

          {/* Formulario funcional con SMTP */}
          <ContactForm />
        </div>
      </Reveal>
    </section>
  )
}