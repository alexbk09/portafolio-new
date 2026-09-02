/**
 * Datos para la sección orientada a empleadores y reclutadores.
 * Declara qué rol busca, qué stack domina y cómo rinde cuentas.
 */
export interface HireRole {
  /** Título del rol al que aspira */
  role: string
  /** Modalidad y seniority */
  modality: string
  /** Qué aporta en ese rol */
  highlight: string
}

export const hireRoles: HireRole[] = [
  {
    role: 'Senior Full Stack Developer',
    modality: 'Remoto · Tiempo completo',
    highlight:
      'Construyo y mantengo productos completos: desde la base de datos hasta la interfaz, con calidad de producción desde el primer sprint.',
  },
  {
    role: 'Technical Lead',
    modality: 'Remoto · Tiempo completo',
    highlight:
      'Lidereo equipos de hasta 8 personas: code reviews, arquitectura, estándares y entrega a tiempo sin sacrificar salud del código.',
  },
  {
    role: 'Consultor de arquitectura',
    modality: 'Remoto · Part-time / Acuerdo',
    highlight:
      'Apoyo puntual en diseño de sistemas, optimización de plataformas legacy o rescate de proyectos con deuda técnica crítica.',
  },
]

/** Lo que el empleador obtiene al trabajar conmigo */
export const hireBenefits: string[] = [
  'Comunicación directa en español e inglés técnico, con reportes de avance semanales',
  'Disponible en horario superpuesto con USA / LATAM / Europa',
  'Autonomía total: entrego features completas de principio a fin sin micro-management',
  'Código mantenible documentado: otro dev puede continuar sin curva de aprendizaje',
  'Manejo de plataformas legacy y modernización progresiva sin romper producción',
  'Testing de lo crítico y despliegue continuo con Docker / AWS / Vercel',
]

export const hireProof = {
  /** Repositorio visible de código */
  githubPublic: 'github.com/alexbk09',
  /** Ejemplo concreto de proyecto en vivo */
  liveDemo: 'Services — plataforma de agendamiento',
  liveDemoUrl: 'https://services-three-psi.vercel.app/',
  /** Proyecto cerrado bajo contrato real */
  contractWork: '15+ sistemas privados en producción bajo contrato B2B',
}