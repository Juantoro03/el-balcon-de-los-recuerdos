import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export default function GalleryLightbox({ fotos, initialIndex, onClose }) {
  const dialog = useRef(null)
  const touch = useRef(null)
  const [index, setIndex] = useState(initialIndex)
  const [failedSrc, setFailedSrc] = useState(null)
  const reduced = useReducedMotion()
  const foto = fotos[index]
  const move = delta => setIndex(current => (current + delta + fotos.length) % fotos.length)

  useEffect(() => {
    const element = dialog.current
    const previousFocus = document.activeElement
    const previousOverflow = document.body.style.overflow
    element.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      element.close()
      document.body.style.overflow = previousOverflow
      if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true })
    }
  }, [])

  function handleKey(event) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault()
      move(event.key === 'ArrowLeft' ? -1 : 1)
    }
    if (event.key === 'Tab') {
      const controls = [...dialog.current.querySelectorAll('button')]
      const first = controls[0]
      const last = controls.at(-1)
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault(); last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault(); first.focus()
      }
    }
  }

  return (
    <motion.dialog ref={dialog} className="gallery-lightbox" aria-labelledby="gallery-viewer-title"
      onCancel={event => { event.preventDefault(); onClose() }} onKeyDown={handleKey}
      onClick={event => { if (event.target === event.currentTarget) onClose() }}
      initial={{ opacity: reduced ? 1 : 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: reduced ? 0 : .18 }}>
      <div className="gallery-viewer">
        <header className="gallery-viewer-header">
          <span>EL ÁLBUM DE LOS RECUERDOS</span>
          <button type="button" autoFocus onClick={onClose} aria-label="Cerrar fotografía"><X /></button>
        </header>
        <div className="gallery-viewer-image"
          onTouchStart={event => { touch.current = event.touches.length === 1 ? { x: event.touches[0].clientX, y: event.touches[0].clientY } : null }}
          onTouchCancel={() => { touch.current = null }}
          onTouchEnd={event => {
            if (!touch.current) return
            const dx = event.changedTouches[0].clientX - touch.current.x
            const dy = event.changedTouches[0].clientY - touch.current.y
            touch.current = null
            if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.5) move(dx < 0 ? 1 : -1)
          }}>
          {failedSrc === foto.src ? <p>No se pudo cargar esta fotografía.</p> :
            <img key={foto.src} src={foto.src} alt={foto.alt} draggable="false" onError={() => setFailedSrc(foto.src)} />}
        </div>
        <footer className="gallery-viewer-footer">
          <div aria-live="polite" aria-atomic="true">
            <h3 id="gallery-viewer-title">{foto.titulo || 'Fotografía del álbum'}</h3>
            <p>{index + 1} / {fotos.length}</p>
          </div>
          {fotos.length > 1 && <div className="gallery-viewer-controls">
            <button type="button" aria-label="Fotografía anterior" onClick={() => move(-1)}><ChevronLeft /></button>
            <button type="button" aria-label="Fotografía siguiente" onClick={() => move(1)}><ChevronRight /></button>
          </div>}
        </footer>
      </div>
    </motion.dialog>
  )
}
