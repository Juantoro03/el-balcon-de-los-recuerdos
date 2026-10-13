import { Camera } from 'lucide-react'
import { historicalSource } from '../../data/historia'
import { greca } from '../../data/greca'
import ArchiveImage from '../ui/ArchiveImage'
import StoryReveal from '../ui/StoryReveal'

export default function Greca() {
  return (
    <section id="greca" className="greca-section" tabIndex={-1} aria-labelledby="greca-title">
      <div className="page-container">
        <div className="greca-topline">
          <p className="story-eyebrow"><span aria-hidden="true">02</span>{greca.eyebrow}</p>
          <StoryReveal decorative className="greca-ornament"><span>✦</span></StoryReveal>
        </div>
        <div className="greca-heading">
          <StoryReveal><h2 id="greca-title" className="story-title">{greca.title}</h2></StoryReveal>
          <StoryReveal delay={0.1} className="greca-year-block">
            <p className="greca-year">{greca.year}</p>
            <p className="greca-year-label">{greca.yearLabel}</p>
          </StoryReveal>
        </div>
        <div className="greca-body">
          <StoryReveal className="greca-photo"><ArchiveImage image={greca.image} tone="dark" /></StoryReveal>
          <div className="greca-narrative">
            <StoryReveal>
              <p className="story-eyebrow">{greca.origin}</p>
              <h3 className="greca-maker">{greca.manufacturer}</h3>
              <p className="greca-introduction">{greca.introduction}</p>
            </StoryReveal>
            <dl className="greca-facts">
              {greca.facts.map((fact, index) => (
                <StoryReveal key={fact.id} delay={index * 0.08} className="greca-fact">
                  <dt>{fact.label}</dt>
                  <dd><strong>{fact.value}</strong><span>{fact.detail}</span></dd>
                </StoryReveal>
              ))}
            </dl>
            <StoryReveal className="greca-details">
              <Camera size={20} aria-hidden="true" />
              <div><h3>{greca.details.title}</h3>{greca.details.text && <p>{greca.details.text}</p>}
                <div className="greca-detail-images">{greca.details.images.map(image => <figure key={image.src}>
                  <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" />
                  <figcaption>{image.caption}</figcaption>
                </figure>)}</div>
              </div>
            </StoryReveal>
          </div>
        </div>
        <p className="greca-source">{greca.sourceLabel} · <a href={historicalSource.url} className="text-link">{historicalSource.publisher}</a></p>
      </div>
    </section>
  )
}
