/**
 * Átomo: botón flotante de WhatsApp.
 * Aparece al final de la web, fijo en la esquina inferior derecha,
 * con tooltip para invitar al contacto directo.
 */
'use client'

import { useEffect, useState } from 'react'
import { siteConfig, buildWhatsAppLink } from '@/lib/data/site'
import WhatsAppIcon from '@/components/atoms/WhatsAppIcon'

export default function WhatsAppFloatButton() {
  const [showButton, setShowButton] = useState(false)

  // Mostrar el botón solo después de que el usuario haga scroll ~40% de la página
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight
      const pageHeight = document.documentElement.scrollHeight
      const threshold = pageHeight * 0.4
      setShowButton(scrollPosition >= threshold)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Construir el enlace wa.me con el mensaje por defecto
  const whatsappUrl = buildWhatsAppLink(siteConfig.whatsapp.phone, siteConfig.whatsapp.defaultMessage)

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className={`whatsapp-float ${showButton ? 'is-visible' : ''}`}
      aria-label="Escríbeme por WhatsApp"
      title="Escríbeme por WhatsApp"
    >
      <WhatsAppIcon size={24} />
      <span className="whatsapp-tooltip">¿Hablamos por WhatsApp?</span>
    </a>
  )
}