import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import BookImage from './BookImage'
import BookImageViewer from './BookImageViewer'

export default function MemoryBook({ libro }) {
  const [wide, setWide] = useState(false)
  const [anchor, setAnchor] = useState(0)
  const [direction, setDirection] = useState(1)
  const [enlarged, setEnlarged] = useState(null)
  const touch = useRef(null)
  const reduced = useReducedMotion()
  useEffect(() => {
    const media = window.matchMedia('(min-width: 48rem)')
    const update = () => setWide(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])
  const total = libro.paginas.length
  const views = [{ key: 'cover', label: 'Portada', pages: [{ index: 0, imagen: libro.portada, alt: 'Portada decorativa del Libro de Recuerdos' }] }]
  for (let i = 0; i < total; i += wide ? 2 : 1) {
    const pages = libro.paginas.slice(i, i + (wide ? 2 : 1)).map((page, offset) => ({ ...page, index: i + offset + 1 }))
    views.push({ key: 'pages-' + i, label: pages.length > 1 ? 'Páginas ' + (i + 1) + '–' + (i + 2) + ' de ' + total : 'Página ' + (i + 1) + ' de ' + total, pages })
  }
  views.push({ key: 'back', label: 'Contraportada', pages: [{ index: total + 1, imagen: libro.contraportada, alt: 'Contraportada decorativa del Libro de Recuerdos' }] })
  const currentIndex = Math.max(0, views.findIndex(view => view.pages.some(page => page.index === anchor)))
  const current = views[currentIndex]
  const interior = current.key.startsWith('pages-')

  // Solo se precargan imágenes de las vistas inmediatamente adyacentes.
  const adjacent = [...(views[currentIndex - 1]?.pages || []), ...(views[currentIndex + 1]?.pages || [])]
    .map(page => page.imagen).filter(Boolean).join('|')
  useEffect(() => {
    const images = adjacent ? adjacent.split('|').map(src => {
      const img = new Image()
      img.src = src
      return img
    }) : []
    return () => images.forEach(img => { img.onload = null; img.onerror = null })
  }, [adjacent])

  const turn = (step) => {
    const next = currentIndex + step
    if (next < 0 || next >= views.length) return
    setDirection(step)
    setAnchor(views[next].pages[0].index)
  }
  return (
    <div className="memory-book">
      <div className="book-stage" tabIndex={0} role="region" aria-label="Libro interactivo. Usa las flechas para pasar páginas."
        onKeyDown={(event) => {
          if (event.key === 'ArrowRight') { event.preventDefault(); turn(1) }
          if (event.key === 'ArrowLeft') { event.preventDefault(); turn(-1) }
        }}
        onTouchStart={(event) => {
          if (event.touches.length !== 1) { touch.current = null; return }
          const point = event.touches[0]
          touch.current = { x: point.clientX, y: point.clientY, time: Date.now() }
        }}
        onTouchCancel={() => { touch.current = null }}
        onTouchEnd={(event) => {
          const start = touch.current
          touch.current = null
          if (!start || !event.changedTouches.length) return
          const point = event.changedTouches[0], dx = point.clientX - start.x, dy = point.clientY - start.y
          if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5 && Date.now() - start.time < 1200) {
            if (event.cancelable) event.preventDefault()
            turn(dx < 0 ? 1 : -1)
          }
        }}>
        <AnimatePresence initial={false} mode="wait">
          <motion.div key={current.key + (wide ? '-wide' : '-mobile')}
            className={'book-spread' + (interior ? ' is-interior' : ' is-cover') + (wide && interior ? ' is-double' : '')}
            initial={reduced ? false : { opacity: 0, x: direction * 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduced ? { opacity: 1 } : { opacity: 0, x: -direction * 12 }}
            transition={{ duration: reduced ? 0 : 0.14 }}>
            {current.pages.map(page => (
              <div className="book-leaf" key={page.index}>
                <BookImage key={page.imagen || page.index} imagen={page.imagen} alt={page.alt} placeholder={libro.placeholder}
                  onZoom={() => setEnlarged(page)} />
                {interior && <span className="book-folio" aria-hidden="true">{page.index}</span>}
              </div>
            ))}
            {wide && interior && current.pages.length === 1 && <div className="book-leaf book-blank" aria-hidden="true"><span>✦</span></div>}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="book-controls">
        <button type="button" onClick={() => turn(-1)} disabled={currentIndex === 0} aria-label="Página anterior"><ArrowLeft size={20} aria-hidden="true" /><span>Anterior</span></button>
        <p role="status" aria-live="polite" aria-atomic="true">{current.label}</p>
        <button type="button" onClick={() => turn(1)} disabled={currentIndex === views.length - 1} aria-label="Página siguiente"><span>Siguiente</span><ArrowRight size={20} aria-hidden="true" /></button>
      </div>
      <p className="book-guidance">{total === 0 ? 'Las fotografías del libro original están pendientes de incorporar.' : 'Explora con las flechas o desliza de lado a lado. Las fotografías disponibles se pueden ampliar.'}</p>
      {enlarged && <BookImageViewer pagina={enlarged} onClose={() => setEnlarged(null)} />}
    </div>
  )
}
