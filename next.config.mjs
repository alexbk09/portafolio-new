/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  compress: true,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        // Peticiones clásicas de /favicon.ico → icono generado por icon.tsx
        source: '/favicon.ico',
        destination: '/icon',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        // Seguridad para toda la app
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
        ],
      },
      {
        // Caché en CDN/browser: assets versionados con hash son inmutables
        source: '/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // Imágenes de proyectos con optimización desactivada → caché 30 días
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=31536000' },
        ],
      },
      {
        // Imágenes/videos generados: permite recaché corto pero válido
        source: '/videos/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400' },
        ],
      },
    ]
  },
}

export default nextConfig