/**
 * ═══════════════════════════════════════════════════════════════
 *  Ofertas de adquisición por proyecto (venta de licencias)
 * ═══════════════════════════════════════════════════════════════
 *  Cada caso de estudio declara cómo puede adquirirlo un interesado:
 *   - `license` → sistema propio del autor, disponible como licencia,
 *     SaaS o código fuente, para cualquier país.
 *   - `custom`  → sistema entregado bajo contrato privado de un cliente;
 *     no se revende, pero el autor construye una versión equivalente.
 *
 *  Regla del proyecto: la UI nunca inventa precios ni condiciones.
 *  Todo se resuelve aquí y en `lib/config/commerce.ts`.
 */
import {
  DEFAULT_DELIVERY_DAYS,
  LICENSE_MODELS,
  LICENSE_PRICE_FROM_USD,
  OWNED_SYSTEM_MODELS,
  SUPPORT_DAYS,
  WORLDWIDE_REGION_LABEL,
} from '@/lib/config/commerce'

/** Tipo de adquisición disponible para un sistema */
export type AcquisitionKind = 'license' | 'custom'

/** Condiciones comerciales publicadas de un sistema */
export interface ProjectAcquisition {
  /** Modelo comercial: licencia propia o desarrollo a medida */
  kind: AcquisitionKind
  /** Título del bloque comercial en la página del caso */
  headline: string
  /** Resumen de una línea con la promesa comercial */
  summary: string
  /** Modelos de compra disponibles (licencia única, SaaS, código fuente, a medida) */
  models: string[]
  /** Precio mínimo en USD. Ausente = cotización personalizada */
  priceFromUsd?: number
  /** Qué recibe el comprador de forma concreta */
  includes: string[]
  /** Días hábiles de entrega/activación */
  deliveryDays: number
  /** Cobertura geográfica de la venta */
  coverage: string
  /** Soporte incluido tras la entrega */
  support: string
  /** Texto del botón principal de conversión */
  ctaLabel: string
}

/** Cobertura estándar de toda venta: global y remota */
const WORLDWIDE_COVERAGE = WORLDWIDE_REGION_LABEL

/** Soporte estándar incluido en cada entrega */
const STANDARD_SUPPORT = `${SUPPORT_DAYS} días de soporte técnico post-entrega`

/**
 * Construye la oferta de un sistema propio listo para venderse como
 * producto: licencia única, suscripción SaaS o cesión del código fuente.
 * Centraliza los valores comunes para no repetir configuración.
 */
function licenseOffer(config: {
  summary: string
  includes: string[]
  priceFromUsd?: number
}): ProjectAcquisition {
  return {
    kind: 'license',
    headline: 'Comprar este sistema (licencia / SaaS)',
    summary: config.summary,
    models: [...OWNED_SYSTEM_MODELS],
    priceFromUsd: config.priceFromUsd ?? LICENSE_PRICE_FROM_USD,
    includes: config.includes,
    deliveryDays: DEFAULT_DELIVERY_DAYS,
    coverage: WORLDWIDE_COVERAGE,
    support: STANDARD_SUPPORT,
    ctaLabel: 'Solicitar licencia',
  }
}

/**
 * Construye la oferta de un sistema desarrollado bajo contrato privado:
 * el código pertenece al cliente, pero el autor replica el mismo
 * resultado adaptado a otro negocio.
 */
function customBuild(config: {
  summary: string
  includes: string[]
  ctaLabel?: string
}): ProjectAcquisition {
  return {
    kind: 'custom',
    headline: 'Construir este sistema para tu negocio',
    summary: config.summary,
    models: [LICENSE_MODELS.CUSTOM],
    includes: config.includes,
    deliveryDays: DEFAULT_DELIVERY_DAYS,
    coverage: WORLDWIDE_COVERAGE,
    support: STANDARD_SUPPORT,
    ctaLabel: config.ctaLabel ?? 'Cotizar mi versión',
  }
}

