/**
 * Molécula: bloque comercial de adquisición de un sistema.
 * Comunica —sin lógica de datos propia— que el sistema puede comprarse
 * (licencia única, SaaS o código fuente) o construirse a medida, con
 * precio, plazo de entrega, cobertura global y CTA de conversión.
 */
import { ArrowUpRight, BadgeCheck, CheckCircle2, Globe2, ShoppingCart } from 'lucide-react'
import type { Project } from '@/lib/types/portfolio'
import type { ProjectAcquisition } from '@/lib/data/licenses'
import { CONTACT_PATH, formatUsd } from '@/lib/config/commerce'
import { buildWhatsAppLink, siteConfig } from '@/lib/data/site'
import WhatsAppIcon from '@/components/atoms/WhatsAppIcon'

interface ProjectAcquisitionCardProps {
  /** Proyecto cuyo sistema se ofrece */
  project: Project
  /** Condiciones comerciales publicadas del sistema */
  acquisition: ProjectAcquisition
}

export default function ProjectAcquisitionCard({
  project,
  acquisition,
}: ProjectAcquisitionCardProps) {
  /** Los sistemas propios se compran; los de cliente se replican a medida */
  const isLicense = acquisition.kind === 'license'

  // Mensaje de WhatsApp prellenado según intención de compra o cotización
  const whatsappMessage = isLicense
    ? `Hola Keiber, quiero comprar la licencia de "${project.title}" (${acquisition.models.join(' o ')}). ¿Me envías condiciones y formas de pago?`
    : `Hola Keiber, vi el sistema "${project.title}" y quiero cotizar una versión a medida para mi negocio.`
  const whatsappUrl = buildWhatsAppLink(siteConfig.whatsapp.phone, whatsappMessage)

  return (
    <section
      className={`acquisition-card ${isLicense ? 'is-license' : 'is-custom'}`}
      aria-labelledby={`acquisition-title-${project.id}`}
    >
      {/* Señales de compra: disponibilidad, cobertura mundial y entrega */}
      <div className="acquisition-badges">
        <span className="acquisition-badge">
          {isLicense ? <ShoppingCart size={11} /> : <BadgeCheck size={11} />}
          {isLicense ? 'Disponible para compra' : 'Desarrollo a medida'}
        </span>
        <span className="acquisition-badge">
          <Globe2 size={11} /> {acquisition.coverage}
        </span>
        <span className="acquisition-badge">
          <BadgeCheck size={11} /> Entrega en {acquisition.deliveryDays} días
        </span>
      </div>

      {/* Titular comercial + precio */}
      <div className="acquisition-head">
        <div>
          <h2 id={`acquisition-title-${project.id}`}>{acquisition.headline}</h2>
          <p className="acquisition-summary">{acquisition.summary}</p>
        </div>
        {typeof acquisition.priceFromUsd === 'number' && (
          <p className="acquisition-price">
            <span>Desde</span>
            <strong>{formatUsd(acquisition.priceFromUsd)}</strong>
            <span>Pago único o suscripción</span>
          </p>
        )}
      </div>

      {/* Modelos de compra disponibles */}
      <div className="tag-list acquisition-models">
        {acquisition.models.map((model) => (
          <span key={model}>{model}</span>
        ))}
      </div>

      <h3 className="acquisition-subtitle">Qué incluye la entrega</h3>
      <ul className="acquisition-includes">
        {acquisition.includes.map((item) => (
          <li key={item}>
            <CheckCircle2 size={15} />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <p className="acquisition-support">{acquisition.support}</p>

      {/* CTAs de conversión */}
      <div className="acquisition-actions">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="button button-whatsapp"
          aria-label={`${acquisition.ctaLabel} de ${project.title}`}
        >
          <WhatsAppIcon size={14} /> {acquisition.ctaLabel}
        </a>
        <a href={CONTACT_PATH} className="button button-ghost">
          Enviar requerimiento <ArrowUpRight size={14} />
        </a>
      </div>
    </section>
  )
}
