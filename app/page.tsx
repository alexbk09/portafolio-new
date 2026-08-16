'use client'

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowUpRight,
  Check,
  Code2,
  Globe2,
  Mail,
  Menu,
  Send,
  X,
} from 'lucide-react'

const stack = ['React', 'Next.js', 'Node.js', 'Laravel', 'PHP', 'Supabase', 'PostgreSQL', 'TypeScript']

const projects = [
  {
    title: 'Atlas Commerce',
    description: 'A composable commerce platform that helps independent brands manage catalogs, checkout, and fulfillment from one calm workspace.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL'],
    accent: 'cyan',
    demo: 'https://example.com',
    github: 'https://github.com',
  },
  {
    title: 'Signal Operations',
    description: 'Real-time operations software for distributed teams, turning noisy event streams into clear, actionable workflows.',
    tags: ['React', 'TypeScript', 'Supabase'],
    accent: 'violet',
    demo: 'https://example.com',
    github: '',
  },
  {
    title: 'Ledger API',
    description: 'A resilient financial API with audit-ready primitives, idempotent transactions, and developer-first documentation.',
    tags: ['PHP', 'Laravel', 'PostgreSQL'],
    accent: 'lime',
    demo: '',
    github: 'https://github.com',
  },
]

const experience = [
  { year: '2022 — Now', role: 'Senior Fullstack Engineer', company: 'Independent / Product Teams', detail: 'Leading architecture and delivery for high-traffic web products, with a focus on quality, velocity, and thoughtful developer experience.' },
  { year: '2019 — 2022', role: 'Fullstack Engineer', company: 'Digital Product Studio', detail: 'Built and shipped customer-facing platforms across commerce, SaaS, and internal operations with React, Node.js, and Laravel.' },
  { year: '2017 — 2019', role: 'PHP Developer', company: 'Web Systems Co.', detail: 'Started close to the database and the business logic, growing from Laravel applications into end-to-end product ownership.' },
]

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function SectionLabel({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-copy">{copy}</p>
    </div>
  )
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      <div className="ambient-grid" aria-hidden="true" />
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Alex Morgan home"><span className="brand-mark">/</span> alex.morgan</a>
        <nav className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Primary navigation">
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <a className="header-cta" href="#contact">Let&apos;s talk <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section id="top" className="hero section-shell">
        <div className="hero-copy">
          <Reveal><p className="eyebrow"><span className="status-dot" /> Available for select projects · 2026</p></Reveal>
          <Reveal delay={0.08}><h1>I build digital products<br /><span>that feel inevitable.</span></h1></Reveal>
          <Reveal delay={0.16}><p className="hero-bio">Senior fullstack engineer with 7+ years turning complex requirements into fast, reliable, and distinctly human software. I work across PHP/Laravel, Node, and React.</p></Reveal>
          <Reveal delay={0.22} className="hero-actions"><a href="#contact" className="button button-primary">Start a conversation <ArrowUpRight size={17} /></a><a href="#work" className="text-link">See selected work <span>↓</span></a></Reveal>
        </div>
        <Reveal delay={0.18} className="hero-aside"><div className="code-window"><div className="window-bar"><span /><span /><span /><small>developer.config.ts</small></div><pre><code><i>const</i> <b>developer</b> = {'{'}{`\n`}  name: <em>&quot;Alex Morgan&quot;</em>,{`\n`}  focus: [<em>&quot;product&quot;</em>, <em>&quot;systems&quot;</em>],{`\n`}  experience: <strong>7</strong>,{`\n`}  status: <em>&quot;building&quot;</em>{`\n`}{'}'}</code></pre><div className="code-footer"><span><span className="status-dot" /> open to good problems</span><span>⌘ K</span></div></div></Reveal>
      </section>

      <section className="stack-strip section-shell" aria-label="Technology stack"><p className="eyebrow">Tools I reach for</p><div className="stack-list">{stack.map((item, index) => <span key={item}><span className="stack-index">0{index + 1}</span>{item}</span>)}</div></section>

      <section id="work" className="section-shell content-section"><Reveal><SectionLabel eyebrow="01 / Selected work" title="A few things I&apos;ve shipped." copy="A selection of products and systems where thoughtful engineering made a measurable difference." /></Reveal><div className="projects-grid">{projects.map((project, index) => <Reveal key={project.title} delay={index * 0.08}><article className={`project-card ${project.accent}`}><div className="project-visual"><div className="visual-lines" /><span className="visual-label">0{index + 1} / 03</span><div className="visual-symbol">{index === 0 ? <Globe2 /> : index === 1 ? <Code2 /> : <span className="ledger-symbol">∑</span>}</div></div><div className="project-content"><div className="project-topline"><span className="eyebrow">Case study</span><span className="project-arrow">↗</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-links">{project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={14} /></a>}{project.github && <a href={project.github} target="_blank" rel="noreferrer"><Code2 size={14} /> GitHub</a>}</div></div></article></Reveal>)}</div></section>

      <section id="experience" className="section-shell content-section experience-section"><Reveal><SectionLabel eyebrow="02 / Experience" title="Built from the foundation up." copy="Seven years of learning how to make ambitious ideas work in the real world." /></Reveal><div className="timeline">{experience.map((item, index) => <Reveal key={item.year} delay={index * 0.08} className="timeline-item"><div className="timeline-marker">0{index + 1}</div><div className="timeline-year">{item.year}</div><div className="timeline-body"><h3>{item.role}</h3><p className="timeline-company">{item.company}</p><p>{item.detail}</p></div></Reveal>)}</div></section>

      <section id="contact" className="section-shell content-section contact-section"><Reveal><div className="contact-panel"><div className="contact-copy"><p className="eyebrow">03 / Get in touch</p><h2>Have a problem<br /><span>worth solving?</span></h2><p>Tell me a little about what you&apos;re building. I&apos;ll get back to you within a few days.</p><div className="social-links"><a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 /></a><a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Globe2 /></a><a href="mailto:hello@alexmorgan.dev" aria-label="Email"><Mail /></a></div></div><form className="contact-form" onSubmit={handleSubmit}>{submitted ? <div className="success-state"><div className="success-icon"><Check /></div><h3>Message received.</h3><p>Thanks for reaching out. This demo form is wired for Supabase and ready for your project credentials.</p><button type="button" className="text-link" onClick={() => setSubmitted(false)}>Send another message</button></div> : <><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@company.com" /></label><label>Message<textarea required name="message" placeholder="What are you working on?" rows={4} /></label><button className="button button-primary" type="submit">Send message <Send size={16} /></button></>}</form></div></Reveal></section>

      <footer className="site-footer section-shell"><span>© 2026 Alex Morgan</span><span className="footer-note"><span className="status-dot" /> Designed &amp; engineered with care</span><a href="#top">Back to top ↑</a></footer>
    </main>
  )
}
