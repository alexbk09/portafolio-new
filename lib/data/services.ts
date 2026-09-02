/**
 * Datos estáticos de servicios profesionales ofrecidos.
 * Fuente única para la sección "Cómo puedo ayudarte".
 */
export interface ServiceOffering {
  /** Nombre corto del servicio */
  title: string
  /** Descripción orientada a resultados para el cliente */
  description: string
  /** Para quién es este servicio */
  idealFor: string
  /** Entregables concretos */
  deliverables: string[]
  /** Tipo de contrato sugerido */
  contractType: string
  /** Icono lucide para el servicio */
  iconName: 'Code2' | 'Wrench' | 'Users' | 'GraduationCap'
  /** Color de acento */
  accent: string
}

export const services: ServiceOffering[] = [
  {
    title: 'Desarrollo de productos digitales',
    description:
      'Transformo tu idea o proceso manual en una plataforma web lista para usarse: e-commerce con doble moneda, agendamiento de citas, SaaS, paneles administrativos, facturación electrónica y sistemas a la medida para tu operación.',
    idealFor:
      'Negocios que hoy dependen de hojas de cálculo, WhatsApp y procesos manuales que quieren operar en una sola plataforma.',
    deliverables: [
      'Plataforma web completa funcional (frontend + backend + base de datos)',
      'Panel administrativo para gestionar tu negocio sin código',
      'Configuración de dominio, deploy y HTTPS',
      'Manual de usuario en español',
      'Soporte post-entrega incluido',
    ],
    contractType: 'Proyecto cerrado · desde 4 a 10 semanas',
    iconName: 'Code2',
    accent: 'lime',
  },
  {
    title: 'Optimización de sistemas existentes',
    description:
      '¿Tienes un sistema lento, lleno de bugs o imposible de mantener? Reestructuro bases de datos, optimizo consultas, modernizo frontends legacy, agrego cache, integro pagos y lo dejo estable y rápido para producción.',
    idealFor:
      'Empresas con plataformas que funcionan mal, se caen frecuentemente o que ya nadie quiere tocar por miedo a romperlas.',
    deliverables: [
      'Auditoría técnica con diagnóstico de problemas',
      'Optimización de rendimiento (consultas, cache, colas)',
      'Corrección de bugs críticos con pruebas',
      'Documentación de arquitectura y deuda técnica',
      'Plan de mejora continua con prioridades',
    ],
    contractType: 'Consultoría + horas de desarrollo',
    iconName: 'Wrench',
    accent: 'cyan',
  },
  {
    title: 'Senior remoto para tu equipo',
    description:
      'Me integro a tu equipo de desarrollo existente como Senior Full Stack: code reviews, arquitectura, buenas prácticas, liderazgo técnico y desarrollo de features complejas sin que tengas que contratar un equipo nuevo.',
    idealFor:
      'Startups y empresas con equipo junior que necesitan acelerar entregas con calidad, sin perder control del producto.',
    deliverables: [
      'Desarrollo de features de alto impacto',
      'Code reviews y mentoría técnica al equipo',
      'Definición de arquitectura y estándares',
      'Implementación de testing y CI/CD',
      'Reporte semanal de avance',
    ],
    contractType: 'Contrato B2B mensual · medio tiempo o tiempo completo',
    iconName: 'Users',
    accent: 'violet',
  },
  {
    title: 'Consultoría de producto y arquitectura',
    description:
      '¿Estás por construir algo grande y no sabes por dónde empezar? Analizo tu idea, defino la arquitectura correcta, estimo el esfuerzo real y te dejo un roadmap claro antes de invertir en desarrollo.',
    idealFor:
      'Fundadores con ideas claras pero sin certeza técnica del costo, stack, tiempo o riesgos de su proyecto.',
    deliverables: [
      'Análisis de viabilidad técnica y de costos',
      'Arquitectura propuesta documentada',
      'Estimación de tiempos realista por fases',
      'Recomendación de stack según el tipo de producto',
      'Sesión de planificación con fundadores',
    ],
    contractType: 'Sesiones por horas o paquete de consultoría',
    iconName: 'GraduationCap',
    accent: 'orange',
  },
]