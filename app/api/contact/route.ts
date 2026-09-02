/**
 * API Route para el envío de mensajes del formulario de contacto.
 * Usa Nodemailer con SMTP configurable desde variables de entorno.
 *
 * ─── SEGURIDAD ───
 * - Verifica un honeypot oculto para bloquear bots.
 * - Valida los campos obligatorios.
 * - Limita el tamaño del mensaje.
 * - Nunca expone las credenciales SMTP al cliente.
 */
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import nodemailer from 'nodemailer'
import { smtpConfig, siteConfig } from '@/lib/data/site'

/** Máximo de caracteres permitido para cada campo */
const MAX_FIELD_LENGTH = 500

/** Etiquetas legibles para los tipos de consulta pre-clasificados */
const INQUIRY_LABELS: Record<string, string> = {
  freelance: 'Proyecto freelance / B2B',
  empleo: 'Oportunidad de empleo remoto',
  consultoria: 'Consultoría / Optimización',
  otro: 'Otro',
}

/** Valida que un campo de texto sea válido */
function isValidField(value: FormDataEntryValue | null, maxLength = MAX_FIELD_LENGTH): value is string {
  if (typeof value !== 'string') return false
  const trimmed = value.trim()
  return trimmed.length > 0 && trimmed.length <= maxLength
}

/** Crea el transportador SMTP con la configuración del sitio */
function createTransporter() {
  return nodemailer.createTransport({
    host: smtpConfig.host,
    port: smtpConfig.port,
    secure: smtpConfig.secure,
    auth: {
      user: smtpConfig.user,
      pass: smtpConfig.pass,
    },
  })
}

export async function POST(request: NextRequest) {
  try {
    // 1. Leer y validar el formulario
    const formData = await request.formData()

    // 2. Honeypot anti-bots: si este campo oculto viene lleno, es un bot
    const honeypot = formData.get('website')
    if (honeypot) {
      // Responder éxito falso para no revelar la protección
      return NextResponse.json({ success: true }, { status: 200 })
    }

    // 3. Validar campos requeridos
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')
    const inquiryRaw = formData.get('inquiryType')
    const inquiryType = typeof inquiryRaw === 'string' ? inquiryRaw : 'otro'

    if (!isValidField(name) || !isValidField(email) || !isValidField(message)) {
      return NextResponse.json({ success: false, error: 'Por favor completa todos los campos correctamente.' }, { status: 400 })
    }

    // 4. Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ success: false, error: 'El correo electrónico no tiene un formato válido.' }, { status: 400 })
    }

    // 5. Verificar que el SMTP tenga contraseña configurada
    if (!smtpConfig.pass) {
      console.warn('SMTP_PASS no está configurado. El mensaje no se envió.')
      return NextResponse.json({ success: false, error: 'El servicio de correo no está configurado. Contacta al administrador.' }, { status: 500 })
    }

    // 6. Crear y enviar el correo
    const transporter = createTransporter()
    await transporter.sendMail({
      from: smtpConfig.from,
      to: siteConfig.contactEmail,
      replyTo: email,
      subject: `Nuevo mensaje del portafolio — ${name.trim()}`,
      text: `Nombre: ${name.trim()}\nCorreo: ${email.trim()}\nTipo de consulta: ${INQUIRY_LABELS[inquiryType] ?? inquiryType}\n\nMensaje:\n${message.trim()}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f7f7f7; border-radius: 8px;">
          <h2 style="color: #111; margin-top: 0;">Nuevo mensaje de contacto</h2>
          <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 6px; overflow: hidden;">
            <tr style="background: #fafafa;">
              <td style="padding: 10px 16px; font-weight: bold; width: 90px; border-bottom: 1px solid #eee;">Nombre</td>
              <td style="padding: 10px 16px; border-bottom: 1px solid #eee;">${name.trim()}</td>
            </tr>
            <tr>
              <td style="padding: 10px 16px; font-weight: bold; border-bottom: 1px solid #eee;">Correo</td>
              <td style="padding: 10px 16px; border-bottom: 1px solid #eee;"><a href="mailto:${email.trim()}">${email.trim()}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 16px; font-weight: bold; border-bottom: 1px solid #eee;">Tipo de consulta</td>
              <td style="padding: 10px 16px; border-bottom: 1px solid #eee;"><strong>${INQUIRY_LABELS[inquiryType] ?? inquiryType}</strong></td>
            </tr>
            <tr>
              <td style="padding: 10px 16px; font-weight: bold;">Mensaje</td>
              <td style="padding: 10px 16px; white-space: pre-line;">${message.trim()}</td>
            </tr>
          </table>
        </div>
      `,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Error enviando correo:', error)
    return NextResponse.json({ success: false, error: 'No se pudo enviar el mensaje. Inténtalo de nuevo.' }, { status: 500 })
  }
}