/**
 * sitemap.xml generado dinámicamente por Next.js (App Router).
 * Se publica en /sitemap.xml (declarado en robots.txt) e incluye:
 *  - Portada, índice de proyectos y mapa del sitio (rutas de navegación).
 *  - Cada caso de estudio individual con sus imágenes, lo que genera un
 *    image sitemap y habilita aparecer también en Google Imágenes.
 *
 * `lastModified` usa la fecha real de revisión del contenido
 * (CONTENT_LAST_MODIFIED) en lugar de fechas inventadas: un lastmod
 * honesto es la señal que Google respeta para re-rastrear una URL.
 */
import type { MetadataRoute } from 'next'
import { absoluteUrl, CONTENT_LAST_MODIFIED, MAP_ROUTE, PROJECT_ROUTE } from '@/lib/config/seo'
import { projects } from '@/lib/data/projects'
import { getProjectAcquisition } from '@/lib/data/licenses'
import type { Project } from '@/lib/types/portfolio'

/**
 * Imágenes indexables de un proyecto (portada + galería) en URL absoluta
 * y sin duplicados, para no repetir entradas en el image sitemap.
 * Se codifican los espacios porque Google exige URLs válidas en el XML.
 */
function projectImages(project: Project): string[] {
  const candidates = [project.mainImage, ...(project.galleryImages ?? [])].filter(Boolean)
  return Array.from(new Set(candidates)).map((image) => encodeURI(absoluteUrl(image)))
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Fecha real de la última revisión de contenido del sitio
  const lastModified = new Date(CONTENT_LAST_MODIFIED)

  // Portada: máxima prioridad de la marca personal
  const home: MetadataRoute.Sitemap[number] = {
    url: absoluteUrl('/'),
    lastModified,
    changeFrequency: 'weekly',
    priority: 1,
  }

  // Índice de proyectos (hub de casos de estudio)
  const proyectosIndex: MetadataRoute.Sitemap[number] = {
    url: absoluteUrl('/proyectos'),
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.9,
  }

  // Mapa del sitio HTML: hub de enlazado interno y descubrimiento de URLs
  const mapaDelSitio: MetadataRoute.Sitemap[number] = {
    url: absoluteUrl(MAP_ROUTE),
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.6,
  }

  // Cada caso de estudio -> URL profunda indexable con sus imágenes.
  // Los sistemas comprables priorizan por intención comercial de búsqueda.
  const proyectosItems: MetadataRoute.Sitemap = projects.map((project) => ({
    url: absoluteUrl(PROJECT_ROUTE(project.id)),
    lastModified,
    changeFrequency: 'monthly',
    priority: getProjectAcquisition(project.id)?.kind === 'license' ? 0.8 : 0.7,
    images: projectImages(project),
  }))

  return [home, proyectosIndex, mapaDelSitio, ...proyectosItems]
}
