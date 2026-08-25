/**
 * Organismo: pie de página con sección de descarga de CV.
 */
import { ArrowUpRight } from 'lucide-react'
import { siteConfig } from '@/lib/data/site'
import Reveal from '@/components/atoms/Reveal'
import SectionLabel from '@/components/atoms/SectionLabel'

export default function SiteFooter() {
  return (
    <>
      {/* Sección de descarga del CV */}
      <section id="download" className="section-shell">
        <Reveal>
          <div className="download-panel">
            <SectionLabel
              eyebrow="Descargar"
              title="Mi CV"
              copy="Descarga mi CV en formato PDF para ver mi experiencia y proyectos."
            />
            <div className="download-actions">
              <a href="/cv.pdf" download className="button button-primary">
                Descargar CV <ArrowUpRight size={14} />
              </a>
              <a href="/cv.pdf" target="_blank" rel="noreferrer" className="text-link">
                Abrir en nueva pestaña
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Pie de página */}
      <footer className="site-footer section-shell">
        <span>© 2026 {siteConfig.fullName}</span>
        <span className="footer-note">
          <span className="status-dot" /> Diseñado y desarrollado con cuidado
        </span>
        <a href="#top">Volver arriba ↑</a>
      </footer>
    </>
  )
}