/**
 * Página de detalle de cada proyecto (caso de estudio indexable).
 * Server component con SSG: se genera estáticamente cada slug en build.
 * Incluye schemas SoftwareApplication, FAQPage y VideoObject para
 * enriquecer el resultado en buscadores y responder consultas de IA.
 */
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowLeft,
  ArrowUpRight,
  Building2,
  CalendarDays,
  CheckCircle2,
  Code2,
  ExternalLink,
  GraduationCap,
  Layers,
  Target,
  TrendingUp,
  User2,
  Users,
  Wrench,
} from 'lucide-react'
import { projects } from '@/lib/data/projects'
import JsonLd from '@/components/atoms/JsonLd'
import { buildWhatsAppLink, siteConfig } from '@/lib/data/site'
import WhatsAppIcon from '@/components/atoms/WhatsAppIcon'
import {
  absoluteUrl,
  breadcrumbJsonLd,
  faqPageJsonLd,
  PROJECT_ROUTE,
  softwareProjectDetailJsonLd,
  videoObjectJsonLd,
} from '@/lib/config/seo'
import type { Project } from '@/lib/types/portfolio'

/** Rutas estáticas generadas en build: /proyectos/[slug] */
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }))
}

/** Metadata dinámica y canónica única por caso de estudio */
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((p) => p.id === params.slug)
  if (!project) return {}
  const url = absoluteUrl(PROJECT_ROUTE(project.id))

  return {
    title: `${project.title} — Caso de estudio | Desarrollador Full Stack`,
    description: project.description.slice(0, 160),
    alternates: { canonical: url },
    openGraph: {
      title: `${project.title} — Sistema construido por Keiber Paez`,
      description: project.longDescription.slice(0, 160),
      url,
      type: 'article',
      authors: [siteConfig.fullName],
      publishedTime: project.year ? `${project.year}-01-01` : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} — Caso de estudio`,
      description: project.description.slice(0, 160),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

function ProjectDetailPage({ project }: { project: Project }) {
  const whatsappMessage = `Hola Keiber, vi tu sistema "${project.title}" y me gustaría información para implementar algo similar.`
  const whatsappUrl = buildWhatsAppLink(siteConfig.whatsapp.phone, whatsappMessage)

  return (
    <article className={`project-detail ${project.accent}`}>
      {/* Breadcrumb visible (navegación UX + SEO) */}
      <nav aria-label="Miga de pan" className="breadcrumb-nav">
        <ol>
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/proyectos">Proyectos</Link></li>
          <li aria-current="page">{project.title}</li>
        </ol>
      </nav>

      {/* Header del caso */}
      <header className="detail-header">
        <Link href="/proyectos" className="detail-back">
          <ArrowLeft size={14} /> Volver a proyectos
        </Link>
        <p className="eyebrow">
          {project.isOpenSource ? <Code2 size={11} /> : <Building2 size={11} />}
          {project.isOpenSource ? ' Código abierto' : ' Sistema privado'}
        </p>
        <h1>{project.title}</h1>
        <div className="detail-meta">
          <span><User2 size={12} /> {project.role}</span>
          <span><CalendarDays size={12} /> {project.year}</span>
          <span><Building2 size={12} /> {project.client}</span>
        </div>
        <p className="detail-intro">{project.longDescription}</p>
      </header>

      {/* Stack principal */}
      <div className="detail-tech-label">
        <Layers size={15} /> Stack y tecnologías
      </div>
      <div className="tag-list">
        {project.technologies.split(',').map((tag) => (
          <span key={tag}>{tag.trim()}</span>
        ))}
      </div>

      {/* Desafío + Solución */}
      <div className="detail-grid-2">
        <section className="detail-card">
          <h2><Target size={16} /> El desafío</h2>
          <p>{project.challenge}</p>
        </section>
        <section className="detail-card">
          <h2><Wrench size={16} /> La solución</h2>
          <p>{project.solution}</p>
        </section>
      </div>

      {/* Necesidades que cubre */}
      <section className="detail-card detail-full">
        <h2><Users size={16} /> Necesidades del negocio que cubre</h2>
        <div className="tag-list">
          {project.painPoints.map((pain) => (
            <span key={pain.label}>{pain.label}</span>
          ))}
        </div>
      </section>

      {/* Resultados medibles */}
      <section className="detail-card detail-full">
        <h2><TrendingUp size={16} /> Mejoras y resultados</h2>
        <ul className="detail-list">
          {project.improvements.map((improvement, index) => (
            <li key={index}>
              <CheckCircle2 size={15} />
              <span>{improvement.description}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Funcionalidades */}
      <section className="detail-card detail-full">
        <h2><GraduationCap size={16} /> Funcionalidades principales</h2>
        <div className="detail-features">
          {project.features.map((feature) => (
            <div key={feature.title} className="detail-feature">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Detalle técnico */}
      <section className="detail-card detail-full">
        <h2><Code2 size={16} /> Stack y arquitectura</h2>
        <dl className="detail-tech">
          {project.techDetails.map((tech) => (
            <div key={tech.name}>
              <dt>{tech.name}</dt>
              <dd>{tech.role}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Preguntas frecuentes visibles (FAQ rich results) */}
      <section className="detail-card detail-full detail-faq">
        <h2>Preguntas frecuentes sobre {project.title}</h2>
        <h3>{`¿Qué problema resuelve ${project.title}?`}</h3>
        <p>{project.challenge}</p>
        <h3>{`¿Cómo resolvió Keiber Paez el desafío con ${project.title}?`}</h3>
        <p>{project.solution}</p>
        {project.improvements.slice(0, 3).map((improvement, index) => (
          <div key={index}>
            <h3>
              {index === 0
                ? `¿Cuál fue el principal resultado de ${project.title}?`
                : `¿Qué mejora adicional aportó ${project.title}?`}
            </h3>
            <p>{improvement.description}</p>
          </div>
        ))}
      </section>

      {/* CTAs de conversión */}
      <div className="detail-actions">
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="button button-primary"
            aria-label={`Ver demo en vivo de ${project.title}`}
          >
            Ver demo en vivo <ArrowUpRight size={14} />
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="button button-ghost"
          >
            <Code2 size={14} /> Código en GitHub
          </a>
        )}
        <a href="/#contact" className="button button-ghost">
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

      {/* Proyecto siguiente (relación interna para SEO) */}
      <nav className="detail-next" aria-label="Otro proyecto">
        {(() => {
          const currentIndex = projects.findIndex((p) => p.id === project.id)
          const next = projects[(currentIndex + 1) % projects.length]
          return (
            <Link href={PROJECT_ROUTE(next.id)}>
              Siguiente proyecto: <strong>{next.title}</strong> <ArrowUpRight size={14} />
            </Link>
          )
        })()}
      </nav>

      {/* Schemas estructurados del caso de estudio */}
      <JsonLd data={softwareProjectDetailJsonLd(project)} />
      <JsonLd data={faqPageJsonLd(project)} />
      {videoObjectJsonLd(project) && <JsonLd data={videoObjectJsonLd(project) as Record<string, unknown>} />}
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Inicio', path: '/' },
          { name: 'Proyectos', path: '/proyectos' },
          { name: project.title, path: PROJECT_ROUTE(project.id) },
        ])}
      />
    </article>
  )
}

export default function Page({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.id === params.slug)
  if (!project) notFound()

  return (
    <main className="section-shell content-section project-detail-page">
      <ProjectDetailPage project={project} />
    </main>
  )
}