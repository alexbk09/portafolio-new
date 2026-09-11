/**
 * Molécula: tarjeta de proyecto con botón para abrir el modal de detalle.
 */
'use client'

import { ArrowUpRight, Code2, Eye, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import type { Project } from '@/lib/types/portfolio'
import ProjectVisual from '@/components/molecules/ProjectVisual'
import { PROJECT_ROUTE } from '@/lib/config/seo'
import { getProjectAcquisition } from '@/lib/data/licenses'

interface ProjectCardProps {
  /** Proyecto a mostrar */
  project: Project
  /** Índice para numeración visual */
  index: number
  /** Callback al hacer clic en "Ver detalles" */
  onOpenDetails: (project: Project) => void
}

export default function ProjectCard({ project, index, onOpenDetails }: ProjectCardProps) {
  // Condiciones comerciales del sistema: licencia propia o desarrollo a medida
  const acquisition = getProjectAcquisition(project.id)
  return (
    <article className={`project-card ${project.accent}`}>
      {/* Visual superior: imagen real con fallback elegante */}
      <ProjectVisual project={project} index={index} />

      {/* Contenido */}
      <div className="project-content">
        <div className="project-topline">
          <span className="eyebrow">Proyecto</span>
          <span className="project-arrow">↗</span>
        </div>
        {acquisition && (
          <span className={`project-license-badge ${acquisition.kind}`}>
            <ShoppingCart size={10} />
            {acquisition.kind === 'license' ? 'Licencia o SaaS · Global' : 'Construible a medida'}
          </span>
        )}
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        {/* Tags de tecnologías */}
        <div className="tag-list">
          {project.technologies.split(',').map((tag) => (
            <span key={tag}>{tag.trim()}</span>
          ))}
        </div>

        {/* Enlaces */}
        {(project.url || project.githubUrl) && (
          <div className="project-links">
            {project.url && (
              <a href={project.url} target="_blank" rel="noreferrer">
                Demo en vivo <ArrowUpRight size={14} />
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                <Code2 size={14} /> GitHub
              </a>
            )}
          </div>
        )}

        {/* Enlaces de acción: ver más inline o página completa indexable */}
        <div className="project-details-row">
          <button
            type="button"
            className="project-details-button"
            onClick={() => onOpenDetails(project)}
            aria-label={`Ver detalles de ${project.title}`}
          >
            <Eye size={14} /> Ver resumen
          </button>
          <Link
            href={PROJECT_ROUTE(project.id)}
            className="project-details-link"
            aria-label={`Ver caso de estudio completo de ${project.title}`}
          >
            Caso indexable <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>
    </article>
  )
}