/* ═══════════════════════════════════════════════════════════════
 *  Ofertas publicadas (clave = id del proyecto en `projects.ts`)
 * ═══════════════════════════════════════════════════════════════ */

export const projectAcquisitions: Record<string, ProjectAcquisition> = {
  zonadehobbies: licenseOffer({
    summary:
      'Plataforma de afiliación AliExpress lista para operar: importa productos por API, arma fichas con scraping y mide cada clic hacia el enlace de afiliado. Se vende como licencia y se instala en tu dominio en cualquier país.',
    includes: [
      'Código fuente completo (Next.js + Supabase + TypeScript)',
      'Motor de importación por API de AliExpress y generación de enlaces de afiliado',
      'Módulo de scraping que extrae fotos, descripciones y arma fichas con FAQ',
      'Tracker de clics con producto, categoría, país y dispositivo',
      'Dashboard de comisiones estimadas y top de productos',
      'Páginas pSEO indexables por producto y categoría',
      'Panel administrativo con roles y permisos por usuario',
      'Instalación, dominio, HTTPS y manual de operación',
    ],
  }),

  services: licenseOffer({
    summary:
      'Sistema de agendamiento y cobro de servicios: tus clientes reservan solos con calendario en tiempo real y tú controlas ingresos, clientes y ocupamiento. Disponible para estéticas, consultorios, talleres y gimnasios de cualquier país.',
    includes: [
      'Código fuente completo (React + Supabase + TypeScript)',
      'Calendario interactivo con bloqueo de horas ocupadas',
      'Catálogo de servicios con precios y duración',
      'Gestión de clientes con historial de citas y pagos',
      'Notificaciones automáticas de recordatorio',
      'Dashboard de KPIs de ingresos y ocupamiento',
      'Instalación, dominio, HTTPS y manual de operación',
    ],
  }),

  'amaxtech-sales': customBuild({
    summary:
      'Construyo la página de ventas de tu software: propuesta de valor, showcase del producto, planes de precios, manual de usuario, FAQ y CTAs de WhatsApp, optimizada para SEO y conversión.',
    includes: [
      'Estructura de landing orientada a conversión y SEO',
      'Showcase visual de tu plataforma y módulos',
      'Tabla de planes de precios y modalidad de licencia',
      'Manual de usuario enlazado y FAQ del comprador',
      'Formulario de contacto, WhatsApp flotante y analytics',
    ],
    ctaLabel: 'Quiero mi página de ventas',
  }),

  'ilumax': licenseOffer({
    summary:
      'Tienda inteligente con asistente de IA que vende en lenguaje natural: busca productos, consulta stock, compara precios en dos monedas y agrega al carrito. Incluye panel administrativo, roles y dashboard de KPIs.',
    includes: [
      'Código fuente completo (Next.js + Supabase + Vercel AI SDK)',
      'Asistente conversacional conectado al catálogo real con agent tools',
      'Panel administrativo con productos, solicitudes y roles',
      'Dashboard de KPIs de ventas, top productos y stock bajo',
      'Precio dual (USD/BS) y catálogo en vivo',
      'Opcional: integración de pasarela de pago y facturación',
      'Instalación, dominio, HTTPS y manual de operación',
    ],
    // Precio publicado en la landing comercial de AmaxTech ($850 licencia única)
    priceFromUsd: 850,
  }),

  'akimax-pet': licenseOffer({
    summary:
      'Plataforma veterinaria integral: catálogo de productos y servicios, precio dual USD/BS, agenda de peluquería y consultas, historial de mascotas, facturación y caja. Lista para instalarse con tu marca en cualquier país.',
    includes: [
      'Código fuente completo del sistema',
      'Catálogo de productos y servicios con carrito',
      'API de precio dual (USD y moneda local) actualizado en vivo',
      'Calendario de servicios para peluquería y consultas',
      'Historial clínico de mascotas y expediente por paciente',
      'Facturación y control de caja del día',
      'Instalación, dominio, HTTPS y manual de operación',
    ],
  }),

  dantojos: licenseOffer({
    summary:
      'Configurador de pedidos por opciones con precio en tiempo real que envía el resumen formateado a tu WhatsApp. Ideal para pastelerías, floristerías, muebles y cualquier negocio de productos personalizables.',
    includes: [
      'Código fuente completo (React + Tailwind)',
      'Configurador paso a paso con opciones y precios',
      'Cálculo de total en tiempo real según la selección',
      'Envío del pedido formateado a WhatsApp en un clic',
      'Catálogo editable por archivo, sin base de datos',
      'Instalación, dominio, HTTPS y manual de operación',
    ],
  }),

  ecommerce: licenseOffer({
    summary:
      'E-commerce completo con inventario, facturación y pagos internacionales: códigos QR por producto, alertas de stock, reportes en tiempo real y CRM de clientes. Entregado con código fuente y listo para operar.',
    includes: [
      'Código fuente completo (Laravel + React + MySQL)',
      'Escaparate, carrito y checkout con pasarelas de pago',
      'Inventario con control por códigos QR y alertas de stock',
      'Facturación electrónica y reportes en tiempo real',
      'CRM de clientes y procesamiento asíncrono con Jobs',
      'Instalación, dominio, HTTPS y manual de operación',
    ],
  }),

  portafolio: licenseOffer({
    summary:
      'Plantilla de portafolio profesional en Next.js 16 con arquitectura atómica, casos de estudio indexables, SEO técnico, JSON-LD y formulario de contacto funcional. Personalizable con tu marca y tu contenido.',
    includes: [
      'Código fuente completo (Next.js 16 + React 19 + TypeScript)',
      'Diseño atómico con secciones y animaciones listas',
      'Páginas de casos de estudio indexables y JSON-LD SEO',
      'sitemap.xml, robots.txt y metadata Open Graph',
      'Formulario de contacto con envío SMTP real',
      'Personalización de marca, contenido y despliegue',
    ],
  }),

  'portafolio-laravel': customBuild({
    summary:
      'Portafolio con backend Laravel propio y microservicio de IA desacoplado en FastAPI. Lo construyo con tu contenido y tu asistente, si necesitas un backend real en lugar de datos estáticos.',
    includes: [
      'API Laravel + MySQL para servir tu contenido',
      'Microservicio de IA (FastAPI) separado y escalable',
      'Proxy de comunicación entre servicios sin acoplamiento',
      'Despliegue y documentación técnica',
    ],
  }),

  aytec: customBuild({
    summary:
      'Plataforma médica entregada bajo contrato privado a un centro de salud. Construyo la misma solución para tu clínica: historias clínicas, órdenes, pacientes y permisos por rol con tus flujos reales.',
    includes: [
      'Historias clínicas y órdenes médicas digitales',
      'Gestión de pacientes con búsqueda e historial',
      'Roles y permisos granulares por perfil',
      'Reportes e indicadores del centro de salud',
    ],
  }),

  triangle: customBuild({
    summary:
      'Bolsa de empleo entregada bajo contrato privado. Replico el sistema para tu mercado laboral o tu nicho sectorial: empresas publican ofertas y candidatos aplican con seguimiento de estados.',
    includes: [
      'Publicación de ofertas con filtros y requisitos',
      'Perfiles de candidatos y postulaciones',
      'Panel de administración y moderación',
      'Base de datos optimizada para búsquedas rápidas',
    ],
  }),

  'safe-clinic': customBuild({
    summary:
      'Panel clínico con integración SOAP entregado a un cliente privado. Lo adapto a tu operación: centraliza la administración de clínicas, clientes e integraciones con otros sistemas de salud.',
    includes: [
      'Centralización de la operación diaria de la clínica',
      'Integración por servicios SOAP con terceros',
      'Administración de clientes y sedes',
      'Reportes operativos para la dirección',
    ],
  }),

  'audit-salud': customBuild({
    summary:
      'Auditoría y validación de archivos RIPS (JSON) para plataformas médicas, con cache en Redis para alto volumen. Disponible para clínicas, EPS y proveedores de salud que necesitan cumplir sin rechazos.',
    includes: [
      'Validación de archivos RIPS en formato JSON',
      'Administración de historias clínicas y cuentas médicas',
      'Estados por EPS y control de rechazos',
      'Cache con Redis para volumen alto de validaciones',
    ],
    ctaLabel: 'Cotizar para mi clínica',
  }),

  core360: customBuild({
    summary:
      'Intranet corporativa que reemplaza correos y hojas de cálculo. La construyo con tu estructura: directorio de empleados, seguimiento de proyectos y administración de recursos internos.',
    includes: [
      'Directorio de empleados con perfiles y roles',
      'Seguimiento de proyectos con responsables y fechas',
      'Administración de recursos compartidos',
      'Acceso por roles y auditoría de cambios',
    ],
  }),

  'pet-clinic': customBuild({
    summary:
      'Sistema veterinario con agenda sincronizada a Google Calendar, historial médico e inventario. Lo implemento para tu clínica con tus servicios, precios y flujo de facturación.',
    includes: [
      'Agenda sincronizada con Google Calendar',
      'Historial médico y registro de pacientes',
      'Catálogo de servicios y facturación',
      'Control de inventario de medicamentos',
    ],
  }),

  'pago-facturas': customBuild({
    summary:
      'SaaS de facturación electrónica entregado bajo contrato. Construyo la emisión, recepción y administración de comprobantes fiscales adaptada a la normativa de tu país, con almacenamiento y timbrado asíncrono.',
    includes: [
      'Emisión, recepción y administración de facturas',
      'Integración con APIs de facturación y pasarelas de pago',
      'Almacenamiento en AWS S3 y timbrado asíncrono con Lambda',
      'Reportes contables y exportación para el contador',
    ],
    ctaLabel: 'Cotizar facturación electrónica',
  }),

  'geo-referencia': customBuild({
    summary:
      'Gestión geográfica de sucursales, clientes, rutas y zonas de cobertura con Google Maps. Ideal para logística, delivery y equipos comerciales en terreno.',
    includes: [
      'Mapas interactivos con edición de puntos',
      'Geocodificación de dirección a coordenadas',
      'Definición y validación de zonas de cobertura',
      'Cache de ubicaciones con Redis para rutas frecuentes',
    ],
  }),

  habilitacion: customBuild({
    summary:
      'Plataforma de encuestas de clima laboral con anonimato por diseño, dashboard de métricas por equipo y cobro de suscripciones. La implemento para tu área de Recursos Humanos.',
    includes: [
      'Encuestas dinámicas configurables sin código',
      'Anonimización por diseño para respuestas honestas',
      'Dashboard de clima, engagement y tendencias por equipo',
      'Suscripciones y cobros con pasarela de pago',
    ],
    ctaLabel: 'Cotizar para mi empresa',
  }),
}

/**
 * Devuelve las condiciones comerciales publicadas de un proyecto.
 * Retorna `undefined` cuando el sistema no ofrece adquisición.
 */
export function getProjectAcquisition(projectId: string): ProjectAcquisition | undefined {
  return projectAcquisitions[projectId]
}

/** Indica si un proyecto es un producto propio comprable hoy como licencia */
export function isPurchasable(projectId: string): boolean {
  return projectAcquisitions[projectId]?.kind === 'license'
}

/**
 * Lista de sistemas propios comprables (licencia/SaaS/código).
 * Se usa para construir el ItemList de Product/Offer en JSON-LD.
 */
export function getPurchasableProjects(): { projectId: string; acquisition: ProjectAcquisition }[] {
  return Object.entries(projectAcquisitions)
    .filter(([, acquisition]) => acquisition.kind === 'license')
    .map(([projectId, acquisition]) => ({ projectId, acquisition }))
}
