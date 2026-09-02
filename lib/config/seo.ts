/**
 * ═══════════════════════════════════════════════════════════════
 *  Configuración SEO central del portafolio
 * ═══════════════════════════════════════════════════════════════
 *  Fuente única para:
 *   - URL canónica / metadataBase
 *   - Open Graph y Twitter Card
 *   - sitemap.xml y robots.txt
 *   - Datos estructurados JSON-LD (schema.org)
 *
 *  ─── CAMBIAR DOMINIO ─────────────────────────────────────────
 *  Opción A (recomendada): variable de entorno en el deploy:
 *     Vercel → Settings → Environment Variables
 *     NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
 *
 *  Opción B: reemplazar el fallback de abajo.
 */
import { siteConfig } from '@/lib/data/site'
import { skills } from '@/lib/data/skills'
import type { Project } from '@/lib/types/portfolio'

/* ─── URL pública ─────────────────────────────────────────── */

/** URL base de producción (sin barra final). Se sobreescribe con NEXT_PUBLIC_SITE_URL */
const envSiteUrl = process.env.NEXT_PUBLIC_SITE_URL
export const SITE_URL = (
  envSiteUrl && envSiteUrl.trim() !== ''
    ? envSiteUrl
    : 'https://portafolio-new-jet.vercel.app'
).replace(/\/+$/, '')

/** Convierte una ruta local en URL absoluta */
export function absoluteUrl(path: string = '/'): string {
  if (/^https?:\/\//.test(path)) return path
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

/* ─── Identidad y nombres ─────────────────────────────────── */

export const SITE_NAME = 'Keiber Paez | Senior Full Stack Developer'
export const SITE_BRAND = siteConfig.brand
export const DEFAULT_LOCALE = 'es_VE'

export const META_DESCRIPTION =
  'Portafolio profesional de Keiber Paez, Senior Full Stack Developer con 7+ años y 15+ sistemas en producción. Laravel, Node.js, React y Vue para e-commerce, SaaS, plataformas médicas y facturación electrónica en LATAM. Disponible remoto.'

export const AUTHOR_NAME = siteConfig.fullName
export const AUTHOR_EMAIL = siteConfig.contactEmail

/* ─── Imágenes sociales ───────────────────────────────────── */

/** Ruta interna de la imagen Open Graph generada por Next.js (`app/opengraph-image.tsx`) */
export const OG_IMAGE_PATH = '/opengraph-image'
/** URL absoluta de la imagen Open Graph / Twitter Card */
export const OG_IMAGE = absoluteUrl(OG_IMAGE_PATH)
export const OG_IMAGE_WIDTH = 1200
export const OG_IMAGE_HEIGHT = 630

/* ─── Redes / perfiles vinculados (sameAs) ────────────────── */

export const SAME_AS = [siteConfig.socials.github, siteConfig.socials.linkedin]

/* ─── Verificación Google Search Console ──────────────────── */
/** Define en tu entorno: GOOGLE_SITE_VERIFICATION=xxxxxxxx */
export const GOOGLE_SITE_VERIFICATION = process.env.GOOGLE_SITE_VERIFICATION || ''

/* ═══════════════════════════════════════════════════════════
 *  JSON-LD / Schema.org builders
 * ═══════════════════════════════════════════════════════════ */

/**
 * Person principal (autor/desarrollador), referenciado por
 * sameAs, knowsAbout y las páginas de perfil del sitio.
 */
export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}#person`,
    name: AUTHOR_NAME,
    alternateName: 'Keiber Paez',
    url: SITE_URL,
    email: AUTHOR_EMAIL,
    image: OG_IMAGE,
    jobTitle: siteConfig.title,
    description: siteConfig.bio,
    knowsAbout: skills.map((skill) => skill.name),
    sameAs: SAME_AS,
  }
}

/**
 * WebSite raíz con referencia al autor (publisher).
 * Declara idioma y URL canónica absoluta.
 */
export function webSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}#website`,
    name: SITE_NAME,
    alternateName: siteConfig.brand,
    url: SITE_URL,
    inLanguage: DEFAULT_LOCALE.replace('_', '-'),
    publisher: { '@id': `${SITE_URL}#person` },
  }
}

/**
 * ProfilePage: página principal que describe al profesional.
 * Conecta el mainEntity Person al perfil para enriquecer rich results.
 */
export function profilePageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${SITE_URL}#profile`,
    url: SITE_URL,
    name: `${AUTHOR_NAME} — ${siteConfig.title}`,
    inLanguage: DEFAULT_LOCALE.replace('_', '-'),
    mainEntity: { '@id': `${SITE_URL}#person` },
  }
}

/**
 * ItemList de proyectos desarrollados (schema.org SoftwareApplication).
 * Expone el portafolio como casos de software enriquecidos para buscadores.
 */
export function softwareProjectsJsonLd(projects: Project[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Sistemas construidos por Keiber Paez',
    description:
      'E-commerce, SaaS, plataformas médicas y sistemas de gestión desarrollados en producción.',
    url: `${SITE_URL}/#proyectos`,
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => {
      const item: Record<string, unknown> = {
        '@type': 'SoftwareApplication',
        name: project.title,
        description: project.description.substring(0, 250),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        inLanguage: 'es',
        author: { '@id': `${SITE_URL}#person` },
        image: project.mainImage
          ? `${SITE_URL}${project.mainImage}`
          : OG_IMAGE,
        datePublished: project.year,
      }

      if (project.url) {
        item.url = project.url
      }
      if (project.githubUrl) {
        item.codeRepository = project.githubUrl
      }

      return { '@type': 'ListItem', position: index + 1, item }
    }),
  }
}
