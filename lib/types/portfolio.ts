/**
 * Tipos compartidos para el portafolio.
 * Mantienen los datos estáticos tipados y seguros.
 */

/** Categorías de habilidades técnicas */
export type SkillCategory = 'Frontend' | 'Backend' | 'Arquitectura & DevOps' | 'Integraciones & APIs'

/** Colores de acento disponibles para chips y tarjetas */
export type AccentColor = 'violet' | 'lime' | 'cyan' | 'orange' | 'yellow' | 'blue' | 'green' | 'red' | 'purple' | 'gray'

/** Habilidad técnica individual */
export interface Skill {
  /** Nombre de la habilidad */
  name: string
  /** Categoría a la que pertenece */
  category: SkillCategory
  /** Color de acento visual */
  color: AccentColor
}

/** Necesidad del cliente que el sistema resuelve */
export interface PainPoint {
  /** Descripción corta de la necesidad */
  label: string
}

/** Feature o funcionalidad del sistema */
export interface Feature {
  /** Nombre de la funcionalidad */
  title: string
  /** Descripción de la funcionalidad */
  description: string
}

/** Problema o debilidad resuelta en el sistema */
export interface Improvement {
  /** Descripción de la mejora lograda */
  description: string
}

/** Detalle técnico del sistema */
export interface TechDetail {
  /** Nombre de la tecnología o módulo */
  name: string
  /** Descripción de cómo se usa */
  role: string
}

/** Proyecto / sistema construido */
export interface Project {
  /** Identificador único (slug) */
  id: string
  /** Nombre del proyecto */
  title: string
  /** Descripción corta para la tarjeta */
  description: string
  /** Descripción larga para el modal */
  longDescription: string
  /** Imagen principal (ruta estática) */
  mainImage: string
  /** Imagen de respaldo tipo texto (para proyectos sin screenshot) */
  fallbackVisual: string
  /** Lista de tecnologías separada por coma para la tarjeta */
  technologies: string
  /** URL pública del demo (vacío si no aplica) */
  url: string
  /** URL del repositorio (vacío si es código cerrado) */
  githubUrl: string
  /** Video demo (ruta estática o vacío) */
  videoUrl?: string
  /** Imágenes adicionales del sistema */
  galleryImages?: string[]
  /** Color de acento de la tarjeta */
  accent: AccentColor
  /** Cliente / empresa para la que se construyó */
  client: string
  /** Rol que se desempeñó en el proyecto */
  role: string
  /** Año de entrega */
  year: string
  /** Necesidad que resolvió */
  challenge: string
  /** Solución implementada */
  solution: string
  /** Problemas/debilidades que se resolvieron */
  improvements: Improvement[]
  /** Necesidades del cliente cubiertas */
  painPoints: PainPoint[]
  /** Funcionalidades principales */
  features: Feature[]
  /** Detalles técnicos y arquitectónicos */
  techDetails: TechDetail[]
  /** Es código abierto o privado */
  isOpenSource: boolean
}

/** Experiencia laboral */
export interface ExperienceItem {
  /** Periodo de tiempo */
  year: string
  /** Rol desempeñado */
  role: string
  /** Empresa / cliente */
  company: string
  /** Detalle de logros */
  detail: string
}

/** Proyecto del formulario de contacto */
export interface ContactFormData {
  /** Nombre de quien escribe */
  name: string
  /** Correo de quien escribe */
  email: string
  /** Mensaje */
  message: string
}