import { motion, useReducedMotion } from 'motion/react'

// Se monta una vez por carga de página; no se repite al volver a la sección.
export default function StoryReveal({ children, delay = 0, className = '', decorative = false }) {
  const reduced = useReducedMotion()
  return (
    <motion.div className={className} data-story-reveal aria-hidden={decorative || undefined}
      initial={reduced ? false : { opacity: 0, y: decorative ? 8 : 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      animate={reduced ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: reduced ? 0 : 0.6, delay: reduced ? 0 : delay, ease: 'easeOut' }}>
      {children}
    </motion.div>
  )
}

