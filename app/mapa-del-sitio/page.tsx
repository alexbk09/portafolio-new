/**
 * Mapa del sitio HTML — hub de enlazado interno indexable.
 * Además del sitemap.xml para crawlers, esta página da a las personas (y a los
 * buscadores) una vista completa del sitio en un solo clic: servicios, todos
 * los casos de estudio y qué sistemas pueden comprarse hoy como licencia.
 * Reduce la profundidad de rastreo y reparte autoridad interna hacia los casos.
 */
import type { Metadata } from 'next'
import Link from 'next/link'
import { BadgeCheck, FileCode2, Globe2, ListTree, ShoppingCart } from 'lucide-react'
import { projects } from '@/lib/data/projects'
import { getProjectAcquisition } from '@/lib/data/licenses'
import { formatUsd } from '@/lib/config/commerce'
import { siteConfig } from '@/lib/data/site'
import JsonLd from '@/components/atoms/JsonLd'
import {
  absoluteUrl,
  breadcrumbJsonLd,
  MAP_ROUTE,
  PROJECT_ROUTE,
  SITEMAP_ROUTE,
} from '@/lib/config/seo'

/** Rutas de contenido del sitio, fuente única para el listado principal */
const MAIN_ROUTES = [
  { path: '/', label: 'Inicio', description: 'Propuesta de valor, servicios, experiencia y contacto.' },
  { path: '/proyectos', label: 'Proyectos', description: `Índice de los ${projects.length} casos de estudio.` },
  { path: '/#servicios', label: 'Servicios', description: 'Desarrollo de producto, optimización, senior remoto y consultoría.' },
  { path: '/#contact', label: 'Contacto', description: 'Formulario directo y WhatsApp con respuesta en menos de 24 h.' },
]

export const metadata: Metadata = {
  title: 'Mapa del sitio',
  description:
    `Índice completo de ${siteConfig.fullName}: servicios, ${projects.length} casos de estudio de sistemas en producción y los sistemas disponibles para comprar con licencia, entregados en cualquier país.`,
  alternates: { canonical: absoluteUrl(MAP_ROUTE) },
  openGraph: {
    title: 'Mapa del sitio — Keiber Paez',
    description: 'Todas las páginas y sistemas del portafolio en un solo lugar.',
    url: absoluteUrl(MAP_ROUTE),
  },
}

export default function MapaDelSitioPage() {
  // Sistemas propios comprables: conversión directa
  const licensed = projects.filter((project) => getProjectAcquisition(project.id)?.kind === 'license')
  // Sistemas entregados bajo contrato: se replican a medida
  const customBuilt = projects.filter((project) => getProjectAcquisition(project.id)?.kind === 'custom')

  return (
    <main className="section-shell content-section sitemap-page">
      <nav aria-label="Miga de pan" className="breadcrumb-nav">
        <ol>
          <li><Link href="/">Inicio</Link></li>
          <li aria-current="page">Mapa del sitio</li>
        </ol>
      </nav>

      <header className="collection-heading">
        <p className="eyebrow">Índice general</p>
        <h1>Mapa del sitio</h1>
        <p className="section-copy">
          Todas las páginas del portafolio y los sistemas disponibles para comprar con licencia,
          en un solo lugar. Para rastreo automático, el sitio publica también el{' '}
          <a href={SITEMAP_ROUTE} className="sitemap-inline-link">{SITEMAP_ROUTE}</a>.
        </p>
      </header>

      {/* Páginas principales del sitio */}
      <section className="sitemap-section">
        <h2><ListTree size={16} /> Páginas principales</h2>
        <ul className="sitemap-list">
          {MAIN_ROUTES.map((route) => (
            <li key={route.path} className="sitemap-item">
              <Link href={route.path}>{route.label}</Link>
              <span className="sitemap-meta">{route.description}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Sistemas propios a la venta como licencia */}
      <section className="sitemap-section">
        <h2><ShoppingCart size={16} /> Sistemas disponibles con licencia</h2>
        <p className="section-copy sitemap-copy">
          Software propio en producción, listo para instalarse con tu marca. Se entrega el código
          fuente, la instalación y soporte incluido, desde cualquier país.
        </p>
        <ul className="sitemap-list">
          {licensed.map((project) => {
            const acquisition = getProjectAcquisition(project.id)
            return (
              <li key={project.id} className="sitemap-item">
                <Link href={PROJECT_ROUTE(project.id)}>{project.title}</Link>
                <span className="sitemap-meta">{project.description}</span>
                {acquisition && (
                  <span className="sitemap-tags">
                    <span className="sitemap-badge"><BadgeCheck size={10} /> {acquisition.models[0]}</span>
                    <span className="sitemap-badge"><Globe2 size={10} /> Cobertura mundial</span>
                    {typeof acquisition.priceFromUsd === 'number' && (
                      <span className="sitemap-badge sitemap-price">
                        Desde {formatUsd(acquisition.priceFromUsd)}
                      </span>
                    )}
                  </span>
                )}
              </li>
            )
          })}
        </ul>
      </section>

      {/* Sistemas a medida y casos de estudio restantes */}
      <section className="sitemap-section">
        <h2><FileCode2 size={16} /> Sistemas construidos a medida (casos de estudio)</h2>
        <p className="section-copy sitemap-copy">
          Sistemas entregados bajo contrato privado o replicables a medida para tu negocio.
        </p>
        <ul className="sitemap-list">
          {customBuilt.map((project) => (
            <li key={project.id} className="sitemap-item">
              <Link href={PROJECT_ROUTE(project.id)}>{project.title}</Link>
              <span className="sitemap-meta">{project.description}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Recursos técnicos expuestos a buscadores y asistentes de IA */}
      <section className="sitemap-section">
        <h2><Globe2 size={16} /> Recursos para buscadores y asistentes</h2>
        <ul className="sitemap-list">
          <li className="sitemap-item">
            <a href={SITEMAP_ROUTE}>{SITEMAP_ROUTE}</a>
            <span className="sitemap-meta">Sitemap XML con todas las URLs indexables y sus imágenes.</span>
          </li>
          <li className="sitemap-item">
            <a href="/robots.txt">/robots.txt</a>
            <span className="sitemap-meta">Reglas de rastreo y referencia al sitemap.</span>
          </li>
          <li className="sitemap-item">
            <a href="/llms.txt">/llms.txt</a>
            <span className="sitemap-meta">Resumen del perfil profesional para asistentes de IA.</span>
          </li>
        </ul>
      </section>

      {/* Datos estructurados del mapa del sitio */}
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            '@id': absoluteUrl(MAP_ROUTE) + '#mapa',
            url: absoluteUrl(MAP_ROUTE),
            name: 'Mapa del sitio — Keiber Paez',
            description: `Índice completo del portafolio y de los ${projects.length} sistemas construidos.`,
            inLanguage: 'es',
            isPartOf: { '@id': absoluteUrl('/') + '#website' },
            about: { '@id': absoluteUrl('/') + '#person' },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            '@id': absoluteUrl(MAP_ROUTE) + '#itemlist',
            name: 'Todos los casos de estudio',
            numberOfItems: projects.length,
            itemListElement: projects.map((project, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              url: absoluteUrl(PROJECT_ROUTE(project.id)),
              name: project.title,
            })),
          },
          breadcrumbJsonLd([
            { name: 'Inicio', path: '/' },
            { name: 'Mapa del sitio', path: MAP_ROUTE },
          ]),
        ]}
      />
    </main>
  )
}
