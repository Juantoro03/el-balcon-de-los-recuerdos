import { useEffect, useState } from 'react'
import { navigation } from '../data/site'

export function useSectionNavigation() {
  const [activeId, setActiveId] = useState('inicio')
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const offset = (document.querySelector('.site-header')?.getBoundingClientRect().height ?? 80) + 32
      let current = 'inicio'
      for (const { id } of navigation) {
        if (document.getElementById(id)?.getBoundingClientRect().top <= offset) current = id
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) current = navigation.at(-1).id
      setActiveId(current)
      setScrolled(window.scrollY > 24)
    }
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [])
  return { activeId, scrolled }
}

