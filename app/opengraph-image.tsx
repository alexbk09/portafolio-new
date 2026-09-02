/**
 * Imagen Open Graph (1200×630) generada dinámicamente con
 * Next.js ImageResponse. Se sirve en /opengraph-image.
 * La fuente la inyecta ImageResponse (por defecto) evitando
 * binarios en el repo; el peso/estilo se controla por CSS.
 */
import { ImageResponse } from 'next/og'
import { siteConfig } from '@/lib/data/site'

export const alt =
  'Keiber Paez — Senior Full Stack Developer · Laravel, Node.js, React y Vue. 7+ años, 15+ sistemas en producción.'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        background: '#090b10',
        color: '#eef1f6',
        fontFamily: 'sans-serif',
      }}
    >
      {/* Fondo cuadrícula sutil */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Luz ambiental */}
      <div
        style={{
          position: 'absolute',
          right: -180,
          top: -180,
          width: 620,
          height: 620,
          borderRadius: '50%',
          background: 'rgba(183,243,107,0.14)',
          filter: 'blur(90px)',
        }}
      />

      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', padding: 70 }}>
        {/* Marca / eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div
            style={{
              width: 42,
              height: 42,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              background: '#b7f36b',
              color: '#10140a',
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            K
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.02em' }}>
              {siteConfig.fullName}
            </span>
            <span style={{ fontSize: 20, color: '#b7f36b' }}>{siteConfig.title}</span>
          </div>
        </div>

        {/* Texto principal */}
        <div
          style={{
            marginTop: 'auto',
            maxWidth: 900,
            fontSize: 56,
            lineHeight: 1.08,
            fontWeight: 700,
            letterSpacing: '-0.04em',
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          E-commerce, SaaS y plataformas <span style={{ color: '#b7f36b' }}>que funcionan en producción.</span>
        </div>

        {/* Stack */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 22 }}>
          <span
            style={{
              fontSize: 18,
              color: '#161d14',
              background: '#b7f36b',
              padding: '8px 16px',
              borderRadius: 99,
              fontWeight: 600,
            }}
          >
            Laravel
          </span>
          {['Node.js', 'React', 'Vue'].map((tech) => (
            <span
              key={tech}
              style={{
                fontSize: 18,
                border: '1px solid rgba(255,255,255,0.18)',
                padding: '8px 16px',
                borderRadius: 99,
                color: '#c7d0dd',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: 44,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: '#8893a5',
          }}
        >
          <span style={{ fontSize: 22, color: 'inherit' }}>
            7+ años · 15+ sistemas en producción · LATAM & Global
          </span>
          <span style={{ fontSize: 22, fontWeight: 600, color: '#eef1f6' }}>
            Disponible para contratación remota
          </span>
        </div>
      </div>
    </div>,
    { ...size }
  )
}