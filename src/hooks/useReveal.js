import { useReducedMotion } from 'motion/react'

// Contenido visible desde el primer render; solo se desplaza al entrar en viewport.
export function useReveal() {
  const reducedMotion = useReducedMotion()
  return {
    initial: { y: reducedMotion ? 0 : 10 },
    whileInView: { y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: reducedMotion ? 0 : 0.35, ease: 'easeOut' },
  }
}
