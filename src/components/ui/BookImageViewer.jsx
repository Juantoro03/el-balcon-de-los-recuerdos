import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { X, ZoomIn, ZoomOut } from 'lucide-react'

export default function BookImageViewer({ pagina, onClose }) {
  const dialogRef = useRef(null)
  const closeRef = useRef(null)
  const [zoom, setZoom] = useState(false)
  const [failed, setFailed] = useState(false)
  const reduced = useReducedMotion()
  useEffect(() => {
    const previous = document.activeElement
    const overflow = document.body.style.overflow
    const dialog = dialogRef.current
    dialog.showModal()
    closeRef.current.focus()
    document.body.style.overflow = 'hidden'
    return () => {
      dialog.close()
      document.body.style.overflow = overflow
      if (previous?.isConnected) previous.focus({ preventScroll: true })
    }
  }, [])
  return (
    <motion.dialog ref={dialogRef} className="book-viewer" aria-modal="true" aria-label="Página ampliada del libro de recuerdos"
      initial={{ opacity: reduced ? 1 : 0 }} animate={{ opacity: 1 }} transition={{ duration: reduced ? 0 : 0.15 }}
      onCancel={(event) => { event.preventDefault(); onClose() }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose() }}
      onKeyDown={(event) => {
        if (event.key !== 'Tab') return
        const buttons = [...dialogRef.current.querySelectorAll('button:not(:disabled), [tabindex="0"]')]
        const first = buttons[0], last = buttons.at(-1)
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
      }}>
      <div className="book-viewer-toolbar">
        <button type="button" onClick={() => setZoom(!zoom)} aria-pressed={zoom} disabled={failed}>
          {zoom ? <ZoomOut size={18} aria-hidden="true" /> : <ZoomIn size={18} aria-hidden="true" />}
          {zoom ? 'Ajustar imagen' : 'Ampliar detalle'}
        </button>
        <button type="button" ref={closeRef} onClick={onClose} aria-label="Cerrar página ampliada"><X size={22} aria-hidden="true" /></button>
      </div>
      <div className={'book-viewer-image' + (zoom ? ' is-zoomed' : '')} tabIndex={zoom ? 0 : undefined} aria-label={zoom ? 'Imagen ampliada. Desplázate para explorar sus detalles.' : undefined}>
        {failed ? <p>No se pudo cargar esta fotografía.</p> : <img src={pagina.imagen} alt={pagina.alt} onError={() => setFailed(true)} />}
      </div>
    </motion.dialog>
  )
}
