/**
 * sitemap.xml generado dinámicamente por Next.js (App Router).
 * Incluye la portada y URLs absolutas usando SITE_URL.
 * Se genera en: /sitemap.xml
 */
import type { MetadataRoute } from 'next'
import { absoluteUrl } from '@/lib/config/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  // Sitio de una sola página (single-page portfolio): solo la raíz.
  // Al agregar nuevas rutas (ej: /proyectos/[slug]) agrégalas aquí.
  return [
    {
      url: absoluteUrl('/'),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}