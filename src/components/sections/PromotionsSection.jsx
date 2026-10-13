import { promociones } from '../../data/promociones'
import StoryReveal from '../ui/StoryReveal'
import PromotionsCarousel from '../ui/PromotionsCarousel'

export default function PromotionsSection() {
  if (!promociones.length) return null
  return (
    <section id="promociones" className="promotions-section" aria-labelledby="promotions-title">
      <div className="page-container promotions-layout">
        <StoryReveal className="promotions-intro">
          <p className="story-eyebrow">DESCUBRE LO NUEVO</p>
          <h2 id="promotions-title" className="story-title">Novedades de nuestro café</h2>
          <p>Promociones, eventos y momentos especiales que queremos compartir contigo.</p>
          <span aria-hidden="true" className="promotions-ornament">✦</span>
        </StoryReveal>
        <PromotionsCarousel key={promociones.map(p => p.imagen).join('|')} promociones={promociones} />
      </div>
    </section>
  )
}

