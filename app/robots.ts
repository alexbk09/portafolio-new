/**
 * robots.txt generado dinámicamente por Next.js (App Router).
 * Permite indexar todo, referencia el sitemap absoluto
 * y bloquea rutas de sistema (API).
 * Se genera en: /robots.txt
 */
import type { MetadataRoute } from 'next'
import { absoluteUrl } from '@/lib/config/seo'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/videos/'],
      },
    ],
    sitemap: absoluteUrl('/sitemap.xml'),
    host: absoluteUrl(''),
  }
}