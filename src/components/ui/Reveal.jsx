import { motion } from 'motion/react'
import { useReveal } from '../../hooks/useReveal'

export default function Reveal({ children }) {
  const reveal = useReveal()
  return <motion.div {...reveal}>{children}</motion.div>
}

