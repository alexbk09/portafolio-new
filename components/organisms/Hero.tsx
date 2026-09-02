/**
 * Organismo: sección hero con presentación y ventana de código.
 * Diseñado para que un reclutador o cliente entienda en 5 segundos:
 * qué hace, con qué stack, cuántos resultados y su disponibilidad.
 */
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { siteConfig } from '@/lib/data/site'
import Reveal from '@/components/atoms/Reveal'

export default function Hero() {
  return (
    <section id="top" className="hero section-shell">
      {/* Columna izquierda: propuesta de valor para reclutador/cliente */}
      <div className="hero-copy">
        <Reveal>
          <p className="eyebrow">
            <span className="status-dot" /> {siteConfig.availability}
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="hero-kicker">{siteConfig.title}</p>
          <h1>
            Software que <span className="hero-accent">genera dinero</span> o ahorra tiempo a tu negocio
          </h1>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="hero-bio">{siteConfig.positioning}</p>
        </Reveal>

        {/* Métricas visibles para validación inmediata */}
        <Reveal delay={0.2} className="hero-metrics">
          {siteConfig.metrics.map((metric) => (
            <div className="hero-metric" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.26} className="hero-actions">
          <a href="#contact" className="button button-primary">
            Iniciar una conversación <ArrowUpRight size={17} />
          </a>
          <a href="#work" className="text-link">
            Ver sistemas en producción <ArrowDown size={14} />
          </a>
          <a href="#hire" className="text-link hero-hire-link">
            ¿Buscas talento Senior remoto? <span>↓</span>
          </a>
        </Reveal>
      </div>

      {/* Columna derecha: ventana de código con datos profesionales */}
      <Reveal delay={0.18} className="hero-aside">
        <div className="code-window">
          <div className="window-bar">
            <span />
            <span />
            <span />
            <small>developers.json</small>
          </div>
          <pre>
            <code>
              {'{'}{`\n`}
              {'  '}nombre: <em>"Keiber Paez"</em>,{`\n`}
              {'  '}rol: [<em>"Senior Full Stack"</em>, <em>"Tech Lead"</em>],{`\n`}
              {'  '}stack: [<em>"Laravel"</em>, <em>"Node.js"</em>, <em>"React"</em>, <em>"Vue"</em>],{`\n`}
              {'  '}sectores: [<em>"e-commerce"</em>, <em>"salud"</em>, <em>"SaaS"</em>],{`\n`}
              {'  '}experiencia: <strong>{siteConfig.yearsOfExperience} años</strong>,{`\n`}
              {'  '}disponibilidad: <em>"remoto global"</em>,{`\n`}
              {'  '}estado: <em>"contratación abierta"</em>{`\n`}
              {'}'}
            </code>
          </pre>
          <div className="code-footer">
            <span>
              <span className="status-dot" /> disponible para B2B y empleo remoto
            </span>
            <span>2026</span>
          </div>
        </div>
      </Reveal>
    </section>
  )
}