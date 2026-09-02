/**
 * Molécula: formulario de contacto funcional.
 * Envía los datos a la API route /api/contact que usa SMTP (Nodemailer).
 * Incluye captcha aritmético, honeypot anti-bots, estados de carga y errores visibles.
 */
'use client'

import { useState, useCallback, useEffect } from 'react'
import { CheckCircle2, Loader2, RefreshCw, Send } from 'lucide-react'

interface ContactFormProps {
  /** Clase CSS adicional opcional */
  className?: string
}

/** Estado del envío del formulario */
type SubmitStatus = 'idle' | 'sending' | 'success' | 'error'

/** Tipos de consulta para pre-clasificar los mensajes */
const inquiryTypes = [
  { value: 'freelance', label: 'Proyecto freelance / B2B' },
  { value: 'empleo', label: 'Oportunidad de empleo remoto' },
  { value: 'consultoria', label: 'Consultoría / Optimización' },
  { value: 'otro', label: 'Otro' },
]

export default function ContactForm({ className = '' }: ContactFormProps) {
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [captchaA, setCaptchaA] = useState(0)
  const [captchaB, setCaptchaB] = useState(0)
  const [captchaInput, setCaptchaInput] = useState('')
  const [captchaError, setCaptchaError] = useState('')

  /** Genera una nueva pregunta de captcha */
  const refreshCaptcha = useCallback(() => {
    setCaptchaA(Math.floor(Math.random() * 9) + 1)
    setCaptchaB(Math.floor(Math.random() * 9) + 1)
    setCaptchaInput('')
    setCaptchaError('')
  }, [])

  /** Inicializa el captcha al montar el componente */
  useEffect(() => {
    refreshCaptcha()
  }, [refreshCaptcha])

  /** Maneja el envío del formulario validando captcha y llamando a la API */
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget as HTMLFormElement
    const fd = new FormData(form)

    // Honeypot: campo oculto que los bots llenan automáticamente
    if (fd.get('website')) {
      setStatus('success')
      return
    }

    // Validar captcha aritmético
    const expected = captchaA + captchaB
    if (parseInt(captchaInput || '0', 10) !== expected) {
      setCaptchaError('Respuesta incorrecta. Intenta de nuevo.')
      refreshCaptcha()
      return
    }

    setCaptchaError('')
    setStatus('sending')
    setErrorMessage('')

    try {
      // Enviar el formulario a la API route SMTP
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: fd,
      })

      const data = await response.json()

      if (data.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
        setErrorMessage(data.error || 'No se pudo enviar el mensaje. Inténtalo de nuevo.')
      }
    } catch {
      setStatus('error')
      setErrorMessage('Error de conexión. Verifica tu internet e inténtalo de nuevo.')
    }
  }

  return (
    <form className={`contact-form ${className}`} onSubmit={handleSubmit}>
      {status === 'success' ? (
        <div className="success-state">
          <div className="success-icon">
            <CheckCircle2 size={22} />
          </div>
          <h3>¡Mensaje enviado!</h3>
          <p>Gracias por escribir. He recibido tu mensaje y te responderé a la brevedad.</p>
          <button type="button" className="text-link" onClick={() => setStatus('idle')}>
            Enviar otro mensaje
          </button>
        </div>
      ) : (
        <>
          {/* Campo honeypot oculto para bots */}
          <input
            name="website"
            type="text"
            autoComplete="off"
            tabIndex={-1}
            style={{ display: 'none' }}
            aria-hidden="true"
          />

          {/* Tipo de consulta: pre-clasifica el mensaje */}
          <label>
            ¿Qué necesitas?
            <select
              name="inquiryType"
              required
              defaultValue="freelance"
              disabled={status === 'sending'}
            >
              {inquiryTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </label>

          <label>
            Nombre
            <input required name="name" placeholder="Tu nombre" disabled={status === 'sending'} />
          </label>

          <label>
            Correo electrónico
            <input
              required
              type="email"
              name="email"
              placeholder="tu@empresa.com"
              disabled={status === 'sending'}
            />
          </label>

          <label>
            Mensaje
            <textarea
              required
              name="message"
              placeholder="Cuéntame en qué estás trabajando…"
              rows={4}
              disabled={status === 'sending'}
            />
          </label>

          {/* Captcha aritmético */}
          <label>
            Verificación: ¿Cuánto es {captchaA} + {captchaB}?
            <input
              required
              name="captcha"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              placeholder="Escribe la respuesta"
              disabled={status === 'sending'}
            />
          </label>

          {captchaError && <p className="form-error">{captchaError}</p>}
          {status === 'error' && <p className="form-error">{errorMessage}</p>}

          <div className="form-actions">
            <button
              className="button button-primary"
              type="submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                <>
                  <Loader2 size={16} className="spin" /> Enviando…
                </>
              ) : (
                <>
                  Enviar mensaje <Send size={16} />
                </>
              )}
            </button>
            <button type="button" className="text-link" onClick={refreshCaptcha} disabled={status === 'sending'}>
              <RefreshCw size={12} /> Cambiar pregunta
            </button>
          </div>
        </>
      )}
    </form>
  )
}