/**
 * Molécula: modal de detalle de proyecto.
 * Muestra descripción completa, imagen, video, mejoras, debilidades,
 * funcionalidades, stack técnico y enlaces del sistema.
 */
'use client'

import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowUpRight,
  Building2,
  CalendarDays,
  CheckCircle2,
  Code2,
  ExternalLink,
  GraduationCap,
  Layers,
  Play,
  Target,
  TrendingUp,
  User2,
  Users,
  Wrench,
  X,
} from 'lucide-react'
import type { Project } from '@/lib/types/portfolio'
import { siteConfig, buildWhatsAppLink } from '@/lib/data/site'
import WhatsAppIcon from '@/components/atoms/WhatsAppIcon'

interface ProjectModalProps {
  /** Proyecto a mostrar en detalle */
  project: Project | null
  /** Callback para cerrar el modal */
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Construir mensaje de WhatsApp específico del sistema consultado
  const whatsappMessage = project
    ? `Hola Keiber, vi tu sistema "${project.title}" y me gustaría información para implementar algo similar.`
    : siteConfig.whatsapp.defaultMessage
  const whatsappUrl = buildWhatsAppLink(siteConfig.whatsapp.phone, whatsappMessage)

  // Bloquear scroll del body mientras el modal esté abierto
  useEffect(() => {
    if (!project) return
    document.body.style.overflow = 'hidden'

    // Cerrar con tecla Escape
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Detalles de ${project.title}`}
        >
          <motion.div
            className="modal-content"
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 24 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="modal-header">
              <div className="modal-header-info">
                <p className="eyebrow">
                  {project.isOpenSource ? <Code2 size={11} /> : <Building2 size={11} />}
                  {project.isOpenSource ? ' Código abierto' : ' Sistema privado'}
                </p>
                <h2>{project.title}</h2>
                <div className="modal-meta">
                  <span><User2 size={12} /> {project.role}</span>
                  <span><CalendarDays size={12} /> {project.year}</span>
                  <span><Building2 size={12} /> {project.client}</span>
                </div>
              </div>
              <button type="button" className="modal-close" onClick={onClose} aria-label="Cerrar modal">
                <X size={18} />
              </button>
            </div>

            {/* Cuerpo con scroll */}
            <div className="modal-body">
              {/* Multimedia: video o imagen principal */}
              <div className={`modal-media ${project.accent}`}>
                {project.videoUrl ? (
                  <video controls preload="metadata" poster={project.mainImage} className="modal-video">
                    <source src={project.videoUrl} type="video/mp4" />
                    Tu navegador no soporta video.
                  </video>
                ) : (
                  <div className="modal-image-fallback">
                    <span className="modal-image-symbol">{project.fallbackVisual.slice(0, 1)}</span>
                    <span className="modal-image-label">{project.fallbackVisual}</span>
                    <small>Sube una imagen a <code>public/images/projects/{project.id}.jpg</code></small>
                  </div>
                )}
                {project.videoUrl && (
                  <div className="modal-video-badge">
                    <Play size={10} /> Demo disponible
                  </div>
                )}
              </div>

              {/* Descripción larga */}
              <section className="modal-section">
                <h3 className="modal-section-title">
                  <Layers size={15} /> Descripción del sistema
                </h3>
                <p className="modal-long-description">{project.longDescription}</p>
              </section>

              {/* Grid: Desafío + Solución */}
              <div className="modal-grid-2">
                <section className="modal-section modal-section-card">
                  <h3 className="modal-section-title">
                    <Target size={15} /> El desafío
                  </h3>
                  <p>{project.challenge}</p>
                </section>
                <section className="modal-section modal-section-card">
                  <h3 className="modal-section-title">
                    <Wrench size={15} /> La solución
                  </h3>
                  <p>{project.solution}</p>
                </section>
              </div>

              {/* Necesidades del cliente */}
              <section className="modal-section">
                <h3 className="modal-section-title">
                  <Users size={15} /> Necesidades que cubre
                </h3>
                <div className="modal-tag-cloud">
                  {project.painPoints.map((pain) => (
                    <span key={pain.label} className="modal-pain-chip">{pain.label}</span>
                  ))}
                </div>
              </section>

              {/* Mejoras y resultados */}
              <section className="modal-section">
                <h3 className="modal-section-title">
                  <TrendingUp size={15} /> Mejoras y resultados
                </h3>
                <ul className="modal-improvement-list">
                  {project.improvements.map((improvement, index) => (
                    <li key={index}>
                      <CheckCircle2 size={15} />
                      <span>{improvement.description}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Funcionalidades */}
              <section className="modal-section">
                <h3 className="modal-section-title">
                  <GraduationCap size={15} /> Funcionalidades principales
                </h3>
                <div className="modal-features-grid">
                  {project.features.map((feature) => (
                    <div key={feature.title} className="modal-feature-card">
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Stack técnico */}
              <section className="modal-section">
                <h3 className="modal-section-title">
                  <Code2 size={15} /> Stack y arquitectura
                </h3>
                <div className="modal-tech-list">
                  {project.techDetails.map((tech) => (
                    <div key={tech.name} className="modal-tech-item">
                      <span className="modal-tech-name">{tech.name}</span>
                      <span className="modal-tech-role">{tech.role}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Footer con enlaces */}
            <div className="modal-footer">
              <div className="modal-footer-tags">
                {project.technologies.split(',').map((tag) => (
                  <span key={tag} className="tag-list-span">{tag.trim()}</span>
                ))}
              </div>
              <div className="modal-footer-actions">
                {project.url && (
                  <a href={project.url} target="_blank" rel="noreferrer" className="button button-primary">
                    Ver demo <ArrowUpRight size={14} />
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="button button-ghost">
                    <Code2 size={14} /> GitHub
                  </a>
                )}
                <a href="#contact" onClick={onClose} className="button button-ghost">
                  Contratar algo similar <ExternalLink size={14} />
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-whatsapp"
                  aria-label={`Consultar por WhatsApp sobre ${project.title}`}
                >
                  <WhatsAppIcon size={14} /> Consultar por WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}