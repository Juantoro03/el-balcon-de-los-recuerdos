import { Image } from 'lucide-react'
import Reveal from './Reveal'

export default function SectionPlaceholder({ id, title, children, pending = [], imageFolder }) {
  return (
    <section id={id} aria-labelledby={id + '-title'} tabIndex={-1} className="section-shell">
      <Reveal>
        <p className="mb-2 text-sm font-semibold text-forest">Sección provisional</p>
        <h2 id={id + '-title'} className="font-heading text-3xl sm:text-4xl">{title}</h2>
        <div className="mt-4 max-w-3xl space-y-3">{children}</div>
        {pending.length > 0 && (
          <div className="mt-5">
            <p className="font-semibold">Contenido pendiente</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {pending.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        )}
        {imageFolder && (
          <p className="mt-5 flex items-start gap-2 text-sm">
            <Image size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
            <span>Imágenes pendientes · <code className="break-all">public/images/{imageFolder}/</code></span>
          </p>
        )}
      </Reveal>
    </section>
  )
}

