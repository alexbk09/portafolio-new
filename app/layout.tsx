/**
 * Layout raíz del portafolio.
 * La metadata global (Open Graph, Twitter, robots, canonical) se genera en
 * el <head>. Las imágenes sociales (icon, apple-icon, opengraph-image,
 * twitter-image) las gestiona Next.js automáticamente por file conventions,
 * evitando duplicados y generación innecesaria en cada visita.
 *
 * Los datos estructurados JSON-LD se renderizan estáticos en el HTML servido
 * (sin Suspense) para que cualquier crawler los lea sin ejecutar JavaScript.
 */
import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import WhatsAppFloatButton from '@/components/atoms/WhatsAppFloatButton'
import JsonLd from '@/components/atoms/JsonLd'
import {
  absoluteUrl,
  AUTHOR_NAME,
  DEFAULT_LOCALE,
  GOOGLE_SITE_VERIFICATION,
  META_DESCRIPTION,
  personJsonLd,
  profilePageJsonLd,
  SITE_NAME,
  SITE_URL,
  webSiteJsonLd,
} from '@/lib/config/seo'

/* Fuentes con display swap para evitar FOIT y mejorar LCP */
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', display: 'swap' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap' })

/* ─── Metadata estática global (SSR en el <head>) ─────────── */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${AUTHOR_NAME}`,
  },
  description: META_DESCRIPTION,
  keywords: [
    'Senior Full Stack Developer',
    'Desarrollador Full Stack Venezuela',
    'Desarrollador Full Stack LATAM',
    'Laravel Developer',
    'Node.js Developer',
    'React Developer',
    'Vue.js Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'Desarrollador freelance remoto',
    'E-commerce developer',
    'SaaS developer',
    'Plataformas médicas',
    'Facturación electrónica',
    'Ingeniero de software',
    'Technical Lead remoto',
    'Contratar desarrollador web',
    'Keiber Paez',
    'Alex BK',
  ],
  authors: [{ name: AUTHOR_NAME, url: SITE_URL }],
  creator: AUTHOR_NAME,
  publisher: AUTHOR_NAME,
  category: 'tecnología',
  alternates: {
    canonical: absoluteUrl('/'),
    languages: {
      'es-ES': absoluteUrl('/'),
    },
  },
  openGraph: {
    type: 'website',
    locale: DEFAULT_LOCALE.toLowerCase().replace('_', '-'),
    alternateLocale: ['es-ES', 'es-LA', 'en-US'],
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: META_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  manifest: '/manifest.webmanifest',
  formatDetection: {
    email: true,
    address: true,
    telephone: false,
  },
  ...(GOOGLE_SITE_VERIFICATION && {
    verification: { google: GOOGLE_SITE_VERIFICATION },
  }),
  other: {
    'geo.region': 'VE',
    'geo.placename': 'Venezuela',
  },
}

/* ─── Viewport (separado en Next 14+) ─────────────────────── */
export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0f1a' },
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        {children}
        {/* Datos estructurados estáticos: Person + WebSite + ProfilePage */}
        <JsonLd data={personJsonLd()} />
        <JsonLd data={webSiteJsonLd()} />
        <JsonLd data={profilePageJsonLd()} />
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <WhatsAppFloatButton />
      </body>
    </html>
  )
}