import { useRef } from 'react'
import { useReducedMotion } from 'motion/react'

export default function MenuCategoryTabs({ categorias, activa, onChange }) {
  const refs = useRef([])
  const reduced = useReducedMotion()
  const select = (index, focus = false) => {
    const button = refs.current[index]
    onChange(index)
    if (focus) button?.focus({ preventScroll: true })
    if (!button) return
    const strip = button.parentElement
    // El centrado afecta solo al carrusel y se limita a su recorrido disponible.
    if (strip.scrollWidth > strip.clientWidth) {
      const item = button.getBoundingClientRect()
      const bounds = strip.getBoundingClientRect()
      const target = strip.scrollLeft + item.left - bounds.left - (strip.clientWidth - item.width) / 2
      strip.scrollTo({ left: Math.max(0, Math.min(target, strip.scrollWidth - strip.clientWidth)), behavior: reduced ? 'instant' : 'smooth' })
    }
  }
  return (
    <div className="menu-category-tabs" role="tablist" aria-label="Categorías de la carta" aria-orientation="horizontal">
      {categorias.map((categoria, index) => (
        <button key={categoria.nombre} ref={(element) => { refs.current[index] = element }}
          id={'menu-tab-' + index} type="button" role="tab"
          aria-selected={activa === index} aria-controls="menu-product-panel"
          tabIndex={activa === index ? 0 : -1}
          onClick={() => select(index)}
          onKeyDown={(event) => {
            let next
            if (event.key === 'ArrowRight') next = (index + 1) % categorias.length
            if (event.key === 'ArrowLeft') next = (index - 1 + categorias.length) % categorias.length
            if (event.key === 'Home') next = 0
            if (event.key === 'End') next = categorias.length - 1
            if (next !== undefined) { event.preventDefault(); select(next, true) }
          }}>{categoria.nombre}</button>
      ))}
    </div>
  )
}
