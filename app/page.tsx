'use client'

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Check, Code2, Globe2, Mail, Menu, Send, X } from 'lucide-react'

const stack = ['React', 'Next.js', 'Node.js', 'Laravel', 'PHP', 'Supabase', 'PostgreSQL', 'TypeScript']

const projects = [
  { mainImage: 'images/aytec.png', title: 'Aytec plataforma médica', description: 'Plataforma médica para crear historias, órdenes y gestionar pacientes, con módulos de administración, reportes, roles y permisos de usuarios.', technologies: 'Laravel, Vue.js, MySQL, Bootstrap, Firebase, JWT', url: '', githubUrl: '', accent: 'cyan' },
  { mainImage: 'images/triangle.png', title: 'Triangle', description: 'Plataforma para administración y captación de personal. Los usuarios buscan empleo y las empresas publican ofertas con cualidades, horarios, contratos y dirección.', technologies: 'Angular, Tailwind, Node.js, Express, MongoDB, JWT', url: '', githubUrl: '', accent: 'violet' },
  { mainImage: 'images/safeclinic.png', title: 'Safe Clinic', description: 'Panel de control para la administración de clínicas y clientes SOAP, diseñado para centralizar la operación diaria.', technologies: 'React, Tailwind, MySQL, JWT, Laravel', url: '', githubUrl: '', accent: 'lime' },
  { mainImage: 'images/auditsalud.png', title: 'AuditSalud', description: 'Actualización de una plataforma médica para administrar historias clínicas, cuentas médicas, estados, EPS y validar archivos RIPS en formato JSON.', technologies: 'React, Laravel, Redis, MySQL, JWT, Tailwind, APIs SOAP', url: '', githubUrl: '', accent: 'cyan' },
  { mainImage: 'images/core360.png', title: 'Core360', description: 'Plataforma de intranet para la gestión interna de la empresa: empleados, seguimiento de proyectos y administración de recursos.', technologies: 'Vue.js, MySQL, JWT, Laravel, Redis, Tailwind', url: '', githubUrl: '', accent: 'violet' },
  { mainImage: 'images/petclinic.png', title: 'Pet Clinic', description: 'Plataforma para clínicas veterinarias con pacientes, citas integradas con Google Calendar, servicios, historial médico, facturación e inventario.', technologies: 'Angular, Laravel, MySQL, JWT, Tailwind, Google Calendar API, Redis', url: '', githubUrl: '', accent: 'lime' },
  { mainImage: 'images/faktu.png', title: 'PagoDeFacturas', description: 'Plataforma para gestionar pagos y facturación electrónica, permitiendo a las empresas emitir, recibir y administrar facturas de forma eficiente.', technologies: 'AngularJS, Laravel, MySQL, JWT, Tailwind, AWS S3, Redis, Lambda, API de facturación, API de pagos', url: 'https://faktu.net', githubUrl: '', accent: 'cyan' },
  { mainImage: 'images/georeferencia.png', title: 'Geo-Referencia', description: 'Plataforma para la gestión de geolocalización y referencias geográficas, con integración de mapas y servicios especializados.', technologies: 'Vite, Laravel, MySQL, JWT, Tailwind, API de geolocalización, API Google Maps, Redis', url: '', githubUrl: '', accent: 'violet' },
  { mainImage: 'images/habilitacion.png', title: 'Habilitación', description: 'Plataforma web integral para medir la satisfacción laboral y el rendimiento de colaboradores mediante encuestas dinámicas, datos anonimizados y métricas para Recursos Humanos.', technologies: 'Vite, Laravel, MySQL, JWT, API de pagos Wompi', url: '', githubUrl: '', accent: 'lime' },
  { mainImage: 'images/ecommerce.png', title: 'E-commerce', description: 'Plataforma unificada para tiendas online, inventario y facturación en múltiples monedas. Incluye pagos internacionales, productos destacados, control por códigos QR, alertas de stock, reportes en tiempo real, facturación automática y gestión de clientes.', technologies: 'React, Laravel, MySQL, JWT, Tailwind, LocalStorage, IA, Jobs', url: '', githubUrl: '', accent: 'cyan' },
]

const experience = [
  { year: '2022 — Actualidad', role: 'Ingeniero Fullstack Senior', company: 'Independiente / Equipos de producto', detail: 'Lidero la arquitectura y entrega de productos web de alto tráfico, con foco en calidad, velocidad y una experiencia de desarrollo cuidada.' },
  { year: '2019 — 2022', role: 'Ingeniero Fullstack', company: 'Estudio de productos digitales', detail: 'Construí y lancé plataformas para clientes en comercio, SaaS y operaciones internas con React, Node.js y Laravel.' },
  { year: '2017 — 2019', role: 'Desarrollador PHP', company: 'Web Systems Co.', detail: 'Comencé cerca de la base de datos y la lógica de negocio, evolucionando desde aplicaciones Laravel hasta la responsabilidad integral de producto.' },
]

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion()
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 22 }} whileInView={reduce ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
}

