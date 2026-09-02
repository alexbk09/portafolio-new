/**
 * Icono para dispositivos Apple (apple-touch-icon).
 * Generado con ImageResponse en /apple-icon.
 */
import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#b7f36b',
        borderRadius: '18%',
        fontFamily: 'sans-serif',
        fontWeight: 900,
      }}
    >
      <span style={{ color: '#10140a', fontSize: 130, lineHeight: 1 }}>K</span>
    </div>,
    { ...size }
  )
}