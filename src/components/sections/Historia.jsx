import { ArrowDownRight } from 'lucide-react'
import { historicalSource, historia } from '../../data/historia'
import ArchiveImage from '../ui/ArchiveImage'
import StoryReveal from '../ui/StoryReveal'

export default function Historia() {
  return (
    <section id="historia" className="history-section" tabIndex={-1} aria-labelledby="historia-title">
      <div className="page-container">
        <div className="history-intro">
          <div className="history-copy">
            <StoryReveal>
              <p className="story-eyebrow"><span aria-hidden="true">01</span>{historia.eyebrow}</p>
              <h2 id="historia-title" className="story-title">{historia.title}</h2>
              <p className="history-lead">{historia.introduction}</p>
            </StoryReveal>
            <StoryReveal delay={0.12} className="legacy-block">
              <p className="story-eyebrow">{historia.legacy.eyebrow}</p>
              <h3>{historia.legacy.name}</h3>
              <p>{historia.legacy.text}</p>
              <p className="legacy-closing">{historia.legacy.closing}</p>
            </StoryReveal>
          </div>
          <StoryReveal delay={0.1} className="history-photo">
            <ArchiveImage image={historia.image} />
          </StoryReveal>
        </div>
        <div className="history-timeline">
          <StoryReveal className="timeline-heading">
            <p className="story-eyebrow">DE UNA GENERACIÓN A OTRA</p>
            <h3>{historia.timelineTitle}</h3>
            <p className="timeline-note">{historia.timelineNote}</p>
          </StoryReveal>
          <ol className="timeline-list">
            {historia.milestones.map((milestone, index) => (
              <li key={milestone.id}>
                <StoryReveal delay={index * 0.08}>
                  <span className="timeline-dot" aria-hidden="true" />
                  <p className="timeline-date">{milestone.date}</p>
                  <p className="timeline-precision">{milestone.precision}</p>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.text}</p>
                </StoryReveal>
              </li>
            ))}
          </ol>
        </div>
        <div className="history-source">
          <a href={historicalSource.url} className="text-link">{historicalSource.publisher} · {historicalSource.displayDate}</a>
          <p>{historia.sourceNote}</p>
        </div>
        <StoryReveal className="story-bridge">
          <a href="#greca"><span>El siguiente capítulo</span><span>La greca de 1905 <ArrowDownRight size={20} aria-hidden="true" /></span></a>
        </StoryReveal>
      </div>
    </section>
  )
}
