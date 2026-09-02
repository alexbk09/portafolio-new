/**
 * Organismo: sección de resultados medibles.
 * Muestra el impacto real entregado a clientes (verificado en proyectos).
 */
'use client'

import { TrendingUp, ArrowDownRight } from 'lucide-react'
import { impactMetrics } from '@/lib/data/impact'
import Reveal from '@/components/atoms/Reveal'
import SectionLabel from '@/components/atoms/SectionLabel'

export default function ImpactSection() {
  return (
    <section id="impact" className="impact-section section-shell">
      <Reveal>
        <SectionLabel
          eyebrow="Resultados que he entregado"
          title="No digo que funciona: lo demuestro."
          copy="Cada métrica proviene de un sistema real que construí u optimicé y que está (o estuvo) en producción. Esta es la evidencia de cómo se ve mi trabajo cuando llega a manos del cliente."
        />
      </Reveal>

      <div className="impact-board">
        {impactMetrics.map((metric, index) => (
          <Reveal key={metric.value + metric.description} delay={(index % 4) * 0.06} className="impact-metric">
            <div className="impact-value">
              <TrendingUp size={15} />
              {metric.value}
            </div>
            <p>{metric.description}</p>
            <small className="impact-source">
              <ArrowDownRight size={12} />
              {metric.source}
            </small>
          </Reveal>
        ))}
      </div>

      {/* Llamado a replicar el mismo resultado */}
      <Reveal className="impact-cta-row">
        <p>
          ¿Quieres que tu operación tenga este tipo de resultados?
        </p>
        <a href="#contact" className="button button-primary">
          Hablemos de tu caso
        </a>
      </Reveal>
    </section>
  )
}