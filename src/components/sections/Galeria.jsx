import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import StoryReveal from '../ui/StoryReveal'
import GalleryLightbox from '../ui/GalleryLightbox'
import { galeria, categoriasGaleria } from '../../data/galeria'

export default function Galeria() {
  const [categoria, setCategoria] = useState('todas')
  const [seleccion, setSeleccion] = useState(null)
  const reduced = useReducedMotion()
  const fotos = galeria.filter(foto => categoria === 'todas' || foto.categoria === categoria)

  return (
    <section id="galeria" className="photo-gallery" aria-labelledby="gallery-title">
      <StoryReveal className="gallery-heading">
        <p className="story-eyebrow">INSTANTES QUE PERMANECEN</p>
        <h2 id="gallery-title" className="story-title">Postales de nuestra historia</h2>
        <p>Cada rincón, cada rostro y cada taza guardan una historia. Descubre en imágenes la tradición que hace especial a El Balcón de los Recuerdos.</p>
      </StoryReveal>
      <div className="gallery-filters" role="group" aria-label="Filtrar fotografías">
        {categoriasGaleria.map(item => (
          <button type="button" key={item.id} aria-pressed={categoria === item.id}
            aria-controls="gallery-photos" onClick={() => setCategoria(item.id)}>{item.nombre}</button>
        ))}
      </div>
      <p className="gallery-count" role="status">{fotos.length} {fotos.length === 1 ? 'fotografía' : 'fotografías'} para descubrir</p>
      <motion.div id="gallery-photos" key={categoria} className="gallery-masonry"
        initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: reduced ? 0 : .3 }}>
        {fotos.map((foto, index) => (
          <motion.figure key={foto.src} className="gallery-postcard"
            initial={reduced ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .08 }} transition={{ duration: reduced ? 0 : .4 }}>
            <button type="button" className="gallery-photo" onClick={() => setSeleccion(index)}
              aria-label={`Ampliar fotografía: ${foto.titulo || foto.alt}`} aria-haspopup="dialog">
              <img src={foto.src} alt={foto.alt} loading="lazy" decoding="async" />
              <span className="gallery-expand" aria-hidden="true"><ArrowUpRight size={19} /></span>
            </button>
            {foto.titulo && <figcaption><span>{String(index + 1).padStart(2, '0')}</span>{foto.titulo}</figcaption>}
          </motion.figure>
        ))}
      </motion.div>
      {!fotos.length && <p className="gallery-empty">Pronto compartiremos fotografías de esta colección.</p>}
      <AnimatePresence>
        {seleccion !== null && fotos.length > 0 && <GalleryLightbox fotos={fotos} initialIndex={seleccion} onClose={() => setSeleccion(null)} />}
      </AnimatePresence>
    </section>
  )
}
