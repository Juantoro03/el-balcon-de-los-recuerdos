import { useEffect } from 'react'
import { MotionConfig } from 'motion/react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Inicio from './components/sections/Inicio'
import PromotionsSection from './components/sections/PromotionsSection'
import PromotionalModal from './components/ui/PromotionalModal'
import Historia from './components/sections/Historia'
import Greca from './components/sections/Greca'
import Familia from './components/sections/Familia'
import Menu from './components/sections/Menu'
import Recuerdos from './components/sections/Recuerdos'
import Galeria from './components/sections/Galeria'
import Visitanos from './components/sections/Visitanos'
import { site } from './data/site'

export default function App() {
  useEffect(() => { document.title = site.name + ' · Salento · En preparación' }, [])

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Header />
      <main id="contenido" tabIndex={-1}>
        <Inicio />
        <PromotionsSection />
        <Historia />
        <Greca />
        <Familia />
        <Menu />
        <div className="page-container">
        <Recuerdos />
        <Galeria />
        <Visitanos />
        </div>
      </main>
      <Footer />
      <PromotionalModal />
    </MotionConfig>
  )
}
