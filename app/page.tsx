/**
 * Página principal del portafolio.
 * Compone los organismos del sitio con arquitectura atómica.
 */
import SiteHeader from '@/components/organisms/SiteHeader'
import Hero from '@/components/organisms/Hero'
import SkillsSection from '@/components/organisms/SkillsSection'
import ProjectsSection from '@/components/organisms/ProjectsSection'
import ExperienceSection from '@/components/organisms/ExperienceSection'
import ContactSection from '@/components/organisms/ContactSection'
import SiteFooter from '@/components/organisms/SiteFooter'

export default function Home() {
  return (
    <main>
      {/* Fondo de cuadrícula ambiental */}
      <div className="ambient-grid" aria-hidden="true" />

      {/* Header navegación */}
      <SiteHeader />

      {/* Sección hero */}
      <Hero />

      {/* Stack y herramientas */}
      <SkillsSection />

      {/* Proyectos con modal de detalle */}
      <ProjectsSection />

      {/* Experiencia */}
      <ExperienceSection />

      {/* Contacto con formulario SMTP */}
      <ContactSection />

      {/* Footer con descarga de CV */}
      <SiteFooter />
    </main>
  )
}