function SectionLabel({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p className="section-copy">{copy}</p></div>
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) { event.preventDefault(); setSubmitted(true) }

  return <main>
    <div className="ambient-grid" aria-hidden="true" />
    <header className="site-header">
      <a href="#top" className="brand" aria-label="Inicio del portafolio"><span className="brand-mark">/</span> desarrollador.fullstack</a>
      <nav className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Navegación principal">
        <a href="#work" onClick={() => setMenuOpen(false)}>Proyectos</a><a href="#experience" onClick={() => setMenuOpen(false)}>Experiencia</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contacto</a>
      </nav>
      <a className="header-cta" href="#contact">Hablemos <ArrowUpRight size={15} /></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
    </header>

    <section id="top" className="hero section-shell">
      <div className="hero-copy"><Reveal><p className="eyebrow"><span className="status-dot" /> Disponible para proyectos seleccionados · 2026</p></Reveal><Reveal delay={0.08}><h1>Construyo productos digitales<br /><span>que se sienten inevitables.</span></h1></Reveal><Reveal delay={0.16}><p className="hero-bio">Ingeniero fullstack senior con más de 7 años convirtiendo requisitos complejos en software rápido, confiable y humano. Trabajo con PHP/Laravel, Node.js y React.</p></Reveal><Reveal delay={0.22} className="hero-actions"><a href="#contact" className="button button-primary">Iniciar una conversación <ArrowUpRight size={17} /></a><a href="#work" className="text-link">Ver proyectos destacados <span>↓</span></a></Reveal></div>
      <Reveal delay={0.18} className="hero-aside"><div className="code-window"><div className="window-bar"><span /><span /><span /><small>desarrollador.config.ts</small></div><pre><code><i>const</i> <b>desarrollador</b> = {'{'}{`\n`}  nombre: <em>&quot;Tu nombre&quot;</em>,{`\n`}  enfoque: [<em>&quot;producto&quot;</em>, <em>&quot;sistemas&quot;</em>],{`\n`}  experiencia: <strong>7</strong>,{`\n`}  estado: <em>&quot;construyendo&quot;</em>{`\n`}{'}'}</code></pre><div className="code-footer"><span><span className="status-dot" /> abierto a buenos retos</span><span>⌘ K</span></div></div></Reveal>
    </section>

    <section className="stack-strip section-shell" aria-label="Tecnologías"><p className="eyebrow">Tecnologías que utilizo</p><div className="stack-list">{stack.map((item, index) => <span key={item}><span className="stack-index">0{index + 1}</span>{item}</span>)}</div></section>

    <section id="work" className="section-shell content-section"><Reveal><SectionLabel eyebrow="01 / Proyectos seleccionados" title="Una selección de lo que he creado." copy="Sistemas reales donde la ingeniería cuidadosa se convirtió en resultados medibles." /></Reveal><div className="projects-grid">{projects.map((project, index) => <Reveal key={project.title} delay={(index % 3) * 0.08}><article className={`project-card ${project.accent}`}><div className="project-visual"><div className="visual-lines" /><span className="visual-label">{project.mainImage} / 0{index + 1}</span><div className="visual-symbol">{index % 3 === 0 ? <Globe2 /> : index % 3 === 1 ? <Code2 /> : <span className="ledger-symbol">∑</span>}</div></div><div className="project-content"><div className="project-topline"><span className="eyebrow">Proyecto</span><span className="project-arrow">↗</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.technologies.split(',').map(tag => <span key={tag}>{tag.trim()}</span>)}</div>{(project.url || project.githubUrl) && <div className="project-links">{project.url && <a href={project.url} target="_blank" rel="noreferrer">Demo en vivo <ArrowUpRight size={14} /></a>}{project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer"><Code2 size={14} /> GitHub</a>}</div>}</div></article></Reveal>)}</div></section>

    <section id="experience" className="section-shell content-section experience-section"><Reveal><SectionLabel eyebrow="02 / Experiencia" title="Construido desde los cimientos." copy="Siete años aprendiendo a convertir ideas ambiciosas en productos que funcionan en el mundo real." /></Reveal><div className="timeline">{experience.map((item, index) => <Reveal key={item.year} delay={index * 0.08} className="timeline-item"><div className="timeline-marker">0{index + 1}</div><div className="timeline-year">{item.year}</div><div className="timeline-body"><h3>{item.role}</h3><p className="timeline-company">{item.company}</p><p>{item.detail}</p></div></Reveal>)}</div></section>

    <section id="contact" className="section-shell content-section contact-section"><Reveal><div className="contact-panel"><div className="contact-copy"><p className="eyebrow">03 / Hablemos</p><h2>¿Tienes un problema<br /><span>que vale la pena resolver?</span></h2><p>Cuéntame qué estás construyendo. Te responderé en los próximos días.</p><div className="social-links"><a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 /></a><a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Globe2 /></a><a href="mailto:hola@tudominio.com" aria-label="Correo electrónico"><Mail /></a></div></div><form className="contact-form" onSubmit={handleSubmit}>{submitted ? <div className="success-state"><div className="success-icon"><Check /></div><h3>Mensaje recibido.</h3><p>Gracias por escribir. Este formulario está preparado para conectarse con Supabase.</p><button type="button" className="text-link" onClick={() => setSubmitted(false)}>Enviar otro mensaje</button></div> : <><label>Nombre<input required name="name" placeholder="Tu nombre" /></label><label>Correo electrónico<input required type="email" name="email" placeholder="tu@empresa.com" /></label><label>Mensaje<textarea required name="message" placeholder="¿En qué estás trabajando?" rows={4} /></label><button className="button button-primary" type="submit">Enviar mensaje <Send size={16} /></button></>}</form></div></Reveal></section>
    <footer className="site-footer section-shell"><span>© 2026 Portafolio profesional</span><span className="footer-note"><span className="status-dot" /> Diseñado y desarrollado con cuidado</span><a href="#top">Volver arriba ↑</a></footer>
  </main>
}
