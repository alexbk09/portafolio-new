/**
 * Organismo: sección de habilidades técnicas agrupadas por categoría.
 */
'use client'

import { motion } from 'framer-motion'
import { skillCategories, getSkillsByCategory } from '@/lib/data/skills'
import Reveal from '@/components/atoms/Reveal'
import SectionLabel from '@/components/atoms/SectionLabel'

export default function SkillsSection() {
  return (
    <section className="skills-section section-shell" aria-labelledby="skills-title">
      <Reveal>
        <SectionLabel
          eyebrow="Stack / Herramientas"
          title="Las herramientas detrás de cada entrega."
          copy="Un stack amplio para moverme con soltura desde la interfaz hasta la infraestructura y la operación."
        />
      </Reveal>

      <div className="skills-board">
        {skillCategories.map((category) => {
          const categorySkills = getSkillsByCategory(category)
          return (
            <div className="skill-group" key={category}>
              <div className="skill-group-heading">
                <span className="skill-group-dot" />
                {category}
                <span className="skill-group-count">
                  {categorySkills.length.toString().padStart(2, '0')}
                </span>
              </div>
              <div className="skills-grid">
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className={`skill-chip ${skill.color}`}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.025 }}
                  >
                    <span className="skill-mark">{skill.name.slice(0, 1)}</span>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}