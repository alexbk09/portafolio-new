/**
 * Datos estáticos de habilidades técnicas.
 * Fuente única de verdad para la sección de skills.
 */
import type { Skill, SkillCategory } from '@/lib/types/portfolio'

export const skills: Skill[] = [
  // ── Frontend ─────────────────────────────
  { name: 'HTML/CSS', category: 'Frontend', color: 'orange' },
  { name: 'JavaScript', category: 'Frontend', color: 'yellow' },
  { name: 'TypeScript', category: 'Frontend', color: 'blue' },
  { name: 'React', category: 'Frontend', color: 'blue' },
  { name: 'Next.js', category: 'Frontend', color: 'blue' },
  { name: 'Vue.js', category: 'Frontend', color: 'green' },
  { name: 'Angular', category: 'Frontend', color: 'red' },
  { name: 'AngularJS', category: 'Frontend', color: 'red' },
  { name: 'Bootstrap', category: 'Frontend', color: 'purple' },
  { name: 'Tailwind', category: 'Frontend', color: 'blue' },
  { name: 'Material UI', category: 'Frontend', color: 'green' },
  { name: 'Vite', category: 'Frontend', color: 'yellow' },

  // ── Backend ──────────────────────────────
  { name: 'PHP/Laravel', category: 'Backend', color: 'purple' },
  { name: 'Node.js', category: 'Backend', color: 'green' },
  { name: 'Python', category: 'Backend', color: 'blue' },
  { name: 'MySQL/PostgreSQL', category: 'Backend', color: 'blue' },
  { name: 'CodeIgniter', category: 'Backend', color: 'green' },
  { name: 'Supabase', category: 'Backend', color: 'green' },
  { name: 'MongoDB', category: 'Backend', color: 'green' },
  { name: 'Express', category: 'Backend', color: 'gray' },

  // ── Herramientas ─────────────────────────
  { name: 'Git', category: 'Herramientas', color: 'red' },
  { name: 'Docker', category: 'Herramientas', color: 'blue' },
  { name: 'AWS', category: 'Herramientas', color: 'orange' },
  { name: 'AWS S3', category: 'Herramientas', color: 'blue' },
  { name: 'Lambda', category: 'Herramientas', color: 'red' },
  { name: 'Redis', category: 'Herramientas', color: 'red' },
  { name: 'Firebase', category: 'Herramientas', color: 'orange' },
  { name: 'Linux', category: 'Herramientas', color: 'yellow' },
  { name: 'WordPress', category: 'Herramientas', color: 'blue' },
  { name: 'Postman', category: 'Herramientas', color: 'orange' },
  { name: 'Figma', category: 'Herramientas', color: 'green' },
  { name: 'Cursor', category: 'Herramientas', color: 'gray' },
  { name: 'VSCode', category: 'Herramientas', color: 'blue' },
  { name: 'Google', category: 'Herramientas', color: 'red' },
  { name: 'PayPal', category: 'Herramientas', color: 'blue' },
  { name: 'Stripe', category: 'Herramientas', color: 'green' },
  { name: 'Shopify', category: 'Herramientas', color: 'purple' },
  { name: 'Jira', category: 'Herramientas', color: 'red' },
  { name: 'WhatsApp', category: 'Herramientas', color: 'green' },
  { name: 'Slack', category: 'Herramientas', color: 'blue' },
  { name: 'Trello', category: 'Herramientas', color: 'red' },
  { name: 'Notion', category: 'Herramientas', color: 'gray' },
  { name: 'JWT', category: 'Herramientas', color: 'gray' },
  { name: 'LocalStorage', category: 'Herramientas', color: 'orange' },
  { name: 'Jobs', category: 'Herramientas', color: 'gray' },
  { name: 'Clean Code', category: 'Herramientas', color: 'red' },
  { name: 'SOLID', category: 'Herramientas', color: 'green' },
  { name: 'GitFlow', category: 'Herramientas', color: 'orange' },
  { name: 'Code Review', category: 'Herramientas', color: 'gray' },

  // ── APIs e integraciones ─────────────────
  { name: 'Google Calendar API', category: 'Herramientas', color: 'blue' },
  { name: 'Google Maps API', category: 'Herramientas', color: 'green' },
  { name: 'Wompi API', category: 'Herramientas', color: 'blue' },
  { name: 'IA (FastAPI)', category: 'Herramientas', color: 'gray' },
  { name: 'API de facturación', category: 'Herramientas', color: 'red' },
  { name: 'API de pagos', category: 'Herramientas', color: 'green' },
  { name: 'API de geolocalización', category: 'Herramientas', color: 'blue' },
  { name: 'API SOAP', category: 'Herramientas', color: 'green' },

  // ── IA ───────────────────────────────────
  { name: 'Claude code', category: 'IA', color: 'blue' },
  { name: 'Antigravity', category: 'IA', color: 'green' },
  { name: 'AI Copilot', category: 'IA', color: 'gray' },
  { name: 'ChatGPT', category: 'IA', color: 'red' },
  { name: 'Deep Seek', category: 'IA', color: 'blue' },
  { name: 'Agentes', category: 'IA', color: 'gray' },
  { name: 'Skills', category: 'IA', color: 'green' },
]

/** Agrupa skills por categoría respetando el orden visual deseado */
export const skillCategories: SkillCategory[] = ['Frontend', 'Backend', 'Herramientas', 'IA']

/** Helper: obtiene los skills de una categoría */
export const getSkillsByCategory = (category: SkillCategory): Skill[] =>
  skills.filter((skill) => skill.category === category)