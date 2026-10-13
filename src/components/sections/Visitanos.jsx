import { Clock3, MapPin, ArrowUpRight } from 'lucide-react'
import StoryReveal from '../ui/StoryReveal'
import ContactLinks from '../ui/ContactLinks'
import { site, formatHours } from '../../data/site'

export default function Visitanos() {
  return <section id="visitanos" className="visit-section" aria-labelledby="visit-title">
    <StoryReveal className="visit-heading">
      <p className="story-eyebrow">NOS ENCONTRAMOS EN SALENTO</p>
      <h2 id="visit-title" className="story-title">Te esperamos para<br /> compartir un café</h2>
    </StoryReveal>
    <div className="visit-grid">
      <StoryReveal className="visit-information">
        <div className="visit-address"><MapPin size={22} aria-hidden="true" /><div>
          <h3>Visítanos</h3><address>{site.address}</address>
        </div></div>
        <ContactLinks />
        <p className="visit-phone">WhatsApp: {site.phone}</p>
        <div className="visit-hours">
          <h3><Clock3 size={20} aria-hidden="true" /> Nuestros horarios</h3>
          <p className="visit-timezone">Hora de Colombia</p>
          <dl>{[...site.hours, site.holidayHours].map(row => <div key={row.day} className={row === site.holidayHours ? 'visit-holiday' : undefined}>
            <dt>{row.day}</dt><dd>{formatHours(row)}</dd>
          </div>)}</dl>
          <p className="visit-hours-note">En festivos colombianos atendemos de {formatHours(site.holidayHours)}, incluso si es miércoles.</p>
        </div>
      </StoryReveal>
      <StoryReveal className="visit-location" delay={.1}>
        {site.mapEmbedUrl ? <iframe src={site.mapEmbedUrl} title={`Ubicación de ${site.name}`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /> :
          <img src="/images/hero/cafe-fachada-portada.webp" alt="Fachada de esquina con puertas azules y detalles verdes de la cafetería" width="1086" height="1448" loading="lazy" decoding="async" />}
        <div className="visit-location-caption"><p>Un rincón para volver.</p>
          <a href={site.mapUrl} target="_blank" rel="noopener noreferrer">Cómo llegar <ArrowUpRight size={20} aria-hidden="true" /></a>
        </div>
      </StoryReveal>
    </div>
  </section>
}
