/**
 * llms.txt generado dinámicamente (Route Handler) y publicado en /llms.txt.
 * Estándar emergente para que los asistentes de IA entiendan el sitio:
 * quién es el autor, qué servicios ofrece, qué sistemas puede comprar
 * cualquier persona en cualquier país y dónde están los casos de estudio.
 *
 * Se genera desde la misma fuente de datos que la UI (siteConfig, services,
 * projects, licenses): nunca queda desactualizado ni con el dominio quemado.
 */
import { NextResponse } from 'next/server'
import { projects } from '@/lib/data/projects'
import { getProjectAcquisition } from '@/lib/data/licenses'
import { services } from '@/lib/data/services'
import { siteConfig } from '@/lib/data/site'
import { skills } from '@/lib/data/skills'
import { formatUsd } from '@/lib/config/commerce'
import {
  absoluteUrl,
  MAP_ROUTE,
  PROJECT_ROUTE,
  SITEMAP_ROUTE,
  SITE_NAME,
  SITE_URL,
} from '@/lib/config/seo'

/** El contenido cambia poco: se regenera una vez al día sin coste de build */
export const revalidate = 86400

export function GET() {
  // Sistemas propios comprables (licencia / SaaS / código fuente)
  const licensed = projects
    .map((project) => ({ project, acquisition: getProjectAcquisition(project.id) }))
    .filter((entry) => entry.acquisition?.kind === 'license')

  // Sistemas de cliente replicables a medida
  const customBuilt = projects.filter(
    (project) => getProjectAcquisition(project.id)?.kind === 'custom'
  )

  const lines: string[] = [
    `# ${SITE_NAME}`,
    '',
    `> Portafolio profesional. ${siteConfig.availability}. ${siteConfig.openTo}.`,
    '',
    '## Quien soy',
    siteConfig.bio,
    '',
    '## Stack principal',
    skills.map((skill) => skill.name).join(' · '),
    '',
    '## Servicios',
    ...services.map((service, index) => `${index + 1}. ${service.title} — ${service.contractType}.`),
    '',
    '## Sistemas disponibles para comprar con licencia (cualquier pais)',
    ...licensed.map(({ project, acquisition }) => {
      const price =
        typeof acquisition?.priceFromUsd === 'number'
          ? ` Desde ${formatUsd(acquisition.priceFromUsd)}.`
          : ''
      return `- ${absoluteUrl(PROJECT_ROUTE(project.id))} — ${project.title}: ${acquisition?.summary} Modelos: ${acquisition?.models.join(', ')}. Entrega en ${acquisition?.deliveryDays} dias.${price}`
    }),
    '',
    '## Sistemas construidos a medida (se replican con tu marca)',
    ...customBuilt.map(
      (project) =>
        `- ${absoluteUrl(PROJECT_ROUTE(project.id))} — ${project.title}: ${getProjectAcquisition(project.id)?.summary}`
    ),
    '',
    '## Todos los casos de estudio indexables',
    ...projects.map(
      (project) =>
        `- ${absoluteUrl(PROJECT_ROUTE(project.id))} — ${project.title}: ${project.description}`
    ),
    '',
    '## Recursos para buscadores',
    `- Sitemap XML: ${absoluteUrl(SITEMAP_ROUTE)}`,
    `- Mapa del sitio: ${absoluteUrl(MAP_ROUTE)}`,
    '- robots.txt: ' + absoluteUrl('/robots.txt'),
    '',
    '## Contacto',
    `Web: ${SITE_URL} · Email: ${siteConfig.contactEmail} · GitHub: ${siteConfig.socials.github} · LinkedIn: ${siteConfig.socials.linkedin} · WhatsApp: ${siteConfig.whatsapp.phone}`,
    '',
    '## Disponibilidad',
    `${siteConfig.availability} · ${siteConfig.openTo}`,
    '',
  ]

  return new NextResponse(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
    },
  })
}
