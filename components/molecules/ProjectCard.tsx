/**
 * Molécula: tarjeta de proyecto con botón para abrir el modal de detalle.
 */
'use client'

import { ArrowUpRight, Code2, Eye } from 'lucide-react'
import type { Project } from '@/lib/types/portfolio'
import ProjectVisual from '@/components/molecules/ProjectVisual'

interface ProjectCardProps {
  /** Proyecto a mostrar */
  project: Project
  /** Índice para numeración visual */
  index: number
  /** Callback al hacer clic en "Ver detalles" */
  onOpenDetails: (project: Project) => void
}

export default function ProjectCard({ project, index, onOpenDetails }: ProjectCardProps) {
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

        {/* Botón de detalles */}
        <button
          type="button"
          className="project-details-button"
          onClick={() => onOpenDetails(project)}
          aria-label={`Ver detalles de ${project.title}`}
        >
          <Eye size={14} /> Ver detalles del sistema
        </button>
      </div>
    </article>
  )
}