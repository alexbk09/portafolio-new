/**
 * Twitter Card image (1200×675) generada con ImageResponse.
 * Se sirve automáticamente en /twitter-image y se referencia
 * desde metadata.twitter.images en layout.tsx.
 */
import { ImageResponse } from 'next/og'
import { siteConfig } from '@/lib/data/site'

export const alt =
  'Keiber Paez — Senior Full Stack Developer · Laravel, Node.js, React y Vue. 7+ años, 15+ sistemas en producción.'

export const size = { width: 1200, height: 675 }
export const contentType = 'image/png'

export default async function TwitterImage() {
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
          right: -160,
          top: -200,
          width: 680,
          height: 680,
          borderRadius: '50%',
          background: 'rgba(183,243,107,0.14)',
          filter: 'blur(90px)',
        }}
      />

      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', padding: 64 }}>
        {/* Marca */}
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

        {/* Mensaje central */}
        <div
          style={{
            marginTop: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}
        >
          <span
            style={{
              fontSize: 54,
              lineHeight: 1.1,
              fontWeight: 700,
              letterSpacing: '-0.04em',
              color: '#eef1f6',
              maxWidth: 940,
            }}
          >
            Senior Full Stack Developer — construyo software que{' '}
            <span style={{ color: '#b7f36b' }}>genera dinero o ahorra tiempo</span> a negocios reales.
          </span>
          <span style={{ fontSize: 26, color: '#8893a5' }}>
            Laravel · Node.js · React · Vue · Supabase · AWS — 7+ años, 15+ sistemas en producción
          </span>
        </div>
      </div>
    </div>,
    { ...size }
  )
}