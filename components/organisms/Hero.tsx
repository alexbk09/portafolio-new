/**
 * Organismo: sección hero con presentación y ventana de código.
 */
import { ArrowUpRight } from 'lucide-react'
import { siteConfig } from '@/lib/data/site'
import Reveal from '@/components/atoms/Reveal'

export default function Hero() {
  return (
    <section id="top" className="hero section-shell">
      {/* Columna izquierda: texto de presentación */}
      <div className="hero-copy">
        <Reveal>
          <p className="eyebrow">
            <span className="status-dot" /> {siteConfig.availability}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1>
            Construyo productos digitales<br />
            <span>que se sienten inevitables.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="hero-bio">{siteConfig.bio}</p>
        </Reveal>
        <Reveal delay={0.22} className="hero-actions">
          <a href="#contact" className="button button-primary">
            Iniciar una conversación <ArrowUpRight size={17} />
          </a>
          <a href="#work" className="text-link">
            Ver proyectos destacados <span>↓</span>
          </a>
        </Reveal>
      </div>

      {/* Columna derecha: ventana de código */}
      <Reveal delay={0.18} className="hero-aside">
        <div className="code-window">
          <div className="window-bar">
            <span /><span /><span />
            <small>desarrollador.config.ts</small>
          </div>
          <pre>
            <code>
              <i>const</i> <b>desarrollador</b> = {'{'}
              {`\n`}  nombre: <em>"Keiber Paez"</em>,{`\n`}
              {'  '}enfoque: [<em>"producto"</em>, <em>"arquitectura"</em>],{`\n`}
              {'  '}experiencia: <strong>{siteConfig.yearsOfExperience}</strong>,{`\n`}
              {'  '}estado: <em>"disponible"</em>{`\n`}
              {'}'}
            </code>
          </pre>
          <div className="code-footer">
            <span><span className="status-dot" /> abierto a buenos retos</span>
            <span>⌘ K</span>
          </div>
        </div>
      </Reveal>
    </section>
  )
}