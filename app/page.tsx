'use client'

import { useState, useEffect } from 'react'
import { color, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Check, Code2, Globe2, Mail, Menu, Send, X } from 'lucide-react'

const skills = [
  { name: 'HTML/CSS', category: 'Frontend', color: 'orange' },
  { name: 'JavaScript', category: 'Frontend', color: 'yellow' },
  { name: 'React', category: 'Frontend', color: 'blue' },
  { name: 'Next.js', category: 'Frontend', color: 'blue' },
  { name: 'Vue.js', category: 'Frontend', color: 'green' },
  { name: 'Angular', category: 'Frontend', color: 'red' },
  { name: 'AngularJS', category: 'Frontend', color: 'red' },
  { name: 'Bootstrap', category: 'Frontend', color: 'purple' },
  { name: 'Tailwind', category: 'Frontend', color: 'blue' },
  { name: 'Material UI', category: 'Frontend', color: 'green' },
  { name: 'TypeScript', category: 'Frontend', color: 'blue' },
  { name: 'PHP/Laravel', category: 'Backend', color: 'purple' },
  { name: 'Node.js', category: 'Backend', color: 'green' },
  { name: 'Python', category: 'Backend', color: 'blue' },
  { name: 'MySQL/PostgreSQL', category: 'Backend', color: 'blue' },
  { name: 'CodeIgniter', category: 'Backend', color: 'green' },
  { name: 'Supabase', category: 'Backend', color: 'green' },
  { name: 'Git', category: 'Herramientas', color: 'red' },
  { name: 'Docker', category: 'Herramientas', color: 'blue' },
  { name: 'AWS', category: 'Herramientas', color: 'orange' },
  { name: 'Linux', category: 'Herramientas', color: 'yellow' },
  { name: 'WordPress', category: 'Herramientas', color: 'blue' },
  { name: 'Postman', category: 'Herramientas', color: 'orange' },
  { name: 'Figma', category: 'Herramientas', color: 'green' },
  { name: 'Cursor', category: 'Herramientas', color: 'gray' },
  { name: 'VSCode', category: 'Herramientas', color: 'blue' },
  { name: 'Google', category: 'Herramientas', color: 'red' },
  { name: 'PayPal', category: 'Herramientas', color: 'blue' },
  { name: 'Stripe', category: 'Herramientas', color: 'green' },
  { name: 'Shopify', category: 'Herramientas', color: 'purple' },
  { name: 'Jira', category: 'Herramientas', color: 'red' },
  { name: 'WhatsApp', category: 'Herramientas', color: 'green' },
  { name: 'Slack', category: 'Herramientas', color: 'blue' },
  { name: 'Trello', category: 'Herramientas', color: 'red' },
  { name: 'Notion', category: 'Herramientas', color: 'gray' },
  { name: 'JWT', category: 'Herramientas', color: 'gray' },
  { name: 'Redis', category: 'Herramientas', color: 'red' },
  { name: 'Firebase', category: 'Herramientas', color: 'orange' },
  { name: 'Google Calendar API', category: 'Herramientas', color: 'blue' },
  { name: 'Google Maps API', category: 'Herramientas', color: 'green' },
  { name: 'Wompi API', category: 'Herramientas', color: 'blue' },
  { name: 'IA (FastAPI)', category: 'Herramientas', color: 'gray' },
  { name: 'API de facturación', category: 'Herramientas', color: 'red' },
  { name: 'API de pagos', category: 'Herramientas', color: 'green' },
  { name: 'API de geolocalización', category: 'Herramientas', color: 'blue' },
  { name: 'API SOAP', category: 'Herramientas', color: 'green' },
  { name: 'Lambda', category: 'Herramientas', color: 'red' },
  { name: 'AWS S3', category: 'Herramientas', color: 'blue' },
  { name: 'LocalStorage', category: 'Herramientas', color: 'orange' },
  { name: 'Jobs', category: 'Herramientas', color: 'gray' },
  { name: 'Clean Code', category: 'Herramientas', color: 'red' },
  { name: 'SOLID', category: 'Herramientas', color: 'green' },
  { name: 'GitFlow', category: 'Herramientas', color: 'orange' },
  { name: 'Code Review', category: 'Herramientas', color: 'gray' },
  { name: 'Claude code', category: 'IA', color: 'blue' },
  { name: 'Antigravity', category: 'IA', color: 'green' },
  { name: 'AI Copilot', category: 'IA', color: 'gray' },
  { name: 'ChatGPT', category: 'IA', color: 'red' },
  { name: 'Deep Seek', category: 'IA', color: 'blue' },
  { name: 'Agentes', category: 'IA', color: 'gray' },
  { name: 'Skills', category: 'IA', color: 'green' },

]

