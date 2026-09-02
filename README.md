# Keiber Paez — Senior Full Stack Developer Portfolio

Portafolio profesional construido con **Next.js 16, React 19, TypeScript y Tailwind CSS 4**, orientado a conversión para dos audiencias: **clientes que necesitan sistemas** y **reclutadores/empresas que buscan talento Senior remoto**.

## 🚀 Stack

- **Next.js 16** — App Router, Server Components, API Routes y optimización de build
- **React 19 + TypeScript** — Componentes tipados con arquitectura atómica
- **Tailwind CSS 4** — Estilos utilitarios con tema oscuro
- **Framer Motion** — Animaciones fluidas con respeto a `prefers-reduced-motion`
- **Nodemailer** — SMTP para envío de mensajes del formulario de contacto

## 📁 Arquitectura

```
app/
  layout.tsx          → Metadata SEO optimizada + fuentes
  page.tsx            → Orden de secciones orientado a conversión
  globals.css         → Estilos (dark theme)
  api/contact/        → API route para envío SMTP
components/
  atoms/              → UI primitiva (Reveal, SectionLabel, WhatsAppFloatButton…)
  molecules/          → Componentes reutilizables (ProjectCard, ProjectModal, ContactForm…)
  organisms/          → Secciones de la página (Hero, Services, Impact, Hire…)
lib/
  data/               → Datos 100% estáticos tipados (editable sin base de datos)
    site.ts           → Configuración personal, redes y SMTP
    services.ts       → Servicios profesionales ofrecidos (freelance/B2B)
    impact.ts         → Resultados medibles entregados a clientes
    hireMe.ts         → Propuesta para reclutadores/empleadores
    projects.ts       → Proyectos con detalle técnico completo
    experience.ts     → Línea de tiempo laboral
    skills.ts         → Stack técnico agrupado
  types/              → Tipos TypeScript de todo el contenido
public/
  cv.pdf              → CV descargable
  images/projects/    → Capturas de cada sistema (añade la tuya aquí)
  videos/projects/    → Demos en video (opcional)
```

## 🎯 Flujo de conversión del sitio

1. **Hero** → Propuesta de valor en 5 segundos + métricas comprobables
2. **Impacto** → Resultados medibles reales (verificables en proyectos)
3. **Servicios** → 4 ofertas claras para clientes freelance/B2B con CTA directo
4. **Empleo** → Propuesta clara para reclutadores (rol, seniority, disponibilidad)
5. **Stack** → Habilidades técnicas curadas sin ruido
6. **Proyectos** → Evidencia con detalle técnico en modal
7. **Experiencia** → Trayectoria verificable
8. **Contacto** → Formulario SMTP con tipo de consulta pre-clasificado

## 🔧 Ejecutar en desarrollo

```bash
# instalar dependencias
npm install
# o
pnpm install

# levantar el servidor de desarrollo
npm run dev
# o
pnpm dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## ✏️ Cómo actualizar tu contenido

Todo el contenido vive en **archivos de datos tipados** — no necesitas tocar componentes:

| Qué quieres cambiar | Archivo |
|---|---|
| Nombre, título, redes, WhatsApp | `lib/data/site.ts` |
| Servicios ofrecidos | `lib/data/services.ts` |
| Resultados medibles | `lib/data/impact.ts` |
| Propuesta para empleadores | `lib/data/hireMe.ts` |
| Proyectos (agregar screenshot, demo, descripción) | `lib/data/projects.ts` |
| Experiencia laboral | `lib/data/experience.ts` |
| Skills | `lib/data/skills.ts` |

### Agregar capturas de tus sistemas

1. Sube la imagen a `public/images/projects/` (ej: `mi-sistema.jpg`)
2. En `lib/data/projects.ts`, apunta `mainImage` a `'/images/projects/mi-sistema.jpg'`
3. Listo: la tarjeta y el modal mostrarán la imagen real automáticamente

> Si la imagen aún no existe, el sistema muestra automáticamente un monograma elegante del proyecto (sin imágenes rotas).

## 📧 Configurar el correo SMTP

Crea un archivo `.env.local`:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu_correo@gmail.com
SMTP_PASS=tu_app_password
```

Sugerencia: usa una *App Password* de Google (requiere verificación en 2 pasos) en vez de tu contraseña normal.

## ☁️ Deploy

Recomendado en **Vercel** (cero configuración):

```bash
vercel
```

## 🧑‍💻 Autor

**Keiber Alexander Paez Hernández** — Senior Full Stack Developer
- [GitHub](https://github.com/alexbk09)
- [LinkedIn](https://linkedin.com/in/keiber-paez-fullstack)