import { motion, useReducedMotion } from 'motion/react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { hero } from '../../data/hero'

export default function Inicio() {
  const reduced = useReducedMotion()
  const enter = (delay) => ({
    initial: reduced ? false : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduced ? 0 : 0.65, delay: reduced ? 0 : delay, ease: 'easeOut' },
  })
  return (
    <section id="inicio" className="hero" tabIndex={-1} aria-labelledby="hero-title"
      style={{ '--hero-position': hero.image.position, '--hero-mobile-position': hero.image.mobilePosition }}>
      <picture className="hero-picture">
        {hero.image.mobileSrc && <source media="(max-width: 47.99rem)" srcSet={hero.image.mobileSrc} />}
        <img src={hero.image.src} width={hero.image.width} height={hero.image.height}
          alt="" fetchPriority="high" loading="eager" decoding="async" />
      </picture>
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy">
          <motion.p className="hero-eyebrow" {...enter(0.05)}><span aria-hidden="true" />{hero.eyebrow}</motion.p>
          <motion.h1 id="hero-title" {...enter(0.15)}>{hero.title}</motion.h1>
          <motion.p className="hero-description" {...enter(0.25)}>{hero.description}</motion.p>
          <motion.div className="hero-actions" {...enter(0.35)}>
            <a className="hero-button hero-button-primary" href={hero.primary.href}>{hero.primary.label}<ArrowUpRight size={18} aria-hidden="true" /></a>
            <a className="hero-button hero-button-secondary" href={hero.secondary.href}>{hero.secondary.label}</a>
          </motion.div>
        </div>
        <div className="hero-bottom">
          <a className="scroll-cue" href="#historia">
            <motion.span aria-hidden="true" animate={reduced ? { y: 0 } : { y: [0, 5, 0] }}
              transition={{ duration: 1.8, repeat: 2, ease: 'easeInOut' }}><ArrowDown size={19} /></motion.span>
            <span>Desliza para descubrir</span>
          </a>
          {(hero.image.notice || hero.image.credit) && <p className="hero-credit">{hero.image.notice}{hero.image.notice && <br />}{hero.image.source ? <a href={hero.image.source}>{hero.image.credit}</a> : hero.image.credit}</p>}
        </div>
      </div>
    </section>
  )
}
