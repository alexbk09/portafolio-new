/**
 * Página principal del portafolio (home).
 * El header y footer globales viven ahora en el layout raíz, por lo que
 * esta página solo contiene las secciones de contenido. La sección de
 * descarga de CV está en DownloadSection (exclusiva de la home).
 */
import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/organisms/Hero'
import ImpactSection from '@/components/organisms/ImpactSection'
import ServicesSection from '@/components/organisms/ServicesSection'
import HireMeSection from '@/components/organisms/HireMeSection'
import ProjectsSection from '@/components/organisms/ProjectsSection'
import ExperienceSection from '@/components/organisms/ExperienceSection'
import SkillsSection from '@/components/organisms/SkillsSection'
import DownloadSection from '@/components/organisms/DownloadSection'
import ContactSection from '@/components/organisms/ContactSection'
import JsonLd from '@/components/atoms/JsonLd'
import { projects } from '@/lib/data/projects'
import { siteConfig } from '@/lib/data/site'
import { softwareProjectsJsonLd, SITE_URL, breadcrumbJsonLd } from '@/lib/config/seo'

/* Metadata específica de la home. El layout raíz aporta el resto (OG/Twitter global). */
export const metadata: Metadata = {
  title: 'Keiber Paez | Senior Full Stack Developer — Laravel, Node.js, React y Vue',
  description: siteConfig.positioning,
  openGraph: {
    title: 'Keiber Paez | Senior Full Stack Developer — Laravel, Node.js, React y Vue',
    description: siteConfig.positioning,
    url: SITE_URL,
    type: 'website',
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      'es-ES': SITE_URL,
    },
  },
}

export default function Home() {
  return (
    <main>
      {/* Fondo de cuadrícula ambiental */}
      <div className="ambient-grid" aria-hidden="true" />

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

      {/* CTA hacia índice indexable de proyectos */}
      <section className="section-shell content-section include-cta" aria-label="Ver todos los proyectos">
        <div className="download-panel">
          <div>
            <p className="eyebrow">Casos de estudio indexables</p>
            <h2 className="include-title">Cada sistema con su página de caso</h2>
            <p className="section-copy">
              Explora el problema, la solución, el stack y los resultados medibles de cada sistema
              en una página dedicada, pensada para reclutadores, clientes y buscadores.
            </p>
          </div>
          <Link href="/proyectos" className="button button-primary include-cta-button">
            Ver los {projects.length} casos de estudio →
          </Link>
        </div>
      </section>

      {/* Experiencia */}
      <ExperienceSection />

      {/* Descarga de CV (solo home; footer global en el layout) */}
      <DownloadSection />

      {/* Contacto con formulario SMTP */}
      <ContactSection />

      {/* Datos estructurados: lista de software construido + breadcrumb */}
      <JsonLd data={softwareProjectsJsonLd(projects)} />
      <JsonLd data={breadcrumbJsonLd([{ name: 'Inicio', path: '/' }])} />
    </main>
  )
}