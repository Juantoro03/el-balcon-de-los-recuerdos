import { BookOpen } from 'lucide-react'
import { familia } from '../../data/familia'
import { historicalSource } from '../../data/historia'
import ArchiveImage from '../ui/ArchiveImage'
import StoryReveal from '../ui/StoryReveal'
import FamilyMemberCard from '../ui/FamilyMemberCard'

export default function Familia() {
  const integrantes = [...familia.integrantes].sort((a, b) => (a.orden ?? 0) - (b.orden ?? 0))
  const cita = familia.cita
  const mostrarCita = cita?.habilitada === true && cita.autentica === true &&
    cita.autorizada === true && cita.texto?.trim() && cita.autor?.trim() && cita.fuente?.trim()

  return (
    <section id="familia" className="family-section" tabIndex={-1} aria-labelledby="familia-title">
      <div className="page-container">
        <div className="family-intro">
          <StoryReveal>
            <p className="story-eyebrow"><span aria-hidden="true">03</span>{familia.encabezado}</p>
            <h2 id="familia-title" className="story-title">{familia.titulo}</h2>
          </StoryReveal>
          <StoryReveal delay={0.1} className="family-introduction"><p>{familia.introduccion}</p></StoryReveal>
        </div>
        <div className="family-album-layout">
          <StoryReveal className="family-main-photo">
            <ArchiveImage image={familia.fotografia} />
          </StoryReveal>
          <StoryReveal delay={0.12} className="family-continuity">
            <span className="family-flower" aria-hidden="true">✦</span>
            <p className="story-eyebrow">{familia.continuidad.encabezado}</p>
            <h3>{familia.continuidad.titulo}</h3>
            <p className="family-continuity-text">{familia.continuidad.texto}</p>
            <div className="family-source">
              <a className="text-link" href={historicalSource.url}>{historicalSource.publisher} · {historicalSource.displayDate}</a>
              <p>{familia.notaFuente}</p>
            </div>
          </StoryReveal>
        </div>
        <div className="family-members">
          <StoryReveal className="family-album-heading">
            <p className="story-eyebrow">{familia.album.encabezado}</p>
            <h3>{familia.album.titulo}</h3>
          </StoryReveal>
          {integrantes.length > 0 ? (
            <ul className="family-member-list">
              {integrantes.map((integrante, index) => (
                <li key={integrante.id} className={integrante.destacado ? 'is-featured' : ''}>
                  <StoryReveal delay={Math.min(index, 3) * 0.08}>
                    <FamilyMemberCard integrante={integrante} />
                  </StoryReveal>
                </li>
              ))}
            </ul>
          ) : (
            <StoryReveal className="family-empty">
              <BookOpen size={30} strokeWidth={1} aria-hidden="true" />
              <div><h3>{familia.album.vacioTitulo}</h3><p>{familia.album.vacioTexto}</p></div>
              <p className="family-empty-note">{familia.album.vacioNota}</p>
            </StoryReveal>
          )}
        </div>
        {mostrarCita && (
          <StoryReveal className="family-quote">
            <figure>
              <blockquote><p>{cita.texto}</p></blockquote>
              <figcaption>{cita.autor}<span>{cita.fuente}</span></figcaption>
            </figure>
          </StoryReveal>
        )}
      </div>
    </section>
  )
}
