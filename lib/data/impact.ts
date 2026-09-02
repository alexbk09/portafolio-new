/**
 * Resultados medibles entregados a clientes.
 * Cada dato proviene de proyectos/experiencia reales del portafolio.
 * Fuente única para la sección "Resultados que he entregado".
 */
export interface ImpactMetric {
  /** Valor numérico destacado */
  value: string
  /** Descripción del resultado */
  description: string
  /** Origen verificable (sistema o experiencia) */
  source: string
}

export const impactMetrics: ImpactMetric[] = [
  {
    value: '70%',
    description: 'menos tiempo en agendar servicios',
    source: 'Plataforma veterinaria con calendario visual',
  },
  {
    value: 'De horas a segundos',
    description: 'la validación de archivos RIPS de facturación médica',
    source: 'AuditSalud — optimización de plataforma legacy',
  },
  {
    value: '0',
    description: 'citas duplicadas en la agenda del negocio',
    source: 'Services — agendamiento en tiempo real',
  },
  {
    value: '+20%',
    description: 'de velocidad en la entrega de sprints liderando 8 personas',
    source: 'Netred — liderazgo técnico',
  },
  {
    value: '15h',
    description: 'semanales ahorradas al automatizar flujos operativos',
    source: 'North Delivery — automatización',
  },
  {
    value: '3 → 1',
    description: 'sistemas separados unificados en una sola plataforma (inventario + facturación + CRM)',
    source: 'E-commerce — plataforma unificada',
  },
  {
    value: '≈0',
    description: 'pedidos mal entendidos con configurador visual paso a paso',
    source: 'Dantojos — pastelería artesanal',
  },
  {
    value: '100%',
    description: 'documentos fiscales inmutables almacenados sin riesgo de pérdida',
    source: 'PagoDeFacturas — facturación electrónica',
  },
]