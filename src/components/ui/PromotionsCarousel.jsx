import { useRef, useState } from 'react'
import { useReducedMotion } from 'motion/react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import PromotionImage from './PromotionImage'

export default function PromotionsCarousel({ promociones }) {
  const [active, setActive] = useState(0)
  const trackRef = useRef(null)
  const reduced = useReducedMotion()
  const goTo = (index) => {
    const track = trackRef.current
    const slide = track?.children[index]
    if (!slide) return
    track.scrollTo({ left: slide.offsetLeft, behavior: reduced ? 'instant' : 'smooth' })
  }
  return (
    <div className="promotions-carousel" role="region" aria-roledescription="carrusel" aria-label="Flyers de novedades">
      <div className="promotions-track" ref={trackRef} tabIndex={promociones.length > 1 ? 0 : undefined}
        aria-label="Flyers. Usa las flechas del teclado o desliza para explorar."
        onKeyDown={(event) => {
          if (event.key === 'ArrowRight') { event.preventDefault(); goTo(Math.min(active + 1, promociones.length - 1)) }
          if (event.key === 'ArrowLeft') { event.preventDefault(); goTo(Math.max(active - 1, 0)) }
          if (event.key === 'Home') { event.preventDefault(); goTo(0) }
          if (event.key === 'End') { event.preventDefault(); goTo(promociones.length - 1) }
        }}
        onScroll={() => {
          const track = trackRef.current
          const index = Math.round(track.scrollLeft / track.clientWidth)
          setActive(Math.min(promociones.length - 1, Math.max(0, index)))
        }}>
        {promociones.map((promocion, index) => (
          <div key={promocion.imagen + index} className="promotion-slide" role="group"
            aria-roledescription="diapositiva" aria-label={(index + 1) + ' de ' + promociones.length}>
            <PromotionImage promocion={promocion} />
          </div>
        ))}
      </div>
      {promociones.length > 1 && (
        <div className="promotions-controls">
          <button type="button" onClick={() => goTo(active - 1)} disabled={active === 0} aria-label="Flyer anterior"><ArrowLeft size={20} aria-hidden="true" /></button>
          <div className="promotions-dots">
            {promociones.map((promocion, index) => (
              <button key={promocion.imagen + index} type="button" aria-label={'Ver flyer ' + (index + 1)}
                aria-current={active === index ? 'true' : undefined} onClick={() => goTo(index)}><span /></button>
            ))}
          </div>
          <button type="button" onClick={() => goTo(active + 1)} disabled={active === promociones.length - 1} aria-label="Flyer siguiente"><ArrowRight size={20} aria-hidden="true" /></button>
          <p className="sr-only" role="status" aria-live="polite">Flyer {active + 1} de {promociones.length}</p>
        </div>
      )}
    </div>
  )
}
