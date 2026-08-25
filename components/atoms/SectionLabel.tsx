/**
 * Componente atómico: encabezado de sección con eyebrow, título y descripción.
 */
interface SectionLabelProps {
  /** Texto pequeño sobre el título */
  eyebrow: string
  /** Título principal de la sección */
  title: string
  /** Descripción de apoyo */
  copy: string
}

export default function SectionLabel({ eyebrow, title, copy }: SectionLabelProps) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-copy">{copy}</p>
    </div>
  )
}