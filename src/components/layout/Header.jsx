import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { navigation, site } from '../../data/site'
import { useSectionNavigation } from '../../hooks/useSectionNavigation'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { activeId, scrolled } = useSectionNavigation()
  const reduced = useReducedMotion()
  const headerRef = useRef(null)
  const toggleRef = useRef(null)
  useEffect(() => {
    const media = window.matchMedia('(min-width: 80rem)')
    const closeOnDesktop = () => {
      if (media.matches) {
        setOpen(false)
        if (document.activeElement === toggleRef.current) headerRef.current.querySelector('.brand').focus()
      }
    }
    media.addEventListener('change', closeOnDesktop)
    return () => media.removeEventListener('change', closeOnDesktop)
  }, [])
  useEffect(() => {
    if (!open) return
    const outside = (event) => { if (!headerRef.current.contains(event.target)) setOpen(false) }
    document.addEventListener('pointerdown', outside)
    return () => document.removeEventListener('pointerdown', outside)
  }, [open])
  const navigate = (event, id) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return
    setOpen(false)
    document.getElementById(id)?.focus({ preventScroll: true })
  }
  return (
    <motion.header ref={headerRef} className={'site-header' + (scrolled || open ? ' is-solid' : '')}
      initial={false}
      animate={{ backgroundColor: scrolled || open ? 'rgba(244,233,213,0.98)' : 'rgba(244,233,213,0)' }}
      transition={{ duration: reduced ? 0 : 0.2 }}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && open) { setOpen(false); toggleRef.current?.focus() }
      }}
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false) }}>
      <div className="header-inner">
        <a className="brand" href="#inicio" onClick={(event) => navigate(event, 'inicio')} aria-label={site.name + ' — Inicio'}>
          <span>{site.name}</span><span className="brand-caption">SALENTO, QUINDÍO</span>
        </a>
        <button ref={toggleRef} className="menu-toggle" type="button" aria-expanded={open}
          aria-controls="primary-navigation" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setOpen(!open)}>
          {open ? <X size={23} aria-hidden="true" /> : <Menu size={23} aria-hidden="true" />}
        </button>
        <nav id="primary-navigation" aria-label="Navegación principal" className={'primary-navigation' + (open ? ' is-open' : '')}>
          <ul>{navigation.map(({ id, label }) => (
            <li key={id}><a href={'#' + id} aria-current={activeId === id ? 'location' : undefined}
              onClick={(event) => navigate(event, id)}>{label}</a></li>
          ))}</ul>
        </nav>
      </div>
    </motion.header>
  )
}
