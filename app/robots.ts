/**
 * robots.txt generado dinámicamente por Next.js (App Router).
 * Permite indexar páginas de contenido (incluye /proyectos y detalles),
 * da reglas focalizadas a crawlers de IA y referencia el sitemap.
 * Se genera en: /robots.txt
 */
import type { MetadataRoute } from 'next'
import { absoluteUrl } from '@/lib/config/seo'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/proyectos/'],
        disallow: ['/api/', '/_next/', '/videos/', '/images/', '/manifest.webmanifest'],
      },
      // Reglas específicas para crawlers de IA conocidos (permitir indexar contenido)
      {
        userAgent: 'GPTBot',
        allow: ['/', '/proyectos/', '/llms.txt'],
        disallow: ['/api/'],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: ['/', '/proyectos/', '/llms.txt'],
        disallow: ['/api/'],
      },
      {
        userAgent: 'ClaudeBot',
        allow: ['/', '/proyectos/', '/llms.txt'],
        disallow: ['/api/'],
      },
      {
        userAgent: 'PerplexityBot',
        allow: ['/', '/proyectos/', '/llms.txt'],
        disallow: ['/api/'],
      },
      {
        userAgent: 'Google-Extended',
        allow: ['/', '/proyectos/', '/llms.txt'],
        disallow: ['/api/'],
      },
    ],
    sitemap: absoluteUrl('/sitemap.xml'),
    host: absoluteUrl(''),
  }
}