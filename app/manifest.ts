/**
 * Web App Manifest (manifest.webmanifest) generado por Next.js.
 * Permite instalar el sitio como PWA y define nombre, iconos y colores.
 */
import type { MetadataRoute } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/config/seo'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: 'Keiber Paez',
    description:
      'Portafolio profesional de Keiber Paez, Senior Full Stack Developer. Laravel, Node.js, React y Vue.',
    start_url: '/',
    display: 'standalone',
    background_color: '#090b10',
    theme_color: '#090b10',
    orientation: 'portrait-primary',
    lang: 'es',
    categories: ['technology', 'portfolio', 'developer'],
    icons: [
      {
        src: `${SITE_URL}/icon`,
        sizes: '64x64',
        type: 'image/png',
      },
      {
        src: `${SITE_URL}/apple-icon`,
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: `${SITE_URL}/opengraph-image`,
        sizes: '1200x630',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
}