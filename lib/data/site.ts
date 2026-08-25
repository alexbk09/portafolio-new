/**
 * Configuración general del sitio.
 * Edita aquí tu información personal, redes y datos del formulario.
 */
export const siteConfig = {
  /** Nombre mostrado en la marca */
  brand: 'keiber.paez',
  /** Nombre completo */
  fullName: 'Keiber Alexander Paez Hernández',
  /** Título profesional */
  title: 'Senior Full Stack Developer',
  /** Descripción corta para SEO y hero */
  bio: 'Soy Keiber Alexander Paez Hernández, Ingeniero de Software y Senior Full Stack Developer con más de 7 años convirtiendo requisitos complejos en software rápido, confiable y humano. Trabajo con PHP/Laravel, Node.js, React y Vue.js.',
  /** Estado de disponibilidad */
  availability: 'Disponible para contratación B2B · Remoto · 2026',
  /** Enlaces sociales */
  socials: {
    github: 'https://github.com/alexbk09',
    linkedin: 'https://linkedin.com/in/keiber-paez-fullstack',
    email: 'alexbk09@hotmail.com',
  },
  /** Email donde se reciben los mensajes del formulario */
  contactEmail: 'alexbk09@hotmail.com',
  /** Años de experiencia (mostrado en el hero) */
  yearsOfExperience: 7,
  /** Configuración de WhatsApp para contactar */
  whatsapp: {
    /** Número con código de país en formato internacional */
    phone: '+584122649707',
    /** Mensaje por defecto para el botón flotante */
    defaultMessage: 'Hola Keiber, vi tu portafolio y me gustaría conversar contigo.',
  },
} as const

/**
 * Construye un enlace de WhatsApp (wa.me) con mensaje predefinido.
 * Recibe el teléfono internacional y el mensaje; limpia caracteres no numéricos
 * del teléfono y codifica el mensaje para la URL.
 */
export function buildWhatsAppLink(phone: string, message: string): string {
  const digitsOnly = phone.replace(/\D/g, '')
  return `https://wa.me/${digitsOnly}?text=${encodeURIComponent(message)}`
}

/**
 * Configuración del correo SMTP.
 * Reemplaza los valores con las credenciales de tu correo emisor.
 *
 * ─── CÓMO CONFIGURAR TU SMTP ───
 * Opción A (Gmail): usa una "Contraseña de aplicación" de Google:
 *   1. Activa la verificación en 2 pasos en tu cuenta Google.
 *   2. Ve a https://myaccount.google.com/apppasswords y genera una.
 *   3. host: 'smtp.gmail.com', port: 587, secure: false
 *
 * Opción B (Outlook/Hotmail):
 *   host: 'smtp.office365.com', port: 587, secure: false
 *
 * Opción C (tu propio dominio/cPanel):
 *   host: 'mail.tudominio.com', port: 465, secure: true
 *
 * Recomendación: usa variables de entorno en producción.
 * Crea un archivo .env.local con:
 *   SMTP_HOST=tu_host
 *   SMTP_PORT=587
 *   SMTP_USER=tu_correo_emisor
 *   SMTP_PASS=tu_contraseña_o_app_password
 */
export const smtpConfig = {
  /** Host del servidor SMTP */
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  /** Puerto SMTP (587/TLS o 465/SSL) */
  port: Number(process.env.SMTP_PORT) || 587,
  /** true para 465 SSL, false para 587 STARTTLS. Detecta automáticamente si el puerto es 465 o se fuerza con SMTP_SECURE=true */
  secure: process.env.SMTP_SECURE === 'true' || Number(process.env.SMTP_PORT) === 465,
  /** Usuario: el correo que envía los mensajes */
  user: process.env.SMTP_USER || 'alexbk09@gmail.com',
  /** Contraseña o App Password del correo emisor */
  pass: process.env.SMTP_PASS || '',
  /** Correo desde el que se envía */
  from: process.env.SMTP_FROM || 'Portafolio Keiber Paez <alexbk09@gmail.com>',
} as const