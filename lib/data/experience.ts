/**
 * Datos estáticos de experiencia laboral.
 * Fuente única de verdad para la sección de experiencia.
 */
import type { ExperienceItem } from '@/lib/types/portfolio'

export const experience: ExperienceItem[] = [
  {
    year: 'Feb 2023 — Actualidad',
    role: 'Senior Full Stack Developer · Consultor externo',
    company: 'Freelance / Startups de Latinoamérica',
    detail:
      'Diseño arquitecturas de alto tráfico, backends asíncronos con Node.js, paneles React e integraciones de pagos. También optimizo sistemas legacy en Laravel y automatizo operaciones con Python, Docker y AWS.',
  },
  {
    year: 'Ene 2022 — Ene 2023',
    role: 'Líder Técnico',
    company: 'Netred · Chile (Remoto)',
    detail:
      'Coordiné equipos frontend y backend de 8 personas, aceleré la entrega de sprints en un 20% e implementé Code Reviews, Clean Code, SOLID, GitFlow y entornos Dockerizados.',
  },
  {
    year: 'Ene 2019 — Dic 2021',
    role: 'Programador Web',
    company: 'North Delivery · Venezuela (Remoto)',
    detail:
      'Desarrollé plataformas administrativas y logísticas con PHP, MySQL, JavaScript, Tailwind y Bootstrap, automatizando flujos que ahorraron 15 horas semanales.',
  },
  {
    year: 'Ene 2016 — Ene 2019',
    role: 'Desarrollador de Software Junior',
    company: 'Electrocarp · Venezuela',
    detail:
      'Mantuve y estabilicé sistemas ERP internos construidos con PHP y MySQL, resolviendo incidencias críticas y mejorando el rendimiento de la plataforma.',
  },
]