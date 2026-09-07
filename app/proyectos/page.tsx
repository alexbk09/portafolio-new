/**
 * Página índice de proyectos (CollectionPage) — SSR estático indexable.
 * Esta ruta permite a los buscadores explorar todos los casos de estudio
 * sin depender del modal client-side de la home.
 */
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/data/projects'
import JsonLd from '@/components/atoms/JsonLd'
import { absoluteUrl, PROJECT_ROUTE } from '@/lib/config/seo'

export const metadata: Metadata = {
  title: 'Proyectos y sistemas en producción',
  description:
    '16 sistemas construidos por Keiber Paez: e-commerce con doble moneda, plataformas médicas, facturación electrónica, SaaS, agendamiento y más. Cada caso con problema, solución, stack y resultados medibles.',
  alternates: { canonical: absoluteUrl('/proyectos') },
  openGraph: {
    title: 'Proyectos y sistemas en producción — Keiber Paez',
    description:
      'Casos de estudio con problema, solución y stack tecnológico: e-commerce, salud, SaaS y facturación.',
    url: absoluteUrl('/proyectos'),
  },
}

export default function ProyectosPage() {
  return (
    <main className="section-shell content-section proyectos-collection">
      <nav aria-label="Miga de pan" className="breadcrumb-nav">
        <ol>
          <li><Link href="/">Inicio</Link></li>
          <li aria-current="page">Proyectos</li>
        </ol>
      </nav>

      <header className="collection-heading">
        <p className="eyebrow">Portafolio de sistemas</p>
        <h1>Sistemas en producción construidos por Keiber Paez</h1>
        <p className="section-copy">
          Software real donde la ingeniería convirtió procesos manuales en plataformas que generan
          dinero o ahorran tiempo. Selecciona un caso para ver problema, solución, stack y
          resultados medibles.
        </p>
      </header>

      <div className="projects-list">
        {projects.map((project) => (
          <article key={project.id} className={`collection-project-card ${project.accent}`}>
            <div className="collection-project-info">
              <p className="eyebrow">{project.client} · {project.year}</p>
              <h2><Link href={PROJECT_ROUTE(project.id)}>{project.title}</Link></h2>
              <p>{project.description}</p>
              <div className="tag-list">
                {project.technologies.split(',').slice(0, 4).map((tag) => (
                  <span key={tag}>{tag.trim()}</span>
                ))}
              </div>
            </div>
            <div className="collection-project-cols">
              <div>
                <p className="eyebrow">Stack</p>
                <p className="collection-stack">{project.technologies}</p>
              </div>
              <Link
                href={PROJECT_ROUTE(project.id)}
                className="button button-primary"
                aria-label={`Ver caso de estudio de ${project.title}`}
              >
                Ver caso de estudio <ArrowUpRight size={14} />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* JSON-LD para indexación de colección e ítems */}
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            '@id': absoluteUrl('/proyectos') + '#coleccion',
            url: absoluteUrl('/proyectos'),
            name: 'Proyectos y sistemas construidos por Keiber Paez',
            description:
              '16 sistemas en producción: e-commerce, SaaS, plataformas médicas, facturación electrónica, agendamiento y más.',
            inLanguage: 'es',
            isPartOf: { '@id': absoluteUrl('/') + '#website' },
            mainEntity: { '@id': absoluteUrl('/proyectos') + '#itemlist' },
            about: { '@id': absoluteUrl('/') + '#person' },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            '@id': absoluteUrl('/proyectos') + '#itemlist',
            name: 'Índice de proyectos',
            numberOfItems: projects.length,
            itemListElement: projects.map((project, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              url: absoluteUrl(PROJECT_ROUTE(project.id)),
              name: project.title,
            })),
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Inicio', item: absoluteUrl('/') },
              { '@type': 'ListItem', position: 2, name: 'Proyectos', item: absoluteUrl('/proyectos') },
            ],
          },
        ]}
      />
    </main>
  )
}
