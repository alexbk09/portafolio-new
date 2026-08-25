/**
 * Componente atómico: animación de aparición al hacer scroll.
 * Respeta prefers-reduced-motion para accesibilidad.
 */
'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  /** Contenido a animar */
  children: ReactNode
  /** Retraso de la animación en segundos */
  delay?: number
  /** Clases CSS adicionales */
  className?: string
}

export default function Reveal({ children, delay = 0, className = '' }: RevealProps) {
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