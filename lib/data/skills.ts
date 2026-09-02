/**
 * Datos estáticos de habilidades técnicas.
 * Fuente única de verdad para la sección de skills.
 *
 * Nota: se mantienen solo skills con peso técnico real.
 * Herramientas cotidianas (editores, chat, gestión) no se listan
 * porque diluyen el mensaje. IA se resume en una línea.
 */
import type { Skill, SkillCategory } from '@/lib/types/portfolio'

export const skills: Skill[] = [
  // ── Frontend ─────────────────────────────
  { name: 'TypeScript', category: 'Frontend', color: 'blue' },
  { name: 'JavaScript', category: 'Frontend', color: 'yellow' },
  { name: 'React', category: 'Frontend', color: 'blue' },
  { name: 'Next.js', category: 'Frontend', color: 'blue' },
  { name: 'Vue.js', category: 'Frontend', color: 'green' },
  { name: 'Angular', category: 'Frontend', color: 'red' },
  { name: 'Vite', category: 'Frontend', color: 'yellow' },
  { name: 'Tailwind CSS', category: 'Frontend', color: 'blue' },
  { name: 'HTML/CSS', category: 'Frontend', color: 'orange' },
  { name: 'Bootstrap', category: 'Frontend', color: 'purple' },

  // ── Backend ──────────────────────────────
  { name: 'PHP/Laravel', category: 'Backend', color: 'purple' },
  { name: 'Node.js', category: 'Backend', color: 'green' },
  { name: 'Express', category: 'Backend', color: 'gray' },
  { name: 'Python', category: 'Backend', color: 'blue' },
  { name: 'FastAPI', category: 'Backend', color: 'gray' },
  { name: 'MySQL', category: 'Backend', color: 'blue' },
  { name: 'PostgreSQL', category: 'Backend', color: 'blue' },
  { name: 'MongoDB', category: 'Backend', color: 'green' },
  { name: 'Supabase', category: 'Backend', color: 'green' },
  { name: 'Redis', category: 'Backend', color: 'red' },

  // ── Arquitectura & DevOps ────────────────
  { name: 'Arquitectura (SOLID/Clean)', category: 'Arquitectura & DevOps', color: 'blue' },
  { name: 'Docker', category: 'Arquitectura & DevOps', color: 'blue' },
  { name: 'AWS (S3/Lambda)', category: 'Arquitectura & DevOps', color: 'orange' },
  { name: 'Colas & Jobs', category: 'Arquitectura & DevOps', color: 'gray' },
  { name: 'Git/GitFlow', category: 'Arquitectura & DevOps', color: 'red' },
  { name: 'Code Review', category: 'Arquitectura & DevOps', color: 'gray' },
  { name: 'Linux', category: 'Arquitectura & DevOps', color: 'yellow' },

  // ── Integraciones & APIs ─────────────────
  { name: 'Google Calendar API', category: 'Integraciones & APIs', color: 'blue' },
  { name: 'Google Maps API', category: 'Integraciones & APIs', color: 'green' },
  { name: 'Facturación electrónica', category: 'Integraciones & APIs', color: 'purple' },
  { name: 'APIs SOAP/REST', category: 'Integraciones & APIs', color: 'green' },
  { name: 'Pasarelas de pago', category: 'Integraciones & APIs', color: 'blue' },
  { name: 'JWT Auth', category: 'Integraciones & APIs', color: 'gray' },
  { name: 'IA (asistida por agentes)', category: 'Integraciones & APIs', color: 'blue' },
]

/** Agrupa skills por categoría respetando el orden visual deseado */
export const skillCategories: SkillCategory[] = [
  'Frontend',
  'Backend',
  'Arquitectura & DevOps',
  'Integraciones & APIs',
]

/** Helper: obtiene los skills de una categoría */
export const getSkillsByCategory = (category: SkillCategory): Skill[] =>
  skills.filter((skill) => skill.category === category)
