/**
 * Molecula (visual): imagen del proyecto con fallback elegante.
 * Intenta cargar la imagen real desde /images/projects/;
 * si el archivo no existe, muestra una tarjeta tipográfica profesional
 * con el nombre del sistema (evita imágenes rotas visibles).
 */
'use client'

import { useState } from 'react'
import type { Project } from '@/lib/types/portfolio'
import { Globe2, Code2, ShieldCheck } from 'lucide-react'

interface ProjectVisualProps {
  /** Proyecto a mostrar */
  project: Project
  /** Índice para numeración visual */
  index: number
}

export default function ProjectVisual({ project, index }: ProjectVisualProps) {
  const [imgFailed, setImgFailed] = useState(false)

  // Primera letra del nombre para el monograma
  const letter = (project.fallbackVisual || project.title).charAt(0).toUpperCase()

  return (
    <div className="project-visual">
      {/* Líneas decorativas de fondo */}
      <div className="visual-lines" aria-hidden="true" />

      {!imgFailed && project.mainImage ? (
        // Intenta cargar la imagen real
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.mainImage}
          alt={`Captura de ${project.title}`}
          className="project-shot"
          onError={() => setImgFailed(true)}
          loading="lazy"
        />
      ) : (
        // Fallback tipográfico elegante cuando la imagen no existe aún
        <div className="project-monogram" aria-hidden="true">
          <span className="project-monogram-symbol">{letter}</span>
        </div>
      )}

      {/* Etiqueta superior */}
      <span className="visual-label">
        {project.fallbackVisual} / 0{index + 1}
      </span>

      {/* Indicador de tipo de sistema */}
      <span className="project-kind-badge">
        {project.isOpenSource ? <Code2 size={9} /> : <ShieldCheck size={9} />}
        {project.isOpenSource ? 'Open source' : 'Contrato'}
      </span>

      {/* Icono enlace de demo cuando existe */}
      {project.url && <span className="project-live-dot"><Globe2 size={13} /> En vivo</span>}
    </div>
  )
}