/**
 * Página principal del portafolio.
 * Orden pensado para conversión:
 * Hero (quién eres) → Métricas (resultados reales) → Servicios (cómo ayudas como freelance)
 * → Empleo (cómo ayudas como equipo) → Proyectos (evidencia) → Experiencia → Stack → Contacto.
 */
import type { Metadata } from 'next'
import SiteHeader from '@/components/organisms/SiteHeader'
import Hero from '@/components/organisms/Hero'
import ImpactSection from '@/components/organisms/ImpactSection'
import ServicesSection from '@/components/organisms/ServicesSection'
import HireMeSection from '@/components/organisms/HireMeSection'
import ProjectsSection from '@/components/organisms/ProjectsSection'
import ExperienceSection from '@/components/organisms/ExperienceSection'
import SkillsSection from '@/components/organisms/SkillsSection'
import ContactSection from '@/components/organisms/ContactSection'
import SiteFooter from '@/components/organisms/SiteFooter'
import JsonLd from '@/components/atoms/JsonLd'
import { projects } from '@/lib/data/projects'
import { siteConfig } from '@/lib/data/site'
import { softwareProjectsJsonLd, SITE_URL } from '@/lib/config/seo'

/* Metadata específica de la home. El layout raíz aporta el resto (OG/Twitter global). */
export const metadata: Metadata = {
  title: 'Keiber Paez | Senior Full Stack Developer — Laravel, Node.js, React y Vue',
  description: siteConfig.positioning,
  openGraph: {
    title: 'Keiber Paez | Senior Full Stack Developer — Laravel, Node.js, React y Vue',
    description: siteConfig.positioning,
    url: SITE_URL,
  },
  alternates: {
    canonical: SITE_URL,
  },
}

export default function Home() {
  return (
    <main>
      {/* Fondo de cuadrícula ambiental */}
      <div className="ambient-grid" aria-hidden="true" />

      {/* Header navegación */}
      <SiteHeader />

      {/* Hero → propuesta de valor + métricas clave */}
      <Hero />

      {/* Resultados medibles entregados a clientes */}
      <ImpactSection />

      {/* Servicios profesionales (freelance / B2B) */}
      <ServicesSection />

      {/* Oferta para reclutadores y empleadores remotos */}
      <HireMeSection />

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

      {/* Datos estructurados: lista de software construido (rich results) */}
      <JsonLd data={softwareProjectsJsonLd(projects)} />
    </main>
  )
}