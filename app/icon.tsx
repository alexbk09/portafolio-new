/**
 * Favicon del sitio generado con ImageResponse (Next.js OG).
 * Se sirve automáticamente en /icon y el <head> enlaza el asset
 * con su hash de caché gestionado por Next.js.
 */
import { ImageResponse } from 'next/og'

export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#b7f36b',
        borderRadius: '20%',
        fontFamily: 'sans-serif',
        fontWeight: 900,
      }}
    >
      <span style={{ color: '#10140a', fontSize: 42, lineHeight: 1 }}>K</span>
    </div>,
    { ...size }
  )
}