/**
 * ═══════════════════════════════════════════════════════════════
 *  Configuración comercial central (venta de licencias de sistemas)
 * ═══════════════════════════════════════════════════════════════
 *  Fuente única de verdad para todo lo monetario del portafolio:
 *  moneda, cobertura geográfica, modelos de licencia, plazos de
 *  entrega y precio base. Ningún componente de UI debe quemar
 *  precios, países ni plazos: todo se ajusta aquí o por variable
 *  de entorno.
 *
 *  ─── AJUSTAR PRECIO BASE ─────────────────────────────────────
 *  Vercel → Settings → Environment Variables:
 *     NEXT_PUBLIC_LICENSE_PRICE_FROM_USD=490
 *
 *  El precio por proyecto puede sobrescribirse en
 *  `lib/data/licenses.ts` (campo `priceFromUsd`).
 */

/** Moneda única de venta: permite cobrar internacionalmente sin fricción */
export const COMMERCE_CURRENCY = 'USD'
 
/** Precio mínimo de referencia de una licencia (USD). Sobreescribible por entorno */
const envPriceFrom = Number(process.env.NEXT_PUBLIC_LICENSE_PRICE_FROM_USD)
export const LICENSE_PRICE_FROM_USD =
  Number.isFinite(envPriceFrom) && envPriceFrom > 0 ? envPriceFrom : 490

/** Días de validez de una oferta publicada (schema.org exige priceValidUntil en Offer) */
export const PRICE_VALIDITY_DAYS = 30

/** Días hábiles por defecto para entregar y activar una licencia */
export const DEFAULT_DELIVERY_DAYS = 7

/** Días de soporte técnico incluidos tras la entrega */
export const SUPPORT_DAYS = 30

/** Cobertura comercial: todo el mundo, sin restricción por país */
export const WORLDWIDE_REGION = 'Worldwide'
export const WORLDWIDE_REGION_LABEL = 'Cualquier país · 100% remoto'

/** Modelos de adquisición disponibles para los sistemas propios */
export const LICENSE_MODELS = {
  /** Pago único por el derecho de uso indefinido */
  SINGLE: 'Licencia única',
  /** Cuota mensual con hosting y actualizaciones incluidas */
  SAAS: 'Suscripción SaaS',
  /** Entrega del código fuente del sistema completo */
  SOURCE: 'Código fuente + licencia',
  /** Adaptación a medida del sistema para un negocio específico */
  CUSTOM: 'Adaptación a medida',
} as const

/** Modelos que solo existen cuando el sistema es propio (no de un cliente) */
export const OWNED_SYSTEM_MODELS: readonly string[] = [
  LICENSE_MODELS.SINGLE,
  LICENSE_MODELS.SAAS,
  LICENSE_MODELS.SOURCE,
]

/** Ruta interna de contacto usada por los CTA de compra */
export const CONTACT_PATH = '/#contact'

/**
 * Formatea un monto en la moneda de venta (USD) sin decimales.
 * Se usa en UI y en JSON-LD para mantener un formato idéntico.
 */
export function formatUsd(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: COMMERCE_CURRENCY,
    maximumFractionDigits: 0,
  }).format(amount)
}

/**
 * Fecha ISO (YYYY-MM-DD) hasta la que es válida la oferta publicada.
 * Google descarta ofertas sin `priceValidUntil`; se calcula, no se quema.
 */
export function priceValidUntil(from: Date = new Date()): string {
  const until = new Date(from.getTime() + PRICE_VALIDITY_DAYS * 24 * 60 * 60 * 1000)
  return until.toISOString().slice(0, 10)
}
