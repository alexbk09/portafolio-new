/**
 * sitemap.xml generado dinámicamente por Next.js (App Router).
 * Incluye la portada, el índice de proyectos y cada caso de estudio
 * individual indexable. Se genera en: /sitemap.xml
 */
import type { MetadataRoute } from 'next'
import { absoluteUrl, PROJECT_ROUTE } from '@/lib/config/seo'
import { projects } from '@/lib/data/projects'

/** Año actual numérico para marcar lastModified de cada proyecto */
const CURRENT_YEAR = new Date().getFullYear()

export default function sitemap(): MetadataRoute.Sitemap {
  // Portada: máxima prioridad de la marca personal
  const home: MetadataRoute.Sitemap[number] = {
    url: absoluteUrl('/'),
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
  }

  // Índice de proyectos (hub de casos de estudio)
  const proyectosIndex: MetadataRoute.Sitemap[number] = {
    url: absoluteUrl('/proyectos'),
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }

  // Cada caso de estudio individual → URLs profundas indexables
  const proyectosItems: MetadataRoute.Sitemap = projects.map((project) => {
    const projectYear = parseInt(project.year, 10)
    const year = Number.isNaN(projectYear) ? CURRENT_YEAR : Math.min(projectYear, CURRENT_YEAR)
    return {
      url: absoluteUrl(PROJECT_ROUTE(project.id)),
      lastModified: new Date(`${year}-06-01`),
      changeFrequency: 'yearly',
      priority: 0.7,
    }
  })

  return [home, proyectosIndex, ...proyectosItems]
}