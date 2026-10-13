import { libroRecuerdos } from '../../data/resenas'
import StoryReveal from '../ui/StoryReveal'
import MemoryBook from '../ui/MemoryBook'

export default function Recuerdos() {
  return (
    <section id="recuerdos" className="memories-section" tabIndex={-1} aria-labelledby="recuerdos-title">
      <StoryReveal className="memories-intro">
        <p className="story-eyebrow">{libroRecuerdos.encabezado}</p>
        <h2 id="recuerdos-title" className="story-title">{libroRecuerdos.titulo}</h2>
        <p>{libroRecuerdos.descripcion}</p>
      </StoryReveal>
      <MemoryBook libro={libroRecuerdos} />
    </section>
  )
}
