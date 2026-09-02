/**
 * JsonLd: componente atómico para inyectar datos estructurados
 * JSON-LD (schema.org) en el <body>. Cada objeto se serializa
 * a JSON válido y se embebe en un <script type="application/ld+json">.
 *
 * Uso:
 *   <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Person', ... }} />
 */
interface JsonLdProps {
  /** Objeto o array de objetos schema.org serializable */
  data: Record<string, unknown> | Record<string, unknown>[]
}

export default function JsonLd({ data }: JsonLdProps) {
  const json = JSON.stringify(data)
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
}