const projects = [
  { mainImage: 'React', title: 'Akismax-Pet', description: 'Plataforma de pedido de productos y servicios veterinarios, carrito de compra, api de precios para manejar dolares y Bs, calendario para administrar tiempos de servicios tanto peluqueria como veterinaria, historial de mascotas facturacion caja.', technologies: 'TypeScript, Tailwind, React', url: 'https://akimax-pet.vercel.app/', githubUrl: 'https://github.com/alexbk09/akimax-pet', accent: 'violet' },
  { mainImage: 'React', title: 'Dantojos', description: 'Plataforma de pedidos de tortas en base a opciones se arma el pedido a solicitar con precios y se envia a travez de WhatsApp, responsive, tailswind, creado en React.js.', technologies: 'TypeScript, Tailwind, React', url: 'https://dantojos.vercel.app/', githubUrl: 'https://github.com/alexbk09/dantojos', accent: 'lime' },
  { mainImage: 'React + Supabase', title: 'Ilumax', description: 'Plataforma tienda construida con react.js, TypeScript y supabase mostrando productos precios en dos monedas consumiendo un api y carrito de compra con una parte administrativa para el administrador puede manejar productos solicitudes y dahsboard de informacion.', technologies: 'sapabase, TypeScript, Tailwind, React', url: 'https://ilumax.vercel.app/', githubUrl: 'https://github.com/alexbk09/ilumax', accent: 'lime' },
  { mainImage: 'laravel + reactjs', title: 'E-commerce', description: 'Plataforma unificada para tiendas online, inventario y facturación en múltiples monedas. Incluye pagos internacionales, productos destacados, control por códigos QR, alertas de stock, reportes en tiempo real, facturación automática y gestión de clientes.', technologies: 'React, Laravel, MySQL, JWT, Tailwind, LocalStorage, IA, Jobs', url: '', githubUrl: 'https://github.com/alexbk09/sistema_inventario', accent: 'lime' },
  { mainImage: 'Nextjs', title: 'Portafolio', description: 'Plataforma de portafolio construida con Next.js y TypeScript.', technologies: 'Next.js, TypeScript, Tailwind, React', url: '', githubUrl: 'https://github.com/alexbk09/portafolio-new', accent: 'cyan' },
  { mainImage: 'laravel + reactjs', title: 'Portafolio ', description: 'Plataforma de portafolio construida con Laravel y React.js.', technologies: 'TypeScript, Tailwind, React, Laravel, MySQL, Microservicio IA (FastAPI)', url: '', githubUrl: 'https://github.com/alexbk09/portafolio_repository', accent: 'violet' },
  { mainImage: 'images/aytec.png', title: 'Aytec plataforma médica', description: 'Plataforma médica para crear historias, órdenes y gestionar pacientes, con módulos de administración, reportes, roles y permisos de usuarios.', technologies: 'Laravel, Vue.js, MySQL, Bootstrap, Firebase, JWT', url: '', githubUrl: '', accent: 'cyan' },
  { mainImage: 'images/triangle.png', title: 'Triangle', description: 'Plataforma para administración y captación de personal. Los usuarios buscan empleo y las empresas publican ofertas con cualidades, horarios, contratos y dirección.', technologies: 'Angular, Tailwind, Node.js, Express, MongoDB, JWT', url: '', githubUrl: '', accent: 'violet' },
  { mainImage: 'images/safeclinic.png', title: 'Safe Clinic', description: 'Panel de control para la administración de clínicas y clientes SOAP, diseñado para centralizar la operación diaria.', technologies: 'React, Tailwind, MySQL, JWT, Laravel', url: '', githubUrl: '', accent: 'lime' },
  { mainImage: 'images/auditsalud.png', title: 'AuditSalud', description: 'Actualización de una plataforma médica para administrar historias clínicas, cuentas médicas, estados, EPS y validar archivos RIPS en formato JSON.', technologies: 'React, Laravel, Redis, MySQL, JWT, Tailwind, APIs SOAP', url: '', githubUrl: '', accent: 'cyan' },
  { mainImage: 'images/core360.png', title: 'Core360', description: 'Plataforma de intranet para la gestión interna de la empresa: empleados, seguimiento de proyectos y administración de recursos.', technologies: 'Vue.js, MySQL, JWT, Laravel, Redis, Tailwind', url: '', githubUrl: '', accent: 'violet' },
  { mainImage: 'images/petclinic.png', title: 'Pet Clinic', description: 'Plataforma para clínicas veterinarias con pacientes, citas integradas con Google Calendar, servicios, historial médico, facturación e inventario.', technologies: 'Angular, Laravel, MySQL, JWT, Tailwind, Google Calendar API, Redis', url: '', githubUrl: '', accent: 'lime' },
  { mainImage: 'images/faktu.png', title: 'PagoDeFacturas', description: 'Plataforma para gestionar pagos y facturación electrónica, permitiendo a las empresas emitir, recibir y administrar facturas de forma eficiente.', technologies: 'AngularJS, Laravel, MySQL, JWT, Tailwind, AWS S3, Redis, Lambda, API de facturación, API de pagos', url: 'https://faktu.net', githubUrl: '', accent: 'cyan' },
  { mainImage: 'images/georeferencia.png', title: 'Geo-Referencia', description: 'Plataforma para la gestión de geolocalización y referencias geográficas, con integración de mapas y servicios especializados.', technologies: 'Vite, Laravel, MySQL, JWT, Tailwind, API de geolocalización, API Google Maps, Redis', url: '', githubUrl: '', accent: 'violet' },
  { mainImage: 'images/habilitacion.png', title: 'Habilitación', description: 'Plataforma web integral para medir la satisfacción laboral y el rendimiento de colaboradores mediante encuestas dinámicas, datos anonimizados y métricas para Recursos Humanos.', technologies: 'Vite, Laravel, MySQL, JWT, API de pagos Wompi', url: '', githubUrl: '', accent: 'lime' },

]

