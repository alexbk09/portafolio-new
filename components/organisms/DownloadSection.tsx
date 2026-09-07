/**
 * Organismo: bloque de descarga de CV exclusivo de la página home.
 * El pie global (barra de copyright) vive en el layout raiz.
 */
import { ArrowUpRight } from 'lucide-react'
import Reveal from '@/components/atoms/Reveal'
import SectionLabel from '@/components/atoms/SectionLabel'

export default function DownloadSection() {
  return (
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
  )
}