/**
 * Atomo: bloque visual destacado del asistente de IA integrado en un sistema.
 * Muestra el proveedor (DeepSeek), el SDK de agente (Vercel AI SDK), las capacidades
 * conversacionales y los highlights de ingeniería. Es 100% presentacional.
 */
import {
  Bot,
  Braces,
  Cpu,
  MessageSquareText,
  Sparkles,
  TerminalSquare,
} from 'lucide-react'
import type { AiAssistant } from '@/lib/types/portfolio'

interface AiAssistantSectionProps {
  /** Datos del asistente de IA a mostrar */
  assistant: AiAssistant
}

export default function AiAssistantSection({ assistant }: AiAssistantSectionProps) {
  return (
    <section className="ai-assistant-card" aria-label={`Asistente de IA: ${assistant.name}`}>
      {/* Encabezado con identidad del asistente */}
      <div className="ai-assistant-head">
        <span className="ai-assistant-badge">
          <Sparkles size={12} />
          IA integrada{assistant.year ? ` · ${assistant.year}` : ''}
        </span>
        <h3>
          <Bot size={17} />
          {assistant.name}
        </h3>
      </div>

      {/* Chips de proveedor y SDK */}
      <div className="ai-assistant-stack">
        <span><Cpu size={11} /> Modelo: {assistant.provider}</span>
        <span><Braces size={11} /> Agente: {assistant.sdk}</span>
      </div>

      {/* Resumen del asistente */}
      <p className="ai-assistant-summary">{assistant.summary}</p>

      {/* Capacidades del asistente */}
      <h4 className="ai-assistant-subtitle">
        <MessageSquareText size={13} />
        El usuario puede pedir en lenguaje natural
      </h4>
      <div className="ai-assistant-capabilities">
        {assistant.capabilities.map((cap) => (
          <div key={cap.title} className="ai-assistant-capability">
            <strong>{cap.title}</strong>
            <span>{cap.description}</span>
          </div>
        ))}
      </div>

      {/* Highlights de ingeniería */}
      <h4 className="ai-assistant-subtitle">
        <TerminalSquare size={13} />
        Qué demuestra a nivel de ingeniería
      </h4>
      <ul className="ai-assistant-highlights">
        {assistant.engineeringHighlights.map((highlight) => (
          <li key={highlight}>
            <Sparkles size={12} />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}