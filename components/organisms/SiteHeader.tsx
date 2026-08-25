/**
 * Organismo: header del sitio con navegación y menú móvil.
 */
'use client'

import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { siteConfig } from '@/lib/data/site'

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <a href="#top" className="brand" aria-label="Inicio del portafolio">
        <span className="brand-mark">/</span> {siteConfig.brand}
      </a>
      <nav className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Navegación principal">
        <a href="#work" onClick={() => setMenuOpen(false)}>Proyectos</a>
        <a href="#experience" onClick={() => setMenuOpen(false)}>Experiencia</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contacto</a>
        <a href="/cv.pdf" onClick={() => setMenuOpen(false)} target="_blank" rel="noreferrer">CV</a>
      </nav>
      <a className="header-cta" href="#contact">
        Hablemos <ArrowUpRight size={15} />
      </a>
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
    </header>
  )
}