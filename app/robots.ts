/**
 * robots.txt generado dinámicamente por Next.js (App Router).
 * Se publica en /robots.txt.
 *
 * Criterio SEO:
 *  - Se permite rastrear TODO el contenido público, incluidos los assets de
 *    /_next/ (CSS y JS) y las imágenes/videos de los casos de estudio.
 *    Bloquearlos impedía que Google renderizara la página correctamente y que
 *    indexara las capturas de los sistemas en Google Imágenes.
 *  - Solo se bloquean los endpoints internos (/api/) y el manifest PWA.
 *  - Reglas explícitas de bienvenida para los crawlers de IA, que alimentan
 *    las respuestas generativas (GEO/AEO) donde ya se cita el portafolio.
 */
import type { MetadataRoute } from 'next'
import { absoluteUrl, MAP_ROUTE, SITEMAP_ROUTE } from '@/lib/config/seo'

/** Rutas públicas autorizadas explícitamente para todos los rastreadores */
const PUBLIC_ALLOW = ['/', '/proyectos/', MAP_ROUTE]

/** Rutas internas que nunca deben rastrearse */
const PRIVATE_DISALLOW = ['/api/', '/manifest.webmanifest']

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: PUBLIC_ALLOW,
        disallow: PRIVATE_DISALLOW,
      },
      // Crawlers de IA: mismo contenido público más el resumen estructurado
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'ClaudeBot', 'PerplexityBot', 'Google-Extended'],
        allow: [...PUBLIC_ALLOW, '/llms.txt'],
        disallow: PRIVATE_DISALLOW,
      },
    ],
    sitemap: absoluteUrl(SITEMAP_ROUTE),
    host: absoluteUrl(''),
  }
}
