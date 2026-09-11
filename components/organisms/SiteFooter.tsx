/**
 * Organismo: pie de página global del layout raiz.
 * Todas las rutas (home, /proyectos, detalle) lo heredan.
 */
import Link from 'next/link'
import { siteConfig } from '@/lib/data/site'
import { MAP_ROUTE, SITEMAP_ROUTE } from '@/lib/config/seo'

export default function SiteFooter() {
  return (
    <footer className="site-footer section-shell">
      {/* Enlaces de descubrimiento: proyectos, licencias y recursos para buscadores */}
      <nav className="footer-nav" aria-label="Explorar el sitio">
        <Link href="/proyectos">Proyectos</Link>
        <Link href="/#contact">Contacto</Link>
        <Link href={MAP_ROUTE}>Mapa del sitio</Link>
        <a href={SITEMAP_ROUTE}>sitemap.xml</a>
      </nav>
      <span>© {new Date().getFullYear()} {siteConfig.fullName}</span>
      <span className="footer-note">
        <span className="status-dot" /> Diseñado y desarrollado con cuidado
      </span>
      <a href="#top">Volver arriba ↑</a>
    </footer>
  )
}
