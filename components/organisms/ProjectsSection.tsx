/**
 * Organismo: sección de proyectos seleccionados.
 * Renderiza las tarjetas de proyecto y gestiona el estado del modal de detalle.
 */
'use client'

import { useState } from 'react'
import { projects } from '@/lib/data/projects'
import type { Project } from '@/lib/types/portfolio'
import Reveal from '@/components/atoms/Reveal'
import SectionLabel from '@/components/atoms/SectionLabel'
import ProjectCard from '@/components/molecules/ProjectCard'
import ProjectModal from '@/components/molecules/ProjectModal'

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="work" className="section-shell content-section">
      <Reveal>
        <SectionLabel
          eyebrow="01 / Proyectos seleccionados"
          title="Una selección de lo que he creado."
          copy="Sistemas reales donde la ingeniería cuidadosa se convirtió en resultados medibles. Muchos de mis sistemas fueron bajo contrato y son software cerrados utilizados solo por las empresas."
        />
      </Reveal>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={(index % 3) * 0.08}>
            <ProjectCard
              project={project}
              index={index}
              onOpenDetails={setSelectedProject}
            />
          </Reveal>
        ))}
      </div>

      {/* Modal de detalle del proyecto */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}