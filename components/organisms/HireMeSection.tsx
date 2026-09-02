/**
 * Organismo: sección orientada a empleadores y reclutadores.
 * Declara el rol que busca, qué aporta y cómo rinde cuentas.
 */
import { BriefcaseBusiness, CheckCircle2, ExternalLink, ArrowUpRight } from 'lucide-react'
import { hireRoles, hireBenefits, hireProof } from '@/lib/data/hireMe'
import { siteConfig } from '@/lib/data/site'
import Reveal from '@/components/atoms/Reveal'
import SectionLabel from '@/components/atoms/SectionLabel'

export default function HireMeSection() {
  return (
    <section id="hire" className="hire-section section-shell">
      <Reveal>
        <SectionLabel
          eyebrow="Reclutadores y empleadores"
          title="Ideal para tu equipo remoto."
          copy="Si buscas un Senior Full Stack o Technical Lead que desde el primer mes entregue en producción, sin ramp-up de 6 meses y con estándares de calidad que protegen tu inversión, este espacio es para ti."
        />
      </Reveal>

      <div className="hire-grid">
        {/* Columna: roles buscados */}
        <div className="hire-roles">
          {hireRoles.map((hire, index) => (
            <Reveal key={hire.role} delay={index * 0.07} className="hire-role">
              <div className="hire-role-head">
                <BriefcaseBusiness size={17} />
                <div>
                  <h3>{hire.role}</h3>
                  <span className="hire-modality">{hire.modality}</span>
                </div>
              </div>
              <p>{hire.highlight}</p>
            </Reveal>
          ))}
        </div>

        {/* Columna: qué obtiene el empleador */}
        <div className="hire-proof">
          <h3>Lo que obtienes al trabajar conmigo</h3>
          <ul className="hire-benefits">
            {hireBenefits.map((benefit) => (
              <li key={benefit}>
                <CheckCircle2 size={15} />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <p className="hire-update">
            <span className="status-dot" />
            {siteConfig.availability}
          </p>
          <p className="hire-actions">
            <a href="#contact" className="button button-primary">
              Invitarme a tu proceso <ArrowUpRight size={14} />
            </a>
            <a href="/cv.pdf" download className="text-link">
              Descargar CV PDF
            </a>
          </p>
          <small className="hire-footnote">
            Prueba: <a href={hireProof.liveDemoUrl} target="_blank" rel="noreferrer">demo en vivo</a> ·{' '}
            <a href={siteConfig.socials.github} target="_blank" rel="noreferrer">
              código abierto <ExternalLink size={10} />
            </a>{' '}
            · {hireProof.contractWork}
          </small>
        </div>
      </div>
    </section>
  )
}