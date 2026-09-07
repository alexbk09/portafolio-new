/**
 * Organismo: pie de página global del layout raiz.
 * Todas las rutas (home, /proyectos, detalle) lo heredan.
 */
import { siteConfig } from '@/lib/data/site'

export default function SiteFooter() {
  return (
    <footer className="site-footer section-shell">
      <span>© {new Date().getFullYear()} {siteConfig.fullName}</span>
      <span className="footer-note">
        <span className="status-dot" /> Diseñado y desarrollado con cuidado
      </span>
      <a href="#top">Volver arriba ↑</a>
    </footer>
  )
}