const experience = [
  { year: 'Feb 2023 — Actualidad', role: 'Senior Full Stack Developer · Consultor externo', company: 'Freelance / Startups de Latinoamérica', detail: 'Diseño arquitecturas de alto tráfico, backends asíncronos con Node.js, paneles React e integraciones de pagos. También optimizo sistemas legacy en Laravel y automatizo operaciones con Python, Docker y AWS.' },
  { year: 'Ene 2022 — Ene 2023', role: 'Líder Técnico', company: 'Netred · Chile (Remoto)', detail: 'Coordiné equipos frontend y backend de 8 personas, aceleré la entrega de sprints en un 20% e implementé Code Reviews, Clean Code, SOLID, GitFlow y entornos Dockerizados.' },
  { year: 'Ene 2019 — Dic 2021', role: 'Programador Web', company: 'North Delivery · Venezuela (Remoto)', detail: 'Desarrollé plataformas administrativas y logísticas con PHP, MySQL, JavaScript, Tailwind y Bootstrap, automatizando flujos que ahorraron 15 horas semanales.' },
  { year: 'Ene 2016 — Ene 2019', role: 'Desarrollador de Software Junior', company: 'Electrocarp · Venezuela', detail: 'Mantuve y estabilicé sistemas ERP internos construidos con PHP y MySQL, resolviendo incidencias críticas y mejorando el rendimiento de la plataforma.' },
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
  const [captchaA, setCaptchaA] = useState(0)
  const [captchaB, setCaptchaB] = useState(0)
  const [captchaInput, setCaptchaInput] = useState('')
  const [captchaError, setCaptchaError] = useState('')
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) { event.preventDefault(); setSubmitted(true) }

  useEffect(() => {
    const a = Math.floor(Math.random() * 9) + 1
    const b = Math.floor(Math.random() * 9) + 1
    setCaptchaA(a)
    setCaptchaB(b)
    setCaptchaInput('')
    setCaptchaError('')
  }, [])

  function refreshCaptcha() {
    const a = Math.floor(Math.random() * 9) + 1
    const b = Math.floor(Math.random() * 9) + 1
    setCaptchaA(a)
    setCaptchaB(b)
    setCaptchaInput('')
    setCaptchaError('')
  }

  function handleSubmitWithCaptcha(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget as HTMLFormElement
    const fd = new FormData(form)
    // honeypot field (bots often fill fields they shouldn't)
    if (fd.get('website')) {
      setCaptchaError('Verificación fallida.')
      return
    }
    const expected = captchaA + captchaB
    if (parseInt(captchaInput || '0', 10) !== expected) {
      setCaptchaError('Respuesta incorrecta. Intenta de nuevo.')
      refreshCaptcha()
      return
    }
    setCaptchaError('')
    setSubmitted(true)
  }

  return <main>
    <div className="ambient-grid" aria-hidden="true" />
    <header className="site-header">
      <a href="#top" className="brand" aria-label="Inicio del portafolio"><span className="brand-mark">/</span> keiber.paez</a>
      <nav className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Navegación principal">
        <a href="#work" onClick={() => setMenuOpen(false)}>Proyectos</a>
        <a href="#experience" onClick={() => setMenuOpen(false)}>Experiencia</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contacto</a>
        <a href="/cv.pdf" onClick={() => setMenuOpen(false)} target="_blank" rel="noreferrer">CV</a>
      </nav>
      <a className="header-cta" href="#contact">Hablemos <ArrowUpRight size={15} /></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
    </header>

    <section id="top" className="hero section-shell">
      <div className="hero-copy"><Reveal><p className="eyebrow"><span className="status-dot" /> Disponible para contratación B2B · Remoto · 2026</p></Reveal><Reveal delay={0.08}><h1>Construyo productos digitales<br /><span>que se sienten inevitables.</span></h1></Reveal><Reveal delay={0.16}><p className="hero-bio">Soy Keiber Alexander Paez Hernández, Ingeniero de Software y Senior Full Stack Developer con más de 7 años convirtiendo requisitos complejos en software rápido, confiable y humano. Trabajo con PHP/Laravel, Node.js, React y Vue.js.</p></Reveal><Reveal delay={0.22} className="hero-actions"><a href="#contact" className="button button-primary">Iniciar una conversación <ArrowUpRight size={17} /></a><a href="#work" className="text-link">Ver proyectos destacados <span>↓</span></a></Reveal></div>
      <Reveal delay={0.18} className="hero-aside"><div className="code-window"><div className="window-bar"><span /><span /><span /><small>desarrollador.config.ts</small></div><pre><code><i>const</i> <b>desarrollador</b> = {'{'}{`\n`}  nombre: <em>&quot;Keiber Paez&quot;</em>,{`\n`}  enfoque: [<em>&quot;producto&quot;</em>, <em>&quot;arquitectura&quot;</em>],{`\n`}  experiencia: <strong>7</strong>,{`\n`}  estado: <em>&quot;disponible&quot;</em>{`\n`}{'}'}</code></pre><div className="code-footer"><span><span className="status-dot" /> abierto a buenos retos</span><span>⌘ K</span></div></div></Reveal>
    </section>

    <section className="skills-section section-shell" aria-labelledby="skills-title"><Reveal><SectionLabel eyebrow="Stack / Herramientas" title="Las herramientas detrás de cada entrega." copy="Un stack amplio para moverme con soltura desde la interfaz hasta la infraestructura y la operación." /></Reveal><div className="skills-board">{['Frontend', 'Backend', 'Herramientas', 'IA'].map(category => <div className="skill-group" key={category}><div className="skill-group-heading"><span className="skill-group-dot" />{category}<span className="skill-group-count">{skills.filter(skill => skill.category === category).length.toString().padStart(2, '0')}</span></div><div className="skills-grid">{skills.filter(skill => skill.category === category).map((skill, index) => <motion.div key={skill.name} className={`skill-chip ${skill.color}`} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.025 }}><span className="skill-mark">{skill.name.slice(0, 1)}</span><span>{skill.name}</span></motion.div>)}</div></div>)}</div></section>

    <section id="work" className="section-shell content-section"><Reveal><SectionLabel eyebrow="01 / Proyectos seleccionados" title="Una selección de lo que he creado." copy="Sistemas reales donde la ingeniería cuidadosa se convirtió en resultados medibles muchos de mis sistemas fueron bajo contrato y son software cerrados utilizados solo por las empresas por ende el codigo y los link son netamente de dichas empresas." /></Reveal><div className="projects-grid">{projects.map((project, index) => <Reveal key={project.title} delay={(index % 3) * 0.08}><article className={`project-card ${project.accent}`}><div className="project-visual"><div className="visual-lines" /><span className="visual-label">{project.mainImage} / 0{index + 1}</span><div className="visual-symbol">{index % 3 === 0 ? <Globe2 /> : index % 3 === 1 ? <Code2 /> : <span className="ledger-symbol">∑</span>}</div></div><div className="project-content"><div className="project-topline"><span className="eyebrow">Proyecto</span><span className="project-arrow">↗</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.technologies.split(',').map(tag => <span key={tag}>{tag.trim()}</span>)}</div>{(project.url || project.githubUrl) && <div className="project-links">{project.url && <a href={project.url} target="_blank" rel="noreferrer">Demo en vivo <ArrowUpRight size={14} /></a>}{project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer"><Code2 size={14} /> GitHub</a>}</div>}</div></article></Reveal>)}</div></section>

    <section id="experience" className="section-shell content-section experience-section"><Reveal><SectionLabel eyebrow="02 / Experiencia" title="Construido desde los cimientos." copy="Más de siete años construyendo desde los cimientos: de sistemas ERP y plataformas logísticas a arquitecturas de alto tráfico, equipos remotos y productos digitales completos." /></Reveal><div className="timeline">{experience.map((item, index) => <Reveal key={item.year} delay={index * 0.08} className="timeline-item"><div className="timeline-marker">0{index + 1}</div><div className="timeline-year">{item.year}</div><div className="timeline-body"><h3>{item.role}</h3><p className="timeline-company">{item.company}</p><p>{item.detail}</p></div></Reveal>)}</div></section>

    <section id="download" className="section-shell">
      <Reveal>
        <div className="download-panel">
          <SectionLabel eyebrow="Descargar" title="Mi CV" copy="Descarga mi CV en formato PDF para ver mi experiencia y proyectos." />
          <div style={{ marginTop: 12 }}>
            <a href="/cv.pdf" download className="button button-primary">Descargar CV <ArrowUpRight size={14} /></a>
            <a href="/cv.pdf" target="_blank" rel="noreferrer" className="text-link" style={{ marginLeft: 12 }}>Abrir en nueva pestaña</a>
          </div>
        </div>
      </Reveal>
    </section>

    <section id="contact" className="section-shell content-section contact-section">
      <Reveal>
        <div className="contact-panel">
          <div className="contact-copy">
            <p className="eyebrow">03 / Hablemos</p>
            <h2>¿Tienes un problema<br /><span>que vale la pena resolver?</span></h2>
            <p>Cuéntame qué estás construyendo. Estoy disponible para contratación B2B y proyectos internacionales.</p>
            <div className="social-links">
              <a href="https://github.com/alexbk09" target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 /></a>
              <a href="https://linkedin.com/in/keiber-paez-fullstack" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Globe2 /></a>
              <a href="mailto:alexbk09@hotmail.com" aria-label="Correo electrónico"><Mail /></a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmitWithCaptcha}>
            {submitted ? (
              <div className="success-state">
                <div className="success-icon"><Check /></div>
                <h3>Mensaje recibido.</h3>
                <p>Gracias por escribir. Este formulario está preparado para conectarse con Supabase.</p>
                <button type="button" className="text-link" onClick={() => setSubmitted(false)}>Enviar otro mensaje</button>
              </div>
            ) : (
              <>
                <label>Nombre<input required name="name" placeholder="Tu nombre" /></label>
                <label>Correo electrónico<input required type="email" name="email" placeholder="tu@empresa.com" /></label>
                <label>Mensaje<textarea required name="message" placeholder="¿En qué estás trabajando?" rows={4} /></label>
                <input name="website" type="text" autoComplete="off" tabIndex={-1} style={{ display: 'none' }} aria-hidden="true" />
                <label>Verificación: ¿Cuánto es {captchaA} + {captchaB}?<input required name="captcha" value={captchaInput} onChange={e => setCaptchaInput(e.target.value)} placeholder={`Escribe la respuesta`} /></label>
                {captchaError && <p className="form-error" style={{ color: 'var(--red, #f43f5e)', marginTop: 6 }}>{captchaError}</p>}
                <div style={{ marginTop: 8 }}>
                  <button className="button button-primary" type="submit">Enviar mensaje <Send size={16} /></button>
                  <button type="button" className="text-link" onClick={refreshCaptcha} style={{ marginLeft: 12 }}>Cambiar pregunta</button>
                </div>
              </>
            )}
          </form>
        </div>
      </Reveal>
    </section>
    <footer className="site-footer section-shell"><span>© 2026 Keiber Alexander Paez Hernández</span><span className="footer-note"><span className="status-dot" /> Diseñado y desarrollado con cuidado</span><a href="#top">Volver arriba ↑</a></footer>
  </main>
}
