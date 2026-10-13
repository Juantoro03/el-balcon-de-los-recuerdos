import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { X } from 'lucide-react'
import { promocionModal } from '../../data/promociones'
import PromotionImage from './PromotionImage'

const sessionKey = 'balcon:welcome-promotion:seen'
let seenInMemory = false
function alreadySeen() {
  try { return seenInMemory || sessionStorage.getItem(sessionKey) === 'true' }
  catch { return seenInMemory }
}

function ModalDialog({ promocion, onDismiss }) {
  const dialogRef = useRef(null)
  const closeRef = useRef(null)
  const reduced = useReducedMotion()
  useEffect(() => {
    const dialog = dialogRef.current
    const previous = document.activeElement
    const overflow = document.body.style.overflow
    dialog.showModal()
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'
    return () => {
      dialog.close()
      document.body.style.overflow = overflow
      if (previous?.isConnected && previous !== document.body) previous.focus({ preventScroll: true })
    }
  }, [])
  return (
    <motion.dialog ref={dialogRef} className="promotional-modal" aria-modal="true" aria-label="Novedad de El Balcón de los Recuerdos"
      initial={{ opacity: reduced ? 1 : 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: reduced ? 0 : 0.16 }}
      onCancel={(event) => { event.preventDefault(); onDismiss() }}
      onClick={(event) => { if (event.target === event.currentTarget) onDismiss() }}
      onKeyDown={(event) => {
        if (event.key !== 'Tab') return
        const controls = [...dialogRef.current.querySelectorAll('button')]
        const first = controls[0], last = controls.at(-1)
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
      }}>
      <div className="promotional-modal-content">
        <div className="promotional-modal-top">
          <span>Novedades de nuestro café</span>
          <button ref={closeRef} type="button" onClick={onDismiss} aria-label="Cerrar promoción"><X size={22} aria-hidden="true" /></button>
        </div>
        <div className="promotional-modal-image"><PromotionImage promocion={promocion} eager /></div>
        <button className="promotional-continue" type="button" onClick={onDismiss}>Continuar explorando</button>
      </div>
    </motion.dialog>
  )
}

export default function PromotionalModal() {
  const [open, setOpen] = useState(false)
  const promocion = promocionModal
  useEffect(() => {
    if (!promocion || alreadySeen()) return
    let timer
    const schedule = () => {
      timer = window.setTimeout(() => {
        if (alreadySeen() || document.querySelector('dialog[open], [role="dialog"][aria-modal="true"]')) return
        seenInMemory = true
        try { sessionStorage.setItem(sessionKey, 'true') } catch { /* Una vez por carga si el almacenamiento está bloqueado. */ }
        setOpen(true)
      }, 1000)
    }
    if (document.readyState === 'complete') schedule()
    else window.addEventListener('load', schedule, { once: true })
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('load', schedule)
    }
  }, [promocion])
  return <AnimatePresence>{open && promocion && <ModalDialog promocion={promocion} onDismiss={() => setOpen(false)} />}</AnimatePresence>
}
